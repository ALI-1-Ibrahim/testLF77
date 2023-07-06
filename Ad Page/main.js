import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, child, get,set,onValue ,onChildRemoved,runTransaction,onDisconnect, serverTimestamp,increment,update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

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
const app2 = initializeApp(firebaseConfig2, 'secondary');

// Initialize Realtime Database and get a reference to the service

const db2 = getDatabase(app2);

const MYID = localStorage.getItem("myid");
const opid = localStorage.getItem("opid");


setTimeout(() => { window.history.forward() }, 1000);
window.onload = function () {
  if (opid==null) {
    window.location.replace('../sign/index.html');

  }
    // window.history.back().onclick = function () {
    //   window.history.go(0);
    // };  
//     window.history.pushState(null, null, window.location.href);
// window.onpopstate = function () {
//     window.history.go(1);
// };
window.history.go(1);
        let counter = 9;
          
        const interval = setInterval(function() {
            document.getElementById('btn').innerHTML=counter
          console.log(counter);
          counter--;
            
          if (counter < 0 ) {
            clearInterval(interval);
            document.getElementById('btn').disabled = false;
            document.getElementById('btn').innerHTML='Get Your Reward'
            console.log('Ding!');
          }
        }, 1000);
      
    // document.getElementById('btn')
}
document.getElementById('btn').addEventListener('click',GetTokens)
function GetTokens() {
  console.log("fjlhfljkl")

  const updates = {};
  updates[`/${opid}/tokens`] = increment(20);
  document.getElementById('btn').disabled = true;

   update(ref(db2), updates).then(function () {
      window.history.back()

   })
  

}




onChildRemoved(ref(db2, '/' + opid),(snapshot) => {
  window.location.replace('../sign/index.html');
localStorage.removeItem('myid');
localStorage.removeItem('opid');
localStorage.removeItem('google');
localStorage.removeItem('ic');
})