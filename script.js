
//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
var allpages=document.querySelectorAll(".page");
var moveableItems = document.querySelectorAll(".moveable");

//there middlee
function chnageMiddle(){
    //console.log("---BREAK---");
    document.querySelector("#catbehavior").style.left = "50%";
    var leftofthing = parseInt(window.getComputedStyle(document.querySelector("#catbehavior")).getPropertyValue("left"));
    var sizeofwidth = (document.querySelector("#catbehavior")).scrollWidth/2;
    //console.log((leftofthing));
    //console.log((sizeofwidth));
    var newLeft = leftofthing - sizeofwidth;
    //console.log(newLeft);
    document.querySelector("#catbehavior").style.left = newLeft.toString() + "px";
    //document.querySelector("#catbehavior").style.left = (parseInt(window.getComputedStyle(document.querySelector("#catbehavior")).getPropertyValue("left")) - (document.querySelector("#catbehavior").clientWidth/2)).toString() + "px";
    //console.log(document.querySelector("#catbehavior").style.left);
    
}

setInterval(chnageMiddle,100);

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
randomAll();
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
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
    if (itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    
    itemActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');

    

}

var catBreedButton = document.querySelectorAll("#catBreedCheck");

var parentButton;

for(let oneButton of catBreedButton){
    oneButton.addEventListener("click",function(){
        parentButton = oneButton.parentElement;
        console.log(parentButton);
        getOption();
        
    });
}

function getOption() {
        selectElement = parentButton.querySelector('#Catbreed');
        output = selectElement.value;
        
        selectElement2 = parentButton.querySelector('#Catbreed2');
        output2 = selectElement2.value;
        console.log("-----------BREAK-----------");

        if (output == output2){
            output2 = "Pure";
        }
    
        const item = document.querySelectorAll('.content');
        let containsOutput = false;
        let containsOutput2 = false;

        var itemCount = 0;

        for (let items of item){
            console.log(output + " " + output2 + items.classList);
            containsOutput = false;
            containsOutput2 = false;
            if (items.classList.contains(output)){
                console.log(output);
                containsOutput = true;
            }
            if (items.classList.contains(output2)){
                console.log(output2);
                containsOutput2 = true;
            }
            if (containsOutput && containsOutput2){
                console.log(itemCount);
                console.log("confirm");
    
    
    
                itemActive = itemCount;
                if (itemActive >= item.length){
                    itemActive = 0;
                }
                showSlider();
            }else{
                itemCount++;
            }
        }

        // item.forEach(item => {
        // if (item.classList.contains(output)){
        //     containsOutput = true;
        // }
        // if (item.classList.contains(output2)){
        //     containsOutput2 = true;
        // }
        // if (containsOutput && containsOutput2){
        //     console.log(itemCount);
        //     console.log("confirm");



        //     itemActive = itemCount;
        //     if (itemActive >= item.length){
        //         itemActive = 0;
        //     }
        //     showSlider();
        // }else{
        //     itemCount++;
        // }
        // });
        

}


var prevObject = "";
var clickObject = "";
var currentX,currentY,prevX,prevY;

var clickableItems = document.querySelectorAll(".clickable");


function randomAll(){
    console.log("random");
    for (let oneItem of moveableItems){
        oneItem.style.top = Math.floor(Math.random() * 60) + 30 + '%';
        oneItem.style.left = Math.floor(Math.random() * 90) + '%';
        console.log(oneItem.style.top.toString() + " " + oneItem.style.left.toString());
    }
}

for(let oneItem of clickableItems){
    oneItem.addEventListener("click",function(e){
        prevX = currentX;
        prevY = currentY;
        currentX = e.clientX;
        currentY = e.clientY;
        prevObject = clickObject;
        clickObject = oneItem.id;

        if (prevObject == "") return;
        if (document.querySelector("#" + prevObject).classList.contains("moveable") && oneItem.classList.contains("contain")){
            var test = "#" + prevObject.toString();
            console.log("move " + test +  " " + clickObject);
            let prevObj = document.querySelector(test);
    
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;
            
            prevObj.style.top = (prevObj.offsetTop - newY) + 'px';
            prevObj.style.left = (prevObj.offsetLeft - newX) + 'px';
            if (checkAllItems()){
                console.log("Win");
                let text = document.getElementById("text");
                text.innerText="Imagine experiencing this everyday...";
            }

        }
                
    });
}

