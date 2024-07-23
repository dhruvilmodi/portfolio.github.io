/* -------------------- global variables -------------------- */

// viewports
var vpX1280 = window.matchMedia("(max-width: 1280px)");
var vpX414 = window.matchMedia("(max-width: 414px)");


var welcomeTl = gsap.timeline();
var planeTl = gsap.timeline();
var blastTl = gsap.timeline();
var cloudTl = gsap.timeline();
var diveTextTl = gsap.timeline();
var homeTl = gsap.timeline({repeat: 0});
var firstPageTl = gsap.timeline({repeat: 0});
var secondPageTl = gsap.timeline({repeat: 0});
var thirdPageTl = gsap.timeline({repeat: 0});
var forthPageTl = gsap.timeline({repeat: 0});
var fifthPageTl = gsap.timeline({repeat: 0});
var sixthPageTl = gsap.timeline({repeat: 0});
var sharksTl = gsap.timeline({duration:1, repeat: -1, repeatDelay: 2});
gsap.registerPlugin(TextPlugin);
var ship1Tl = gsap.timeline();
var loadToPresentTl = gsap.timeline();

var section;

let welcomeContainer = document.querySelector(".welcomeContainer");
let welcomeText1 = document.querySelector(".welcomeText1");
let welcomeText2 = document.querySelector(".welcomeText2");
let homeName = document.querySelector(".homeName");

let plane = document.querySelector(".plane");
let plane2 = document.querySelector(".plane2");
let plane3 = document.querySelector(".plane3");
let plane4 = document.querySelector(".plane4");

let blast1 = document.querySelector(".blast1");
let blast2 = document.querySelector(".blast2");
let blast3 = document.querySelector(".blast3");
let blast4 = document.querySelector(".blast4");

let cloud1 = document.querySelector(".cloud1");
let cloud2 = document.querySelector(".cloud2");

let ship1 = document.querySelector(".ship1");
let ship2 = document.querySelector(".ship2");

// loading container for present
let loadToPresent = document.querySelector(".loadToPresent");
let loadPresentText = document.querySelector(".loadPresentText");

/* ------------------- global functions ------------------- */
function escBlink() {
	gsap.to(".escBlink", {opacity: 0.3, yoyo: true, ease: "power1.inOut", repeat: -1});
}

function fact1Fun() {
	gsap.to(".fact1", {opacity: 1, display: "flex", duration: 0.5});
}

function project1Fun() {
	window.open('https://shivani.dhruvilmodi.com', '_blank');
}

function project2Fun() {
	window.open('https://dhruvilmodi.com/projects/launchPad/', '_blank');
}

function project3Fun() {
	window.open('https://dhruvilmodi.com/projects/createUsers/', '_blank');
}

function project4Fun() {
	window.open('https://dhruvilmodi.com/projects/ctmyth/', '_blank');
}

function project5Fun() {
	window.open('https://dhruvilmodi.com/projects/lakeviewPark/', '_blank');
}

function subAnimation() {
    gsap.to(".subMarine", 1, {opacity: 1, delay: 1});
    gsap.fromTo(".subMarine", 4, {y: 5, rotate: 2}, {y: -5, rotate: -2, yoyo:true, repeat: -1, ease: "power1.inOut"});
}

function reachedTop() {
	gsap.fromTo(".reachedTopContainer", {y:-50, opacity: 0}, {y: 0, opacity: 1, ease: "back.out"});
	gsap.fromTo(".reachedTopContainer", {y: 0, opacity: 1}, {y: -50, opacity: 0, ease: "back.in", delay: 2});
}

function welcomeContainerFn() {
	welcomeTl.fromTo(welcomeText1, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 0.5})
		.fromTo(welcomeText2, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 0.5}, 0.5)
		.fromTo(welcomeText1, {letterSpacing: 0}, {letterSpacing: 3, ease: "power1.inOut", duration: 0.5}, 0)
		.fromTo(welcomeText2, {letterSpacing: 0}, {letterSpacing: 3, ease: "power1.inOut", duration: 0.5}, 0)
		.fromTo(welcomeContainer, {opacity: 1, display: "flex"}, {opacity: 0, display: "none", ease: "power1.inOut", duration: 0.5, delay: 1})
		.fromTo(".ship2", {x:-600}, {x: 0, ease: "power1.inOut", duration: 2}, 2)
		.fromTo(".ship1", {x: 600}, {x: 0, ease: "power1.inOut", duration: 2}, 2.3)
		.fromTo(".subMarine", {x: -600}, {x: 0, ease: "power1.inOut", duration: 2}, 2.5)
		.fromTo(homeName, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 0.5}, 3)
		.to(".keyboardHint", {opacity: 1, display: "flex", duration: 0.5, delay: 0.5});
}

