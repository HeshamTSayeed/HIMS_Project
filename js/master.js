// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");
// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// Function To Randomize Imgs
setInterval(() => {
	// Get Random Number
	let randomNumber = Math.floor(Math.random() * imgsArray.length);
	// Change Background Image Url
	landingPage.style.backgroundImage =
		'url("../images/' + imgsArray[randomNumber] + '")';
}, 10000);

// scroll to top
let span = document.querySelector(".up");
window.onscroll = function () {
	this.scrollY >= 800
		? span.classList.add("show")
		: span.classList.remove("show");
};
span.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

// full Screen nav in responsive
let toggler = document.querySelector("#toggle");
let nav = document.querySelector(".main-nav");
let close = document.querySelector(".close");
let link = document.querySelector("#link");
let a = document.querySelector("#link-a");
let subject = document.querySelector("#link-s");
toggler.onclick = function () {
	nav.classList.add("open");
};
close.onclick = function () {
	this.parentElement.classList.remove("open");
};
link.onclick = function () {
	nav.classList.remove("open");
};
a.onclick = function () {
	nav.classList.remove("open");
};
subject.onclick = function () {
	nav.classList.remove("open");
};

// Subject Section tabs
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);
tabsArray.forEach((ele) => {
	ele.addEventListener("click", function (e) {
		tabsArray.forEach((ele) => {
			ele.classList.remove("active");
		});
		e.currentTarget.classList.add("active");
		divsArray.forEach((div) => {
			div.style.display = "none";
		});
		document.querySelector(e.currentTarget.dataset.cont).style.display =
			"block";
	});
});
