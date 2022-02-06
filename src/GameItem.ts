export class GameItem {
  private xPosition: number;

  private yPosition: number;

  private dxPosition: number;

  private dyPosition: number;

  /**
   *
   *  get xPosition
   * @returns xPosition number
   *
   */

  public getXPosition(): number {
    return this.xPosition;
  }

  /**
   *  Set X Position
   * @param xPosition
   * @returns - void
   *
   */

  public setXPosition(xPosition: number): void {
    this.xPosition = xPosition;
  }

  /**
   *
   *  get yPosition
   * @returns yPosition number
   *
   */

  public getYPosition(): number {
    return this.yPosition;
  }
  /**
   *
   * Set Y Position
   * @param yPosition
   * @returns - void
   *
   */

  public setYPosition(yPosition: number): void {
    this.yPosition = yPosition;
  }

  /**
   *
   *  Get dxPosition
   * @returns dxPosition number
   *
   */

  public getDXPosition(): number {
    return this.dxPosition;
  }

  /**
   *
   * Set DX Position
   * @param dxPosition
   * @return void
   *
   */

  public setDXPosition(dxPosition: number): void {
    this.dxPosition = dxPosition;
  }

  /**
   *
   *  Get dyPosition
   * @returns dyPosition number
   *
   */

  public getDYPosition(): number {
    return this.dyPosition;
  }

  /**
   *
   *  Xet DY Position
   * @param dyPosition
   * @returns - void
   *
   */

  public setDYPosition(dyPosition: number): void {
    this.dyPosition = dyPosition;
  }

  /**
   *
   * Play sound
   * @param sound - sources of sound in assets
   * @return void
   *
   */

  public playSound(sound: string): void {
    const audio = new Audio(sound);
    audio.play();
  }

  /**
   *
   * Generate numbers
   * @param min
   * @param max
   * @returns - random number between [min] and [max]
   *
   */

  public randomNumberForQuestions(min: number, max: number): number {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   *
   * Function for close windows
   * @param buttonId - Button Id
   * @param windowId - Window Id
   * @returns - void
   *
   */

  public closeWindow(buttonId: any, windowId: string): void {
    document.getElementById(buttonId).addEventListener("click", (e: any) => {
      document.getElementById(windowId).style.display = "none";
      document.location.reload();
    });
  }
}
