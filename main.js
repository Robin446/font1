difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
};
function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
    }
    }

function modelLoaded(){
    console.log('poseNet Is Initialized');
}