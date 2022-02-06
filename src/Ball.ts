import { GameItem } from "./GameItem.js";

export class Ball extends GameItem {
  /**
   *
   *  Draw the ball
   *
   * @param ctx
   * @param xPosition
   * @param yPosition
   * @returns void
   *
   */

  public draw(
    ctx: CanvasRenderingContext2D,
    xPosition: number,
    yPosition: number
  ): void {
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#34495e";
    ctx.fill();
    ctx.closePath();
  }
}
