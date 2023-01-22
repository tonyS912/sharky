class MovableObject extends DrawableObject {
    speed = 0.15;
    mirror = false;
    energy = 100;
    lastHit = 0;
    coins = 0;
    poison = 0;

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

    //Character.isColliding(Fish)
    isColliding(mo) {
        return (
            this.x + this.width >= mo.x &&
            this.y + this.height >= mo.y &&
            this.x <= mo.x &&
            this.y <= mo.y + mo.height
        );
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

    addCoin() {
        this.coins += 5;
        if (this.coins >= 100) {
            this.coins = 100;
        } else {
            this.lastCoin = new Date().getTime();
        }
    }

    addPoisen() {
        this.poison += 5;
        if (this.poison >= 100) {
            this.poison = 100;
        } else {
            this.lastPoison = new Date().getTime();
        }
    }
}
