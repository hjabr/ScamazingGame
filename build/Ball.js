import { GameItem } from "./GameItem.js";
export class Ball extends GameItem {
    draw(ctx, xPosition, yPosition) {
        ctx.beginPath();
        ctx.arc(xPosition, yPosition, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#34495e";
        ctx.fill();
        ctx.closePath();
    }
}
//# sourceMappingURL=Ball.js.map