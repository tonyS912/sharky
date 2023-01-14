class World {

    character = new Character();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish(),
        new JellyFish(),
    ];
    backgroundObjects = [
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0),
    ];
    canvas;
    ctx;                   // Contex
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Canvas was cleariyfing, usefull that we don't push a canvas over the existing.

        this.addObjectToMap(this.backgroundObjects)
        this.addToMap(this.character);
        this.addObjectToMap(this.enemies);
        

        let self = this;
        requestAnimationFrame(function() { // called so often as graphic card can handle 
            self.draw();
        }); 
    }

    addObjectToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object)
        });
    }

    /**
     * 
     * @param {json} mo - movable object 
     */
    addToMap(mo) { 
        /**
         * if mirrors images
         */
        if (mo.mirror) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);                  // turn and repositioning
            mo.x = mo.x * -1                        // needed if x-achis is switching
        }

        /**
         * 
         */
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.mirror) {
            mo.x = mo.x * -1                        // neeeded if x-achis is switching
            this.ctx.restore();
        }
    }
}