import * as PIXI from 'pixi.js-legacy';

export default class Table extends PIXI.Container {
    constructor() {
        super();
        for (let x:number = 0; x < 13; x += 1) {
            for (let y:number = 0; y < 7; y += 1) {
               const table = new PIXI.Sprite(PIXI.Texture.from("bg"));
               table.x = (table.width - 2) * x;
               table.y = (table.height - 2) * y;
               this.addChild(table);
            }
        }
    }
}