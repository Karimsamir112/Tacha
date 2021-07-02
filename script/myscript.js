// onload the page get started from the top

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
} 

// show inside burger 1 
function showBurger1() {
	"use strict";
	//window.scrollTo({ top: 0, behavior: 'smooth' });
	document.querySelector(".inside-burger1").style.display = "flex";
	document.querySelector(".allBody").style.display = "none";
	//document.body.style.overflowY = "hidden";
}
// hide inside burger 1 
function hideBurger1() {
	"use strict";
	document.querySelector(".inside-burger1").classList.add("hide-inside-burger1");
	document.querySelector(".allBody").style.display = "block";
	setTimeout(function () {
		document.querySelector(".inside-burger1").classList.remove("hide-inside-burger1");
		document.querySelector(".inside-burger1").style.display = "none";
		document.body.style.overflowY = "visible";
		
	}, 500); 
}



// on scrolling
var l  = 0;
var l2 = 100;
// showing elements with animation
window.onscroll = () => {
	var mq = window.matchMedia("(max-width: 950px)");
	// on mobile screen page 1 only
	if(mq.matches) {
	
		if(window.scrollY >= 0  && window.scrollY < 30 ){
		document.getElementById("arrow-button").style.display = "none";
		//	document.getElementById("hide-arrow-button").style.display = "none";
		//} , 500);  
		document.querySelector(".header").classList.remove('header2');
			document.getElementById("logoPrincipal").style.display = "block";
			document.getElementById("logo").style.display = "none";
		
		// don't move the words 
		document.querySelector(".jewelery").style.marginLeft = "0px";
		document.querySelector(".selection").style.marginRight = "0px"; 
		
	}
	
		// show fixed header onscroll 20 pageYOffset
	else if (window.scrollY > 30  && window.scrollY < 200 ){
		document.getElementById("arrow-button").style.display = "block";
		//document.getElementById("hide-arrow-button").setAttribute("id", "arrow-button");
		document.querySelector(".header").classList.add('header2');
		    document.getElementById("logoPrincipal").style.display = "none";
			document.getElementById("logo").style.display = "block";
		
    }
		
		// show logo
		else if(window.scrollY > 200 && window.scrollY < 500 ) {
		document.querySelector(".logo2").style.WebkitAnimationPlayState= "running";
	}
		// show our story
		else if(window.scrollY > 500 && window.scrollY < 800 ) {
		
		document.querySelector(".ourStory").style.transform = "scale(1)";
		document.querySelector(".ourStory").style.opacity = "1";
		
		
	}
		// show products in page 1 
		else if(window.scrollY > 800 && window.scrollY < 1200 ) {
		document.querySelector(".elementHome1").classList.add("elementHomeAnimation1");
	}
		else if(window.scrollY > 1200 && window.scrollY < 1600 ) {
		
			document.querySelector(".elementHome2").classList.add("elementHomeAnimation2");
	}
		else if(window.scrollY > 1600 && window.scrollY < 2000 ) {
		
			document.querySelector(".elementHome3").classList.add("elementHomeAnimation3");
	}
		else if(window.scrollY > 2000 && window.scrollY < 2800 ) {
		
			document.querySelector(".elementHome4").classList.add("elementHomeAnimation4");
	}
		// show girls
		
		else if(window.scrollY > 3000 && window.scrollY < 3500 ) {
		
			document.querySelector(".girl2").style.WebkitAnimationPlayState= "running";
	}
		else if(window.scrollY > 3500 && window.scrollY < 4000 ) {
		
			document.querySelector(".girl3").style.WebkitAnimationPlayState= "running";
	}
		
	
	
	}
	
	// else on desktop screen
	else {
	
	if(window.scrollY >= 0  && window.scrollY < 30 ){
		document.getElementById("arrow-button").style.display = "none";
		//	document.getElementById("hide-arrow-button").style.display = "none";
		//} , 500);  
		document.querySelector(".header").classList.remove('header2');
		document.getElementById("logoPrincipal").style.display = "block";
			document.getElementById("logo").style.display = "none";
		
		
		// don't move the words 
		document.querySelector(".jewelery").style.marginLeft = "0px";
		document.querySelector(".selection").style.marginRight = "0px"; 
		
	}
	
	
	// show fixed header onscroll 20 pageYOffset
	else if (window.scrollY > 30  && window.scrollY < 200 ){
		document.getElementById("arrow-button").style.display = "block";
		//document.getElementById("hide-arrow-button").setAttribute("id", "arrow-button");
		document.querySelector(".header").classList.add('header2');
		document.getElementById("logoPrincipal").style.display = "none";
			document.getElementById("logo").style.display = "block";
		
		
    }
	
	//show images in page 4
	else if(window.scrollY > 200  && window.scrollY < 300 ){
		
		document.querySelector(".imageBrac1").style.WebkitAnimationPlayState= "running";
	}
	// show products in page 5 
	else if(window.scrollY > 300  && window.scrollY < 400 ){
		
		document.querySelector(".products1").style.transform = "scale(1)";
		document.querySelector(".products1").style.opacity = "1";
		
		document.querySelector(".products2").style.transform = "scale(1)";
		document.querySelector(".products2").style.opacity = "1"; 
		
		document.querySelector(".products3").style.transform = "scale(1)";
		document.querySelector(".products3").style.opacity = "1";
	}
	
	else if(window.scrollY > 400  && window.scrollY < 450 ){
		
		document.querySelector(".imageBrac2").style.WebkitAnimationPlayState= "running";
	}
	
		// show images in page 2
	else if(window.scrollY > 350  && window.scrollY < 500 ){
		
		document.querySelector(".storyGirl1").style.WebkitAnimationPlayState= "running";
		document.querySelector(".storyGirl2").style.WebkitAnimationPlayState= "running";
		
	}
	
	else if (window.scrollY > 500 && window.scrollY < 800) {
		
		var mq = window.matchMedia("(max-width: 950px)");
		if(mq.matches){
			document.querySelector(".jewelery").style.marginLeft = "0px";
		document.querySelector(".selection").style.marginRight = "0px";  
		}
		
		else {
		// move the words
			document.querySelector(".logo2").style.WebkitAnimationPlayState= "running";
		move();
		function move() {
		
		document.querySelector(".jewelery").style.marginLeft = l++ + "px";
		document.querySelector(".selection").style.marginRight = l++ + "px";  
		
		if( l == 100) {
		
			document.querySelector(".jewelery").style.marginLeft = l-- + "px";
			document.querySelector(".selection").style.marginRight = l-- + "px"; 
			
			document.querySelector(".jewelery").style.marginLeft = l2-- + "px";
			document.querySelector(".selection").style.marginRight = l2-- + "px";
			
			if(l2 == 0){
				 l = 0;
				l2 = 100;
				move();
			}
		}
			
			
			}
			}
		
	}
	
	
	else if(window.scrollY > 800 && window.scrollY < 1000 ) {
		
		document.querySelector(".ourStory").style.transform = "scale(1)";
		document.querySelector(".ourStory").style.opacity = "1";
		
		
	}
	
	// show images in page 2 
	else if(window.scrollY > 1000 && window.scrollY < 1100 ) {
	
			document.querySelector(".storyBracelet1").style.WebkitAnimationPlayState= "running";
		document.querySelector(".storyBracelet2").style.WebkitAnimationPlayState= "running";
		
	}
	
	else if(window.scrollY > 1100 && window.scrollY < 2300 ) {
		document.querySelector(".materials1").style.transform = "scale(1)";
		document.querySelector(".materials1").style.opacity = "1";
		/*document.querySelector(".materials2").style.transform = "scale(1)";
		document.querySelector(".materials2").style.opacity = "1"; */
		
		// move the words
		document.querySelector(".jewelery").style.marginLeft = "100px";
		document.querySelector(".selection").style.marginRight = "100px"; 
	}
	
	
	// show girl 2  25000
	else if(window.scrollY > 2300 && window.scrollY < 2800 ){
     
			
			document.querySelector(".girl2").style.WebkitAnimationPlayState= "running";
		
		// move the words
		document.querySelector(".jewelery").style.marginLeft = "100px";
		document.querySelector(".selection").style.marginRight = "100px"; 
		
	} 
	
else if (window.scrollY > 2800) {  
	document.querySelector(".girl3").style.WebkitAnimationPlayState= "running";
	
	// move the words
		document.querySelector(".jewelery").style.marginLeft = "100px";
		document.querySelector(".selection").style.marginRight = "100px"; 
	} 
	
	}


	
};


