import { GameItem } from "./GameItem.js";
export class Score extends GameItem {
    constructor() {
        super(...arguments);
        this.score = 0;
    }
    getScore() {
        return this.score;
    }
    setScore(score) {
        this.score = score;
    }
    draw(ctx) {
        ctx.font = "18px Arial";
        ctx.fillStyle = "#fff";
        ctx.fillText("Score: " + this.score, 25, 40);
    }
}
//# sourceMappingURL=Score.js.map