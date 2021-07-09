const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    /* create getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png")
    backgroundImg2 = loadImage("sunrise2.png")
    backgroundImg3 = loadImage("sunrise3.png")
    backgroundImg4 = loadImage("sunrise4.png")
    backgroundImg5 = loadImage("sunrise5.png")
    backgroundImg6 = loadImage("sunrise6.png")
    backgroundImg7 = loadImage("sunrise7.png")
    backgroundImg8 = loadImage("sunrise8.png")
    backgroundImg9 = loadImage("sunrise9.png")
    backgroundImg10 = loadImage("sunrise10.png")
    backgroundImg11 = loadImage("sunrise11.png")
    backgroundImg12 = loadImage("sunrise12.png")*/
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg) {
        background(backgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here
    fill ("black")
    textSize(30)
    if (hour>=12){
        text("Time: "+hour%12+" PM", 50,100)
    }
    else if(hour == 0){
        text("Time: 12 AM",100,100)
    }
    else {
        text("Time: "+hour%12+" AM", 50,100)
    }

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }
    else if(hour>=06&&hour<=08){
        bg = "sunrise2.png";
    }
    else if(hour>=08&&hour<=11){
        bg = "sunrise3.png";
    }
    else if(hour>=11&&hour<=13){
        bg = "sunrise4.png";
    }
    else if(hour>=13&&hour<=15){
        bg = "sunrise5.png";
    }
    else if(hour>=15&&hour<=17){
        bg = "sunrise6.png";
    }
    else if(hour>=17&&hour<=18){
        bg = "sunset7.png";
    }
    else if(hour>=18&&hour<=20){
        bg = "sunset8.png";
    }
    else if(hour>=20&&hour<=23){
        bg = "sunset9.png";
    }
    else if(hour>=23&&hour<=0){
        bg = "sunset10.png";
    }
    else if(hour>=0&&hour<=03){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
