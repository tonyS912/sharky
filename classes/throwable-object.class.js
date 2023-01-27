class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');

        this.x = x + 175;
        this.y = y + 100;
        this.width = 70;
        this.height = 70;

        this.throw();
    }

    throw() {
        this.speed = 4.5;
        this.moveRight();
    }

}