function planeFn() {

	planeTl.fromTo(plane, {x: "-20vw", y: 20},{x: "120vw", duration: 9, ease: "none", repeat: -1}, 0)
		.fromTo(plane2, {x: "-40vw", y: 50},{x: "120vw", duration: 8, ease: "none", repeat: -1}, 0)
		.fromTo(plane3, {x: "120vw", y: -40},{x: "-60vw", duration: 9, ease: "none", repeat: -1}, 0)
		.fromTo(plane4, {x: "120vw", y: 110},{x: "-80vw", duration: 8, ease: "none", repeat: -1}, 0);
	planeTl.play();
}

function blastFn() {
	blastTl.fromTo(blast1, {opacity: 1, scale: 0}, {opacity: 0, scale: 2.5, duration: 2, repeat: -1, repeatDelay: 1, ease: "back.out"}, 0)
		.fromTo(blast2, {opacity: 1, scale: 0}, {opacity: 0, scale: 2.5, duration: 2, repeat: -1, repeatDelay: 2, ease: "back.out"}, 0.5)
		.fromTo(blast3, {opacity: 1, scale: 0}, {opacity: 0, scale: 2.5, duration: 2, repeat: -1, repeatDelay: 3, ease: "back.out"}, 1)
		.fromTo(blast4, {opacity: 1, scale: 0}, {opacity: 0, scale: 2.5, duration: 2, repeat: -1, repeatDelay: 4, ease: "back.out"}, 1.5);
	blastTl.play();
}

function cloudFn() {

	if (vpX1280.matches) {
		gsap.fromTo(cloud1, {x: "-70vw"}, {x: "100vw", duration: 30, ease: "none", repeat: -1, delay: -20});
		gsap.fromTo(cloud2, {x: "-70vw"}, {x: "100vw", duration: 40, ease: "none", repeat: -1, delay: -10});
	} else {
		gsap.fromTo(cloud1, {x: "-50vw"}, {x: "100vw", duration: 30, ease: "none", repeat: -1, delay: -10});
		gsap.fromTo(cloud2, {x: "-60vw"}, {x: "100vw", duration: 40, ease: "none", repeat: -1, delay: -10});
	}

}

function ship1Fn() {
	ship1Tl.fromTo(ship1, {rotate: 0.5}, {rotate: -1, repeat: -2, duration: 3, yoyo: true, ease: "power1.inOut"})
		.fromTo(ship2, {rotate: 0.5}, {rotate: -1, repeat: -2, duration: 3, yoyo: true, ease: "power1.inOut"});
}

function diveTextFn() {
	diveTextTl.fromTo(".diveButton", 1, {opacity: 0.2},{opacity: 1, yoyo: true, repeat: -1, ease: "power1.inOut"}, 0);
	diveTextTl.play();
}

function diveIn() {
	section = 1;	

	if (vpX414.matches) {
		gsap.to(".projectNav", {right: "-100px", duration: 0.2});
		gsap.to(".firstNav", {right: 0, duration: 0.2});
		gsap.to(".firstNav", {right: "-100px", duration: 0.2, delay: 1.5});
	} else {
		gsap.to(".projectNav", {right: "-60px", duration: 0.2});
		gsap.to(".firstNav", {right: 0, duration: 0.2});
		gsap.to(".firstNav", {right: "-60px", duration: 0.2, delay: 1.5});
	}

	if (vpX1280.matches) {
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, bottom: "75vh", ease:"power1.inOut"});
	} else {
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, bottom: "60vh", ease:"power1.inOut"});
	}

	gsap.to(window, {duration: 0.5, scrollTo: ".firstPage"});
	
	homeTl.fromTo(".firstStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.1, ease: "back", repeat: 0, });
	
	homeTl.play();
	diveTextTl.pause();
}

