let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);

    
}

function restart() {
    window.location.replace("index.html");
}

function hideStartBtn() {
    document.getElementById("startBtn").style.display = "none";
}

/**
 * Eventlistener der auf keydown achtet
 */
window.addEventListener("keydown", (e) => {
    if (e.code == "ArrowRight") {
        keyboard.RIGHT = true;
    }

    if (e.code == "ArrowLeft") {
        keyboard.LEFT = true;
    }

    if (e.code == "ArrowUp") {
        keyboard.UP = true;
    }

    if (e.code == "ArrowDown") {
        keyboard.DOWN = true;
    }

    if (e.code == "Space") {
        keyboard.SPACE = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.code == "Space") {
        keyboard.SPACE = false;
    }

    if (e.code == "ArrowRight") {
        keyboard.RIGHT = false;
    }

    if (e.code == "ArrowLeft") {
        keyboard.LEFT = false;
    }

    if (e.code == "ArrowUp") {
        keyboard.UP = false;
    }

    if (e.code == "ArrowDown") {
        keyboard.DOWN = false;
    }
});

function stopInterval() {
    let intervatId = window.setInterval(() => {}, 9999);
    for (let i = 0; i < intervatId; i++) {
        window.clearInterval(i);
    }
}
