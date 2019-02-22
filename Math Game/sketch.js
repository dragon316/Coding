let textField, submit, score, wrong;
let data = [0,1,2,3,4,5,6,7,8,9,10,11,12];
let commet = [];
let po = 1;

function setup() {
  createCanvas(400, 400);
  wrong = createSelect();
  wrong.position(width - 110,5);
  textField = createInput();
  textField.position(30,height-35);
  submit = createButton('Submit');
  submit.mousePressed(operation);
  submit.position(190,height-35);
  for(let i = 0; i < po; i++){
  commet[i] = new Commet(random(30 + 40/2,width-30 - 40/2),random(30 + 40/2,height - 50 - 40/2), floor(random(0,12)),floor(random(0,12)));
  }
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
  for(let i = 0; i < po; i++){
  commet[i].show();
  }
  Hud();
}
