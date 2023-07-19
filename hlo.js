const math=require('mathjs');
let maxX=1;
let minX=-1;
let eq='3x*x+2*x+1';


for (let x = minX; x <= maxX; x += 0.1) {
//const y =math.evaluate(eq,{ x });
const y=math.evaluate(eq,{x});
console.log(y);
}

