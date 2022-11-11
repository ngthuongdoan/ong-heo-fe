// Modular Firebase v.9 Initialization.
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const clientCredentials = {
  apiKey: String(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  authDomain: String(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
  projectId: String(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
  storageBucket: String(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: String(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
  appId: String(process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
  measurementId: String(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID),
}

function initFirebase() {
  if (typeof window !== undefined) {
    initializeApp(clientCredentials)
    console.log("Firebase has been init successfully")
  }
}

const app = initializeApp(clientCredentials)
const auth = getAuth(app)
export { initFirebase, app, auth }
// const db = getFirestore(app)

// const realDB = getDatabase(app)

// export { initFirebase, db, realDB }
