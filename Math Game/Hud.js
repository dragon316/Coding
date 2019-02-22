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
  rect(width/2 - 150/2,height/2  - 150/2,150,150);
  line(30,30,width/2 - 150/2,height/2  - 150/2);
  line(width - 30,30,width/2 + 150/2,height/2  - 150/2);
  line(width - 30,height - 50,width/2 + 150/2,height/2  + 150/2);
  line(30,height - 50,width/2 - 150/2,height/2  + 150/2);
  pop();
}

function destory(){
  
}

function operation(){
  if(commet.an === int(textField.value())){
    score += 10;
  }
  if(commet.an != int(textField.value())){
    score -= 10;
    wrong.option(commet.i1 + ' x ' + commet.i2 + ' = ' + commet.i1 * commet.i2);
  }
    if(commet.i1 > data.length - 2){
      commet.i1 = 0;
    }
    if(commet.i2 > data.length-2){
      commet.i2 = 0;
      commet.i1 += 1;
    }else{
     commet.i2++; 
    }
  let holder1 = commet.i1;
  let holder2 = commet.i2;
    commet = new Commet(width/2,height/2,holder1,holder2);
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
    this.r = 40;
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
    ellipseMode(CENTER);
    ellipse(this.p.x, this.p.y, this.r, this.r);
    text(this.op, this.p.x - this.r / 3, this.p.y + this.r / 6);
    pop();
  }
}
