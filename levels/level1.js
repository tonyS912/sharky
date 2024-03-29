var level1;

function initLevel1() {

level1 = new Level(
    [
        new Fish(550, 50),
        new Fish(650, 150),
        new Fish(600, 350),
        new Fish(1150, 120),
        new Fish(1250, 240),
        new Fish(1050, 320),
        new Fish(1550, 70),
        new Fish(1650, 210),
        new Fish(1750, 350),
        new JellyFish(265, 410),
        new JellyFish(800, 510),
        new JellyFish(1650, 610),
        new Endboss(),
    ],
    [
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -720),
        
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720),
        
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720*3),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720*3),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720*3),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720*3),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720*3),
    ],
    [
        new Coin(600, 50),
        new Coin(600, 125),
        new Coin(600, 200),
        new Coin(600, 275),
        new Coin(600, 350),
        new Coin(1200, 30),
        new Coin(1250, 80),
        new Coin(1320, 110),
        new Coin(1390, 130),
        new Coin(1600, 30),
        new Coin(1530, 80),
        new Coin(1460, 110),
    ],
    [
        new Poisen(215, 400, false),
        new Poisen(725, 350, false),
        new Poisen(1100, 390, false),
        new Poisen(1300, 400, false),
        new Poisen(640, 0, true),
        new Poisen(1390, -400, true),
    ],
);
}