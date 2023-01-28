class ThrowableObject extends MovableObject {
    bubble_shoot = new Audio("./audio/deep-water-bubble.wav");

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');

        this.x = x + 175;
        this.y = y + 100;
        this.width = 70;
        this.height = 70;

        this.throw();
    }

    throw() {
        this.bubble_shoot.play();
        this.speedX = 4.5;
        this.moveRight();
    }

}