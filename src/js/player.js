import { Actor, Vector, Input, CollisionType } from "excalibur";
import { Resources } from "./resources.js"

export class player extends Actor {

    hp
    game

    constructor() {
        super({
            width: Resources.player.width,
            height: Resources.player.height,
            collisionType: CollisionType.Active,
        });
        this.body.useGravity = true;
        this.hp = 100
    }

onInitialize(engine) {
    this.graphics.use(Resources.player.toSprite())
    this.pos = new Vector (500,600)
    this.vel = new Vector (0,0)
    this.scale = new Vector (0.05,0.05)
}

    onPreUpdate(engine, delta) {
        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.wasPressed(Input.Keys.W)) {
            yspeed = -600;
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A)) {
            xspeed = -250;
        }
        if (engine.input.keyboard.isHeld(Input.Keys.D)) {
            xspeed = 250;
        }
        this.vel = this.vel.add(new Vector(xspeed, yspeed));
        this.vel.x = xspeed;
    }
}