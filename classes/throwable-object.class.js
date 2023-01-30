class ThrowableObject extends MovableObject {
    bubble_shoot = new Audio("./audio/deep-water-bubble.wav");
    dark_bubble_shoot = new Audio("./audio/dark-bubble.mp3");

    darkBubble = [
        "./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
    ];

    constructor(x, y) {
        super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");

        this.x = x + 175;
        this.y = y + 100;
        this.width = 70;
        this.height = 70;

        //this.throw();
        this.throwPoison();
    }

    throw() {
        this.bubble_shoot.play();
        this.speedX = 2.25;
        this.moveRight();
    }

    throwPoison() {
        this.loadImage(this.darkBubble);
        this.dark_bubble_shoot.play();
        this.speedX = 2.25;
        this.moveRight();
    }
}
