import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrdkUA5lSjMBK2eJzYzNFSjGgjf6BcLTQ",

    authDomain: "meta-verse-news.firebaseapp.com",
  
    projectId: "meta-verse-news",
  
    storageBucket: "meta-verse-news.appspot.com",
  
    messagingSenderId: "280475404409",
  
    appId: "1:280475404409:web:6a63d4291c00e530582ca8"
  };

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};

  
export const register = async({email, password})=>{
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
    return resp.user;
}
  
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
    return res.user;
}