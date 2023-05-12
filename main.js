var img=""
var estado=""
var object=[]
var video=""
function draw(){
    image(video,0,0,380,380);
    if (estado != ""){
        objectDetector.detect(video,gotResults);
        for(var i=0; i<object.length; i++){
            document.getElementById("status").innerHTML="status:objeto identificado"
            document.getElementById("objectNumber").innerHTML="quantidade de objetos detectados: "+object.length
            fill(255,0,0);
            var percent=floor(object[i].confidence*100);
            text(object[i].label + " "+ percent + "%",object[i].x,object[i].y);
            noFill()
            stroke(255,0,0);
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
    //text("cachorro",45,75);
    
    //rect(30,60,450,350)
    //gato
    //fill(255,0,0);
    //text("gato",320,120);
    //noFill()
    //stroke(255,0,0);
    //rect(300,90,270,320)

}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()
}
function preload(){
    img=loadImage("dog_cat.jpg");
}
function modelLoad(){
    console.log("modelo carregado");
    estado=true;
}
function gotResults(error,results){
    if (error){
        console.error(error)
    }else{
        console.log(results)
        object=results;
    }
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoad);
    document.getElementById("status").innerHTML="status:Detectando objetos";
}