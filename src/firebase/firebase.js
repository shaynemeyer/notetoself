import * as firebase from 'firebase';
import config from '../config/keys'

firebase.initializeApp(config.firebase);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// on change subscribe
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 8000,
//   createdAt: 1400
// });
