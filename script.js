const canvasEl = document.querySelector("canvas"),
  canvasCtx = canvasEl.getContext("2d");

const lineWidth = 15;

function setup() {
  canvasEl.width = canvasCtx.Width = window.innerWidth;
  canvasEl.height = canvasCtx.height = window.innerHeight;
}
function draw() {
  canvasCtx.fillStyle = "#286047";
  /*------------------------desenho do campo---------------------------------------*/
  canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  //a função .fillRect(x, y, width, height) desenha e define dimensões do retangulo

  /*------------------------desenho da linha central-------------------------------*/
  canvasCtx.fillStyle = "#ffffff";

  canvasCtx.fillRect(
    window.innerWidth / 2 - lineWidth / 2,
    0,
    lineWidth,
    window.innerHeight
  );

  /*------------------------raquetes----------------------------*/
  //esquerda
  canvasCtx.fillRect(10, 100, lineWidth, 200);

  //direita
  canvasCtx.fillRect(window.innerWidth - lineWidth - 10, 200, lineWidth, 200);

  /*---------bolinha--------------*/
  canvasCtx.beginPath();
  canvasCtx.arc(500, 300, 20, 0, 2 * Math.PI, false);
  canvasCtx.fill();

  /*---------placar---------------*/
  canvasCtx.font = "bold 72px Arial";
  canvasCtx.textAlign = "center";
  canvasCtx.textBaseline = "top";
  canvasCtx.fillStyle = "#01341D";
  canvasCtx.fillText("3", window.innerWidth / 4, 50);
  canvasCtx.fillText("5", window.innerWidth / 4 + window.innerWidth / 2, 50);
}
setup();
draw();
