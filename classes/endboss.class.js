class Endboss extends MovableObject {
    height = 600;
    width = 600;
    frameX = this.width;
    frameY = this.height;
    playIntro = false;
    playDead = false;
    nearCharacter = false;
    speed = 4;
    energy = 400;
    isAttack = false;
    currentImageOnce = 0;
    currentImageAttack = 0;
    x = 2050;
    winning = new Audio("./audio/level-win.mp3");
    introduce = [
        "img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
        "img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
    ];
    moving = [
        "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
        "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
    ];
    hurt = [
        "./img/2.Enemy/3 Final Enemy/Hurt/1.png",
        "./img/2.Enemy/3 Final Enemy/Hurt/2.png",
        "./img/2.Enemy/3 Final Enemy/Hurt/3.png",
        "./img/2.Enemy/3 Final Enemy/Hurt/4.png",
    ];
    dead = [
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
        "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
    ];
    attack = [
        "./img/2.Enemy/3 Final Enemy/Attack/1.png",
        "./img/2.Enemy/3 Final Enemy/Attack/2.png",
        "./img/2.Enemy/3 Final Enemy/Attack/3.png",
        "./img/2.Enemy/3 Final Enemy/Attack/4.png",
        "./img/2.Enemy/3 Final Enemy/Attack/5.png",
        "./img/2.Enemy/3 Final Enemy/Attack/6.png",
    ];

    offset = {
        top: 290,
        right: 90,
        bottom: 120,
        left: 75,
    };

    constructor() {
        super().loadImage("./img/2.Enemy/3 Final Enemy/2.floating/1.png");
        this.loadImages(this.moving);
        this.loadImages(this.dead);
        this.loadImages(this.hurt);
        this.loadImages(this.attack);
        this.loadImages(this.introduce);
        this.x = 2050;
        this.y = -50;
        this.animate();
    }

    animate() {
        let animateIntervall = setInterval(() => {
            if (this.nearCharacter && !this.playIntro) {
                this.introAnimation();
            } else if (this.fishHurt()) {
                this.playAnimation(this.hurt);
            } else if (this.isDead() && !this.playDead) {
                this.deadEndbossAnimation(animateIntervall);
                this.showEndscreen();
            } else if (this.playIntro) {
                this.playAnimation(this.moving);
            }
        }, 200);
    }

    introAnimation() {
        this.currentImageOnce = 0;
        let introIntervall = setInterval(() => {
            this.playAnimationOnce(this.introduce, introIntervall);
        }, 200);
        this.playIntro = true;
    }

    deadEndbossAnimation(animateIntervall) {
        this.currentImageOnce = 0;
        let deadEndbossIntervall = setInterval(() => {
            this.playAnimationOnce(
                this.dead,
                deadEndbossIntervall,
                animateIntervall
            );
        }, 100);
        this.playDead = true;
    }

    showEndscreen() {
        this.winning.volume = 0.4;
        this.winning.play();
        document.getElementById("win").classList.remove("d-none");
        document.getElementById("restart-button").classList.remove("d-none");
        setTimeout(() => {
            stopInterval();
        }, 500);
    }
}
