class World {
    character = new Character();
    healthbar = new Healthbar();
    coinbar = new Coinbar();
    poisenbar = new Poisenbar();
    throwableObjects = []; // Array für die Wurfobjekte // for testing: new ThrowableObject(this.character.x , this.character.y)
    level = level1;
    canvas;
    ctx; // Contex
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
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

            this.collisionEnemy();
            this.collisionCoin();
            this.collisionPoisen();
            this.checkThrowableObject();

        }, 150);
    }

    checkThrowableObject() {
        if (this.keyboard.SPACE && this.poisenbar.percentage > 0) {
            let bubble = new ThrowableObject(this.character.x, this.character.y);
            this.throwableObjects.push(bubble);
            if (this.keyboard.SPACE) {
                this.character.removePoisen();
                this.poisenbar.setPercentage(this.character.poisen);
            }

        }
    }  

    collisionEnemy() {
        setInterval(() => {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy); // set the healthbar to the energy of the character
            }
        });
        }, 200);
    }

    collisionCoin() {
        setInterval(() => {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.addCoin();
                this.coinbar.setPercentage(this.character.coins); // set the coinbar to the coins of the character
                this.delteCoin(coin);
            }
        });
        }, 200);
    }

    /**
     * filter in a array the coin that should be deleted
     * @param {class} coin - the coin that should be deleted 
     */
    delteCoin(coin) {
        this.level.coins = this.level.coins.filter((c) => c !== coin);
    }

    collisionPoisen() {
        setInterval(() => {
        this.level.poisen.forEach((poisen) => {
            if (this.character.isColliding(poisen)) {
                this.character.addPoisen();
                this.poisenbar.setPercentage(this.character.poisen); // set the poisenbar to the poisen of the character
                this.deltePoisen(poisen);
            }
        });
        }, 200);
    }

    deltePoisen(poisen) {
        this.level.poisen = this.level.poisen.filter((p) => p !== poisen);
    }

    /**
     * drawing the the context like
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Canvas was cleariyfing, usefull that we don't push a canvas over the existing.

        this.ctx.translate(this.camera_x, 0); // background moving-left //translate need 2 arguments (x, y)

        this.addObjectToMap(this.level.backgroundObjects); // drawing the background

        // Fix Healthbar
        this.ctx.translate(-this.camera_x, 0); //background moving-right //translate need 2 arguments (x, y)
        this.addToMap(this.healthbar); // drawing the healthbar
        this.ctx.translate(this.camera_x, 0); // background moving-left //translate need 2 arguments (x, y)

        // fix Coinbar
        this.ctx.translate(-this.camera_x, 0); //background moving-right //translate need 2 arguments (x, y)
        this.addToMap(this.coinbar); // drawing the coinbar
        this.ctx.translate(this.camera_x, 0); // background moving-left //translate need 2 arguments (x, y)

        // fix Poisenbar
        this.ctx.translate(-this.camera_x, 0); //background moving-right //translate need 2 arguments (x, y)
        this.addToMap(this.poisenbar); // drawing the poisenbar
        this.ctx.translate(this.camera_x, 0); // background moving-left //translate need 2 arguments (x, y)

        this.addToMap(this.character); // drawing the character
        this.addObjectToMap(this.level.coins); // drawing the coins
        this.addObjectToMap(this.level.poisen); // drawing the poisen
        this.addObjectToMap(this.level.enemies); // drawing the enemies
        this.addObjectToMap(this.throwableObjects); // drawing the throwableObjects
        

        this.ctx.translate(-this.camera_x, 0); //background moving-right //translate need 2 arguments (x, y)

        let self = this;
        requestAnimationFrame(function () {
            // called so often as graphic card can handle
            self.draw();
        });
    }

    addObjectToMap(objects) {
        objects.forEach((object) => {
            this.addToMap(object);
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
        
        /**
         * ! only for debugging and development
         */
        //mo.drawFrame(this.ctx);

        if (mo.mirror) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1); // turn and repositioning
        mo.x = mo.x * -1; // needed if x-achis is switching
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1; // needed if x-achis is switching
        this.ctx.restore();
    }
}
