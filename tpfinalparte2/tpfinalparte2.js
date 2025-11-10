let tiempoInicio;
let tiempoActual;
let objJuego;
let imgFondo = [];
let imgPersonaje;
let imgObstaculos = [];
let imgMonedas = [];

function preload () {

  // Fondo
  imgFondo[1] = loadImage('data/fondo1.png');
  imgFondo[2] = loadImage('data/fondo2.png');

  // Personaje
  imgPersonaje = loadImage('data/personaje.png');

  // Obstaculos
  imgObstaculos[1] = loadImage('data/arbol.png');
  imgObstaculos[2] = loadImage('data/arbol.png');
  imgObstaculos[3] = loadImage('data/arbol.png');


  //Monedas
  imgMonedas[1] = loadImage('data/moneda.png');
  imgMonedas[2] = loadImage('data/moneda.png');
  imgMonedas[3] = loadImage('data/moneda.png');
  imgMonedas[4] = loadImage('data/moneda.png');
}
function setup() {
  createCanvas(640, 480);
  objJuego = new juego();
  tiempoInicio = millis(); // guarda el momento en que inicia (en milisegundos)
}

function draw() {
  console.log(mouseX + " / " + mouseY);
  background (255, 0, 255);
  objJuego.dibujar();

  // calcula el tiempo transcurrido en segundos
  tiempoActual = int((millis() - tiempoInicio) / 1000);

  fill(0);
  textSize(20);
  text("Tiempo: " + tiempoActual, 0, 20);
}
function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}
