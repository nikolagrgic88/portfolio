import _ from "lodash";
import { scaleLinear } from "d3-scale";
import random from "canvas-sketch-util/random";
import math from "canvas-sketch-util/math";

class Particle {
  constructor({ x, y, radius = 10, colorMap }) {
    //postion
    this.x = x;
    this.y = y;
    //acceleration
    this.ax = 0;
    this.ay = 0;
    //velocity
    this.vx = 0;
    this.vy = 0;
    //initial position
    this.ix = x;
    this.iy = y;

    this.radius = radius;
    this.scale = 1;
    this.colorMap = colorMap;
		this.color = colorMap(1);
    this.minDist = random.range(100, 200);
    this.pushFactor = random.range(0.03, 0.048);
    this.pullFactor = random.range(0.001, 0.002);
    this.dampFactor = random.range(0.92, 0.95);
  }

  update(cursor) {
    let dx, dy, dd, distDelta;

    dx = this.ix - this.x;
    dy = this.iy - this.y;
    dd = Math.sqrt(dx * dx + dy * dy);

    // this.ax = dx * this.pullFactor;
    // this.ay = dy * this.pullFactor;

    this.scale = math.mapRange(dd, 0, 100, 1, 3);
    this.color = this.colorMap(this.scale);

    dx = this.x - cursor.x;
    dy = this.y - cursor.y;
    dd = Math.sqrt(dx * dx + dy * dy);
    distDelta = this.minDist - dd;

    if (dd < this.minDist) {
      this.ax += (dx / dd) * distDelta * this.pushFactor;
      this.ay += (dy / dd) * distDelta * this.pushFactor;
    }

    this.vx += this.ax;
    this.vy += this.ay;
    this.vx *= this.dampFactor;
    this.vy *= this.dampFactor;
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(0, 0, this.radius * this.scale, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }
}

export default Particle;
