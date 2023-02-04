class ThrowableObject extends MovableObject {
    bubble_shoot = new Audio("./audio/deep-water-bubble.wav");
    dark_bubble_shoot = new Audio("./audio/dark-bubble.mp3");

    darkBubble = [
        "./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
    ];

    constructor(x, y, mirror, check) {
        super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");

        this.x = x + 175;
        this.y = y + 100;
        this.mirror = mirror;
        this.width = 70;
        this.height = 70;

        if (check == true) {
            this.throw();
        } else {
            this.throwPoison();
        }
    }

    playSound(sound, volume) {
        if (soundOn()) {
            sound.play();
            sound.volume = volume;
        } else {
            sound.pause();
        }
    }

    throw() {
        this.playSound(this.bubble_shoot, 0.3);
        this.speedX = 2.25;
        if (this.mirror == true) {
            this.x = this.x - 185;
            this.moveLeft();
        } else {
            
            this.moveRight();
        }
    }

    throwPoison() {
        this.loadImage(this.darkBubble);
        this.playSound(this.dark_bubble_shoot, 0.3);
        this.speedX = 2.25;
        if (this.mirror == true) {
            this.x = this.x - 185;
            this.moveLeft();
        } else {
            this.moveRight();
        }
    }
}
