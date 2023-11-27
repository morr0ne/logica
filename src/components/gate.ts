import { Container, SCALE_MODES, Sprite } from "pixi.js";

export class Gate {
  #sprite: Sprite;

  constructor(x: number, y: number) {
    this.#sprite = Sprite.from("https://pixijs.com/assets/bunny.png");

    this.#sprite.texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;
    this.#sprite.cursor = "pointer";
    this.#sprite.eventMode = "static";
    this.#sprite.scale.set(3);
    this.#sprite.anchor.set(0.5);

    this.#sprite.x = x;
    this.#sprite.y = y;
  }

  add(stage: Container) {
    stage.addChild(this.#sprite);
  }
}
