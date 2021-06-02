lwrist_x=""
lwrist_y=""
rwrist_x=""
rwrist_y=""
nose_x=""
nose_y=""
function preload(){}
function setup(){
    canvas=createCanvas(500,500)
    video=createCapture(VIDEO)
    video.position(10,200)
    canvas.center()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)
}
function draw(){}
function modelLoaded(){
    console.log("Ml5 working")
}
function gotPoses(result){
   if(result.length>0)
   {console.log(result);
    nose_x=result[0].pose.nose.x
    nose_y=result[0].pose.nose.y
    console.log(nose_x)
    console.log(nose_y)
    lwrist_x=result[0].pose.leftWrist.x
    lwrist_y=result[0].pose.leftWrist.y
    rwrist_x=result[0].pose.rightWrist.x
    rwrist_y=result[0].pose.rightWrist.y
    console.log(lwrist_x)
    console.log(lwrist_y)
    console.log(rwrist_x)
    console.log(rwrist_y)}
    
    
}
