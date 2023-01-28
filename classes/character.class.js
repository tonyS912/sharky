class Character extends MovableObject {
    height = 225;
    width = 225;
    frameX = 120;
    frameY = 90;
    speed = 5;
    lastBubble = 0;
    spacebar = false;
    moving = [
        "./img/1.Sharkie/1.IDLE/1.png",
        "./img/1.Sharkie/1.IDLE/2.png",
        "./img/1.Sharkie/1.IDLE/3.png",
        "./img/1.Sharkie/1.IDLE/4.png",
        "./img/1.Sharkie/1.IDLE/5.png",
        "./img/1.Sharkie/1.IDLE/6.png",
        "./img/1.Sharkie/1.IDLE/7.png",
        "./img/1.Sharkie/1.IDLE/8.png",
        "./img/1.Sharkie/1.IDLE/9.png",
        "./img/1.Sharkie/1.IDLE/10.png",
        "./img/1.Sharkie/1.IDLE/11.png",
        "./img/1.Sharkie/1.IDLE/12.png",
        "./img/1.Sharkie/1.IDLE/13.png",
        "./img/1.Sharkie/1.IDLE/14.png",
        "./img/1.Sharkie/1.IDLE/15.png",
        "./img/1.Sharkie/1.IDLE/16.png",
        "./img/1.Sharkie/1.IDLE/17.png",
        "./img/1.Sharkie/1.IDLE/18.png",
    ];
    dying = [
        "img/1.Sharkie/6.dead/1.Poisoned/1.png",
        "img/1.Sharkie/6.dead/1.Poisoned/2.png",
        "img/1.Sharkie/6.dead/1.Poisoned/3.png",
        "img/1.Sharkie/6.dead/1.Poisoned/4.png",
        "img/1.Sharkie/6.dead/1.Poisoned/5.png",
        "img/1.Sharkie/6.dead/1.Poisoned/6.png",
        "img/1.Sharkie/6.dead/1.Poisoned/7.png",
        "img/1.Sharkie/6.dead/1.Poisoned/8.png",
        "img/1.Sharkie/6.dead/1.Poisoned/9.png",
        "img/1.Sharkie/6.dead/1.Poisoned/10.png",
        "img/1.Sharkie/6.dead/1.Poisoned/11.png",
        "img/1.Sharkie/6.dead/1.Poisoned/12.png"
    ];
    hurt = [
        "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
        "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    ];
    bubbleShooting = [
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
        "img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
    ];
    bubbleFlying = [
        "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
    ];
    offset = {
        top : 110,
        right : 50,
        bottom : 55,
        left : 50
    };    
    world;
    under_water = new Audio("./audio/under_water.mp3");

    constructor() {
        super().loadImage("img/1.Sharkie/1.IDLE/1.png"); // erstes Bild laden
        this.loadImages(this.moving); // gesamtes array laden für die Bewegungsanimation des Charakters
        this.loadImages(this.dying); // gesamtes array laden für die Sterbeanimation des Charakters
        this.loadImages(this.hurt); // gesamtes array laden für die Verletzungsanimation des Charakters
        this.loadImages(this.bubbleShooting); // gesamtes array laden für die Bubble Shooting Animation des Charakters
        this.loadImages(this.bubbleFlying); // gesamtes array laden für die Bubble Flying Animation des Charakters

        this.animate();
    }

    animate() {
        //this.under_water.play();
        
        setInterval(() => {
            if (
                this.world.keyboard.RIGHT &&
                this.x < this.world.level.level_end_x
            ) {
                this.x += this.speed;
                this.mirror = false;
            }

            if (this.world.keyboard.LEFT && this.x > -400) {
                this.x -= this.speed;
                this.mirror = true;
            }

            if (this.world.keyboard.UP && this.y > -100) {
                this.y -= this.speed;
            }

            if (this.world.keyboard.DOWN && this.y < 300) {
                this.y += this.speed;
            }

            this.world.camera_x = -this.x + 40; // Character starts not on the left border, it starts a littlebit more right in the area
        }, 1000 / 60);

        setInterval(() => {
            // Idle animation
            this.playAnimation(this.moving);
            if (this.isDead()) {
                this.playAnimation(this.dying);
            } else if (this.isHurt()) {
                this.playAnimation(this.hurt); 
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                    // Moving animation
                    this.playAnimation(this.moving);
                }
            }
        }, 200);
    }
}
