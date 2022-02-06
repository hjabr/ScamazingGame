import { GameItem } from "./GameItem.js";

export class Score extends GameItem {
  private score: number = 0;

  /**
   *
   * Get current score points
   * @returns
   *
   */

  public getScore(): any {
    return this.score;
  }

  /**
   *
   * set score points
   * @param score
   *
   */

  public setScore(score: any): void {
    this.score = score;
  }

  /**
   * Draw the socre in top of the screen [ LEFT ]
   * @param ctx
   * @return - void
   *
   */

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.font = "18px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Score: " + this.score, 25, 40);
  }
}
