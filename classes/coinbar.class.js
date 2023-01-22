class Coinbar extends MovableObject {

    coinbar = [
        "img/4. Marcadores/green/Coin/0_  copia 4.png",
        "img/4. Marcadores/green/Coin/20_  copia 2.png",
        "img/4. Marcadores/green/Coin/40_  copia 4.png",
        "img/4. Marcadores/green/Coin/60_  copia 4.png",
        "img/4. Marcadores/green/Coin/80_  copia 4.png",
        "img/4. Marcadores/green/Coin/100_ copia 4.png"
    ];

    constructor() {
        super(); //Call parent constructor
        this.loadImages(this.coinbar); //Load all images
        this.setPercentage(0); //Set default percentage for first run
        this.x = 5;
        this.y = 50;
        this.width = 200;
        this.height = 60; 
    }

    setPercentage(percentage) { //Set percentage and update image
        this.percentage = percentage;
        let path = this.coinbar[this.resolveImage()];
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