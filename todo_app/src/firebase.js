import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore'

const firebaseApp=firebase.initializeApp({
       apiKey: "AIzaSyByR0YVr5LJfUz1HTXbAQO300tKbBrC75E",
        authDomain: "todo-app-3ecef.firebaseapp.com",
        projectId: "todo-app-3ecef",
        storageBucket: "todo-app-3ecef.appspot.com",
        messagingSenderId: "741884279408",
        appId: "1:741884279408:web:54323f68b148e1c03b12b5",
        measurementId: "G-7Q9512LBRZ"

})

const db=firebaseApp.firestore()
export {db}
  