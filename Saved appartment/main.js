
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase,orderByChild, ref, child, get,set,onValue ,onChildRemoved,runTransaction,onDisconnect, serverTimestamp,increment,update,push,remove } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgTMI7utlWWWoIzJYeuy6xnEjMcwjbjdQ",
  authDomain: "samsarly-43a16.firebaseapp.com",
  databaseURL: "https://samsarly-43a16-default-rtdb.firebaseio.com",
  projectId: "samsarly-43a16",
  storageBucket: "samsarly-43a16.appspot.com",
  messagingSenderId: "235856823865",
  appId: "1:235856823865:web:15e7f78bf7159c620fafe8"
};

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
const app = initializeApp(firebaseConfig);
const app2 = initializeApp(firebaseConfig2, 'secondary');

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const database2 = getDatabase(app2);

const db = getDatabase(app);
const db2 = getDatabase(app2);
const MYID = localStorage.getItem("myid");
const opid = localStorage.getItem("opid");


const starCountRef3 = ref(db2, '/' + opid + '/tokens');
onValue(starCountRef3, (snapshot) => {
  const da = snapshot.val();
  window.cur=da  //document.getElementById("menu_addressssAndClose").src==""
});
// const MYID = 124245

var r = document.querySelector(':root');

const Dark = localStorage.getItem("Dark");

const L = localStorage.getItem("lang");

var x = document.getElementById("XBTN");

var d = document.getElementById("div");


