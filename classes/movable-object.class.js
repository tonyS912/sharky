class MovableObject {
  x = 40;
  y = 100;
  img;
  height = 150;
  width = 150;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {

  }
}
