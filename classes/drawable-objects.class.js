class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 20;
    y = 180;
    height = 150;
    width = 150;

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * ! only for debugging and development
     * @param {string} ctx - conntext of the canvas
     */
    drawFrame(ctx) {
        if (
            this instanceof Character ||
            this instanceof Fish ||
            this instanceof JellyFish ||
            this instanceof Endboss ||
            this instanceof Coin ||
            this instanceof Poisen
        ) {
            //ctx.beginPath();
            //ctx.lineWidth = "3"; //dicke des rechtecks
            //ctx.strokeStyle = "red"; //farbe des rechtecks
            //ctx.rect(this.x, this.y, this.width, this.height); //größe des rechtecks
            //ctx.stroke(); //zeichnen des rechtecks
            ctx.beginPath();
            ctx.lineWidth = "3"; //dicke des rechtecks
            ctx.strokeStyle = "blue"; //farbe des rechtecks
            ctx.rect(this.x + this.offset.left , this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.bottom - this.offset.top); //größe des rechtecks
            ctx.stroke(); //zeichnen des rechtec
        }
    }
}
