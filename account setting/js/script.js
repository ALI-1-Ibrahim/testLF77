let myInput = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
// const Dark = document.cookie
//   .split('; ')
//   .find((row) => row.startsWith('Dark='))
//   ?.split('=')[1];
// const MYID = 124245

var r = document.querySelector(':root');

const Dark = localStorage.getItem("Dark");

const L = localStorage.getItem("lang");
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getStorage ,ref as sRef,uploadBytes,uploadBytesResumable,getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

import { getDatabase, ref, push, child, get,set,onValue ,runTransaction,update,remove,onChildRemoved} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import { getAuth,GoogleAuthProvider ,getRedirectResult,signInWithPopup,updateProfile ,sendPasswordResetEmail,createUserWithEmailAndPassword,reload,sendSignInLinkToEmail,signOut,signInWithEmailAndPassword,onAuthStateChanged ,sendEmailVerification,deleteUser} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const MYID = localStorage.getItem("myid");
const opid = localStorage.getItem("opid");
const g = localStorage.getItem("google");
var r = document.querySelector(':root');

// const Dark = localStorage.getItem("Dark");

// const L = localStorage.getItem("lang");

const firebaseConfig2 = {
  apiKey: "AIzaSyCWjR-SzTBkaJMVj9gcA6g_spcn6YS9Rg0",
  authDomain: "test-45ec8.firebaseapp.com",
  databaseURL: "https://test-45ec8-default-rtdb.firebaseio.com",
  projectId: "test-45ec8",
  storageBucket: "test-45ec8.appspot.com",
  messagingSenderId: "1038009051334",
  appId: "1:1038009051334:web:69f178ad59e73683bbcfc7"
};
const app2 = initializeApp(firebaseConfig2, 'secondary');
const db2 = getDatabase(app2);
const auth = getAuth(app2);

const starCountRef3 = ref(db2, '/' + opid + '/tokens');
onValue(starCountRef3, (snapshot) => {
  const da = snapshot.val();
  window.cur=da  //document.getElementById("menu_addressssAndClose").src==""
});


window.onload = function(){   
  if (opid==null) {
    window.location.replace('../sign/index.html');

  }
  if (g!=null) {
document.getElementById('email').style.display='none';
document.getElementById('pass').style.display='none';

  }
  document.getElementById("inner_tokens").innerHTML=MYID  //document.getElementById("menu_addressssAndClose").src==""

   var  X = false;
    // per = document.getElementById('PreLoader')
    if(L=='ar'){
      translate(L,'lng-tag');  
      document.body.dir="rtl" 
      // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
      r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
      r.style.setProperty('--cp2', 'circle(75%)');
      X = true; 
    }else if(L==null){
      translate('en','lng-tag'); 
      document.body.dir="ltr" 
      // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
      r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
      r.style.setProperty('--cp2', 'circle(75%)');
      X = true; 
    }else{
      // translate('en','lng-tag'); 
      translate(L,'lng-tag');  
      document.body.dir="ltr" 
      // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
      r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
      r.style.setProperty('--cp2', 'circle(75%)');
      X = true; 
  
    }

    if (Dark=="true") {
    r.style.setProperty('--TitleParbackground-color', 'black');
    r.style.setProperty('--ATitleParbackground-color', 'black');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)');
    r.style.setProperty('--Apartment', '#151515');
    r.style.setProperty('--FontColor', 'white');
    // r.style.setProperty('--IconColor','blue');
    r.style.setProperty('--BodyBackground','gray');
    r.style.setProperty('--PreloaderBackground','black');
    // pre.style.backgroundColor = 'black';
    r.style.setProperty('--menu','black');
    // r.style.setProperty('--headTitle','black');
    document.getElementById("SAMSARLYLOGOo").src="../imgs/dd.jpg"

  } else {
    r.style.setProperty('--TitleParbackground-color', '#526DA1');
    r.style.setProperty('--ATitleParbackground-color', '#526DA1');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
    r.style.setProperty('--Apartment', 'white');
    r.style.setProperty('--FontColor', 'white');
    // r.style.setProperty('--IconColor','white');
    r.style.setProperty('--BodyBackground','white');
    r.style.setProperty('--PreloaderBackground','white');
    // pre.style.backgroundColor = 'white';
    r.style.setProperty('--menu','#526DA1');
    // r.style.setProperty('--headTitle','black');
    document.getElementById("SAMSARLYLOGOo").src="../imgs/l.jpg"


  }
  // document.body.style.flexDirection = "column";
  // document.body.style.alignItems = "center";
  // document.getElementById("PreLoader").style.display="none";
   

    // var pic = localStorage.getItem("pic")
   
  // if (pic == null) {
  //       document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
  //   }
  //   else {
      
  //     document.getElementById("profilepic").src = pic;
  //   }
  //   if (X) {
  //     document.getElementById("PreLoader").style.display="none";//////////////////////////////////////////////////////////////////////////////////////////////
  //   }
const starCountRef3 = ref(db2, '/' + opid + '/tokens');
onValue(starCountRef3, (snapshot) => {
  const da = snapshot.val();
  document.getElementById("inner_tokens").innerHTML=da  //document.getElementById("menu_addressssAndClose").src==""
});

const starCountRef2 = ref(db2, '/');
// onDisconnect(starCountRef2).set(serverTimestamp());
onValue(starCountRef2, (snapshot2) => {
const P = snapshot2.val();
// window.profile = []
window.pic = P[opid]['profilepic']
// console.log
// document.getElementsByClassName("profile-pic")[0].src=pic;
// $('.profile-pic').attr('src', e.target.result);
document.getElementById("profilepic").src = pic;
document.getElementById("PreLoader").style.display="none";//////////////////////////////////////////////////////////////////////////////////////////////

})
  }
  
  
  document.getElementById('delete').onclick = function () {
    onValue(ref(db2, '/'+opid), (snapshot2) => {
      const P = snapshot2.val();
      
      
        signInWithEmailAndPassword(auth, P['email'], P['password'])
          .then((userCredential) => {
            // const user = userCredential.user;
      
            deleteUser(auth.currentUser)
            console.log('hghjghjgj')
            remove(ref(db2, '/' + opid))
            localStorage.removeItem('myid');
          localStorage.removeItem('opid');
          localStorage.removeItem('google');
          localStorage.removeItem('ic');
      
         })
        
        })
    
  }
  onChildRemoved(ref(db2, '/' + opid),(snapshot) => {
    window.location.replace('../sign/index.html');
  localStorage.removeItem('myid');
  localStorage.removeItem('opid');
  localStorage.removeItem('google');
  localStorage.removeItem('ic');
  })
// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};




  // remove(ref(db2, '/' + opid))
// })