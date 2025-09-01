
// 🎛️ VT Design System – Componentes Base en p5.js

let btnPrimary, btnSecondary;
let isDark = true;

function setup() {
  createCanvas(400, 300);
  textFont('monospace');
  textAlign(CENTER, CENTER);

  btnPrimary = new Button(50, 50, 300, 40, "BOTÓN PRIMARIO", color('#FF00E6'), color('#000000'));
  btnSecondary = new Button(50, 110, 300, 40, "BOTÓN SECUNDARIO", color('#1A1A1A'), color('#F2F2F2'));
}

function draw() {
  background(isDark ? '#000000' : '#F2F2F2');
  btnPrimary.display();
  btnSecondary.display();
}

function mousePressed() {
  if (btnPrimary.isHovered()) {
    isDark = !isDark; // toggle theme
  }
}

class Button {
  constructor(x, y, w, h, label, bgColor, txtColor) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.bgColor = bgColor;
    this.txtColor = txtColor;
  }

  display() {
    fill(this.bgColor);
    stroke('#00FFFF');
    strokeWeight(1.5);
    rect(this.x, this.y, this.w, this.h, 8);

    fill(this.txtColor);
    noStroke();
    textSize(14);
    text(this.label, this.x + this.w/2, this.y + this.h/2);
  }

  isHovered() {
    return mouseX > this.x && mouseX < this.x + this.w &&
           mouseY > this.y && mouseY < this.y + this.h;
  }
}