function ascentToHome() {
	section = 0;

	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".heroPageNav", {right: 0, duration: 0.2});
	gsap.to(".heroPageNav", {right: "-100px", duration: 0.2, delay: 1.5});

	homeTl.pause();

	if (vpX1280.matches) {
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(".subMarine", 0.5, {bottom: "15vh", ease:"power4.Out"});	
	} else {
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(".subMarine", 0.5, {bottom: "10vh", ease:"power4.Out"});
	}
	gsap.to(window, {duration: 0.5, scrollTo: ".heroPage"});

	diveTextTl.play();
}

function descentToSecond() {
	section = 2;

	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".secondNav", {right: 0, duration: 0.2});
	gsap.to(".secondNav", {right: "-100px", duration: 0.2, delay: 1.5});

	homeTl.pause();

	gsap.to(window, {duration: 0.5, scrollTo: ".secondPage"});

	firstPageTl.fromTo(".secondStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.1, ease: "back", repeat: 0, });
	
	firstPageTl.play();
}

function ascentToFirst() {
	section = 1
	
	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".firstNav", {right: 0, duration: 0.2});
	gsap.to(".firstNav", {right: "-100px", duration: 0.2, delay: 1.5});

	gsap.to(".firstStagger", {y: 0, opacity: 1, duration: 0.1, ease: "back"});


	homeTl.pause();
	firstPageTl.pause();

	gsap.to(window, {duration: 0.5, scrollTo: ".firstPage"});
}

function descentToThird() {
	section = 3;
	
	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".thirdNav", {right: 0, duration: 0.2});
	gsap.to(".thirdNav", {right: "-100px", duration: 0.2, delay: 1.5});

	gsap.to(window, {duration: 0.5, scrollTo: ".thirdPage"});
	secondPageTl.fromTo(".thirdStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.1, ease: "back", delay: 0.1, });
	secondPageTl.play();
	firstPageTl.pause();

}

function ascentToSecond() {
	section = 2;
	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".secondNav", {right: 0, duration: 0.2});
	gsap.to(".secondNav", {right: "-100px", duration: 0.2, delay: 1.5});

	gsap.to(".secondStagger", {y: 0, opacity: 1, duration: 0.1, ease: "back"});

	firstPageTl.pause();
	secondPageTl.pause();

	gsap.to(window, {duration: 0.5, scrollTo: ".secondPage"});
	gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
}

function descentToForth() {
	section = 4;
	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".forthNav", {right: 0, duration: 0.2});
	gsap.to(".forthNav", {right: "-100px", duration: 0.2, delay: 1.5});

	firstPageTl.pause();
	secondPageTl.pause();

	gsap.to(window, {duration: 0.5, scrollTo: ".forthPage"});
	thirdPageTl.fromTo(".forthStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.1, ease: "back", delay: 0.1, });
	thirdPageTl.play();
}

function ascentToThird() {
	section = 3;

	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".thirdNav", {right: 0, duration: 0.2});
	gsap.to(".thirdNav", {right: "-100px", duration: 0.2, delay: 1.5});

	gsap.to(".thirdStagger", {y: 0, opacity: 1, duration: 0.1, ease: "back"});

	firstPageTl.pause();
	secondPageTl.pause();
	thirdPageTl.pause();

	gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
	gsap.to(window, {duration: 0.5, scrollTo: ".thirdPage"});
}

function descentToFifth() {
	section = 5;

	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".fifthNav", {right: 0, duration: 0.2});
	gsap.to(".fifthNav", {right: "-100px", duration: 0.2, delay: 1.5});

	firstPageTl.pause();
	secondPageTl.pause();
	thirdPageTl.pause();

	gsap.to(window, {duration: 0.5, scrollTo: ".fifthPage"});
	forthPageTl.fromTo(".fifthStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.1, ease: "back", delay: 0.1, });
	forthPageTl.play();
}

function ascentToForth() {
	section = 4;

	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".forthNav", {right: 0, duration: 0.2});
	gsap.to(".forthNav", {right: "-100px", duration: 0.2, delay: 1.5});

	gsap.to(".forthStagger", {y: 0, opacity: 1, duration: 0.1, ease: "back"});

	firstPageTl.pause();
	secondPageTl.pause();
	thirdPageTl.pause();
	forthPageTl.pause();

	gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
	gsap.to(window, {duration: 0.5, scrollTo: ".forthPage"});
}

