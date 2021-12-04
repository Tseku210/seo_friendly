// iphone
// var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
let desc = [one, two, three, four];
let i = 0;
// var rotateValue = circle.style.transform;
// var rotateSum;

upBtn.onclick = function(){
  if (i == 0){
    four.style.display = "none";
    one.style.display = "flex";
    three.style.display = "none";
    two.style.display = "none";
  } else if (i == 1) {
    one.style.display = "none";
    two.style.display = "flex";
    three.style.display = "none";
    four.style.display = "none";
  } else if (i == 2) {
    three.style.display = "flex";
    two.style.display = "none";
    four.style.display = "none";
    one.style.display = "none";
  } else if ( i == 3) {
    three.style.display = "none";
    four.style.display = "flex";
    one.style.display = "none";
    two.style.display = "none";
  } else if (i == 4) {
    i = 0;
    four.style.display = "none";
    one.style.display = "flex";
    two.style.display = "none";
    three.style.display = "none";
  }
  i++;
}
downBtn.onclick = function(){
  if (i == 0){
    four.style.display = "none";
    one.style.display = "flex";
    three.style.display = "none";
    two.style.display = "none";
  } else if (i == 1) {
    one.style.display = "none";
    four.style.display = "flex";
    two.style.display = "none";
    three.style.display = "none";
  } else if (i == 2) {
    three.style.display = "flex";
    four.style.display = "none";
    two.style.display = "none";
    one.style.display = "none";
  } else if (i == 3) {
    three.style.display = "none";
    two.style.display = "flex";
    four.style.display = "none";
    one.style.display = "none";
  } else if (i == 4) {
    i = 0;
    two.style.display = "none";
    one.style.display = "flex";
    four.style.display = "none";
    three.style.display = "none";
  }
  i++;
}
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".information");

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