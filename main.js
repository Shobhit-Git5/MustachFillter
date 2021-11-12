noseX=0;
noseY=0;

function preload()
{
 mustach_image = loadImage('https://i.postimg.cc/1RWGtnzb/big-mushtach.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+10;
    }
}

function draw()
{
    image(video,0,0,300,300);
    image(mustach_image,noseX,noseY,30,30);

}

function take_snapshot()
{
    save("my_picture.png");
}