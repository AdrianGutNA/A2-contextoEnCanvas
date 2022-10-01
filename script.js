var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var img = new Image();
img.src = "./aguila.png";

context.fillStyle = "green";
context.fillRect(70, 80, 150, 140);

context.fillStyle = "black";
context.strokeRect(220, 80, 150, 140);

context.fillStyle = "red";
context.fillRect(370, 80, 150, 140);

img.onload = function() {
    context.drawImage(img, 255, 110, 80, 80);
}