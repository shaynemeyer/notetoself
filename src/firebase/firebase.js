import * as firebase from 'firebase';
import config from '../config/keys'

firebase.initializeApp(config.firebase);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
