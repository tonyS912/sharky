class Level {
    enemies;
    backgroundObjects;
    coins;
    poisen;
    level_end_x = 720*3;

    constructor(enemies, backgroundObjects, coins, poisen) { //function is called at loading file
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisen = poisen;
    }
}