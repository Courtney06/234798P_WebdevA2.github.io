
//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");

//select all subtopic pages
console.log(allpages);
hideall();
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}

}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
//show the page
onepage.style.display="block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);

});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});

/*JS for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");
function toggleMenus(){ /*open and close menu*/
    menuItemsList.classList.toggle("menuHide");
// if(menuItemsList.style.display=="block")
// menuItemsList.style.display="none";
// else menuItemsList.style.display="block";
}


let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let countItem = items.length;
let itemActive = 0;
next.onclick = function(){
    itemActive = itemActive +1;
    if (itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

prev.onclick = function(){
    itemActive = itemActive -1;
    if (itemActive <= 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    
    itemActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');

    

}

let newX = [0, 0];
let newY = [0, 0];
let startX = [0, 100];
let startY = [0, 100];
const cards = document.querySelectorAll('.card'); // Select elements with the class 'card'
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mousedown', function (e) {
        mouseDown(i, e);
    });
}

function mouseDown(num, e) {
    startX[num] = e.clientX;
    startY[num] = e.clientY;

    function onMouseMove(e) {
        mouseMove(num, e);
    }

    function onMouseUp() {
        mouseUp(num, onMouseMove, onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

function mouseMove(num, e) {
    newX[num] = startX[num] - e.clientX;
    newY[num] = startY[num] - e.clientY;

    startX[num] = e.clientX;
    startY[num] = e.clientY;

    cards[num].style.top = (cards[num].offsetTop - newY[num]) + 'px';
    cards[num].style.left = (cards[num].offsetLeft - newX[num]) + 'px';
}

function mouseUp(num, onMouseMove, onMouseUp) {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    let trashcard = document.getElementById("trash");
    let trashcan = document.getElementById("trashcan"); 
    var trashcardtop = parseInt(window.getComputedStyle(trashcard).getPropertyValue("top")); 
    var trashcantop = parseInt(window.getComputedStyle(trashcan).getPropertyValue("top")); 
    var trashcardleft = parseInt(window.getComputedStyle(trashcard).getPropertyValue("left")); 
    var trashcanleft = parseInt(window.getComputedStyle(trashcan).getPropertyValue("left")); 

    if (trashcardtop > trashcantop){
        console.log("within");
    }
}


    

    


  var menunav = document.querySelector("nav");
var character = document.getElementById("cat");
var block = document.getElementById("obstacle");
const gamestartinfo = document.getElementById("gamestartinfo");
var gamestarted = false;
menunav.style.display = "none";
const score = document.createElement("h3");
const catinfo = document.createElement("p");

var Score = 0;
function jump(){
    if (gamestarted == false){
        block.classList.add("moveobstacle");
        gamestarted = true;
        gamestartinfo.remove();
        
        
     
    }else{
        if (character.classList != "animate"){
            
            score.innerText = "Score: " + Score  ;
            document.getElementById("title").appendChild(score);
            character.classList.add("animate");
            Score++;
            
            
            if (Score > 10 && Score < 15){
                catinfo.innerText = "did you know that if a cat scratches a dog, the dog will become scared of them";
                
                document.getElementById("title").appendChild(catinfo);
            }
            else{
                catinfo.remove();
            }
        }
       
        setTimeout(function(){
            character.classList.remove("animate");
        },500);
    }
   
}


    document.addEventListener('mousedown', jump);



   
   

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); 
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); 

    if (blockleft < 20 && blockleft > 0 && characterTop>=130){ //calculating top of character and left of block to see if its hitting each other
        block.style.animation = "none";
        block.style.display = "none";
        var mainpage = document.getElementsByClassName("mainpage");
        const element = document.getElementById('mainpagediv');
        element.remove('mainpage');
        show(1);
        menunav.style.display = "block";
        document.removeEventListener('mousedown', jump);
    }
}, 10);

const Ball = document.querySelectorAll(".ball");

var ballX = [100,400,600, 1000, 1100];
var ballY = [150,600,250, 100, 550];
var ballSize = [300,300,300,300,300];   
var minsize = [300,300,300,300,300]; 
var maxballsize = [500,500,500,500,500];
var catfacts = ["Unique Nose Prints:\n Just like human fingerprints, a cat's nose print is unique. No two cats have the same nose pattern, making each cat's nose as individual as a human's fingerprint.",
    "Communication: Cats have a wide range of vocalizations. They can produce over 100 different sounds, ranging from meows and purrs to hisses and growls.",
    "Whisker Sensitivity: A cat's whiskers are highly sensitive and can detect even the slightest changes in their environment. They help cats measure the width of openings, detect nearby objects, and even sense changes in the air currents",
    "Flexible Spine: Cats are incredibly agile and have a unique skeletal structure that contributes to their flexibility. Their spine contains more vertebrae than most other mammals. ",
    "Self-Grooming and Hygiene: Cats spend a significant portion of their day grooming themselves. This behavior helps them keep their fur clean, remove parasites, and regulate their body temperature. "]
var catfactheader = ["Unique Nose Prints", "Communication", "Whisker Sensitivity", "Flexible Spine", "Self-Grooming and Hygiene"];

for (let i =0; i < Ball.length; i++){
    Ball[i].addEventListener("mouseover", function(){
        increasesize(i);
    });
    Ball[i].addEventListener("mouseout", function(){
        decreasesize(i);
    });
    Ball[i].addEventListener("click", function(){
        addinfo(i);
        console.log("test");
    });
    
}




function resetPos(){
   
    UpdateBallStyle();
}

resetPos();

function increasesize(num){
    ballX[num] -= maxballsize[num]/4;
    ballY[num] -=maxballsize[num]/4;
    ballSize[num] = maxballsize[num];
    UpdateBallStyle();
    Ball[num].innerText = catfactheader[num];
    
}

function decreasesize(num){
   
    ballX[num] += maxballsize[num]/4;
    ballY[num] += maxballsize[num]/4;
    ballSize[num] = minsize[num];
    Ball[num].innerText = " ";
    UpdateBallStyle();

}

function addinfo(num){
    Ball[num].innerText = catfacts[num];
}

function UpdateBallStyle(){
    for (let i =0; i<Ball.length;i++){
        Ball[i].style.left = ballX[i]+"px"; //set left property to ball x variable
        Ball[i].style.top = ballY[i]+"px"; //set top property to ball x variable
        Ball[i].style.width = ballSize[i]+"px";
        Ball[i].style.height = ballSize[i]+"px";
       
    }
   
}

