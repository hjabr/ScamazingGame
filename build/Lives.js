import { GameItem } from "./GameItem.js";
export class Lives extends GameItem {
    constructor() {
        super(...arguments);
        this.alives = 3;
    }
    getLives() {
        return this.alives;
    }
    setLives(alives) {
        this.alives = alives;
    }
    draw(ctx, width) {
        ctx.font = "18px Arial";
        ctx.fillStyle = "#fff";
        ctx.fillText("Lives: " + this.alives, width - 85, 40);
    }
}
//# sourceMappingURL=Lives.js.map