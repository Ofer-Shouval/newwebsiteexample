let hasBeenHoveredOver = [];

let columns = 20;
let rows = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);

  let index = 0;

  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      hasBeenHoveredOver[index] = 0;
      index++;
    }
  }

  //ellipseMode(CORNER);

  print(hasBeenHoveredOver);

  //noStroke()
  //print(hasBeenHoveredOver)
}

function draw() {
  translate((0.5 * width) / columns, (0.5 * height) / rows);
  noStroke();
  background(0);

  let index = 0;

  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      //this is the default white fill

      fill(255);

      //this stuff is changing the size of the ellipses in the grid based on mouse location relative to the location of the ellipse

      let distanceFromMouse = dist(
        mouseX,
        mouseY,
        (x * width) / columns,
        (y * height) / rows
      );

      let ellipseSize = map(distanceFromMouse, 0, 500, 50, 1);

      ellipseSize = constrain(ellipseSize, 1, 40);

      //----------------------

      //--------------------------------------------

      //this part of the code checks to see if the index is not 0, and if it isn't it performs some action

      if (hasBeenHoveredOver[index] != 0) {
        
        hasBeenHoveredOver[index] = hasBeenHoveredOver[index] - 1;

        ellipseSize = ellipseSize + random(10);

        fill(hasBeenHoveredOver[index], 0, 0);
      }

      ellipse((x * width) / columns, (y * height) / rows, ellipseSize);

      fill(0);

      //text(index, x * width / columns +15, y* height/rows+15)

      index++;
    }
  }
}

function mouseDragged() {
  let index = 0;

  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      if (
        mouseX > (x * width) / columns &&
        mouseX < ((x + 1) * width) / columns &&
        mouseY > (y * height) / rows &&
        mouseY < ((y + 1) * height) / rows
      ) {
        
        
        if (hasBeenHoveredOver[index] == 0) {
          hasBeenHoveredOver[index] = 255;
        } else {
          hasBeenHoveredOver[index] = 0;
        }
      }

      index++;
    }
  }
}