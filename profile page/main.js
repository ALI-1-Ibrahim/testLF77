// const Dark = document.cookie
//   .split('; ')
//   .find((row) => row.startsWith('Dark='))
//   ?.split('=')[1];
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getStorage ,ref as sRef,uploadBytes,uploadBytesResumable,getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

import { getDatabase, ref, push, child, get,set,onValue ,onChildRemoved,runTransaction,update,} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
const MYID = localStorage.getItem("myid");
const opid = localStorage.getItem("opid");
var r = document.querySelector(':root');

const Dark = localStorage.getItem("Dark");

const L = localStorage.getItem("lang");

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

const starCountRef3 = ref(db2, '/' + opid + '/tokens');
onValue(starCountRef3, (snapshot) => {
  const da = snapshot.val();
  window.cur=da  //document.getElementById("menu_addressssAndClose").src==""
});

window.onload = function(){   
  
  if (opid==null) {
    window.location.replace('../sign/index.html');

  }
  // document.getElementById("inner_tokens").innerHTML=MYID  //document.getElementById("menu_addressssAndClose").src==""

  var X = false
  if(L=='ar'){
    translate(L,'lng-tag');  
    document.body.dir="rtl" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    X = true; 
    document.getElementsByClassName('p-image')[0].style.marginLeft='0px';
    document.getElementsByClassName('p-image')[0].style.marginRight='-38px';
  }else if(L==null){
    translate('en','lng-tag'); 
    document.body.dir="ltr" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    X = true; 
    document.getElementsByClassName('p-image')[0].style.marginRight='0px';
    document.getElementsByClassName('p-image')[0].style.marginLeft='-38px';
  }else{
    // translate('en','lng-tag'); 
    translate(L,'lng-tag');  
    document.body.dir="ltr" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    X = true; 
    document.getElementsByClassName('p-image')[0].style.marginRight='0px';
    document.getElementsByClassName('p-image')[0].style.marginLeft='-38px';
  }
    if (Dark=="true") {
    r.style.setProperty('--TitleParbackground-color', 'black');
    r.style.setProperty('--ATitleParbackground-color', 'black');
    r.style.setProperty('--dp', 'black');
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
    r.style.setProperty('--dp', '#637cad');
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
    


    // var pic = localStorage.getItem("pic")
   
  // if (pic == null) {
  //       document.getElementsByClassName("profile-pic")[0].src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
  //       // $('.profile-pic').attr('src', "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg");
  //       document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
  //   }
  //   else {
  //     // console.log(pic);
  //     document.getElementsByClassName("profile-pic")[0].src=pic;
  //       // $('.profile-pic').attr('src', e.target.result);
  //     document.getElementById("profilepic").src = pic;
  //   }

  //   fetch('../database/profile.json')
  // .then(function(response) {
    
  // console.log(response)
  
  // return response.json();
  
  // })
  // .then(function(P) {
  //   profile = P
  const starCountRef2 = ref(db2, '/');
  // onDisconnect(starCountRef2).set(serverTimestamp());
onValue(starCountRef2, (snapshot2) => {
  const P = snapshot2.val();
  window.profile = []
  window.pic = P[opid]['profilepic']
  // console.log
  document.getElementsByClassName("profile-pic")[0].src=pic;
  // $('.profile-pic').attr('src', e.target.result);
document.getElementById("profilepic").src = pic;
    for(var key in P) {
      // d.innerHTML=profile.stringify(P[key]); 
      // P[key]['id']=key
      profile.push(P[key])
    }
    console.log(profile)
    // window.profile = P
  

    for (let iz = 0; iz < profile.length; iz++) {
      if (profile[iz].id==MYID) {
        // document.getElementById("nam").innerText=profile[iz].name
        document.getElementById("nam").innerText=profile[iz].name
        document.getElementById("emaill").innerText=profile[iz].email
        document.getElementById("phonenumm").innerText=profile[iz].phone
        document.getElementById("genderr").setAttribute('lng-tag',profile[iz].gender=='male'?"male":"female")
        document.getElementById("idcardd").innerText=profile[iz].idcardnum
        if(L=='ar'){
          translate(L,'lng-tag');  
          document.body.dir="rtl" 
          // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
          r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
          r.style.setProperty('--cp2', 'circle(75%)');
          X = true; 
          document.getElementsByClassName('p-image')[0].style.marginLeft='0px';
          document.getElementsByClassName('p-image')[0].style.marginRight='-38px';
        }else if(L==null){
          translate('en','lng-tag'); 
          document.body.dir="ltr" 
          // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
          r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
          r.style.setProperty('--cp2', 'circle(75%)');
          X = true; 
          document.getElementsByClassName('p-image')[0].style.marginRight='0px';
          document.getElementsByClassName('p-image')[0].style.marginLeft='-38px';
        }else{
          // translate('en','lng-tag'); 
          translate(L,'lng-tag');  
          document.body.dir="ltr" 
          // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
          r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
          r.style.setProperty('--cp2', 'circle(75%)');
          X = true; 
          document.getElementsByClassName('p-image')[0].style.marginRight='0px';
          document.getElementsByClassName('p-image')[0].style.marginLeft='-38px';
        }
        break
      }        
    }
          document.getElementById("PreLoader").style.display="none";//////////////////////////////////////////////////////////////////////////////////////////////

  })
  // })


  const starCountRef3 = ref(db2, '/' + opid + '/tokens');
onValue(starCountRef3, (snapshot) => {
  const da = snapshot.val();
  document.getElementById("inner_tokens").innerHTML=da  //document.getElementById("menu_addressssAndClose").src==""
});
    // if (X) {
    //   document.getElementById("PreLoader").style.display="none";//////////////////////////////////////////////////////////////////////////////////////////////
    // }
  
  
  }
  
  
  // function previewFile() {
  //   var preview = document.querySelector('img');
  //   var file    = document.querySelector('input[type=file]').files[0];
  //   var reader  = new FileReader();
  
  //   reader.addEventListener("load", function () {
  //     preview.src = reader.result;
  //   }, false);
  
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // }
  //                       $(function() {
  //             $('#profile-image1').on('click', function() {
  //                 $('#profile-image-upload').click();
  //             });
  //         });





  onChildRemoved(ref(db2, '/' + opid),(snapshot) => {
    window.location.replace('../sign/index.html');
  localStorage.removeItem('myid');
  localStorage.removeItem('opid');
  localStorage.removeItem('google');
  localStorage.removeItem('ic');
  })