function descentToSixth() {
	section = 6;
	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".sixthNav", {right: 0, duration: 0.2});
	gsap.to(".sixthNav", {right: "-100px", duration: 0.2, delay: 1.5});

	firstPageTl.pause();
	secondPageTl.pause();
	thirdPageTl.pause();
	forthPageTl.pause();
	
	sharksTl.fromTo(".shark1", {x: "0"},{x:"-130vw", ease: "power1.in", duration: 12}, 0)
		.fromTo(".shark2", {x: "0"},{x:"-120vw", ease: "power1.in", duration: 12}, 0);
	
	sharksTl.play();

	gsap.to(window, {duration: 0.5, scrollTo: ".sixthPage"});
	fifthPageTl.fromTo(".sixthStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.1, ease: "back", delay: 0, });
	fifthPageTl.play();
}

function ascentToFifth() {
	section = 5;
	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".fifthNav", {right: 0, duration: 0.2});
	gsap.to(".fifthNav", {right: "-100px", duration: 0.2, delay: 1.5});

	gsap.to(".fifthStagger", {y: 0, opacity: 1, duration: 0.1, ease: "back"});

	firstPageTl.pause();
	secondPageTl.pause();
	thirdPageTl.pause();
	forthPageTl.pause();
	fifthPageTl.pause();



	gsap.to(".subMarine", 0.5, {x: 0, opacity: 1});
	gsap.to(window, {duration: 0.5, scrollTo: ".fifthPage"});
}

function descentToContact() {
	section = 7;
	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".contactNav", {right: 0, duration: 0.2});
	gsap.to(".contactNav", {right: "-100px", duration: 0.2, delay: 1.5});

	firstPageTl.pause();
	secondPageTl.pause();
	thirdPageTl.pause();
	forthPageTl.pause();
	fifthPageTl.pause();

	gsap.to(".subMarine", {opacity: 0, duration: 0.1, delay: 0.3});
	gsap.to(window, {duration: 0.5, scrollTo: ".contactPage"});
	sixthPageTl.fromTo(".contact", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.1, ease: "back", delay: 0.1, });
	sixthPageTl.play();
}

function ascentBtnContact() {
	section = 6;
	gsap.to(".projectNav", {right: "-100px", duration: 0.2});
	gsap.to(".sixthNav", {right: 0, duration: 0.2});
	gsap.to(".sixthNav", {right: "-100px", duration: 0.2, delay: 1.5});

	gsap.to(".sixthStagger", {y: 0, opacity: 1, duration: 0.1, ease: "back"});

	firstPageTl.pause();
	secondPageTl.pause();
	thirdPageTl.pause();
	forthPageTl.pause();
	fifthPageTl.pause();
	sixthPageTl.pause();

	if (vpX1280.matches) {
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, bottom: "75vh", ease:"power1.inOut", duration: 0.1, delay: 0.2});
	} else {
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, bottom: "60vh", ease:"power1.inOut", duration: 0.1, delay: 0.2});
	}

	gsap.to(window, {duration: 0.5, scrollTo: ".sixthPage"});
}

function backToTopBtnContact() {
	section = 0;
	
	firstPageTl.pause();
	secondPageTl.pause();
	thirdPageTl.pause();
	forthPageTl.pause();
	fifthPageTl.pause();
	sixthPageTl.pause();

	gsap.to(window, {duration: 4, scrollTo: "body", delay: 0.1});
	gsap.to(".subMarine", {x: 0, bottom: "10vh", duration: 0.5, ease:"power1.inOut", delay: 2});
	gsap.to(".subMarine", {opacity: 1, duration: 0.1, delay: 0.2});
	diveTextTl.play();
}

function backToPresent() {
	window.location.href = "../";
}

function backToPresentBtnContact() {
	loadToPresentTl.fromTo(loadToPresent,{display: "none", opacity: 0}, {display: "flex", opacity: 1, duration: 0.5})
		.fromTo(loadPresentText, {opacity: 0}, {opacity: 1, repeat: 1, yoyo: true, duration: 0.5, onComplete : backToPresent});
}

