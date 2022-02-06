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
      "Will you give out your personal information via e-mail, to unknown people?",
      "Will you let people access your computer remotely?",
    ];

    console.log(questions[this.gameItems.randomNumberForQuestions(0, 1)]);

    document.getElementById("finalQuestionAreaInfo").style.display = "block";
    document.getElementById("finalQuestionText").innerHTML =
      questions[this.gameItems.randomNumberForQuestions(0, 1)];

    document
      .getElementById("finalQuestionAreaNo")
      .addEventListener("click", function () {
        document.getElementById("win").style.display = "block";
        document.getElementById("finalQuestionAreaInfo").style.display = "none";

        new Audio("./assets/sound/6.wav").play();
      });

    document
      .getElementById("finalQuestionAreaYes")
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
      "Don’t give out personal information in an email or when chatting online.",
      "Be careful of offers that seem too good to be true.",
      "Don’t let anyone remotely access your computer.",
      "Watch out for spelling or grammatical mistakes which are a sign of scam.",
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
