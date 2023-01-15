class MovableObject {
    x = 40;
    y = 100;
    img;
    height = 150;
    width = 150;
    imageCache = {};
    speed = 0.15;
    mirror = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    playAnimation(images)  {
        let i = this.currentImage % images.length; // Modulo geht das array durch wie eine wiederkehrende Schleife
        let path = images[i]; // pfad in den das bild geladen wird
        this.img = this.imageCache[path]; // Bild das im pfad ist in cache paken
        this.currentImage++; // zählt im array immer ein hoch
    }
}
