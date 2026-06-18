// ==========================
// PAGE NAVIGATION
// ==========================

const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".next-btn");

let currentPage = 0;

nextButtons.forEach(btn => {

btn.addEventListener("click", () => {

if(currentPage < pages.length - 1){

pages[currentPage].classList.remove("active");

currentPage++;

pages[currentPage].classList.add("active");

checkFinalPage();

}

});

});

// ==========================
// HEARTS
// ==========================

const heartContainer =
document.getElementById("heart-container");

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

const hearts = [
"❤️",
"💖",
"💕",
"💗",
"💘"
];

heart.innerHTML =
hearts[Math.floor(
Math.random()*hearts.length
)];

heart.style.left =
Math.random()*100 + "vw";

heart.style.animationDuration =
(4 + Math.random()*4) + "s";

heart.style.fontSize =
(18 + Math.random()*20) + "px";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,300);

// ==========================
// MUSIC CONTROL
// ==========================

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click",()=>{

if(!musicPlaying){

music.play();

musicPlaying = true;

musicBtn.innerHTML = "🔊";

}
else{

music.pause();

musicPlaying = false;

musicBtn.innerHTML = "🎵";

}

});

// ==========================
// CONFETTI
// ==========================

function createConfetti(){

for(let i=0;i<150;i++){

const confetti =
document.createElement("div");

confetti.classList.add("confetti");

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top = "-20px";

confetti.style.background =
randomColor();

confetti.style.transform =
`rotate(${Math.random()*360}deg)`;

confetti.style.animationDuration =
(2 + Math.random()*3) + "s";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},5000);

}

}

function randomColor(){

const colors = [

"#FF8FB1",
"#FFD166",
"#A0E7E5",
"#B4F8C8",
"#CDB4DB",
"#FFC6FF"

];

return colors[
Math.floor(
Math.random()*colors.length
)
];

}

// ==========================
// FINAL PAGE CHECK
// ==========================

function checkFinalPage(){

if(
currentPage === pages.length - 1
){

createConfetti();

startFireworks();

}

}

// ==========================
// FIREWORKS
// ==========================

function startFireworks(){

const interval =
setInterval(()=>{

for(let i=0;i<20;i++){

const particle =
document.createElement("div");

particle.classList.add("firework");

particle.style.left =
(40 + Math.random()*20)
+ "vw";

particle.style.top =
(20 + Math.random()*40)
+ "vh";

particle.style.background =
randomColor();

particle.style.transform =
`rotate(${Math.random()*360}deg)`;

document.body.appendChild(
particle
);

setTimeout(()=>{

particle.remove();

},2000);

}

},600);

setTimeout(()=>{

clearInterval(interval);

},10000);

}

// ==========================
// SCRAPBOOK RANDOM ROTATION
// ==========================

document
.querySelectorAll(".letter-grid span")
.forEach(letter=>{

const rotation =
Math.floor(
Math.random()*10 - 5
);

letter.style.setProperty(
"--r",
rotation
);

});

// ==========================
// POLAROID POP EFFECT
// ==========================

const polaroids =
document.querySelectorAll(".polaroid");

polaroids.forEach(card=>{

card.addEventListener(
"mouseenter",
()=>{

card.style.zIndex = "10";

});

card.addEventListener(
"mouseleave",
()=>{

card.style.zIndex = "1";

});

});

// ==========================
// AUTO FADE ELEMENTS
// ==========================

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

});

document
.querySelectorAll(
".polaroid,.letter-box,.big-note"
)
.forEach(el=>{

observer.observe(el);

});

// ==========================
// WELCOME EFFECT
// ==========================

window.addEventListener(
"load",
()=>{

    
setTimeout(()=>{

document.body.classList.add(
"loaded"
);

},300);

});