// import * as React from "react";
import type { P5CanvasInstance } from "@p5-wrapper/react"
import { ReactP5Wrapper } from "@p5-wrapper/react";


import "./Lorentz.sass"

function sketch(p5: P5CanvasInstance) {
    let x = 0.01, y = 0, z = 0;
    const a = 10, b = 28, c = 8 / 3;
    let points = [];
    let count; 

  p5.setup = () => {
    p5.createCanvas(600, 600, p5.WEBGL);
    count = 0; 
    p5.clear(); 
    
  };

  p5.draw = () => {
    
    
    
    // Lorenz Attractor Equations
    const dt = 0.01;
    const dx = a * (y - x) * dt;
    const dy = (x * (b - z) - y) * dt;
    const dz = (x * y - c * z) * dt;

    x += dx;
    y += dy;
    z += dz;
    
    points.push(p5.createVector(x, y, z));

    // Drawing the attractor
    p5.translate(0, 0, -80);
    p5.scale(9);
    p5.stroke(255);
    p5.noFill();

    // p5.beginShape();
    let N =  points.length; 

    const vl = points[points.length - 1]; 
    // for (let vl of points) {
        const R = 0.3; 
        const norm = p5.max(vl.mag() * 10 , 200); 
        console.log(norm)
        p5.stroke(norm)
        p5.ellipse(vl.x, vl.y, R, R);
        
    // }
    // p5.endShape();
  };
  }


export default function Lorentz() {
  return <ReactP5Wrapper sketch={sketch} />;
}
