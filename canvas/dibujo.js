var d = document.getElementById('dibujo')
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100,50);
lienzo.lineTo(100,200);
lienzo.lineTo(200,200);
lienzo.stroke();
lienzo.closePath();
