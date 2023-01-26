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
    offset = {
        top: 5,
        right: 5,
        bottom: 30,
        left: 0,
    };

    constructor(x, y) {
        super().loadImage(
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
        );

        this.x =  x //200 + Math.random() * 500;    // level1 with same position
        this.y =  y //30 + Math.random() * 420;     // level1 with same position

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
