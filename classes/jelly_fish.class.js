class JellyFish extends MovableObject {
    height = 100;
    width = 100;

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');

        this.x = 200 + Math.random() * 500;
        this.y = 30 + Math.random() * 420
    }
}