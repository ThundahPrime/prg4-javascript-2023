import { Actor, Vector, Input, CollisionType } from "excalibur";
import { enemy } from "./enemy";
import { Resources } from "./resources.js"

export class filth extends enemy {

   x
   y

    onInitialize(engine) {
        super.onInitialize(engine);
        this.graphics.use(Resources.filth.toSprite())
        this.scale = new Vector (0.05,0.05)
    }

   constructor(x, y) {
    super({
        width: Resources.filth.width, 
        height: Resources.filth.height,
        collisionType: CollisionType.Active,
    });
    this.pos.x = x
    this.pos.y = y
   }

onPreUpdate(engine, delta) {
    console.log('argh')
    let xspeed = 0;
    let yspeed = 0;
    if (this.pos.x > 800) {
        xspeed = 250;
    }
    if (this.pos.x < 0) {
        xspeed = -250;
    }
    this.vel = new Vector(this.vel.x + xspeed, this.vel.y + yspeed);
}

}