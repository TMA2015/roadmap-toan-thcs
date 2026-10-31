#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const http=require("node:http");
const {chromium}=require("playwright");
const docs=path.resolve(__dirname,"../docs");
const chapters=["CHI","CHII","CHIII","CHIV","CHV","CHVI","CHVII","CHVIII","CHIX"];
function startServer(){
  return new Promise(resolve=>{
    const server=http.createServer((req,res)=>{
      const url=new URL(req.url,"http://localhost"),name=decodeURIComponent(url.pathname);
      if(name.startsWith("/case/")){
        const ch=name.slice("/case/".length).replace(/\/$/,"");
        res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
        res.end('<!doctype html><meta charset="UTF-8"><title>QA</title><div data-g10-chapter-selfcheck="'+ch+'"></div><script src="/assets/javascripts/thpt-g10-reviewed-selfcheck-v1.js"></script>');
        return;
      }
      const f=path.resolve(docs,"."+name);
      if(!f.startsWith(docs+path.sep)||!fs.existsSync(f)||!fs.statSync(f).isFile()){
        res.writeHead(404);res.end("missing");return;
      }
      const mime=f.endsWith(".json")?"application/json":f.endsWith(".js")?"text/javascript":"text/plain";
      res.writeHead(200,{"Content-Type":mime+"; charset=utf-8"});res.end(fs.readFileSync(f));
    });
    server.listen(0,"127.0.0.1",()=>resolve({server,port:server.address().port}));
  });
}
(async()=>{
  const {server,port}=await startServer(),browser=await chromium.launch({headless:true});
  try{
    for(const width of [390,820,1440]){
      for(const ch of chapters){
        const page=await browser.newPage({viewport:{width,height:900}});
        try{
          await page.addInitScript(()=>{
            window.__g10scWrites=[];
            for(const storage of [window.localStorage,window.sessionStorage]){
              const old=storage.setItem.bind(storage);
              storage.setItem=(...args)=>{window.__g10scWrites.push(args);return old(...args)};
            }
          });
          await page.goto("http://127.0.0.1:"+port+"/case/"+ch,{waitUntil:"networkidle"});
          await page.locator(".g10sc-progress").waitFor();
          const root=page.locator("[data-g10-chapter-selfcheck]");
          const before=await root.innerText();
          for(const leak of ["Đáp án:","Lời giải:","Kết quả tự đánh giá","Đúng theo đáp án đã review","Chưa khớp đáp án"])
            assert(!before.includes(leak),ch+" pre-submit UI leak "+leak);
          assert.equal(await root.locator(".g10sc-review").count(),0);
          const choice=root.locator('.g10sc-choice input[type="radio"]');
          if(await choice.count())await choice.first().check();
          else await root.locator("textarea").first().fill("Bài tự kiểm tra QA, tự đối chiếu sau nộp.");
          await root.locator(".g10sc-button").filter({hasText:"Câu tiếp"}).click();
          await root.locator(".g10sc-button").filter({hasText:"Câu trước"}).click();
          const preFinal=await root.innerText();
          assert(!preFinal.includes("Đáp án:")&&!preFinal.includes("Lời giải:"),ch+" navigation leak");
          // ChV/VII/VIII source keys use labeled (a) Đúng; (b) Sai, not bare Đ,S.
          if(width===390&&["CHV","CHVII","CHVIII"].includes(ch)){
            const idx={CHV:3,CHVII:6,CHVIII:3}[ch];
            await root.locator('[data-g10sc-jump="'+idx+'"]').click();
            assert.equal(await root.locator(".g10sc-tf").count(),4,ch+" reviewed labeled TF must be interactive");
            assert(!(await root.innerText()).includes("Đáp án:"),ch+" labeled TF pre-submit answer leak");
            await root.locator('.g10sc-tf input[value="Đ"]').first().check();
          }
          await root.locator("[data-g10sc-final]").click();
          assert((await root.innerText()).includes("Kết quả tự đánh giá"),ch+" no result");
          assert((await root.innerText()).includes("Đáp án:"),ch+" no post-final solution key");
          if(width===390&&["CHV","CHVII","CHVIII"].includes(ch)){
            const denom={CHV:7,CHVII:10,CHVIII:7}[ch];
            assert((await root.locator(".g10sc-report").innerText()).includes(" / "+denom+" câu"),ch+" TF-group score denominator missing");
          }
          assert.equal(await root.locator("[data-g10sc-final]").isVisible(),false);
          const flags=await page.evaluate(()=>({writes:window.__g10scWrites,overflow:document.documentElement.scrollWidth-innerWidth}));
          assert.equal(flags.writes.length,0,ch+" must not touch student storage");
          assert(flags.overflow<=12,ch+" horizontal overflow "+flags.overflow);
        }finally{await page.close()}
      }
    }
    console.log("PASS G10 self-check browser: 9 chapters x 390/820/1440; Final Submit only, post-final solution, no storage writes/overflow.");
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve))}
})().catch(err=>{console.error(err.stack||err);process.exitCode=1});
