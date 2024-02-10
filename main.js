 video = "";
 difference = 0;
 leftWristX = 0;
 rightWristX = 0;

function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Dude, Dunkin only has 1 donut left! Stop!");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = Math.floor(leftWristX - rightWristX);
    }
}

function draw(){
    background("white");
    fill(57, 105, 146);
    stroke(144, 172, 196);
    
    textSize(difference);
    document.getElementById("textSizeDifference").innerHTML = "The size of the font is = " + difference + "px";

    
    text('Kayaan A.', 100, 200);
  }
