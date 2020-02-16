import * as PIXI from 'pixi.js-legacy';
export default class Button extends PIXI.Container {
    constructor() {
        super();
        var graphics = new PIXI.Graphics();
                // Set the fill color
        graphics.beginFill(0xe74c3c); // Red

        // Draw a circle
        graphics.drawRect(-75/2, -75/2, 75, 75); //

        // Applies fill to lines and shapes since the last call to beginFill.
        graphics.endFill();
        this.addChild(graphics);
    }
}