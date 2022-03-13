function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scroll({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
}

let hamburger = document.getElementsByClassName("hamburger")[0];
let navbarLinks = document.getElementsByClassName("navbar-links")[0];

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let iframe = document.querySelector("iframe");
let trailer1 = document.querySelector("#trailer-1");
let trailer2 = document.querySelector("#trailer-2");
let trailer3 = document.querySelector("#trailer-3");

let trailers = document.querySelectorAll("trailer");

trailer1.addEventListener("click", () => {
  trailer2.classList.remove("active");
  trailer3.classList.remove("active");

  iframe.src = "https://www.youtube.com/embed/3KR8_igDs1Y";
  trailer1.classList.toggle("active");
});

trailer2.addEventListener("click", () => {
  trailer1.classList.remove("active");
  trailer3.classList.remove("active");

  iframe.src = "https://www.youtube.com/embed/f3N0pzJ8w1c";
  trailer2.classList.toggle("active");
});

trailer3.addEventListener("click", () => {
  trailer1.classList.remove("active");
  trailer2.classList.remove("active");

  iframe.src = "https://www.youtube.com/embed/k4xGqY5IDBE";
  trailer3.classList.toggle("active");
});

// To check the scroll position on page load
// reveal();
// a
