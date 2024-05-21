var noseX = 0;
var noseY = 0;
var rightWirstX = 0;
var leftWirstX = 0;
var difference = 0;

function setup(){
 video = createCapture(VIDEO)
 video.size(500,500)
 canvas = createCanvas(500,500)
 canvas.position(560,150)
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("modelo carregado")
}

function draw(){
 background("red")
 image(video,500,500)
 fill("black")
 stroke("purple")
 square(noseX, noseY, difference)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWirstX = results[0].pose.leftWrist.x;
        rightWirstX = results[0].pose.rightWrist.x;
        difference = floor(leftWirstX-rightWirstX)

        document.getElementById("square").innerHTML = "Largura e Altura do quadrado: " + difference + " px"
    }
}