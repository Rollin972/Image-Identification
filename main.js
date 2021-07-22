Webcam.set({
    height : 300,
    width : 311,
    image_format : 'jpeg',
    jpeg_quality : 90,

    constraints : {
      facingMode : 'enviorment'
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'cap_img' src = '"+data_uri+"'></img>";
    });
}

console.log('ml5.version',ml5.version);

identify = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded()
{
    console.log("model loaded successfully !");
}

function check()
{
    img = document.getElementById("cap_img");
    identify.classify(img, gotResult);
}

function gotResult(error,result)
{
   if(error)
   {
       console.log(error);
   }else{
       console.log(result)
       document.getElementById("object_name").innerHTML = result[0].label;
   }
}

