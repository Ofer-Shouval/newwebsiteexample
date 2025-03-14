let myQuestion

let x =0, y =0;

function setup() {
// createCanvas(400, 400);
  myQuestion = createP("what happens when i hover over this?")
  
  myQuestion.style('color', 'rgb(150,0,255)')
  
  myQuestion.position(0,0);
  myQuestion.mouseOver(changeElement);
  myQuestion.mouseOut(changeBack);
  
}

function changeElement(){
  
  myQuestion.style('font-size', '200%')
  myQuestion.style('color', 'green')
  print("hovered over")  
}

function changeBack(){
  
  myQuestion.style('font-size', '100%')
  
  myQuestion.style('color', 'rgb(150,0,255)')
  
}

function draw() {
  myQuestion.position(x,y)
  

  
  // x++;
  // y++;
  
  if(x>windowWidth){
    x=0;;
  }
  if(y>windowHeight){
    y=0;
  }
}