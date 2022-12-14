status1="";
input_value="";
function setup(){
canvas = createCanvas(450,350);
canvas.center();
video = createCapture(VIDEO);
video.size(450,350);
video.hide();
}
function start(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status1").innerHTML="Status: Detecting Objects";    
document.getElementById("input1").value=input_value;
}
function modelLoaded(){
console.log('Model Loaded!');
status1=true;
}
function draw(){
image(video,0,0,480,380);
}