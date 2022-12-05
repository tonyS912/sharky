class World {

    character = new Character();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish(),
    ];
    backgroundObjects = [
        new BackgroundObject('img/3. Background/Dark/1.png', 0, 0),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Canvas wird gecleared da man sonst drüber bügelt.

        this.addObjectToMap(this.backgroundObjects)
        this.addToMap(this.character);
        this.addObjectToMap(this.enemies);
        

        let self = this;
        requestAnimationFrame(function() { //wird so häufig aufgerufen wie es die graka schafft.
            self.draw();
        }); 
    }

    addObjectToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object)
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}