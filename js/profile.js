import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getStorage ,ref as sRef,uploadBytes,uploadBytesResumable,getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

import { getDatabase, ref, push, child, get,set,onValue ,runTransaction,update,} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
const MYID = localStorage.getItem("myid");
const opid = localStorage.getItem("opid");
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
  
// $(document).ready(function() {

    
//     var readURL = function(input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                 $('.profile-pic').attr('src', e.target.result);
//                 // var x = e.target.result;
//                 // console.log(x);
//                 // document.cookie = "pic="+x+"; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=/";
//             }
    
//             reader.readAsDataURL(input.files[0]);
//             // console.log(reader.readAsDataURL(input.files[0]));
//         }
//     }
    
//     $(".file-upload").on('change', function(){
//         readURL(this);
//         console.log(readURL(this).result);
//     });
    
//     $(".upload-button").on('click', function() {
//        $(".file-upload").click();

//     });
// });

                // const pic = document.cookie
                // .split('; ')
                // .find((row) => row.startsWith('pic='))
                // ?.split('=')[1];

                // if (pic == null) {
                //     $('.profile-pic').attr('src', "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg");
                // }
                // else {
                //     $('.profile-pic').attr('src', e.target.result);
                // }
                // console.log(e.target.result);
                // document.cookie = "pic="+e.target.result+"; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=/";
          
    

const fileInput = document.getElementById('select-image');
const uploadbutton = document.getElementById('upload-button');
const profilepic = document.getElementById("profile-pic");
uploadbutton.addEventListener('click',function(){
    fileInput.click();
})
// Lister to the change event on the <input> element
fileInput.addEventListener('change', () => {
    // Get the selected image file
    // const imageFile = event.target.files[0];
    window.file = fileInput.files[0]

    const storage = getStorage(app2);
    const imageRef = sRef(storage, 'images/' + file.name);
    document.getElementById('pic').innerHTML='<div id="loader"></div>'

    uploadBytesResumable(imageRef, file)
      .then((snapshot) => {
        // fin = false;

        // console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        // console.log('File metadata:', snapshot.metadata);
        // Let's get a download URL for the file.
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        getDownloadURL(snapshot.ref).then((url) => {
          set(ref(db2, opid+'/profilepic'), url).then(function () {
                        window.location.reload();
          })
        });
      }).catch((error) => {
        console.error('Upload failed', error);
        // ...
      });  
//   }

    // if (imageFile) {
    //     const reader = new FileReader();

    //     // Convert the image file to a string
    //     reader.readAsDataURL(imageFile);

    //     // FileReader will emit the load event when the data URL is ready
    //     // Access the string using result property inside the callback function
    //     reader.addEventListener('load', () => {
    //         // Get the data URL string
    //         // console.log(reader.result);
    //         // profilepic.src = reader.result;
    //         document.getElementById('pic').innerHTML='<div id="loader"></div>'
    //         localStorage.setItem("pic", reader.result);
    //         window.location.reload();
    //                     // document.cookie = "pic="+reader.result+"; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=/";
    //     });
    // }

});