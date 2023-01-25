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
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };

    constructor() {
        super().loadImage(
            "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png"
        );

        this.x = 200 + Math.random() * 500;
        this.y = 30 + Math.random() * 420;

        this.loadImages(this.moving);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.moving)
        }, 350);
    }
}
