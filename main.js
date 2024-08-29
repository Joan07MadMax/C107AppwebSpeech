var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() 
{
    document.getElementById("tex-tbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;

    document.getElementById("text-box").innerHTML = Content;
    console.log(Content);
    if(Content == "toma mi selfi")
    {
        console.log("tomando selfie --- ");
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Tomando tu selfi en 5 segundos ...";
}