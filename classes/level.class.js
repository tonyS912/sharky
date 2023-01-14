class Level {
    enemies;
    backgroundObjects;
    level_end_x = 720*3;

    constructor(enemies, backgroundObjects) { //function is called at loading file
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }
}