import { GameItem } from "./GameItem.js";

export class Questions {
  private questionNumber: number;

  private gameItems: GameItem = new GameItem();

  private gameLoop: any = 0;

  /**
   * Get GameLoop
   * @returns
   */
  public getGameLoop(): any {
    return this.gameLoop;
  }
  /**
   * Set the GameLoop
   * @param gameLoop
   * @returns
   */

  public setGameLoop(gameLoop: any): void {
    return (this.gameLoop = gameLoop);
  }

  /**
   *
   * Get the question number from this.questionNumber
   * @returns
   *
   */

  public getQuestionNumber(): number {
    return this.questionNumber;
  }

  /**
   *
   * Set the question number in this.questionNumber
   * @param questionNumber
   *
   */

  public setQuestionNumber(questionNumber: number): void {
    this.questionNumber = questionNumber;
  }

  /**
   * Display the final question [random]
   *
   */

  public finalQuestion(): void {
    const questions = [
      "What do you think about scam 1?",
      "What do you think about scam 2?",
      "What do you think about scam 3?",
      "What do you think about scam 4?",
      "What do you think about scam 5?",
    ];

    console.log(questions[this.gameItems.randomNumberForQuestions(1, 5)]);

    document.getElementById("finalQuestionAreaInfo").style.display = "block";
    document.getElementById("finalQuestionText").innerHTML =
      questions[this.gameItems.randomNumberForQuestions(1, 5)];

    document
      .getElementById("finalQuestionAreaYes")
      .addEventListener("click", function () {
        document.getElementById("win").style.display = "block";
        document.getElementById("finalQuestionAreaInfo").style.display = "none";

        new Audio("./assets/sound/6.wav").play();
      });

    document
      .getElementById("finalQuestionAreaNo")
      .addEventListener("click", function () {
        document.getElementById("loser").style.display = "block";
        document.getElementById("finalQuestionAreaInfo").style.display = "none";

        new Audio("./assets/sound/5.wav").play();
      });
  }

  /**
   *
   * Display the questions
   *  @return - void
   */

  public questionView(): void {
    //  alert('start' + this.questionNumber);

    const questions = [
      "What do you think about scam? 12",
      "What do you think about scam? 2",
      "What do you think about scam? 3",
      "What do you think about scam? 4",
    ];

    console.log(questions[this.questionNumber]);

    document.getElementById("questionAreaInfo").style.display = "block";
    document.getElementById("questionText").innerHTML =
      questions[this.questionNumber];

    clearInterval(this.getGameLoop());

    console.log("s");
    this.questionNumber++;
  }
}
