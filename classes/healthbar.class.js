class Healthbar extends MovableObject {

    healthbar = [
        "img/4. Marcadores/green/Life/0_  copia 3.png",
        "img/4. Marcadores/green/Life/20_ copia 4.png",
        "img/4. Marcadores/green/Life/40_  copia 3.png",
        "img/4. Marcadores/green/Life/60_  copia 3.png",
        "img/4. Marcadores/green/Life/80_  copia 3.png",
        "img/4. Marcadores/green/Life/100_  copia 2.png"
    ];

    constructor() {
        super(); //Call parent constructor
        this.loadImages(this.healthbar); //Load all images
        this.setPercentage(100); //Set default percentage for first run
        this.x = 5;
        this.y = 5;
        this.width = 200;
        this.height = 60; 
    }
    
    setPercentage(percentage) { //Set percentage and update image
        this.percentage = percentage;
        let path = this.healthbar[this.resolveImage()];
        this.img = this.imageCache[path];
    }

    resolveImage() { //Show index of image
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}