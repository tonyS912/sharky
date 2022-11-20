class World {

    character = new Character();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish(),
    ]
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.height, this.character.width);
        this.ctx.drawImage(this.enemies['0'].img, this.enemies['0'].x, this.enemies['0'].y, this.enemies['0'].height, this.enemies['0'].width);
    }
}