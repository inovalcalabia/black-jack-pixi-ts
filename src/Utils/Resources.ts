import * as PIXI from 'pixi.js-legacy';
export default class Resources {
    public static load(onComplete: any) {
        const loader = PIXI.Loader.shared;
        loader.add("sheet", '/assets/spritesheet.json');
        loader.add("poker", '/assets/poker.json');
        loader.add("back", '/assets/back.json');
        
        loader.on("complete", () => {
            onComplete();
        });
        loader.load();
    }
}