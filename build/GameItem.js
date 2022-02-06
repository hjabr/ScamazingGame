export class GameItem {
    getXPosition() {
        return this.xPosition;
    }
    setXPosition(xPosition) {
        this.xPosition = xPosition;
    }
    getYPosition() {
        return this.yPosition;
    }
    setYPosition(yPosition) {
        this.yPosition = yPosition;
    }
    getDXPosition() {
        return this.dxPosition;
    }
    setDXPosition(dxPosition) {
        this.dxPosition = dxPosition;
    }
    getDYPosition() {
        return this.dyPosition;
    }
    setDYPosition(dyPosition) {
        this.dyPosition = dyPosition;
    }
    playSound(sound) {
        const audio = new Audio(sound);
        audio.play();
    }
    randomNumberForQuestions(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    closeWindow(buttonId, windowId) {
        document.getElementById(buttonId).addEventListener("click", (e) => {
            document.getElementById(windowId).style.display = "none";
            document.location.reload();
        });
    }
}
//# sourceMappingURL=GameItem.js.map