
import admin from 'firebase-admin';

// This check ensures that we only initialize the app once.
if (!admin.apps.length) {
  try {
    const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    if (!serviceAccountString) {
      throw new Error('The FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set. Please add it to your .env file.');
    }
    
    const serviceAccount = JSON.parse(serviceAccountString);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: `${serviceAccount.project_id}.appspot.com`,
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error: any) {
    console.error('Failed to initialize Firebase Admin SDK:', error.message);
    // We are not re-throwing the error here to allow the app to run in environments
    // where the service account key might not be available (e.g., local development without all keys).
    // The parts of the app that require Firebase will fail gracefully.
  }
}

const firestore = admin.apps.length ? admin.firestore() : undefined;
const storage = admin.apps.length ? admin.storage() : undefined;

export { firestore, storage };
