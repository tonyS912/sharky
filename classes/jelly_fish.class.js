class JellyFish extends MovableObject {
    height = 100;
    width = 100;
    jellyfishImages = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');

        this.x = 200 + Math.random() * 500;
        this.y = 30 + Math.random() * 420;

        this.loadImages(this.jellyfishImages)
        this.animate();
    }

    animate() {

        setInterval( () => {
            let i = this.currentImage % this.jellyfishImages.length;
            let path = this.jellyfishImages[i];
            this.img = this.imageCache[path];
            this.currentImage++;

        }, 350);
    }
}