// show inside burger 2 in page 1
function showBurger2() {
	
	// bg of the first element on burger 2 
	document.querySelector(".burgerHome").classList.add("clickedInsideBurger");
	document.querySelector(".burgerAbout").classList.remove("clickedInsideBurger");
	document.querySelector(".burgerCollection").classList.remove("clickedInsideBurger"); 
	
	document.querySelector(".inside-burger2").style.display = "block";
	document.getElementById("close2").style.display = "block";
	document.getElementById("burger2").style.display = "none";
	document.querySelector(".inside-burger2").classList.remove("hide-inside-burger2");
}

// hide inside burger 2
function hideBurger2() {
	document.querySelector(".inside-burger2").classList.add("hide-inside-burger2");
	document.getElementById("close2").style.display = "none";
	document.getElementById("burger2").style.display = "block";
	setTimeout(function() {
		document.querySelector(".inside-burger2").style.display = "none";
	} , 500)
}


// show inside about and inside custome care => inside burger

function showInAbout() {
	
	var b1 = document.querySelector(".burgerOurStory"),
    //b2 = document.querySelector(".burgerOurMaterials"),
    b3 = document.querySelector(".burgerContactUs");
	//document.querySelector(".burgerAbout").click();
	
	document.querySelector(".burgerAbout").classList.add("clickedInsideBurger");
	document.querySelector(".burgerCollection").classList.remove("clickedInsideBurger");
	document.querySelector(".burgerHome").classList.remove("clickedInsideBurger"); 
	

	if (b1.style.display == "block") {
	b1.style.display = "none";
	//b2.style.display = "none";
	b3.style.display = "none";
	}
	
	else{
		b1.style.display = "block";
	//b2.style.display = "block";
	b3.style.display = "block";
	}
	
}
function showInCollection() {
/*	var b4 = document.querySelector(".burgerDeleivery"),
	    b5 = document.querySelector(".burgerFaq"); */
	
	document.querySelector(".burgerHome").classList.remove("clickedInsideBurger");
	document.querySelector(".burgerAbout").classList.remove("clickedInsideBurger");
	document.querySelector(".burgerCollection").classList.add("clickedInsideBurger");
	
/*	if (b4.style.display == "block"){ 
	b4.style.display = "none";
	b5.style.display = "none";
	}
	
	else {
		b4.style.display = "block";
	b5.style.display = "block";
	} */
}

