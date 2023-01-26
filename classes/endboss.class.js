class Endboss extends MovableObject {
    height = 600;
    width = 600;   
    frameX = this.width;
    frameY = this.height;
    speed = 4;
    moving = [
        "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/13.png"
    ];
    offset = {
        top: 290,
        right: 90,
        bottom: 120,
        left: 75,
    };

    constructor() {
        super().loadImage('./img/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.loadImages(this.moving);
        this.x = 2050;
        this.y = -50;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.moving);
        }, 200);
    }
}
