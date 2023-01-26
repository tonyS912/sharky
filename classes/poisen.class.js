class Poisen extends MovableObject {
    height = 60;
    width = 60;
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
        top: 5,
        right: 8,
        bottom: 5,
        left: 8,
    };

    constructor(x, y, fall) {
        super().loadImage(
            "img/4. Marcadores/Posiขn/Animada/1.png"
        );

        this.x = x;
        this.y = y;

        this.speed = 0.7 + Math.random() * 0.25;;

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