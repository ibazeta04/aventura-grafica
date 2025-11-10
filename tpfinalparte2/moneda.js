class moneda {
  constructor() {
    this.posX = random(0, width);
    this.posY = random(height / 2, height - 20);
    this.img = imgMonedas[int(random(1, 5))]; //  se selecciona 1, 2, 3 o 4
  }

  dibujar() {
    image(this.img, this.posX, this.posY, 30, 30);
  }
  actualizar() {
    this.posY += 6; // baja
    if (this.posY > height) {
      this.posY = random(-400, -50);
      this.posX = random(0, width);
    }
  }
}
