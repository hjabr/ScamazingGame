import { GameItem } from "./GameItem.js";

export class Paddle {
  private rightPressed: boolean = false;

  private leftPressed: boolean = false;

  private xPaddle: any;

  /**
   *  Get x paddle
   * @returns number of x
   *
   */

  public getXPaddle(): number {
    return this.xPaddle;
  }

  /**
   * Set x paddle
   * @param xPaddle
   * @returns - void
   *
   */

  public setXPaddle(xPaddle: number): void {
    this.xPaddle = xPaddle;
  }

  /**
   *
   * Get right pressed status
   * @returns boolean
   *
   */

  public getRightPressed(): boolean {
    return this.rightPressed;
  }

  /**
   *
   * Get left pressed status
   * @returns boolean
   *
   */

  public getLeftPressed(): boolean {
    return this.leftPressed;
  }

  /**
   *
   * move the paddle to left and rights
   * @param e
   * @param press
   * @returns - void
   *
   */

  public move(e: any, press: string): void {
    // on Keydown
    if (press == "keydown") {
      if (e.key == "Right" || e.key == "ArrowRight") {
        this.rightPressed = true;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        this.leftPressed = true;
      }
    }

    // on Keyup
    if (press == "keyup") {
      if (e.key == "Right" || e.key == "ArrowRight") {
        this.rightPressed = false;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        this.leftPressed = false;
      }
    }
  }

  /**
   *
   * Draw the paddle on bottom screen
   * @param ctx
   * @param height
   * @returns - void
   *
   */

  public draw(ctx: CanvasRenderingContext2D, height: number): void {
    ctx.beginPath();
    ctx.rect(this.xPaddle, height - 15, 150, 10);
    ctx.fillStyle = "#34495e";
    ctx.fill();
    ctx.closePath();
  }
}
