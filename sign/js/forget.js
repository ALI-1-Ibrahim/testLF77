

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

import { getAuth,updateProfile,reload,updateEmail ,sendPasswordResetEmail,createUserWithEmailAndPassword,sendSignInLinkToEmail,signInWithEmailAndPassword,onAuthStateChanged ,sendEmailVerification,} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

import { getDatabase, ref, child, get,set,onValue,push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig2 = {
  apiKey: "AIzaSyCWjR-SzTBkaJMVj9gcA6g_spcn6YS9Rg0",
  authDomain: "test-45ec8.firebaseapp.com",
  databaseURL: "https://test-45ec8-default-rtdb.firebaseio.com",
  projectId: "test-45ec8",
  storageBucket: "test-45ec8.appspot.com",
  messagingSenderId: "1038009051334",
  appId: "1:1038009051334:web:69f178ad59e73683bbcfc7"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig2);

//  var email = "alielmasrey555554@gmail.com";
// var password = "534534FHGFHGFfd";
const auth = getAuth(app);
















document.getElementById('forget').addEventListener('click',async function () {
  document.getElementById("form3").addEventListener("submit", function(event){
    event.preventDefault()
  });
  if(document.getElementById('form3').checkValidity()){
  sendPasswordResetEmail(auth, document.getElementById('email').value)
  .then(() => {
    // var cccc=  setInterval(function() {
    //   reload(auth.currentUser);
    //    if (auth.currentUser.emailVerified) {
    //        console.log("Email Verified!");
    //       //  push(ref(db2, '/'), data).then(function () {
    //                 // document.getElementById("form3").submit();
    //               // })   
    //        clearInterval(cccc)
    //    }
    //  }, 1000);  
                        document.getElementById("form3").submit();

  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
    document.getElementById('valid').style.display='flex'
  });
// console.log(auth)
// createUserWithEmailAndPassword(auth, email, password)
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// sendPasswordResetEmail(auth, email)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });



// await signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
    // updateProfile(auth.currentUser, {
    //     phone: '01024568234',gender:'male'
    //   }).then(() => {
    //     // Profile updated!
    //     console.log('khkjh')
    //     // ...
    //   }).catch((error) => {
    //     // An error occurred
    //     // ...
    //   });
    // console.log(user)
    // ...
    // const user = auth.currentUser;
//   if (user !== null) {
//     user.providerData.forEach((profile) => {
//       console.log("Sign-in provider: " + profile.phone);
//       console.log("  Provider-specific UID: " + profile.uid);
//       console.log("  Name: " + profile.displayName);
//       console.log("  Email: " + profile.email);
//       console.log("  Photo URL: " + profile.gender);
//     });
//   }
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

  
  
//   sendPasswordResetEmail(auth, email)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
}
})



////////////////////////////////////////مهمممممممممممم/////////////////////////////////////////
// {
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//     updateEmail(auth.currentUser, 'email@jgg.com').then(() => {
//   // Email updated!
//   var cccc=  setInterval(function() {
//     reload(auth.currentUser);
//     //  if (auth.currentUser.emailVerified) {
//          console.log("Email Verified!");
//           const user = auth.currentUser;
// if (user.email !== email) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;
// console.log(displayName)
// console.log(email)
// console.log(photoURL)
// console.log(emailVerified)
// }
//          clearInterval(cccc)
//     //  }
//    }, 1000);
     
 
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// }
////////////////////////////////////////مهمممممممممممم/////////////////////////////////////////
