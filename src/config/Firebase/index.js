import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAgZilvBVH0o6uJcQ0QcyE9AGu93vU7hCw",
  authDomain: "mydoctorbwa.firebaseapp.com",
  databaseURL: "https://mydoctorbwa-default-rtdb.firebaseio.com",
  projectId: "mydoctorbwa",
  storageBucket: "mydoctorbwa.appspot.com",
  messagingSenderId: "826352964033",
  appId: "1:826352964033:web:3c6efa6a964599fae69f40"
})

const Firebase = firebase

export default Firebase