// ── PulseFind: Firebase setup ──────────────────────────────────────────
// 1. Go to https://console.firebase.google.com → create a project (free).
// 2. Project settings → General → "Your apps" → Add app → Web (</>).
// 3. Copy the firebaseConfig object Firebase shows you and paste the
//    values below, replacing the placeholders.
// 4. In the left sidebar, enable:
//      - Build → Authentication → Sign-in method → Email/Password
//      - Build → Firestore Database → Create database (start in test mode
//        for the hackathon — lock down rules afterwards)
// ─────────────────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey: "AIzaSyA024A6OfJutIEhfF4IWF61Ko3NPcdqz1s",
  authDomain: "pulse-find.firebaseapp.com",
  projectId: "pulse-find",
  storageBucket: "pulse-find.firebasestorage.app",
  messagingSenderId: "205419528028",
  appId: "1:205419528028:web:d49f737fb332307b660b99"
};

firebase.initializeApp(firebaseConfig);

// Shared handles — every page's own script can use these directly.
const auth = firebase.auth();
const db = firebase.firestore();

// ── Quick reference for wiring up each page ────────────────────────────
//
// Sign up (login.html):
//   auth.createUserWithEmailAndPassword(email, password)
//     .then(cred => db.collection('users').doc(cred.user.uid).set({ role, name, area }))
//
// Sign in (login.html):
//   auth.signInWithEmailAndPassword(email, password)
//
// Update stock (provider-dashboard.html):
//   db.collection('inventory').doc(itemId).update({ status, updatedAt: firebase.firestore.FieldValue.serverTimestamp() })
//
// Search medicines (search.html):
//   db.collection('inventory').where('name', '==', query).where('status', '!=', 'out').get()
//
// Donor availability (donor.html):
//   db.collection('donors').doc(uid).update({ available: true/false })
//
// Listen live (any page — replaces one-time .get() with a live listener):
//   db.collection('inventory').onSnapshot(snapshot => { ...re-render... })
// ─────────────────────────────────────────────────────────────────────