function Hud() {
  push();
  fill(255, 182, 193);
  noStroke();
  rect(0, 0, 30, height);
  rect(width - 30, 0, width, height);
  rect(0, 0, width, 30);
  rect(0, height - 50, width, height);
  pop();

  push();
  textSize(22);
  text('Score: ' + score, 30, 20);
  pop();

  push();
  noFill();
  stroke(255, 182, 193);
  rect(width / 2 - 150 / 2, height / 2 - 150 / 2, 150, 150);
  line(30, 30, width / 2 - 150 / 2, height / 2 - 150 / 2);
  line(width - 30, 30, width / 2 + 150 / 2, height / 2 - 150 / 2);
  line(width - 30, height - 50, width / 2 + 150 / 2, height / 2 + 150 / 2);
  line(30, height - 50, width / 2 - 150 / 2, height / 2 + 150 / 2);
  pop();
}

function destory() {

}

function operation() {
  for (let c = 0; c < commet.length; c++) {
    if (commet[c].an === int(textField.value())) {
      score += 10;
      if (commet[c].i1 > data.length - 2) {
        commet[c].i1 = 0;
      }
      if (commet[c].i2 > data.length - 2) {
        commet[c].i2 = 0;
        commet[c].i1 += 1;
      } else {
        commet[c].i2++;
      }
      let holder1 = commet[c].i1;
      let holder2 = commet[c].i2;
      commet[c] = new Commet(random(30 + 40 / 2, width - 30 - 40 / 2), random(30 + 40 / 2, height - 50 - 40 / 2), holder1, holder2);
      textField.value("");
    }

    for (let i = 0; i < 10; i++) {
      push();
      stroke(255, 0, 0);
      line(width / 2, height - 50, commet[c].p.x, commet[c].p.y);
      pop();
    }
  }
  textField.value("");
}

class Commet {
  constructor(x, y, i1, i2) {
    this.p = createVector(x, y);
    this.v = createVector(0, 0);
    this.i1 = i1;
    this.i2 = i2;
    this.i2 = this.i2;
    this.n1 = data[i1];
    this.n2 = data[i2];
    this.op = '' + this.n1 + ' x ' + this.n2;
    this.an = this.n1 * this.n2;
    this.r = 50;
  }

  number() {
    if (this.i1 > 9) {
      this.i1 = 0;
    }
    if (this.i2 > 9) {
      this.i2 = 0;
      this.i1 += 1;
    } else {
      this.i2++;
    }
  }

  show() {
    push();
    fill(150);
    ellipseMode(CENTER);
    ellipse(this.p.x, this.p.y, this.r, this.r);
    pop();

    push();
    fill(0);
    text(this.op, this.p.x - this.r / 3, this.p.y + this.r / 6);
    pop();
  }
}
