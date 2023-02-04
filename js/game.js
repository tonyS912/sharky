let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById("canvas");
    initLevel1();
    world = new World(canvas, keyboard);

    hideStartBtn();
}

function ontouch() {
    document
        .getElementById("start-button")
        .addEventListener("touchstart", (e) => {
            init();
        });
}

function soundOn(){
    return document.getElementById('soundToggle').checked;
}

function restart() {
    window.location.replace("index.html");
}

function hideStartBtn() {
    document.getElementById("start-button").classList.add("d-none");
}

/**
 * Eventlistener der auf keydown achtet
 */
window.addEventListener("keydown", (e) => {
    if (e.code == "ArrowRight" || e.code == "KeyD") {
        keyboard.RIGHT = true;
    }

    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        keyboard.LEFT = true;
    }

    if (e.code == "ArrowUp" || e.code == "KeyW") {
        keyboard.UP = true;
    }

    if (e.code == "ArrowDown" || e.code == "KeyS") {
        keyboard.DOWN = true;
    }

    if (e.code == "Space") {
        keyboard.SPACE = true;
    }

    if (e.code == "KeyF") {
        keyboard.F = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.code == "Space") {
        keyboard.SPACE = false;
    }

    if (e.code == "KeyF") {
        keyboard.F = false;
    }

    if (e.code == "ArrowRight" || e.code == "KeyD") {
        keyboard.RIGHT = false;
    }

    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        keyboard.LEFT = false;
    }

    if (e.code == "ArrowUp" || e.code == "KeyW") {
        keyboard.UP = false;
    }

    if (e.code == "ArrowDown" || e.code == "KeyS") {
        keyboard.DOWN = false;
    }
});

function stopInterval() {
    let intervatId = window.setInterval(() => {}, 9999);
    for (let i = 0; i < intervatId; i++) {
        window.clearInterval(i);
    }
}

function fullscreen() {
    let fullscreen = document.getElementById("fullscreen");
    enterFullscreen(fullscreen);
    document.getElementById("canvas").style.width = "100%";
    document.getElementById("canvas").style.height = "100%";
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        // iOS Safari
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
