'use strict'

var imgArr = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "tauntaun.jpg", "unicorn.jpg", "water-can.jpg", "wine-glass.jpg", "usb.gif", "sweep.png"];

var allImg=[];

var count = prompt("Enter how many time you want to press?");

function randomNumber(){
    return (Math.floor(Math.random()*imgArr.length));
}randomNumber();

function imgGenerator(name){
    this.Name=name;
    this.imgPath=`img/${name}`;
    this.clicks=0;
    this.views=0;
    allImg.push(this);
}
for (let index = 0; index < imgArr.length; index++) {
   new imgGenerator(imgArr[index]);
}
render();
var imgSection=document.getElementById('imgSection');
var leftImg,midImg,rightImg;
function render(){
    var leftImgIndex=randomNumber();
    var midImgIndex=randomNumber();
    var rightImgIndex=randomNumber();
    while(leftImgIndex===midImgIndex||midImgIndex===rightImgIndex||leftImgIndex===rightImgIndex){
        leftImgIndex=randomNumber();
        midImgIndex=randomNumber();
        rightImgIndex=randomNumber();
    }
    var first=document.getElementById('first');
     leftImg=allImg[leftImgIndex];
    var leftImgPath=leftImg.imgPath;
    leftImg.views++;
    first.setAttribute('src',leftImgPath);
    first.setAttribute('title',leftImg.Name);
    
    var second=document.getElementById('second');
     midImg=allImg[midImgIndex];
    var midImgPath=midImg.imgPath;
    midImg.views++;
    second.setAttribute('src',midImgPath);
    second.setAttribute('title',midImg.Name);


    var third=document.getElementById('third');
     rightImg=allImg[rightImgIndex];
    var rightImgPath=rightImg.imgPath;
    rightImg.views++;
    third.setAttribute('src',rightImgPath);
    third.setAttribute('title',rightImg.Name);

}
var totalClicks=1;
imgSection.addEventListener('click',clickHandler)
function clickHandler(event){
    //console.log(event.path[0].id=="first");
    if(totalClicks<count){
        if(event.path[0].id=="first"){
            leftImg.clicks++;
        }else if(event.path[0].id=="second"){
            midImg.clicks++;
        }else{
            rightImg.clicks++;
        }
        totalClicks++;
        render();
    }else{generateUserMessage();
        imgSection.removeEventListener('click', clickHandler);

    }
    
  
}
function generateUserMessage(){
    var textSection = document.getElementById('textSection');
    var ulList = document.createElement('ul')
    ulList.setAttribute('class','ul')
    for (let index = 0; index < allImg.length; index++) {
        var li = document.createElement('li');
        li.setAttribute('class','li')
        li.textContent=`${allImg[index].Name}had ${allImg[index].clicks} votes and was shown ${allImg[index].views} times`;
        ulList.appendChild(li);
        textSection.appendChild(ulList);
    }
}