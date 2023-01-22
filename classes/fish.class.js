class Fish extends MovableObject {
    height = 100;
    width = 100;
    frameX = this.width;
    frameY = this.height;
    moving = [
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
    ];
    currentImage = 0;

    constructor() {
        super().loadImage(
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
        );

        this.x = 200 + Math.random() * 500;
        this.y = 30 + Math.random() * 420;

        this.speed = 0.15 + Math.random() * 0.25;

        this.loadImages(this.moving);
        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.moving)
        }, 275);
    }
}
