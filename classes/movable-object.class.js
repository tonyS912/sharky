class MovableObject extends DrawableObject {
    speed = 0.25;
    mirror = false;
    energy = 100;
    lastHit = 0;
    coins = 0;
    poisen = 0;

    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };

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

    moveUp() {
        setInterval(() => {
            this.y -= this.speed;
        }, 1000 / 60);
    }

    moveDown() {
        setInterval(() => {
            this.y += this.speed;
        }, 1000 / 60);
    }

    //Character.isColliding(Fish)
    isColliding(mo) {
        return (
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
        // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    hit() {
        this.energy -= 3;
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
        return timepassed < 1; // Wenn weniger als 1 Sekunde vergangen ist, ist der Charakter noch verletzt
    }

    collectingCoins() {
        let timepassed = new Date().getTime() - this.lastCoin; // Zeit seit dem letzten gesammelten Coin
        timepassed = timepassed / 1000; // Umrechnen in Sekunden
        return timepassed < 0.5; // Wenn weniger als 1 Sekunde vergangen ist, ist der Charakter noch verletzt
    }

    addCoin() {
        this.coins += 8.34;
        if (this.coins >= 100) {
            this.coins = 100;
        } else {
            this.lastCoin = new Date().getTime();
        }
    }

    addPoisen() {
        this.poisen += 20;
        if (this.poisen >= 100) {
            this.poisen = 100;
        } else {
            this.lastPoisen = new Date().getTime();
        }
    }

    removePoisen() {
        this.poisen -= 20;
        if (this.poisen <= 0) {
            this.poisen = 0;
        } else {
            this.lastPoisen = new Date().getTime();
        }
    }
}
