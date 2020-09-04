import firebase from "firebase";
const firebaseApp = firebase.initalizeApp({
    apiKey: "AIzaSyCfASQhlUqQMvZirAJcDa7vyZpxxTLkMas",
    authDomain: "clone-2acfc.firebaseapp.com",
    databaseURL: "https://clone-2acfc.firebaseio.com",
    projectId: "clone-2acfc",
    storageBucket: "clone-2acfc.appspot.com",
    messagingSenderId: "1023093124696",
    appId: "1:1023093124696:web:d5189bc0ed8463a141a42d",
    measurementId: "G-2E232NEYNR"
});

const auth = firebase.auth();

export {auth};