var ball;

var position,database;
var hypnoticBall;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database  = firebase.database();
    var locOfChild = database.ref('Ball/position');
    locOfChild.on("value",readPosition,showerr);

}

function draw(){
    background("white");
    if(position!=undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}

function writePosition(x,y){
   database.ref('Ball/position').set({

    'x': position.x + x ,
    'y': position.y + y 

   })


}
function readPosition (data){
    position = data.val();
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}
function showerr(){
    console.log("ERROR");

}
