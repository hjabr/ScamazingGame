import { GameItem } from "./GameItem.js";
import { Paddle } from "./Paddle.js";
import { Ball } from "./Ball.js";
import { Questions } from "./Questions.js";
import { Score } from "./Score.js";
import { Lives } from "./Lives.js";

export default class Game extends GameItem {
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  // private gameItems: GameItem = new GameItem();

  private paddle: Paddle = new Paddle();

  private ball: Ball = new Ball();

  private questions: Questions = new Questions();

  private alives: Lives = new Lives();

  private score: Score = new Score();

  private bricks: any = [];

  private onSizeChangeSetInterval: ReturnType<typeof setInterval> | undefined;

  // private questionNumber: number;

  /**
   *
   *  init the game
   * @param canvas
   *
   */
  public constructor(canvas: HTMLCanvasElement) {
    super();

    this.canvas = canvas;

    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = window.innerWidth;

    this.canvas.height = window.innerHeight;

    this.setXPosition(this.canvas.width / 2); // set xPosition

    this.setYPosition(this.canvas.height - 100); // set yPosition

    this.setDXPosition(2); // set dxPosition

    this.setDYPosition(-2); // set dyPosition

    this.paddle.setXPaddle((this.canvas.width - 150) / 2); // set paddle X Position

    this.onSizeChangeSetInterval = null;

    this.questions.setQuestionNumber(1); // set the first questions from from the object

    // this.paddle.setXPaddle((this.canvas.width - 150) / 2);

    // init The Bricks Factory
    this.initTheBricksFactory();

    /**
     *  Close pop-up window
     */
    document
      .getElementById("closePopup")
      .addEventListener("click", (e: Event) => {
        document.getElementById("questionAreaInfo").style.display = "none";
        // alert('q');

        this.onSizeChangeSetInterval = setInterval(() => {
          this.GameLoop();
        }, 3);

        this.questions.setGameLoop(this.onSizeChangeSetInterval);
      });

    /**
     *  [BUTTON] If answered YES of the question
     */

    document
      .getElementById("finalQuestionAreaYes")
      .addEventListener("click", (e: Event) => {
        document.getElementById("finalQuestionAreaInfo").style.display = "none";
        this.questions.setGameLoop(this.onSizeChangeSetInterval);
      });

    /**
     *  [BUTTON] If wants to start again!
     */

    document
      .getElementById("startAgain")
      .addEventListener("click", (e: Event) => {
        document.location.reload();
      });

    /**
     *
     *   Event on KEYUP [ moveing the paddle to LEFT and Right ]
     *
     */

    window.addEventListener("keydown", (e: any) => {
      this.paddle.move(e, "keydown");
    });

    window.addEventListener("keyup", (e: any) => {
      this.paddle.move(e, "keyup");
    });

    /**
     *
     *  [BUTTON] To staring the game
     *
     */

    document.getElementById("startPlay").addEventListener("click", (e: any) => {
      this.questions.setQuestionNumber(0);

      this.onSizeChangeSetInterval = setInterval(() => {
        this.GameLoop();
      }, 3);

      this.questions.setGameLoop(this.onSizeChangeSetInterval);

      document.getElementById("startPlayArea").style.display = "none";
    });

    // Close button in win window
    this.closeWindow("WinCloseWinWindow", "win");

    // Close button in loser window
    this.closeWindow("LoserCloseWinWindow", "loser");

    /**
     *
     *  If popup is opened , allw to press [SPACE] and close the popup.
     *
     */

    window.addEventListener("keypress", (e: any) => {
      if (e.keyCode == 32) {
        if (
          document.getElementById("questionAreaInfo").style.display == "block"
        ) {
          document.getElementById("questionAreaInfo").style.display = "none";
          this.onSizeChangeSetInterval = setInterval(() => {
            this.GameLoop();
          }, 3);

          this.questions.setGameLoop(this.onSizeChangeSetInterval);
        }
      }
    });
  }

  /**
   *
   *  Init the bricks
   *  @returns void
   */

