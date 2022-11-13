function preload(){
    clownnose = loadImage("https://i.postimg.cc/XNyzYSjZ/OIP.png")
    }
    NoseX = 0;
    NoseY = 0;
    function setup(){
        canvas = createCanvas(300, 300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300,300);
        video.hide();
    
        posenet = ml5.poseNet(video, modelLoaded);
        posenet.on('pose', gotPoses);
    }
    
    function modelLoaded(){
        console.log("PoseNet is Initialized");
    }
    
    function gotPoses(results){
         if(results.length>0){
            console.log(results);
            console.log("Nose X = "+ results[0].pose.nose.x);
            console.log("Nose Y = "+ results[0].pose.nose.y);
            NoseX = results[0].pose.nose.x-25;
            NoseY = results[0].pose.nose.y-25;
         }
    }
    
    function draw(){
        image(video, 0, 0 , 300, 300);
        image(clownnose, NoseX, NoseY, 50, 50);
    }
    
    function snap(){
        save("name.png");
    }