function checkAllItems(){
    var isAllOkay = true;
    for(let oneItem of moveableItems){
            let trashcard = document.getElementById(oneItem.id);
            var idContainer;
            if (trashcard.classList.contains("trashObj")){
                idContainer = "trashcan";
            }else if (trashcard.classList.contains("sofaObj")){
                idContainer = "sofa";
            } 
            let trashcan = document.getElementById(idContainer); 
            var trashcardtop = parseInt(window.getComputedStyle(trashcard).getPropertyValue("top")); 
            var trashcantop = parseInt(window.getComputedStyle(trashcan).getPropertyValue("top")); 
            var trashcardleft = parseInt(window.getComputedStyle(trashcard).getPropertyValue("left")); 
            var trashcanleft = parseInt(window.getComputedStyle(trashcan).getPropertyValue("left")); 
            var trashcardbottom = parseInt(window.getComputedStyle(trashcard).getPropertyValue("bottom")); 
            var trashcanbottom = parseInt(window.getComputedStyle(trashcan).getPropertyValue("bottom")); 
            var trashcardright = parseInt(window.getComputedStyle(trashcard).getPropertyValue("right"));
            var trashcanright = parseInt(window.getComputedStyle(trashcan).getPropertyValue("right")); 

            // 
            if (trashcardtop > trashcantop && trashcardleft > trashcanleft && trashcardbottom > trashcanbottom && trashcardright > trashcanright){
                // console.log("px : " + trashcard.clientHeight.toString() + " " + trashcard.clientWidth.toString());
                // console.log("top : " + trashcardtop.toString() + " " +trashcantop.toString());
                // console.log("bottom : " + trashcardbottom.toString() + " " +trashcanbottom.toString());
                // console.log("right : " + trashcardright.toString() + " " +trashcanright.toString());
                // console.log("left : " + trashcardleft.toString() + " " +trashcanleft.toString());
            }else{
                isAllOkay = false
            }
    }
    return isAllOkay;
}

// let newX = [0, 0];
// let newY = [0, 0];
// let startX = [0, 100];
// let startY = [0, 100];
// const cards = document.querySelectorAll('.card'); // Select elements with the class 'card'
// for (let i = 0; i < cards.length; i++) {
//     // cards[i].addEventListener('mousedown', function (e) {
//     //     mouseDown(i, e);
//     // });
// }

// function mouseDown(num, e) {
//     startX[num] = e.clientX;
//     startY[num] = e.clientY;

//     function onMouseMove(e) {
//         mouseMove(num, e);
//     }

//     function onMouseUp() {
//         mouseUp(num, onMouseMove, onMouseUp);
//     }

//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('mouseup', onMouseUp);
// }

// function mouseMove(num, e) {
//     newX[num] = startX[num] - e.clientX;
//     newY[num] = startY[num] - e.clientY;

//     startX[num] = e.clientX;
//     startY[num] = e.clientY;

//     cards[num].style.top = (cards[num].offsetTop - newY[num]) + 'px';
//     cards[num].style.left = (cards[num].offsetLeft - newX[num]) + 'px';
// }

// function mouseUp(num, onMouseMove, onMouseUp) {
//     document.removeEventListener('mousemove', onMouseMove);
//     document.removeEventListener('mouseup', onMouseUp);

    
// }


    

    


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
console.log(Ball);

var ballX = ["5vw","25vw","40vw", "55vw", "70vw"];
var ballY = ["20vh","60vh","20vh", "60vh", "20vh"];
var ballSize = ["20vw","20vw","20vw","20vw","20vw"];   
var minsize = [300,300,300,300,300]; 
var maxballsize = [500,500,500,500,500];
let Screenwidth = screen.width;