  public initTheBricks(): void {
    for (let c = 0; c < 1; c++) {
      for (let r = 0; r < 5; r++) {
        if (this.bricks[c][r].status == 1) {
          let brickX = r * (70 + 240) + 30;
          let brickY = c * (100 + 177) + 50 + 40;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          this.ctx.beginPath();
          this.ctx.setLineDash([10, 2]);
          this.ctx.fillStyle = "#fff";
          this.ctx.rect(brickX, brickY, 70, 100);
          this.ctx.fill();
          this.ctx.closePath();
        }
      }
    }
  }

  /**
   *
   *  init The Bricks Factory
   *  @returns void
   */

  public initTheBricksFactory(): void {
    for (let c = 0; c < 1; c++) {
      this.bricks[c] = [];
      for (let r = 0; r < 5; r++) {
        this.bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  /**
   *
   * Detection of ball collision the door.
   * @returns void
   *
   */

  public InitCollisionDetection(): void {
    for (let c = 0; c < 1; c++) {
      for (let r = 0; r < 5; r++) {
        let b = this.bricks[c][r];
        if (b.status == 1) {
          if (
            this.getXPosition() > b.x &&
            this.getXPosition() < b.x + 70 &&
            this.getYPosition() > b.y &&
            this.getYPosition() < b.y + 100
          ) {
            this.setDYPosition(-this.getDYPosition());
            b.status = 0;

            this.score.setScore(this.score.getScore() + 20);

            this.playSound("./assets/sound/3.mp3");

            if (this.score.getScore() === 100) {
              setTimeout(() => {
                clearInterval(this.onSizeChangeSetInterval);
              }, 300);

              // put the last question
              this.questions.finalQuestion();
            } else {
              this.questions.questionView();
            }
          }
        }
      }
    }
  }

  /**
   *
   *  Game Loop
   *  @returns void
   *
   */
  public GameLoop(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.initTheBricks();
    this.ball.draw(this.ctx, this.getXPosition(), this.getYPosition());
    this.paddle.draw(this.ctx, this.canvas.height);
    this.score.draw(this.ctx);
    this.alives.draw(this.ctx, this.canvas.width);
    this.InitCollisionDetection();

    if (
      this.getXPosition() + this.getDXPosition() > this.canvas.width - 15 ||
      this.getXPosition() + this.getDXPosition() < 15
    ) {
      this.setDXPosition(-this.getDXPosition());
      this.playSound("./assets/sound/1.wav");
    }
    if (this.getYPosition() + this.getDYPosition() < 15) {
      this.setDYPosition(-this.getDYPosition());
      this.playSound("./assets/sound/1.wav");
    } else if (
      this.getYPosition() + this.getDYPosition() >
      this.canvas.height - 15
    ) {
      if (
        this.getXPosition() > this.paddle.getXPaddle() &&
        this.getXPosition() < this.paddle.getXPaddle() + 150
      ) {
        this.setDYPosition(-this.getDYPosition());

        this.playSound("./assets/sound/1.wav");
      } else {
        this.alives.setLives(this.alives.getLives() - 1);

        this.playSound("./assets/sound/4.wav");

        if (!this.alives.getLives()) {
          this.playSound("./assets/sound/5.wav");

          console.log("GAME OVER");
          clearInterval(this.onSizeChangeSetInterval);

          document.getElementById("gameOver").style.display = "block";

          // document.location.reload();
        } else {
          this.setXPosition(this.canvas.width / 2);
          this.setYPosition(this.canvas.height - 30);
          this.setDXPosition(3);
          this.setDYPosition(-3);
          this.paddle.setXPaddle((this.canvas.width - 150) / 2);
        }
      }
    }

    if (
      this.paddle.getRightPressed() &&
      this.paddle.getXPaddle() < this.canvas.width - 150
    ) {
      this.paddle.setXPaddle(this.paddle.getXPaddle() + 7);
    } else if (this.paddle.getLeftPressed() && this.paddle.getXPaddle() > 0) {
      this.paddle.setXPaddle(this.paddle.getXPaddle() - 7);
    }

    this.setXPosition(this.getXPosition() + this.getDXPosition());
    this.setYPosition(this.getYPosition() + this.getDYPosition());
  }
}