// show contact us withous loading 
/*
function karim() {
	/*
const state = { 'page_id': 1, 'user_id': 5 }
const title = ''
const url = 'DahabContact.html';
 
window.history.pushState(state, title, url); */
	
	/*history.pushState({}, null, 'DahabContact.html');

}

function ChangeUrl(page, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = {Page: page, Url: url};
            history.pushState(obj, obj.Page, obj.Url);
        } else {
            window.location.href = "DahabContact.html";
            // alert("Browser does not support HTML5.");
        }
    }

*/
const nextURL = 'DahabContact.html';
const nextTitle = 'Dahab Contact';
const nextState = { additionalInformation: 'Dahab.html' }; 
	
function karim2() {
	//window.location.href="DahabContact.html";
	window.location.replace("DahabContact.html");
	window.history.pushState("file:///D:/dahab/Dahab.html", "Dahab Contact", "file:///D:/dahab/DahabContact.html") //file:///D:/dahab/DahabContact.html
	
	//document.body.style.backgroundColor = "red";
	//window.location.href="DahabContact.html";
  //ChangeUrl('Dahab.html', 'DahabContact.html');
	//window.history.pushState({page: "DahabContact"}, "DahabContact", "DahabContact.html");
/*	
// This will create a new entry in the browser's history, without reloading
window.history.pushState(nextState, nextTitle, nextURL);

// This will replace the current entry in the browser's history, without reloading
window.history.replaceState(nextState, nextTitle, nextURL);  */
	}

// select product 
function selectProduct() {
	//window.onscroll() => {
	//document.querySelector(".selectProducts").value = "item5";
	//if(window.location.href == "DahabContact.html") {
	//document.body.style.backgroundColor = "red";
	document.querySelector(".selectProducts").value = "item5";
	//}
	//setInterval(selectProduct, 5);
	//}
		//}
}

function kim() {
	setInterval(selectProduct, 5);
}
// choose product
function chooseProduct() {
	
/*	window.location.href = "DahabContact.html";
	if(window.location.href === "DahabContact.html") {
	document.body.style.backgroundColor = "red";
	} */
	//kim();
/*	setTimeout(function(){
		kim();
	window.location.replace("DahabContact.html");
		
	}, 200);
	 */
	setInterval(selectProduct, 5); 
	
/*	window.location.href ="DahabContact.html";
	setTimeout(selectProduct, 1500); */

	
	//var pageName = window.location.href;
	// window.location.href = "DahabContact.html";
//$(document).ready(function(){
/*	if ( location.hash.length > 10 ) {
		document.querySelector(".selectProducts").value = "item5";
	} */


  /*  if(window.location.href == "DahabContact.html"){
       document.querySelector(".selectProducts").value = "item5";
    } /*else if(pageName === "dk") {
        $("show1").show();
        $("show").hide();
    } */
//});
	
}


// onload show loading 
function showLoading() {
	document.body.style.overflowY = "visible";
	document.querySelector(".allBody").style.display = "block";
	document.querySelector(".loading").style.display = "none"; 
}


// the cursor

// scroll to top
function scrollToTop() {
	"use strict";
	window.scrollTo({ top: 0, behavior: 'smooth' });
}