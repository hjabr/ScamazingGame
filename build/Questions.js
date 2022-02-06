import { GameItem } from "./GameItem.js";
export class Questions {
    constructor() {
        this.gameItems = new GameItem();
        this.gameLoop = 0;
    }
    getGameLoop() {
        return this.gameLoop;
    }
    setGameLoop(gameLoop) {
        return (this.gameLoop = gameLoop);
    }
    getQuestionNumber() {
        return this.questionNumber;
    }
    setQuestionNumber(questionNumber) {
        this.questionNumber = questionNumber;
    }
    finalQuestion() {
        const questions = [
            "What do you think about scam? 1",
            "What do you think about scam? 2",
            "What do you think about scam? 3",
            "What do you think about scam? 4",
            "What do you think about scam? 5",
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
    questionView() {
        const questions = [
            "What do you think about scam? 1",
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
//# sourceMappingURL=Questions.js.map