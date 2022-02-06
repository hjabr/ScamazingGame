export class Paddle {
    constructor() {
        this.rightPressed = false;
        this.leftPressed = false;
    }
    getXPaddle() {
        return this.xPaddle;
    }
    setXPaddle(xPaddle) {
        this.xPaddle = xPaddle;
    }
    getRightPressed() {
        return this.rightPressed;
    }
    getLeftPressed() {
        return this.leftPressed;
    }
    move(e, press) {
        if (press == "keydown") {
            if (e.key == "Right" || e.key == "ArrowRight") {
                this.rightPressed = true;
            }
            else if (e.key == "Left" || e.key == "ArrowLeft") {
                this.leftPressed = true;
            }
        }
        if (press == "keyup") {
            if (e.key == "Right" || e.key == "ArrowRight") {
                this.rightPressed = false;
            }
            else if (e.key == "Left" || e.key == "ArrowLeft") {
                this.leftPressed = false;
            }
        }
    }
    draw(ctx, height) {
        ctx.beginPath();
        ctx.rect(this.xPaddle, height - 15, 150, 10);
        ctx.fillStyle = "#34495e";
        ctx.fill();
        ctx.closePath();
    }
}
//# sourceMappingURL=Paddle.js.map