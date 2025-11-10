class obstaculo {
  constructor(indice = 0, baseX = 300, baseY = 360) {
    this.espaciado = 100;    // distancia horizontal entre arboles
    this.desvioY = random(-10, 10); // leve variación vertical

    this.posX = baseX + (indice - 4) * this.espaciado; // -4 centra el grupo
    this.posY = baseY + this.desvioY;

    this.img = imgObstaculos[int(random(1, 2))];
  }

  dibujar() {
    image(this.img, this.posX, this.posY, 200, 200);
  }
  actualizar() {
    this.posY += 1; // baja hacia abajo
    if (this.posY > height) {
      this.posY = random(-250, -10); // vuelve a aparecer arriba
      this.posX = random(10, 400);   // cambia su posición X
    }
  }
}
//constructor(){
//this.posX = random(20,  width);
//  this.posY = random(height / 4, height - 100);
//this.img = imgObstaculos[int(random(1, 4))];
// }
//  dibujar(){
//    image(this.img, this.posX, this.posY, 200, 200);
