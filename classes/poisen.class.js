class Poisen extends MovableObject {
    height = 60;
    width = 60;
    speed = 0.75;
    hoverPoisen = [
        "img/4. Marcadores/Posiขn/Animada/1.png",
        "img/4. Marcadores/Posiขn/Animada/2.png",
        "img/4. Marcadores/Posiขn/Animada/3.png",
        "img/4. Marcadores/Posiขn/Animada/4.png",
        "img/4. Marcadores/Posiขn/Animada/5.png",
        "img/4. Marcadores/Posiขn/Animada/6.png",
        "img/4. Marcadores/Posiขn/Animada/7.png",
        "img/4. Marcadores/Posiขn/Animada/8.png",
    ];
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };

    constructor(x, y, fall) {
        super().loadImage(
            "img/4. Marcadores/Posiขn/Animada/1.png"
        );

        this.x = x;
        this.y = y;

        this.loadImages(this.hoverPoisen);
        this.animate();
        this.fallingPoisen(fall);
    }

    fallingPoisen(fall) {
        if (fall == true) {
            this.moveDown();
        }
    }

    moveDown() {
        setInterval(() => {
            this.y += this.speed;
        }, 1000 / 60);
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.hoverPoisen)
        }, 225);
    }
}