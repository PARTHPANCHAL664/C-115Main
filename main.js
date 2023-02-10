nose_x = 0 
nose_y = 0

function preload()
{
    moustache = loadImage("https://i.postimg.cc/TPxSF1kZ/th-removebg-preview.png");
}

function setup()
{
    canvas = createCanvas(300 , 300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses)
}

function getPoses(results)
{
    if (results.length > 0)
    {
        console.log(results)
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}

function modelLoaded()
{
    console.log("poseNet is Initialized");
}

function draw()
{
    
    image(video,0,0,300,300);
    image(moustache,nose_x - 43,nose_y - 8,90 ,65 );
    
}

function take_anapshot()
{
    save('Myfilter.png')
}