// Plot parabolic graph
let maxX=100;
let minX=-100;
const scale = canvas.width / (maxX - minX);

context.beginPath();
context.strokeStyle = 'black';
context.lineWidth = 2;

for (let x = minX; x <= maxX; x += 0.1) {
const y = x*x;

const mappedX = canvas.width / 2 + x * scale;
const mappedY = canvas.height / 2 - y * scale;

if (x === minX) {
  context.moveTo(mappedX, mappedY);
} else {
  context.lineTo(mappedX, mappedY);
}
}

context.stroke();