//initialise bubbles and set px to variables (responsive)

for (let i = 0; i < Ball.length;i++){
    Ball[i].style.left = ballX[i];
    Ball[i].style.top = ballY[i];
    ballX[i] = parseInt(window.getComputedStyle(Ball[i]).getPropertyValue("left"));
    ballY[i] = parseInt(window.getComputedStyle(Ball[i]).getPropertyValue("top"));

    Ball[i].style.width = ballSize[i];
    Ball[i].style.height = ballSize[i];
    ballSize[i] = parseInt(window.getComputedStyle(Ball[i]).getPropertyValue("width"));
    minsize[i] = ballSize[i];
    maxballsize[i] = minsize[i]*1.5;
    console.log(ballSize[i]);
}




var catfacts = ["Unique Nose Prints:\n Just like human fingerprints, \na cat's nose print is unique. No two \ncats have the same nose pattern, \nmaking each cat's nose as \nindividual as a human's fingerprint.",
    "Communication: \nCats have a wide range of vocalizations. \nThey can produce over 100 different \nsounds, ranging from meows and \npurrs to hisses and growls.",
    "Whisker Sensitivity: \nA cat's whiskers are highly sensitive \nand can detect even the slightest changes \nin their environment. They help \ncats measure the width of openings, \ndetect nearby objects, and \neven sense changes in the air currents",
    "Flexible Spine:\n Cats are incredibly agile and have \na unique skeletal structure that \ncontributes to their flexibility. \nTheir spine contains more \nvertebrae than most other mammals. ",
    "Self-Grooming and Hygiene: \nCats spend a significant portion \nof their day grooming themselves. \nThis behavior helps them keep their fur \nclean, remove parasites, and regulate \ntheir body temperature. "]
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

//resetPos();

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

var submitAttribute = document.querySelector("#submitAttribute");


submitAttribute.addEventListener("click",function(){
    var lazy = document.querySelector('input[name="lazy"]:checked').value;
    var affectionate = document.querySelector('input[name="affectionate"]:checked').value;
    var fluffy = document.querySelector('input[name="fluffy"]:checked').value;
    var social = document.querySelector('input[name="social"]:checked').value;
    var intelligent = document.querySelector('input[name="intelligent"]:checked').value;
    console.log(lazy + " " + affectionate + " " + fluffy + " " + social + " " + intelligent);

    //Persion : lazy fluffy
    //Mainecoon : fluffy intelligent social
    //Siamese : affectionate social
    show(3);

    var output2 = "Pure";
    
    var output;
    if(lazy == "true" && fluffy  == "true"){
        output = "Persian";
    }
    else if (fluffy  == "true" && intelligent  == "true" && social  == "true"|| fluffy  == "true" && social  == "true"){
        output = "Mainecoon";
    }
    else if (affectionate  == "true" && social  == "true"){
        output = "Siamese";
    }
    else if (lazy == "true" || fluffy == "true"){
        output = "Persian";
    }
    else if(intelligent  == "true" || social=="true"){
        output = "Mainecoon";
    }
    else if(affectionate  == "true" || social=="true"){
        output = "Siamese";
    }

    const item = document.querySelectorAll('.content');
    let containsOutput = false;
    let containsOutput2 = false;
    var itemCount = 0;

    for (let items of item){
            console.log(output + " " + output2 + items.classList);
            containsOutput = false;
            containsOutput2 = false;
            if (items.classList.contains(output)){
                console.log(output);
                containsOutput = true;
            }
            if (items.classList.contains(output2)){
                console.log(output2);
                containsOutput2 = true;
            }
            if (containsOutput && containsOutput2){
                console.log(itemCount);
                console.log("confirm");
    
    
    
                itemActive = itemCount;
                if (itemActive >= item.length){
                    itemActive = 0;
                }
                showSlider();
                break;
            }else{
                itemCount++;
            }
        }
});