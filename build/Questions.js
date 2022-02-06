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
    questionView() {
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
//# sourceMappingURL=Questions.js.map