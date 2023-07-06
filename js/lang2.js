// function Translate() { 
// 	//initialization
// 	this.init =  function(attribute, lng){
// 		this.attribute = attribute;
// 		this.lng = lng;	
// 	}
// 	//translate 
// 	this.process = function(){
// 		_self = this;
// 		var xrhFile = new XMLHttpRequest();
// 		//load content data 
// 		xrhFile.open("GET", "../lng/"+this.lng+".json", false);
// 		xrhFile.onreadystatechange = function ()
// 		{
// 			if(xrhFile.readyState === 4)
// 			{
// 				if(xrhFile.status === 200 || xrhFile.status == 0)
// 				{
// 					var LngObject = JSON.parse(xrhFile.responseText);
// 					var allDom = document.getElementsByTagName("*");
// 					for(var i =0; i < allDom.length; i++){
// 						var elem = allDom[i];
                        
// 						var key = elem.getAttribute(_self.attribute);
// 						if(key != null) {
// 							elem.innerHTML = LngObject[key]  ;
//                             // console.log(elem);
// 						}
// 					}
				
// 				}
// 			}
// 		}
// 		xrhFile.send();
//     }
// }


function translate(lng, tagAttr,tagAtt,tagAt){
    var translate = new Translate();
    translate.init(tagAttr,tagAtt,tagAt, lng);
    translate.process();
    
}

function myFunction() {
	// this.size=1; this.blur() 
var x = document.getElementById("lang").value;
localStorage.setItem("lang", x);
translate(x, 'lng-tag');
window.location.reload();

}


function Translate() {
		//initialization
		this.init =  function(attribute,attribut,attribu, lng){
			this.attribute = attribute;
			this.attribut = attribut;
			this.attribu = attribu;
			this.lng = lng;	
      
		}
		//translate 
		this.process =  function(){
			_self = this;
			// let fetchRes =  fetch("https://ali-1-ibrahim.github.io/test252/lng/"+this.lng+".json");
			let fetchRes =  fetch("../lng/"+this.lng+".json");

			fetchRes.then(res => res.json())
			.then( function (d) {
				var allDom = document.getElementsByTagName("*");
						for(var i =0; i < allDom.length; i++){
							var elem = allDom[i];
							
							var key1 = elem.getAttribute(_self.attribute);
							var key2 = elem.getAttribute(_self.attribut);
							var key3 = elem.getAttribute(_self.attribu);
							if(key1 != null||key2 != null||key3 != null) {
								elem.innerHTML = d[key1]  ;
								elem.value = d[key3]  ;
								elem.Placeholder = d[key3]  ;
	                            // console.log(elem);
							}
						}
						// if (this.lng == "ar") {
						// 	document.body.dir="rtl" 
						// }else{
						// 	document.body.dir="ltr" 

						// }
						// window.location.reload();
					});
			// console.log(d)
  // fetchRes is the promise to resolve
  // it by using.then() method
	
		
		
						// console.log("lfgh;ilfgjlk;jghlk;djlghkj");
						// var LngObject = JSON.parse(fetchRes.responseText);
						
					
				
		
		
		
		}

	





	
		}



// async function getText(file) {
// 	let myObject = await fetch(file);
// 	let myText = await myObject.text();
// 	myDisplay(myText);
//   }
var coin = document.getElementById('token')

function showtokens() {
	if (document.getElementsByClassName("box")[0].style.display == 'block') {
		document.getElementsByClassName("box")[0].style.display = 'none'
		coin.style.color = 'white'
	}else{
		document.getElementsByClassName("box")[0].style.display = 'block'
		coin.style.color = 'blue'
	}
    // document.getElementsByClassName("box")[0].style.display == 'block'?document.getElementsByClassName("box")[0].style.display = 'none'coin.style.color = 'white':document.getElementsByClassName("box")[0].style.display = 'block'
  }
  function hidetokens() {
	$("body > div:not(.box)").click((event) => {
		if (event.target.id == "token" || event.target.id == "token1"  || event.target.id == "inner_tokens" )
		return;
		if (document.getElementsByClassName("box")[0].style.display == 'block') {
			document.getElementsByClassName("box")[0].style.display = 'none'
			coin.style.color = 'white'

		}
	 });

	
  }
//   document.getElementsByClassName("box")[0].style.right=document.getElementById("token").getBoundingClientRect().right.toFixed()/100 +"px"
//   console.log(document.getElementById("token").getBoundingClientRect().right.toFixed())
const Lk = localStorage.getItem("lang");
if(Lk=='ar'){
	
	document.getElementsByClassName("box")[0].style.right = 'auto'
	document.getElementsByClassName("box")[0].style.left = '20px'
	document.getElementsByClassName("box-arrow-border")[0].style.right = 'auto'
	document.getElementsByClassName("box-arrow-border")[0].style.left = '33px'
  }else{

	document.getElementsByClassName("box")[0].style.left = 'auto'
	document.getElementsByClassName("box")[0].style.right = '20px'
	document.getElementsByClassName("box-arrow-border")[0].style.left = 'auto'
	document.getElementsByClassName("box-arrow-border")[0].style.right = '33px'


  }

 var llo = document.querySelectorAll("div.wrapper ul li a")
 console.log(llo)
for (let lo = 0; lo < llo.length; lo++) {
	// llo[lo].addEventListener('click', (e) => e.innerHTML=document.getElementById("loading"))
	// llo[lo].addEventListener('click', function(){llo[lo].innerHTML='<div class="centerrr" id="loadingg"><div class="wavee"></div><div class="wavee"></div><div class="wavee"></div><div class="wavee"></div><div class="wavee"></div><div class="wavee"></div><div class="wavee"></div><div class="wavee"></div><div class="wavee"></div><div class="wavee"></div></div>'})
	llo[lo].addEventListener('click', function(){llo[lo].innerHTML='<div id="loader"></div>'})
}
