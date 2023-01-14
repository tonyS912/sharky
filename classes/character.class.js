class Character extends MovableObject {
    height = 225;
    width = 225;
    speed = 6;
    characterImages = [
        "img/1.Sharkie/1.IDLE/1.png",
        "img/1.Sharkie/1.IDLE/2.png",
        "img/1.Sharkie/1.IDLE/3.png",
        "img/1.Sharkie/1.IDLE/4.png",
        "img/1.Sharkie/1.IDLE/5.png",
        "img/1.Sharkie/1.IDLE/6.png",
        "img/1.Sharkie/1.IDLE/7.png",
        "img/1.Sharkie/1.IDLE/8.png",
        "img/1.Sharkie/1.IDLE/9.png",
        "img/1.Sharkie/1.IDLE/10.png",
        "img/1.Sharkie/1.IDLE/11.png",
        "img/1.Sharkie/1.IDLE/12.png",
        "img/1.Sharkie/1.IDLE/13.png",
        "img/1.Sharkie/1.IDLE/14.png",
        "img/1.Sharkie/1.IDLE/15.png",
        "img/1.Sharkie/1.IDLE/16.png",
        "img/1.Sharkie/1.IDLE/17.png",
        "img/1.Sharkie/1.IDLE/18.png",
    ];
    currentImage = 0;
    world;

    constructor() {
        super().loadImage("img/1.Sharkie/1.IDLE/1.png"); // erstes Bild laden
        this.loadImages(this.characterImages); // gesamtes array laden

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.mirror = false;
            } 

            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.mirror = true;
            }
            this.world.camera_x = -this.x
        }, 1000/ 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // || = logisches oder
                
                // Moving animation
                let i = this.currentImage % this.characterImages.length; // Modulo geht das array durch wie eine wiederkehrende Schleife
                let path = this.characterImages[i]; // pfad in den das bild geladen wird
                this.img = this.imageCache[path]; // Bild das im pfad ist in cache paken
                this.currentImage++; // zählt im array immer ein hoch
            }
        }, 210);
    }
}
