var l1=document.getElementById("luz1");
var l2=document.getElementById("luz2");

var relleno1=0;
var relleno2=0;

function setup() {
  var c=createCanvas(400, 400);
  c.parent("canvasWrapped");
}

function draw() {
  background(220);
  noStroke();
  if(l1.checked){
    relleno1=255;
  }else{
    relleno1=0;
  }

  fill(relleno1);
  rect(0,0,width,height/2);
  
  if(l2.checked){
    relleno2=255;
  }else{
    relleno2=0;
  }

  fill(relleno2);
  rect(0,height/2,width,height/2);
}
