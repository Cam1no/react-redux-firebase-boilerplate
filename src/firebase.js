import firebase from 'firebase'
import CONFIG from './configs/firebaseConfigure';

const config = {
    apiKey: CONFIG.API_KEY,
    authDomain: CONFIG.AUTH_DOMAIN,
    databaseURL: CONFIG.DATABASE_URL,
    storageBucket: CONFIG.STORAGE_BUCKET,
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseDb = firebaseApp.database();
