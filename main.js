camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
    });
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/d7irzSpBa/model.json",modellodded);

function modellodded()
{
    console.log("Your Model is Lodded");
}

function identify_image()
{
    img = document.getElementById("captured_image");
    classifier.classify(img,got_result);
}

function got_result(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("resultObjectName").innerHTML=results[0].label;
        document.getElementById("resultAccuracyNumber").innerHTML=results[0].confidence.toFixed(2);
    } 
}