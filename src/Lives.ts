import { GameItem } from "./GameItem.js";

export class Lives extends GameItem {
  private alives: number = 3; // set lives number 3

  /**
   *
   * Function to get lives number
   * @returns lives number
   *
   */

  public getLives(): number {
    return this.alives;
  }

  /**
   *
   *  Set alives number
   * @alives alives number
   * return - void
   *
   */

  public setLives(alives: number): void {
    this.alives = alives;
  }

  /**
   *
   * Draw the lives in top of screen
   * @param ctx
   * @param width
   *
   */

  public draw(ctx: CanvasRenderingContext2D, width: number): void {
    ctx.font = "18px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Lives: " + this.alives, width - 85, 40);
  }
}
