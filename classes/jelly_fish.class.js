class JellyFish extends MovableObject {
    height = 100;
    width = 100;
    frameX = this.width;
    frameY = this.height;
    moving = [
        "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
        "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
    ];
    JellyFishDead = [
        "img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
        "img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
        "img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
        "img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png",
    ];
    offset = {
        top: 12,
        right: 10,
        bottom: 14,
        left: 10,
    };

    constructor(x, y) {
        super().loadImage(
            "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png"
        );

        this.x = x; // 200 + Math.random() * 500;
        this.y = y; // 30 + Math.random() * 420;

        this.speedX = 0.6 + Math.random() * 0.5;

        this.loadImages(this.moving);
        this.loadImages(this.JellyFishDead);
        this.animate();
    }

    animate() {
        this.moveUp();

        setInterval(() => {
            this.playAnimation(this.moving);

            if (this.isDead()) {
                this.speedX = 2;
                this.moveUp();
                this.playAnimation(this.JellyFishDead);
            }
        }, 300);
    }
}
