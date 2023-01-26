class Coin extends MovableObject {    
    height = 50;
    width = 50;
    hoverCoin = [
        "img/4. Marcadores/1. Coins/1.png",
        "img/4. Marcadores/1. Coins/2.png",
        "img/4. Marcadores/1. Coins/3.png",
        "img/4. Marcadores/1. Coins/4.png"
    ];
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };

    constructor(x, y) {
        super().loadImage(
            "img/4. Marcadores/1. Coins/1.png"
        );

        this.x = x;
        this.y = y;

        this.speed = 8;

        this.loadImages(this.hoverCoin);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.hoverCoin)
            
        }, 225);
    }
}