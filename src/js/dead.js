import { Scene } from "excalibur"
import { Resources } from "./resources.js"
import { Start } from "./start"
import { Actor, Vector, Input, CollisionType } from "excalibur"
import { deadscreen } from "./deadscreen"

export class Dead extends Scene {

onInitialize(engine){
    engine.add(new deadscreen())
}

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.R)) {
        engine.goToScene('Start')
        }}
}