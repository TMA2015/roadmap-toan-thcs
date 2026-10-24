/* Public Firebase Web App configuration (no private Gemini API key).
   App Check was verified on the production origin; Gemini 3.5 Flash-Lite
   answered an actual test request. All model calls require a learner click. */
window.RoadmapFirebaseConfig = Object.freeze({
  enabled: true,
  firebase: Object.freeze({
    apiKey: "AIzaSyAnCa-t04dmwFHLARYN77o866tomq4RUBg",
    authDomain: "roadmap-toan-ai.firebaseapp.com",
    projectId: "roadmap-toan-ai",
    storageBucket: "roadmap-toan-ai.firebasestorage.app",
    messagingSenderId: "789845564404",
    appId: "1:789845564404:web:a066df0deed80d2d58b7a1"
  }),
  recaptchaEnterpriseSiteKey: "6Lf_pc4tAAAAANucZAv1NZHZk5K8h1zwk7uWLLwQ",
  model: "gemini-3.5-flash-lite",
  sdkVersion: "12.19.0"
});
