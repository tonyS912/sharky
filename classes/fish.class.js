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
    fishDead = [
        "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png",
    ];
    offset = {
        top: 14,
        right: 22,
        bottom: 35,
        left: 7,
    };

    constructor(x, y) {
        super().loadImage(
            "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
        );

        this.x =  x //200 + Math.random() * 500;    // level1 with same position
        this.y =  y //30 + Math.random() * 420;     // level1 with same position

        this.speed = 0.15 + Math.random() * 0.25;

        this.loadImages(this.moving);
        this.loadImages(this.fishDead);
        this.animate();
    }

    //fishDied() {
    //    this.speed = 10;
    //    this.moveUp();
    //    this.playAnimation(this.fishDead);
    //}

    animate() {
        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.moving);
            
            if (this.isDead()) {
                this.speedX = 0;
                this.speedY = 2;
                this.moveUp();
                this.playAnimation(this.fishDead);
            }
        }, 200);
    }
}
