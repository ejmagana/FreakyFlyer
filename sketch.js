let paladinFont
let pio
let bark
let pg

   var sourceText = "Lockdown Boogie";

function preload() {
    paladinFont = loadFont("Disco3.ttf")
    pio = loadImage("pio.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight).parent('p5')
    background(0)
     pg = createGraphics(windowWidth, windowHeight);
       frameRate(10);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight).parent('p5')
}

function draw() {

      let color_1 = color(255, 255, 0)
      let color_2 = color(255, 0, 0)


      let fade_amount = mouseY / height
      let lerped_color = lerpColor(color_1, color_2, fade_amount)

      var middle = sourceText.length / 2;
      var left = middle - ((mouseX / width) * middle);
      var right = middle + ((mouseX / width) * middle);
      text(
        sourceText.substring(left, right+1),
        width/2, height/2);

    background(lerped_color)


    image(pio, 400, 10, 75, 75)
    image(pio, 300, 10, 75, 75)
    image(pio, 200, 10, 75, 75)
    image(pio, 100, 10, 75, 75)
    image(pio, 500, 10, 75, 75)
    image(pio, 600, 10, 75, 75)
    image(pio, 700, 10, 75, 75)
    image(pio, 800, 10, 75, 75)
    image(pio, 900, 10, 75, 75)
    image(pio, 1000, 10, 75, 75)
    image(pio, 1100, 10, 75, 75)
    image(pio, 1200, 10, 75, 75)
    image(pio, 1300, 10, 75, 75)
    image(pio, 1400, 10, 75, 75)
    image(pio, 1500, 10, 75, 75)






    // Step 4:
    // use the font functions to draw the font
    fill(255, 255, 0)          // set color for the text
    textFont(paladinFont)    // set the font to your variable
    textSize(70)             // set text size
    text("Lockdown Boogie Wonderland", windowWidth/11, windowHeight/2)
    strokeWeight(6);
      fill(255 + sin(frameCount*0.1) * 255);
      if (mouseIsPressed) {
        stroke(255);
      }
      else {
        noStroke();
      }
      textSize(40 + (mouseX / width)*50);
      text(" Welcome to ", windowWidth/4.25, windowHeight/3);

    image(pio, 1500, 800, 75, 75)
    image(pio, 1400, 800, 75, 75)
    image(pio, 1300, 800, 75, 75)
    image(pio, 1200, 800, 75, 75)
    image(pio, 1100, 800, 75, 75)
    image(pio, 1000, 800, 75, 75)
    image(pio, 900, 800, 75, 75)
    image(pio, 800, 800, 75, 75)
    image(pio, 700, 800, 75, 75)
    image(pio, 600, 800, 75, 75)
    image(pio, 500, 800, 75, 75)
    image(pio, 400, 800, 75, 75)
    image(pio, 300, 800, 75, 75)
    image(pio, 200, 800, 75, 75)
    image(pio, 100, 800, 75, 75)



    noStroke()
    fill(random(255), random(255), 0, 100)
    circle(mouseX + random(-20, 20), mouseY + random(-20, 20), random(2, 30))


//NEW
    if(mouseIsPressed){
      fill(0, 12);
      rect(0, 0, width, height);
      fill(57, 255,20);
      noStroke();
      ellipse(mouseX, mouseY, 60, 60);

      pg.noFill();
      pg.stroke(255,0,0);
      pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);

      //Draw the offscreen buffer to the screen with image()
      image(pg, 150, 75);
    }
}

function keyPressed() {
  if (keyCode === 32) {
    fullscreen(true)
  }


}
