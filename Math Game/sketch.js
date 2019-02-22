let textField, submit, score, wrong;
let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //number range to be multiplied
let commet = [];
let po = 10; //population on screen
let last = data.length - 1;

function setup() {
  createCanvas(400, 400);
  wrong = createSelect();
  wrong.position(width - 110, 5);
  textField = createInput();
  textField.position(130, height - 35);
  textField.changed(operation);
  for (let i = 0; i < po; i++) {
    commet[i] = new Commet(random(30 + 40 / 2, width - 30 - 40 / 2), 
                           random(30 + 40 / 2, height - 50 - 40 / 2), 
                           floor(random(0, data[floor(random(0, data[last]))])), 
                           floor(random(0, data[floor(random(0, data[last]))])));
  }
  score = 0;
}

function draw() {
  background(0);
  for (let i = 0; i < po; i++) {
    commet[i].show();
  }
  Hud();
}
