import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDSlFrefq4FMwA-0Jt5iSvrttH6KwEgRO0",
  authDomain: process.env.React_Firebase_authDomain,
  projectId: process.env.React_Firebase_projectId,
  storageBucket: process.env.React_Firebase_storageBucket,
  messagingSenderId: process.env.React_Firebase_messagingSenderId,
  appId: process.env.React_Firebase_appId,
});

export const auth = app.auth();
export default app;
