/* Public Firebase Web App configuration. No Gemini API secret or service account belongs here.
   Production enablement is intentionally blocked until an end-to-end live check is performed after the exact reCAPTCHA Enterprise SITE KEY
   is copied from the Firebase-registered Google Cloud key and an end-to-end live check passes. */
window.RoadmapFirebaseConfig = Object.freeze({
  enabled: false,
  firebase: Object.freeze({
    apiKey: "AIzaSyAnCa-t04dmwFHLARYN77o866tomq4RUBg",
    authDomain: "roadmap-toan-ai.firebaseapp.com",
    projectId: "roadmap-toan-ai",
    storageBucket: "roadmap-toan-ai.firebasestorage.app",
    messagingSenderId: "789845564404",
    appId: "1:789845564404:web:a066df0deed80d2d58b7a1"
  }),
  recaptchaEnterpriseSiteKey: "6Lf_pc4tAAAAANucZAv1NZHZk5K8h1zwk7uWLLwQ",
  model: "gemini-3.5-flash",
  sdkVersion: "12.19.0"
});
