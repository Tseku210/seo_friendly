const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

function noScroll(){
    window.scrollTo(0, 0);
}

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
    document.body.classList.toggle("active");
    if (menuToggle.classList.contains("active")){
        disableScroll();
    } else {
        enableScroll();
    }
})
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

const typewriter = document.getElementById("typewriter");
const typewriterdiv = document.querySelector(".typewriter")
let sentences = ["Hello my name is Tsenguun.", "Throughout my life I searched for myself.", "I couldn't find what I love.", "I searched and searched...", 
"But then I found 'Programming'", "This is what I love now"];

if (typewriterdiv){

  // let i = 0;
  // setInterval(() => {
  //   typewriterdiv.remove();
  //   typewriterdiv = document.createElement("div");
  //   typewriterdiv.classList.add("typewriter");
  //   let h1 = document.createElement("h1");
  //   h1.id = "typewriter";
  //   typewriterdiv.appendChild(h1);
  //   showcase.appendChild(typewriterdiv);
  // }, 4500);
  var i = 0;
  var txt = "Hello my name is Tsenguun. I'm your average guy. Literally, I'm average in everything. Height, studies, life etc... So throughout my life I searched for that one thing that will set me apart from everybody. I searched and searched... I tried books, sports, teaching, taking, etc. Not a single one ticked. Until that one day I found 'Programming'. I started googleing everything on how to start coding, few minutes later I found a class on programming. I enrolled in that instant. The rest is history...";
  var speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
   }
}
}
const mybutton = document.getElementById("myBtn");

if (mybutton){

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}