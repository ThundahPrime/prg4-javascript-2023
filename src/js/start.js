import { startbutton } from "./startbutton"
import { Scene } from "excalibur"
import { Resources } from "./resources.js"
import { GamePlay } from "./gameplay"
import { Actor, Vector, Input, CollisionType } from "excalibur";

export class Start extends Scene {

    onInitialize(engine) {
        // engine.addScene('GamePlay', new GamePlay())
        this.EnablecapturePointer = true
        this.add(new startbutton())
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
        engine.goToScene('GamePlay')
        }}
}