class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;                   // Contex
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollision() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    console.log(this.character.energy);
                }
            });
        }, 200);
    }

    /**
     * drawing the the context like 
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Canvas was cleariyfing, usefull that we don't push a canvas over the existing.

        this.ctx.translate(this.camera_x, 0);               // background moving-left //translate need 2 arguments (x, y)

        this.addObjectToMap(this.level.backgroundObjects)     // drawing the background
        this.addToMap(this.character);                  // drawing the character
        this.addObjectToMap(this.level.enemies);              // drawing the enemies 
        
        this.ctx.translate(-this.camera_x, 0);              //background moving-right //translate need 2 arguments (x, y)

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
            this.flipImage(mo);
        }

        /**
         * bild zeichnen und collision box zeichnen
         */
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        
        
        if (mo.mirror) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);                  // turn and repositioning
        mo.x = mo.x * -1                        // needed if x-achis is switching
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1                        // needed if x-achis is switching
        this.ctx.restore();
    }
}