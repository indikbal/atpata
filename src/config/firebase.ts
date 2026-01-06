import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDJlSW0I5yYoJS95Xc5QZJuPZDMmGtlTQc",
  authDomain: "atpata.firebaseapp.com",
  projectId: "atpata",
  storageBucket: "atpata.firebasestorage.app",
  messagingSenderId: "15983966377",
  appId: "1:15983966377:web:8410b94fdf8958dc7cd1b8",
  measurementId: "G-LEGJQ9GVMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with cache settings
export const db = getFirestore(app);

// Initialize Analytics (optional)
let analytics;
try {
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} catch (error) {
  console.warn('Analytics not available:', error);
}

export { analytics };
export default app;
