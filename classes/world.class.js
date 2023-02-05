class World {
    character = new Character();
    healthbar = new Healthbar();
    coinbar = new Coinbar();
    poisenbar = new Poisenbar();
    throwableObjects = []; // Array für die Wurfobjekte // for testing: new ThrowableObject(this.character.x , this.character.y)
    level = level1;
    endboss = level1.enemies[level1.enemies.length - 1];
    canvas;
    ctx; // Contex
    keyboard;
    camera_x = 0;
    toAddCoin = new Audio("./audio/collectcoin.mp3");
    bubble_hit = new Audio("./audio/bubble_hit.mp3");
    toAddPoisen = new Audio("./audio/whispers-and-screams.mp3");
    player_hit = new Audio("./audio/player-hurt.mp3");
    dark_bubble_hit = new Audio("./audio/dark-hit.mp3");

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
    }

    restart() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setWorld() {
        this.character.world = this;
    }

    playSound(sound, volume) {
        if (soundOn()) {
            sound.play();
            sound.volume = volume;
        } else {
            sound.pause();
        }
    }

    checkCollision() {
        setInterval(() => {
            this.collisionEnemy();
            this.collisionCoin();
            this.collisionPoisen();
            this.checkThrowableObject();
            this.checkThrowableObjectPoisen();
            this.collisionBubble();
            this.isIntro();
        }, 150);
    }

    checkThrowableObject() {
        if (this.keyboard.SPACE && this.character.airBubble > 0) {
            let bubble = new ThrowableObject(
                this.character.x,
                this.character.y,
                this.character.mirror,
                (this.check = true)
            );
            this.throwableObjects.push(bubble);
            this.character.airBubble--;
        }
    }

    checkThrowableObjectPoisen() {
        if (this.keyboard.F && this.character.poisen > 0) {
            let poisen = new ThrowableObject(
                this.character.x,
                this.character.y,
                this.character.mirror,
                (this.check = false)
            );
            this.throwableObjects.push(poisen);
            this.character.removePoisen();
            this.poisenbar.setPercentage(this.character.poisen);
        }
    }

    collisionBubble() {
        setInterval(() => {
            this.throwableObjects.forEach((bubble) => {
                this.level.enemies.forEach((enemy) => {
                    if (bubble.isColliding(enemy)) {
                        this.deleteBubble(bubble);
                        enemy.fishHit();
                        this.playSound(this.bubble_hit, 0.2);
                    }
                });
            });
        }, 200);
    }

    /**
     * TODO: collisionBubblePoisen() funktioniert nicht
     */
    collisionBubblePoisen() {
        setInterval(() => {
            this.throwableObjects.forEach((poisen) => {
                this.level.enemies.forEach((enemy) => {
                    if (poisen.isColliding(enemy)) {
                        this.deleteBubblePoisen(poisen);
                        enemy.fishHit();
                        this.playSound(this.bubble_hit, 0.2);
                    }
                });
            });
        }, 200);
    }

    deleteBubble(bubble) {
        this.throwableObjects = this.throwableObjects.filter(
            (b) => b !== bubble
        );
    }

    deleteBubblePoisen(poisen) {
        this.throwableObjects = this.throwableObjects.filter(
            (p) => p !== poisen
        );
    }

    collisionEnemy() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) && !enemy.isDead()) {
                    this.character.hit();
                    this.healthbar.setPercentage(this.character.energy); // set the healthbar to the energy of the character
                    this.playSound(this.player_hit, 0.3);
                }
            });
        }, 2200);
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
        this.playSound(this.toAddCoin, 0.3);
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
        this.playSound(this.toAddPoisen, 0.3);
    }

    isIntro() {
        let distanceEndboss = this.endboss.x - this.character.x;
        if (distanceEndboss < 800 ) {
            this.endboss.nearCharacter = true;
        } else {
            this.endboss.nearCharacter = false;
        }
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
