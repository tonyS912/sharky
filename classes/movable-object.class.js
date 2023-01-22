class MovableObject {
    x = 20;
    y = 180;
    img;
    height = 150;
    width = 150;
    imageCache = {};
    speed = 0.15;
    mirror = false;
    energy = 100;
    lastHit = 0;

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

    playAnimation(images) {
        let i = this.currentImage % images.length; // Modulo geht das array durch wie eine wiederkehrende Schleife
        let path = images[i]; // pfad in den das bild geladen wird
        this.img = this.imageCache[path]; // Bild das im pfad ist in cache paken
        this.currentImage++; // zählt im array immer ein hoch
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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (
            this instanceof Character ||
            this instanceof Fish ||
            this instanceof JellyFish ||
            this instanceof Endboss
        ) {
            ctx.beginPath();
            ctx.lineWidth = "3"; //dicke des rechtecks
            ctx.strokeStyle = "red"; //farbe des rechtecks
            ctx.rect(this.x, this.y, this.width, this.height); //größe des rechtecks
            ctx.stroke(); //zeichnen des rechtecks
        }
    }

    //Character.isColliding(Fish)
    isColliding(mo) {
        return this.x + this.width >= mo.x &&
            this.y  + this.height >= mo.y &&
            this.x <= mo.x &&
            this.y <= mo.y + mo.height
        // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    hit() {
        this.energy -= 2;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }   

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Zeit seit dem letzten Treffer
        timepassed = timepassed / 1000; // Umrechnen in Sekunden
        return timepassed < 1; // Wenn weniger als 5 Sekunde vergangen ist, ist der Charakter noch verletzt
    }
}
