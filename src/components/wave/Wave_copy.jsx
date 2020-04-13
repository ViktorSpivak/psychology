import React, { Component } from "react";
import style from "./wave.module.css";

const NUM_PARTICLES = 120;
const PARTICLE_SIZE = 0.8;
const SPEED = 20000;
let particles = [];
export class Wave extends Component {
  normalPool = (o) => {
    var r = 0;
    do {
      var a = Math.round({ mean: o.mean, dev: o.dev });
      if (a < o.pool.length && a >= 0) return o.pool[a];
      r++;
    } while (r < 100);
  };
  randomNormal = (o) => {
    if (
      ((o = Object.assign({ mean: 0, dev: 1, pool: [] }, o)),
      Array.isArray(o.pool) && o.pool.length > 0)
    )
      return this.normalPool(o);
    var r,
      a,
      n,
      e,
      l = o.mean,
      t = o.dev;
    do {
      r = (a = 2 * Math.random() - 1) * a + (n = 2 * Math.random() - 1) * n;
    } while (r >= 1);
    return (e = a * Math.sqrt((-2 * Math.log(r)) / r)), t * e + l;
  };
  rand = (low, high) => {
    return Math.random() * (high - low) + low;
  };
  createParticle = (canvas) => {
    const colour = {
      r: 191,
      //g: randomNormal({ mean: 226, dev: 255 }),
      g: 226,
      b: 255,
      a: this.rand(0, 1),
    };
    return {
      x: -2,
      y: -2,
      diameter: Math.max(
        0,
        this.randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })
      ),
      duration: this.randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
      amplitude: this.randomNormal({ mean: 16, dev: 2 }),
      offsetY: this.randomNormal({ mean: 0, dev: 10 }),
      arc: Math.PI * 2,
      startTime: performance.now() - this.rand(0, SPEED),
      colour:
        "rgba(" +
        colour.r +
        ", " +
        colour.g +
        ", " +
        colour.b +
        ", " +
        colour.a +
        ")",
    };
  };
  moveParticle = (particle, canvas, time) => {
    const progress =
      ((time - particle.startTime) % particle.duration) / particle.duration;
    return {
      ...particle,
      x: progress,
      y:
        Math.sin(progress * particle.arc * 1.5) * particle.amplitude +
        particle.offsetY,
    };
  };
  drawParticle = (particle, canvas, ctx) => {
    canvas = this.canvasRef.current;
    const vh = canvas.height / 100;

    ctx.fillStyle = particle.colour;
    ctx.beginPath();
    ctx.arc(
      particle.x * canvas.width,
      particle.y * vh + canvas.height / 2,
      particle.diameter * vh,
      0,
      Math.PI * 2
    );
    // ctx.fill();
    ctx.stroke();
  };
  draw = (time, canvas, ctx) => {
    particles.forEach((particle, index) => {
      particles[index] = this.moveParticle(particle, canvas, time);
    });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      this.drawParticle(particle, canvas, ctx);
    });
    requestAnimationFrame((time) => this.draw(time, canvas, ctx));
  };
  initializeCanvas = () => {
    let canvas = this.canvasRef.current;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    console.log(canvas.width);

    let ctx = canvas.getContext("2d");

    window.addEventListener("resize", () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx = canvas.getContext("2d");
    });
    return [canvas, ctx];
  };
  startAnimation = () => {
    const [canvas, ctx] = this.initializeCanvas();
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(this.createParticle(canvas));
    }
    requestAnimationFrame((time) => this.draw(time, canvas, ctx));
  };
  canvasRef = React.createRef();
  componentDidMount() {
    this.startAnimation();
  }

  render() {
    return <canvas ref={this.canvasRef} className={style.canvasArea} />;
  }
}

export default Wave;
