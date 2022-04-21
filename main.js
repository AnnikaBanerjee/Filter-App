noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2Fiiomwbo_kawaii-cute-pink-pastel-rabbit-bunny-filter-neon%2F&psig=AOvVaw3nmCC_Gq1k5H4HCsTZU0Oe&ust=1650458585950000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLC5xsSToPcCFQAAAAAdAAAAABAD')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded); // initializing model 
    poseNet.on('pose', gotPoses); // executing model
}
function modelLoaded() {
    console.log("model is loaded");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x= " + noseX);
        console.log("Nose y= " + noseY);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('FilterImage.png');
}