// const savedpages = JSON.parse(localStorage.getItem("savedpages"));
// var savedpages = []
window.onload = function(){   
  if (opid==null) {
    window.location.replace('../sign/index.html');

  }
  // console.log(savedpages)
//   fetch('../database/profile.json')
// .then(function(response) {
  
// console.log(response)

// return response.json();

// })
// .then(function(P) {
//   profile = P
// })
const starCountRef2 = ref(db2, '/');
  // onDisconnect(starCountRef2).set(serverTimestamp());
onValue(starCountRef2, (snapshot2) => {
  const P = snapshot2.val();
  window.profile = []
  window.pic = P[opid]['profilepic']
  // console.log
  // document.getElementsByClassName("profile-pic")[0].src=pic;
  // $('.profile-pic').attr('src', e.target.result);
document.getElementById("profilepic").src = pic;
    for(var key in P) {
      // d.innerHTML=profile.stringify(P[key]); 
      // P[key]['id']=key
      profile.push(P[key])
    }
    console.log(profile)
    // window.profile = P
  })
  const starCountRef3 = ref(db2, '/' + opid + '/tokens');
onValue(starCountRef3, (snapshot) => {
  const da = snapshot.val();
  document.getElementById("inner_tokens").innerHTML=da  //document.getElementById("menu_addressssAndClose").src==""
});
    // document.getElementById("inner_tokens").innerHTML=MYID  //document.getElementById("menu_addressssAndClose").src==""
  






    
  // console.log(savedpages)
  
      // document.getElementById("map").style.display = "none"
      // document.getElementById("map").style.width = "0%"
      // document.getElementById("map").style.height = "0%"
      // document.getElementById("map").style.position = "fixed"
      // document.getElementById("map").style.top = "50%"
      
      
      if (Dark=="true") {
      r.style.setProperty('--TitleParbackground-color', 'black');
      r.style.setProperty('--ATitleParbackground-color', 'black');
      r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)');
      r.style.setProperty('--Apartment', '#151515');
      r.style.setProperty('--FontColor', 'white');
      // r.style.setProperty('--IconColor','blue');
      r.style.setProperty('--IconColor','white');
  
      r.style.setProperty('--menu','black');
      r.style.setProperty('--BodyBackground','gray');
      r.style.setProperty('--PreloaderBackground','black');
      // map.setStyle('mapbox://styles/mapbox/dark-v11');
      document.getElementById("SAMSARLYLOGOo").src="../imgs/dd.jpg"
  
  
    } else {
      r.style.setProperty('--TitleParbackground-color', '#526DA1');
      r.style.setProperty('--ATitleParbackground-color', '#526DA1');
      r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
      r.style.setProperty('--Apartment', '#eee');
      r.style.setProperty('--FontColor', '#526DA1');
      // r.style.setProperty('--IconColor','white');
      r.style.setProperty('--IconColor','#526DA1');
  
      r.style.setProperty('--menu','#526DA1');
      r.style.setProperty('--BodyBackground','white');
      r.style.setProperty('--PreloaderBackground','white');
      document.getElementById("SAMSARLYLOGOo").src="../imgs/l.jpg"
  
    }
    // document.body.style.flexDirection = "column";
    // document.body.style.alignItems = "center";
     
  
    //   var pic = localStorage.getItem("pic")
     
    // if (pic == null) {
    //       document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    //   }
    //   else {
        
    //     document.getElementById("profilepic").src = pic;
    //   }
      
  
  
  
  
  
      // function getKeyByValue(object, value) {
      //   return Object.keys(object).find(key => object[key] === value);
      // }
  
  
      var b = document.getElementById("MyPropertiesBody");

  // if (savedpages!=null) {
    const dbRef = ref(db2);
    get(child(dbRef, opid+'/savedapp')).then((snapshot2) => {
        const P2 = snapshot2.val();
        window.savedpages = []
        window.savedpagesno = []
        //   console.log(P2['savedapp'])

        for(var key in P2) {
          // d.innerHTML=profile.stringify(P2[key]); 
          
          // P2[key]['id']=key
          console.log(key)
          savedpagesno.push(P2[key]) 

          savedpages.push(P2[key]) 
          // console.log(savedpages)
        }
        // console.log(getKeyByValue(savedpageswk,'-NYfxUUrHkbYbTvRNTrk'))
    console.log(savedpages.length)
        // savedpages.push(opensaved)
     
    if (savedpages.length!=0) {
      
    
    
  
  
      // fetch('../database/csvjson.json')
      // .then(function(response) {
        
      // console.log(response)
      
      // return response.json();
      
      // })
      // .then(function(d) {
        
      //   SH = d;
      //   console.log(SH)
      const starCountRef = ref(db, '/');
      onValue(starCountRef, (snapshot) => {
        const d = snapshot.val();
        window.SH = []
        for(var key in d) {
          // d.innerHTML=SH.stringify(d[key]); 
          SH.push(d[key])
        }
        console.log(SH)
        
            // SH = d;
            console.log(SH)
        SH.forEach(({host_id,id,name,address,price,rooms,location,neighbourhood,imgs,latitude,longitude,number_of_rooms,number_of_bathrooms,furnished,gas,state})=>{
          for (let ss = 0; ss < savedpages.length; ss++) {
            // console.log(savedpages)
          
          if (id==savedpages[ss]) {/////////////////////////////////this should be the user id
              var p = document.createElement("div")
              p.style.width="100%";
              p.style.height="15%";
              p.style.borderRadius="15px";
              p.style.marginTop="20px"
              p.style.padding="10px 10px"
              p.style.cursor="pointer"
              Dark=="true"?p.style.backgroundColor="#000000b3":p.style.backgroundColor="rgb(82 109 161 / 65%)";
              // Dark=="true"?p.style.backgroundColor="black":p.style.backgroundColor="#526DA1";
              p.style.Color="black";
              p.style.fontSize="30px"
              // var c = document.createElement("p")
              // c.setAttribute("lng-tag", 'lng-tag');
              // p.appendChild(c);
              // p.innerHTML="<div style='width: -webkit-fill-available;'><div style=\"display: flex;\"><p lng-tag=\"apartment id: \"></p> <p>&nbsp"+id+"</p></div><p>"+name+"</p></div>"
              var clip = document.createElement("div")
              clip.innerHTML="<div style='width: -webkit-fill-available;'><div style=\"display: flex;\"><p lng-tag=\"apart_name\"></p> <p>:&nbsp"+name+"</p></div>"
              clip.style.width='-webkit-fill-available'
              p.style.display='flex'
              p.style.justifyContent='space-between'

              var Xp = document.createElement("div")
              Xp.style.backgroundColor='red';
              Xp.style.height='90%';
              Xp.style.width = '25%';
              Xp.innerHTML='X';
              Xp.style.fontSize = '24px'
              Xp.style.padding='2%'
              Xp.style.borderRadius='26px'
              Xp.style.display='flex'
              Xp.style.justifyContent='center'
              Xp.style.alignItems='center'
              Xp.style.transition = "all 0.5s";

              b.appendChild(p)
              p.appendChild(clip)
              p.appendChild(Xp)

              Xp.addEventListener('mouseover',function(){
                Xp.style.height='100%';
              Xp.style.width = '30%';
              })

              Xp.addEventListener('mouseout',function(){
                Xp.style.height='90%';
              Xp.style.width = '25%';
              })

              Xp.addEventListener('click',function(){
                remove(ref(getDatabase(app2), `/${opid}/savedapp/${savedpages.indexOf(savedpages[ss])}`))
                // console.log(savedpages.indexOf(savedpages[ss]))
                // orderByChild(ref(getDatabase(app2), `/${opid}/savedapp/${0}`)).equalTo(savedpages[ss]);
                // dataRef.once('value', (snapshot) => {
                //     snapshot.forEach((userSnapshot) => {
                //         console.log(userSnapshot.val());
                //     });
                // });
                // remove(dbRef, opid+'/savedapp/')
                // console.log(key)
                savedpagesno.pop()
                p.remove();
                // savedpages.splice(savedpages.indexOf(id), 1);
                // localStorage.setItem('savedpages', JSON.stringify(savedpages));
                // console.log(savedpages.length)

                if (savedpagesno.length==0) {
                  console.log(savedpages.length)

                  b.innerHTML="<div style='width:100%;display: flex;justify-content: center;'><h1 lng-tag='nosave'></h1></div>"
                  if(L=='ar'){
                    translate(L,'lng-tag');  
                    document.body.dir="rtl" 
                    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
                    r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
                    r.style.setProperty('--cp2', 'circle(75%)');
                    // document.getElementById("titlepadding").style.paddingRight="0%"
                    // document.getElementById("titlepadding").style.paddingLeft="8%"
              
                  }else if(L==null){
                    translate('en','lng-tag'); 
                    document.body.dir="ltr" 
                    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
                    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
                    r.style.setProperty('--cp2', 'circle(75%)');
                    // document.getElementById("titlepadding").style.paddingLeft="0%"
                    // document.getElementById("titlepadding").style.paddingRight="13%"
              
                  }else{
                    // translate('en','lng-tag'); 
                    translate(L,'lng-tag');  
                    document.body.dir="ltr" 
                    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
                    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
                    r.style.setProperty('--cp2', 'circle(75%)');
                    // document.getElementById("titlepadding").style.paddingLeft="0%"
                    // document.getElementById("titlepadding").style.paddingRight="13%"
              
                  }
                }
              })

              clip.addEventListener('click',function(){
  
  
  
  
                
                var addresss = document.getElementById("addresss");
                var pricee = document.getElementById("pricee");
                var roomss = document.getElementById("roomss");
                var bathroomss = document.getElementById("bathroomss");
                var gass = document.getElementById("gass");
                var furnishedd = document.getElementById("furnishedd");
                var ApartmentImagess = document.getElementById("ApartmentImagesPar");
                var phonee = document.getElementById("phonee");
                var namee = document.getElementById("namee");
                if (state=="rent") {
                
                  // document.getElementById('state').setAttribute('lng-tag','rent')
                  document.getElementById('state').setAttribute('lng-tag','rent')
                } else {
                  // document.getElementById('state').setAttribute('lng-tag','sell')    
                  document.getElementById('state').setAttribute('lng-tag','sell')
      
                }
  

  
  
                // map.on('click', 'places', (e) => {
                  // map.on('click', function(e) {
                  //   var coordinates = e.lngLat;
                  // for (let i = 0; i < SH.length; i++) {
                  //   addresss.innerHTML = address;
                  //   pricee.innerHTML = price;
                  //   roomss.innerHTML = rooms;
                  //   var cDivimgs = ApartmentImagess.children;
             
                  // }
                  // addresss.innerHTML = address;
                  // pricee.innerHTML = price;
                  // roomss.innerHTML = rooms;
                  for (let iz = 0; iz < profile.length; iz++) {
                    if (host_id==profile[iz].id) {
                      phonee.innerHTML = profile[iz].phone
                      namee.innerHTML = profile[iz].name
                      break
                    }        
                  }
                  addresss.innerHTML = neighbourhood;
                  pricee.innerHTML = price;
                  roomss.innerHTML = number_of_rooms;
                  bathroomss.innerHTML = number_of_bathrooms;
            
                  if (gas=="yes") {
                    gass.setAttribute("class", "fas fa-check");
                    gass.setAttribute("style", "cursor: auto;");
                    // gass.disabled = true;
                  } else {
                    gass.setAttribute("class", "fas fa-close");
                    gass.setAttribute("style", "cursor: auto;");
            
                    // gass.disabled = true;
            
                  }
                  if (furnished=="yes") {
                    furnishedd.setAttribute("class", "fas fa-check");
                    furnishedd.setAttribute("style", "cursor: auto;");
            
                    // furnishedd.disabled = true;
            
            
                  } else {
                    furnishedd.setAttribute("class", "fas fa-close");
                    furnishedd.setAttribute("style", "cursor: auto;");
            
                    // furnishedd.disabled = true;
            
            
                  }
                  // var cDivimgs = ApartmentImagess.children;
                  // for (var g = 0; g < cDivimgs.length; g++) {
                  //   //cDiv[g].style.transition = "visibility 0s";
                  //   // cDiv[g].style.visibility= "hidden";  //do styling here
                  //   cDivimgs[g].remove();
                  // }
                        ApartmentImagess.innerHTML="";
                        // console.log(imgs)
                      //  var images = imgs.replace(/[\[\]']+/g,'').replaceAll('"', '').split(",");
                      //  console.log(images)
                  for (let j = 0; j < imgs.length; j++) {
                    // console.log(imgs.length);
                    // console.log(j);
                    var img = document.createElement("img");
                    // var dvi = document.createElement("div")
                    img.setAttribute('src',imgs[j])
                    img.setAttribute('width','100%');//500px
                    img.setAttribute('height','100%');//200px
                    img.style.padding="10px"
                    // dvi.innerHTML = "lk;k"
                    // dvi.style.backgroundColor = "blue";
                    // dvi.style.padding = "10px";
                    
                    // dvi.setAttribute("width","200px");
                    // dvi.setAttribute("height","10px")
                    
                    ApartmentImagess.appendChild(img);
                    // ApartmentImagess.appendChild(dvi);
                    //ApartmentImagess.innerHTML = "<img srs = \'"++"\>'";
                    
                  }
                  // });
                  
                  // if (d.style.display === "none") {
                  //   d.style.display = "block";
                  // } else {
                  //   d.style.display = "none";
                  // }
            
                  // if (d.style.width="0") {
                  //   d.style.width="57vw";
                  // } else {
                  //   d.style.width="0px";
                  // }
                  //x.style.display = "block";
                  // document.getElementById("div").style.transition = "width 0.5s,height 0.5s";
                  addresss.style.transition = "width 0.5s";
                  pricee.style.transition = "width 0.5s";
                  roomss.style.transition = "width 0.5s";
                  
                  // function responsive(x) {
                  //   if (x.matches) { // If media query matches
                  //     document.getElementById("div").style.width="57vw";//570
                  //     document.getElementById("div").style.height="640px";//500//570
                  //     addresss.style.width="482px";
                  //     pricee.style.width="176px";
                  //     roomss.style.width="176px";
                  //     ApartmentImagess.style.height='50%';
                      
                  //     } else {
                  //     document.getElementById("div").style.width="270px";//570
                  //     document.getElementById("div").style.height="560px";//500//570/420
                  //     addresss.style.width="182px";
                  //     pricee.style.width="56px";
                  //     roomss.style.width="56px";
                  //     ApartmentImagess.style.height='35%';
                  //     if (L=='ar') {
                  //       document.getElementsByClassName("XBTN")[0].style.right = '86%'
                  //     }
                  //   }
                  // }
            
                  // var x = window.matchMedia("(min-width: 600px)")
                  // responsive(x) 
                  // x.addListener(responsive)
            
            
                  // function responsive(x) {
                  //   if (x.matches) { // If media query matches
                  //     document.getElementById("divPar").style.width="57vw";//570
                  //     document.getElementById("divPar").style.height="85vh";//500//570/640
                  //     addresss.style.width="482px";
                  //     pricee.style.width="176px";
                  //     roomss.style.width="176px";
                  //     ApartmentImagess.style.height='50%';
                      
                  //     } else {
                      
                  // function responsiv(y) {
                    
                  //   if (y.matches) { // If media query matches
                  //     console.log(y.matches)
                  //     document.getElementById("divPar").style.width="568px";//570
                  //     document.getElementById("divPar").style.height="78vh";//500//570
                  //     addresss.style.width="482px";
                  //     pricee.style.width="176px";
                  //     roomss.style.width="176px";
                  //     ApartmentImagess.style.height='100%';
                      
                  //     } else {
                  //       console.log(y.matches)
                  //     document.getElementById("divPar").style.width="270px";//570
                  //     document.getElementById("divPar").style.height="86vh";//500//570
                  //     addresss.style.width="182px";
                  //     pricee.style.width="56px";
                  //     roomss.style.width="56px";
                  //     ApartmentImagess.style.height='34%';
                  //     if (L=='ar') {
                  //       document.getElementsByClassName("XBTN")[0].style.right = '86%'
                  //     }
                  //   }
                 
                  // }
            
                  // var y = window.matchMedia("(max-width: 800px) and (orientation : landscape)")
                  // responsiv(y) 
                  // y.addListener(function () {
            
                  //   if(document.getElementById("ApartmentTitleParPar").getAttribute("class")=="m-fadeIn"){
                  //   responsiv(y)
                  // }
                  // })
                  //   }
                  // }
            
                  // var x = window.matchMedia("(min-height: 700px")
                  // responsive(x) 
                  function responsive(x) {
                    if (x.matches) { // If media query matches
                      document.getElementById("divPar").style.width="57vw";//570
                      document.getElementById("divPar").style.height="85vh";//500//570
                      addresss.style.width="482px";
                      pricee.style.width="176px";
                      roomss.style.width="176px";
                      ApartmentImagess.style.height='50%';
                      } else {
                      document.getElementById("divPar").style.width="86vw";//570
                      document.getElementById("divPar").style.height="78vh";//500//570
                      addresss.style.width="182px";
                      pricee.style.width="56px";
                      roomss.style.width="56px";
                      ApartmentImagess.style.height='100%';//35%
                      if (L=='ar') {
                              document.getElementById("XBTNPar").style.right = '86%'
                            }
                    }
                  }
              
                  var x = window.matchMedia("(min-width: 800px)")
                  responsive(x)
              
                  x.addListener(responsive)
            
            
                  //document.getElementById("div").style.top = screen.height + "px";
                  //addresss.display="block";
                  var cDivPar = document.getElementById('divPar').children;
                  for (var i = 0; i < cDivPar.length; i++) {
                      //cDivPar[i].style.transition = "visibility 10s";
                      //cDivPar[i].style.visibility= "visible";  //do styling here
                      cDivPar[i].setAttribute("class","m-fadeIn");
                  }
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            window.cord = [longitude,latitude];
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
            
                // })
            
            // });
            
            
              // })
  
  
  
  
  
  
  
              if(L=='ar'){
                translate(L,'lng-tag');  
                document.body.dir="rtl" 
                // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
                r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
                r.style.setProperty('--cp2', 'circle(75%)');
                // document.getElementById("titlepadding").style.paddingRight="0%"
                // document.getElementById("titlepadding").style.paddingLeft="8%"
          
              }else if(L==null){
                translate('en','lng-tag'); 
                document.body.dir="ltr" 
                // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
                r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
                r.style.setProperty('--cp2', 'circle(75%)');
                // document.getElementById("titlepadding").style.paddingLeft="0%"
                // document.getElementById("titlepadding").style.paddingRight="13%"
          
              }else{
                // translate('en','lng-tag'); 
                translate(L,'lng-tag');  
                document.body.dir="ltr" 
                // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
                r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
                r.style.setProperty('--cp2', 'circle(75%)');
                // document.getElementById("titlepadding").style.paddingLeft="0%"
                // document.getElementById("titlepadding").style.paddingRight="13%"
          
              }
  
              })
          }
        }

      })
      
  
      if(L=='ar'){
        translate(L,'lng-tag');  
        document.body.dir="rtl" 
        // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
        r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
        r.style.setProperty('--cp2', 'circle(75%)');
        // document.getElementById("titlepadding").style.paddingRight="0%"
        // document.getElementById("titlepadding").style.paddingLeft="8%"
  
      }else if(L==null){
        translate('en','lng-tag'); 
        document.body.dir="ltr" 
        // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
        r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
        r.style.setProperty('--cp2', 'circle(75%)');
        // document.getElementById("titlepadding").style.paddingLeft="0%"
        // document.getElementById("titlepadding").style.paddingRight="13%"
  
      }else{
        // translate('en','lng-tag'); 
        translate(L,'lng-tag');  
        document.body.dir="ltr" 
        // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
        r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
        r.style.setProperty('--cp2', 'circle(75%)');
        // document.getElementById("titlepadding").style.paddingLeft="0%"
        // document.getElementById("titlepadding").style.paddingRight="13%"
  
      }
      });
      
    }else{
      b.innerHTML="<div style='width:100%;display: flex;justify-content: center;'><h1 lng-tag='nosave'></h1></div>"
      if(L=='ar'){
        translate(L,'lng-tag');  
        document.body.dir="rtl" 
        // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
        r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
        r.style.setProperty('--cp2', 'circle(75%)');
        // document.getElementById("titlepadding").style.paddingRight="0%"
        // document.getElementById("titlepadding").style.paddingLeft="8%"
  
      }else if(L==null){
        translate('en','lng-tag'); 
        document.body.dir="ltr" 
        // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
        r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
        r.style.setProperty('--cp2', 'circle(75%)');
        // document.getElementById("titlepadding").style.paddingLeft="0%"
        // document.getElementById("titlepadding").style.paddingRight="13%"
  
      }else{
        // translate('en','lng-tag'); 
        translate(L,'lng-tag');  
        document.body.dir="ltr" 
        // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
        r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
        r.style.setProperty('--cp2', 'circle(75%)');
        // document.getElementById("titlepadding").style.paddingLeft="0%"
        // document.getElementById("titlepadding").style.paddingRight="13%"
  
      }
    }
    document.getElementById("PreLoader").style.display="none";

     }).catch((error) => {
        console.error(error);
      });
  // }else{
  //   b.innerHTML="<div style='width:100%;display: flex;justify-content: center;'><h1 lng-tag='nosave'></h1></div>"
  // }
  
  
  if(L=='ar'){
    translate(L,'lng-tag');  
    document.body.dir="rtl" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(100% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(100% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    

  }else if(L==null){
    translate('en','lng-tag'); 
    document.body.dir="ltr" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    

  }else{
    // translate('en','lng-tag'); 
    translate(L,'lng-tag');  
    document.body.dir="ltr" 
    // document.getElementsByClassName('wrapper')[0].style.clipPath = 'circle(0px at calc(0% + 30px) 30px)'
    r.style.setProperty('--cp', 'circle(0px at calc(0% + 30px) 30px)');
    r.style.setProperty('--cp2', 'circle(75%)');
    

  }
    }
    document.getElementById('XBTNPar').addEventListener('click',XbtnPar)

    function XbtnPar(elm) {
      //document.getElementById(elm.addresssentNode.id).style.display="none"
      //x.style.display = "none";
      document.getElementById('divPar').style.height="0px";
      document.getElementById('divPar').style.width="0px";
      
       // console.log("ali");
       var cDivPar = document.getElementById('divPar').children;
           for (var i = 0; i < cDivPar.length; i++) {
               //cDivPar[i].style.transition = "visibility 0s";
               // cDivPar[i].style.visibility= "hidden";  //do styling here
               cDivPar[i].setAttribute("class","m-fadeOut");
           }
    //    var cDivimgs = ApartmentImagess.children; //ملهاش لازمة
    //    for (var g = 0; g < cDivimgs.length; g++) {
    //      //cDiv[g].style.transition = "visibility 0s";
    //      // cDiv[g].style.visibility= "hidden";  //do styling here
    //      cDivimgs[g].remove();
    //  }
     // document.getElementById("32.274186,30.607398").remove();
     }
     document.getElementsByClassName('direction')[0].addEventListener('click',GetToMe);

     function GetToMe() {
      // var cord, url;
    
      // $("#map").on('click', function () {
        // coordinates = $('#coordinates').val();
        var url         = "https://www.google.com.sa/maps/search/"+ cord[1]+","+cord[0] ;
      
        window.open(url, '_blank');
      // });
    }

    




    onChildRemoved(ref(db2, '/' + opid),(snapshot) => {
      window.location.replace('../sign/index.html');
    localStorage.removeItem('myid');
    localStorage.removeItem('opid');
    localStorage.removeItem('google');
    localStorage.removeItem('ic');
    })