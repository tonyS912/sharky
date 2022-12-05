class MovableObject {
  x = 40;
  y = 100;
  img;
  height = 150;
  width = 150;
  imageCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });

  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {

  }
}