$(document).ready(function(){
	$(window).on('beforeunload', function(){$(window).scrollTop(0);});
	section = 0;

	$(window).on('scroll', function () {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.querySelector("#myBar").style.width = scrolled + "%";

		if (section > 0) {
			gsap.to(".projectNav", {opacity: 1, stagger: 0.03, duration: 0.1});
		} else {
			gsap.to(".projectNav", {opacity: 0, stagger: 0.03, duration: 0.1});
		}
	});

	// welcomeContainer
	welcomeContainerFn();
	// plane animation
	planeFn();
	// blast animation
	blastFn();
	// cloud animation
	cloudFn();
	// ship1 animation
	ship1Fn();
	// mainSub animation
	subAnimation();
	// diveText animation
	diveTextFn();
	// esc animation
	escBlink();
	
	// onclick animation for homePage
	$(document).on('click', 'body .diveButton , .firstNav', function() {diveIn();});

	// onclick animation for firstPage
	$(document).on('click', 'body .ascentToHome, .heroPageNav', function() {ascentToHome();});
	$(document).on('click', 'body .descentToSecond, .secondNav', function() {descentToSecond();});

	// onclick animation for secondPage
	$(document).on('click', 'body .ascentToFirst, .firstNav', function() {ascentToFirst();});
	$(document).on('click', 'body .descentToThird, .thirdNav', function() {descentToThird();});

	// onclick animation for thirdPage
	$(document).on('click', 'body .ascentToSecond, .secondNav', function() {ascentToSecond();});
	$(document).on('click', 'body .descentToForth, .forthNav', function() {descentToForth();});

	// onclick animation for forthPage
	$(document).on('click', 'body .ascentToThird, .thirdNav', function() {ascentToThird();});
	$(document).on('click', 'body .descentToFifth, .fifthNav', function() {descentToFifth();});

	// onclick animation for fifthPage
	$(document).on('click', 'body .ascentToForth, .forthNav', function() {ascentToForth();});
	$(document).on('click', 'body .descentToSixth, .sixthNav', function() {descentToSixth();});

	// onclick animation for sixthPage
	$(document).on('click', 'body .ascentToFifth, .fifthNav', function() {ascentToFifth();});
	$(document).on('click', 'body .descentToContact, .contactNav', function() {descentToContact();});

	// onclick animation for contactPage
	$(document).on('click', 'body .ascentBtnContact, .sixthNav', function() {ascentBtnContact();});
	$(document).on('click', 'body .backToTopBtnContact, .heroPageNav', function() {backToTopBtnContact();});
	$(document).on('click', 'body .backToPresentBtnContact', function() {backToPresentBtnContact();});

	// up and down arrow key functions
	// $(document).keydown(function(e){e.preventDefault()});
	$(document).on('keypress keydown',function (e) {
		return e.which !== 9 && e.which !== 32;
	});
	$(document).keyup(function(e){
		var key = e.keyCode;
		// dor up arrow key
		if(key == 38){
			switch (section) {
				case 0: reachedTop(); break;
				case 1: ascentToHome(); break;
				case 2: ascentToFirst(); break;
				case 3: ascentToSecond(); break;
				case 4: ascentToThird(); break;
				case 5: ascentToForth(); break;
				case 6: ascentToFifth(); break;
				case 7: ascentBtnContact();
			}
		}
		
		// for down arrow key
		if(key == 40){
			switch (section) {
				case 0: diveIn(); break;
				case 1: descentToSecond(); break;
				case 2: descentToThird(); break;
				case 3: descentToForth(); break;
				case 4: descentToFifth(); break;
				case 5: descentToSixth(); break;
				case 6:descentToContact();
			}
		}

		// for enter key
		if(key == 13){
			switch (section) {
				case 0: fact1Fun(); break;
				case 1: project1Fun(); break;
				case 2: project2Fun(); break;
				case 3: project3Fun(); break;
				case 4: project4Fun(); break;
				case 5: project5Fun();
			}
		}

		// for esc key
		if(key == 27){
			gsap.to(".facts", {opacity: 0, display: "none", duration: 0.5});
			gsap.to(".keyboardHint", {opacity: 0, display: "none", duration: 0.5});
		}
	});

	$(document).on('click', 'body .escBlink', function() {
		gsap.to(".keyboardHint", {opacity: 0, display: "none", duration: 0.5});
	});

});