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

var r = document.querySelector(':root');


const Dark = localStorage.getItem("Dark");

const L = localStorage.getItem("lang");

var X = false;


const starCountRef3 = ref(db2, '/' + opid + '/tokens');
onValue(starCountRef3, (snapshot) => {
  const da = snapshot.val();
  window.cur=da  //document.getElementById("menu_addressssAndClose").src==""
});




window.onload = function(){ 
  if (opid==null) {
    window.location.replace('../sign/index.html');

  }
  document.getElementById("inner_tokens").innerHTML=MYID  //document.getElementById("menu_addressssAndClose").src==""

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
    r.style.setProperty('--menu','black');
    r.style.setProperty('--BodyBackground','gray');
    r.style.setProperty('--PreloaderBackground','black');
    document.getElementById("SAMSARLYLOGOo").src="../imgs/dd.jpg"

  } else {
    r.style.setProperty('--TitleParbackground-color', '#526DA1');
    r.style.setProperty('--ATitleParbackground-color', '#526DA1');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
    r.style.setProperty('--Apartment', 'white');
    r.style.setProperty('--FontColor', '#526DA1');
    // r.style.setProperty('--IconColor','white');
    r.style.setProperty('--menu','#526DA1');
    r.style.setProperty('--BodyBackground','white');
    r.style.setProperty('--PreloaderBackground','white');
    document.getElementById("SAMSARLYLOGOo").src="../imgs/l.jpg"

  }
  // document.body.style.flexDirection = "column";
  //   document.body.style.alignItems = "center";
    // document.getElementById("PreLoader").style.display="none";
    
    // document.cookie = "TitleParbackground-color=#0080ff; expires=Thu, 18 Dec 2024 12:00:00 UTC"?"TitleParbackground-color=#0080ff; expires=Thu, 18 Dec 2024 12:00:00 UTC":"TitleParbackground-color=black; expires=Thu, 18 Dec 2024 12:00:00 UTC";
    // document.cookie = "ButttonGradiantColor=linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff); expires=Thu, 18 Dec 2024 12:00:00 UTC"?"ButttonGradiantColor=linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff); expires=Thu, 18 Dec 2024 12:00:00 UTC":"ButttonGradiantColor=linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB); expires=Thu, 18 Dec 2024 12:00:00 UTC";
    // document.cookie = "Apartment=white; expires=Thu, 18 Dec 2024 12:00:00 UTC"?"Apartment=white; expires=Thu, 18 Dec 2024 12:00:00 UTC":"Apartment=black; expires=Thu, 18 Dec 2024 12:00:00 UTC";
    //document.cookie = "Dark=false; expires=Thu, 18 Dec 2024 12:00:00 UTC";

  //   var pic = localStorage.getItem("pic")
   
  // if (pic == null) {
  //       document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
  //   }
  //   else {
      
  //     document.getElementById("profilepic").src = pic;
  //   }
    // if (X) {
    //   document.getElementById("PreLoader").style.display="none";//////////////////////////////////////////////////////////////////////////////////////////////
    // }
    const starCountRef2 = ref(db2, '/'+opid);
    onValue(starCountRef2, (snapshot2) => {
      const P = snapshot2.val();
      window.pic = P['profilepic']
      document.getElementById("profilepic").src = pic;
      // window.profile = P
    })

  const starCountRef3 = ref(db2, '/' + opid + '/tokens');
onValue(starCountRef3, (snapshot) => {
  const da = snapshot.val();
  document.getElementById("inner_tokens").innerHTML=da  //document.getElementById("menu_addressssAndClose").src==""
  document.getElementById("PreLoader").style.display="none";//////////////////////////////////////////////////////////////////////////////////////////////

});

  }

var htmlnum = document.querySelectorAll('.pay').length;
for (let gg = 0; gg < htmlnum; gg++) {
  document.getElementsByClassName('pay')[gg].addEventListener('click',function () {
    console.log(document.getElementsByClassName('pay')[gg].children[1].innerText.split(' ')[1])
    var sub =Number(document.getElementsByClassName('pay')[gg].children[1].innerText.split(' ')[1])
    const updates = {};
  updates[`/${opid}/tokens`] = increment(sub);
  document.getElementById('btn').disabled = true;

   update(ref(db2), updates).then(function () {
      // window.history.back()

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