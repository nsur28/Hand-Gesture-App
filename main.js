Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});
prediction_1="";
prediction_2="";
camera= document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>'

    })
}
console.log('ml5 version: ', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J9ziQ05tf/',modelLoaded)
function modelLoaded(){
    console.log('modelLoaded');
}
function speak(){
    var Synth= window.speechSynthesis;
    speak_data1="prediction 1 is   "+prediction_1;
    speak_data2="prediction 2 is   "+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data1+speak_data2);
    Synth.speak(utterThis)
}