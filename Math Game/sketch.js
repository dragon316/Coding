let textField, submit, commet, score, wrong;
let data = [0,1,2,3,4,5,6,7,8,9,10,11,12];

function setup() {
  createCanvas(400, 400);
  wrong = createSelect();
  wrong.position(width - 110,5);
  textField = createInput();
  textField.position(30,height-35);
  submit = createButton('Submit');
  submit.mousePressed(operation);
  submit.position(190,height-35);
  commet = new Commet(width/2,height/2, 0,0);
  score = 0;
}

function draw() {
  // if(commet.an === int(textField.value())){
  // background(0,220,0);
  // }else if(commet.an != int(textField.value())){
  //   background(220,0,0);
  // }
  // if(textField.value() == ''){
    background(0);
  // }
  Hud();
  commet.show();
}
