function setup() {
    createCanvas(400, 400);
  
    
  
    face1 = new face(color(random(255), random(255), random(255)));
    face2 = new face(color(random(255), random(255), random(255)));
    face3 = new face(color(random(255), random(255), random(255)));
    face4 = new face(color(random(255), random(255), random(255)));
    face5 = new face(color(random(255), random(255), random(255)));
    face6 = new face(color(random(255), random(255), random(255)));
   
  
    

  }
  
  
  function draw() {
    
    background(220)
    
    
    
    
    push()
    var rows = 0
    var firstColor = 'black'
    var secondColor = 'white'
    while(rows < 8){
        if (rows % 2 == 0) {
            firstColor = 'white'
            secondColor = 'black'
       } else {
        firstColor = 'black'
        secondColor = 'white'

        }
        var cols = 0
        while(cols < 8){
            if (cols % 2 == 0) {
                fill(firstColor)
            }else{
                fill(secondColor)
            }
            rect(cols * 50, rows * 50, 50, 50) 
            cols = cols + 1
        }
        rows = rows + 1

    }
    pop()

    push()
    fill(51, 51, 51)
    rect(-0, 0, 300, 500);
    pop()
    
    push()
    stroke('white')
    strokeWeight(5);
    strokeCap(SQUARE)
    drawingContext.setLineDash([15, 20]);
    line(1, 270, 295, 270);

    stroke('white')
    strokeWeight(5);
    strokeCap(SQUARE)
    drawingContext.setLineDash([15, 20]);
    line(1, 120, 295, 120);

    stroke('white')
    strokeWeight(30);
    strokeCap(SQUARE)
    drawingContext.setLineDash([40, 0]);
    line(0, 1, 300, 1);

    stroke(225, 0, 0)
    strokeWeight(30);
    strokeCap(SQUARE)
    drawingContext.setLineDash([40, 50]);
    line(0, 1, 300, 1);

    stroke('white')
    strokeWeight(30);
    strokeCap(SQUARE)
    drawingContext.setLineDash([40, 0]);
    line(0, 400, 300, 400);

    stroke(225, 0, 0)
    strokeWeight(30);
    strokeCap(SQUARE)
    drawingContext.setLineDash([40, 50]);
    line(0, 400, 300, 400);

    pop()

    
    
    

    face1.display();
    face2.display();
    face3.display();
    face4.display();
    face5.display();
    face6.display();
    
  
  
    
  
  }
  
  function face(tempfaceColor) {



    this.face1Color = tempfaceColor;
    this.face1Xposition = 0;
    this.face1Yposition = 175;
    this.face1Size = 50;
  
    this.face2Color = tempfaceColor;
    this.face2Xposition = 40;
    this.face2Yposition = 175;
    this.face2Size = 50;
  // car 1 body
  
    this.face3Color = tempfaceColor;
    this.face3Xposition = 100;
    this.face3Yposition = 50;
    this.face3Size = 40;
  
    this.face4Color = tempfaceColor;
    this.face4Xposition = 60;
    this.face4Yposition = 50;
    this.face4Size = 40;
    // car 2 body
    
    this.face5Color = tempfaceColor;
    this.face5Xposition = 100;
    this.face5Yposition = 280;
    this.face5Size = 80;
  
    this.face6Color = tempfaceColor;
    this.face6Xposition = 50;
    this.face6Yposition = 280;
    this.face6Size = 80;
    // car 3 body
   
    this.cir1Color = tempfaceColor;
    this.cir1Xposition = 5;
    this.cir1Yposition = 235;
    this.cir1Radius = 30;
  
    this.cir2Color = tempfaceColor;
    this.cir2Xposition = 85;
    this.cir2Yposition = 235;
    this.cir2Radius = 30;
    // car 1 wheels
  
    this.cir3Color = tempfaceColor;
    this.cir3Xposition = 137;
    this.cir3Yposition = 95;
    this.cir3Radius = 20;
  
    this.cir4Color = tempfaceColor;
    this.cir4Xposition = 65;
    this.cir4Yposition = 95;
    this.cir4Radius = 20;
    // car 2 wheels

    this.cir5Color = tempfaceColor;
    this.cir5Xposition = 175;
    this.cir5Yposition = 360;
    this.cir5Radius = 35;
  
    this.cir6Color = tempfaceColor;
    this.cir6Xposition = 60;
    this.cir6Yposition = 360;
    this.cir6Radius = 35;
    // car 3 wheels

   

    this.display = function() {
      
      noStroke()
      fill(this.face1Color);
      this.face1Xposition = this.face1Xposition + 1;
      this.face1Yposition = this.face1Yposition + 0;
      rect(this.face1Xposition, this.face1Yposition, this.face1Size);
  
      noStroke()
      fill(this.face1Color);
      this.face2Xposition = this.face2Xposition + 1;
      this.face2Yposition = this.face2Yposition + 0;
      rect(this.face2Xposition, this.face2Yposition, this.face2Size);
     
      fill(0)
      circle(this.cir1Xposition, this.cir1Yposition, this.cir1Radius)
      this.cir1Xposition = this.cir1Xposition + 1;
      this.cir1Yposition = this.cir1Yposition + 0;
  
      fill(0)
      circle(this.cir2Xposition, this.cir2Yposition, this.cir2Radius)
      this.cir2Xposition = this.cir2Xposition + 1;
      this.cir2Yposition = this.cir2Yposition + 0;
      // car 1 
  
      noStroke()
      fill(this.face3Color);
      this.face3Xposition = this.face3Xposition + 2;
      this.face3Yposition = this.face3Yposition + 0;
      rect(this.face3Xposition, this.face3Yposition, this.face3Size);
  
      noStroke()
      fill(this.face4Color);
      this.face4Xposition = this.face4Xposition + 2;
      this.face4Yposition = this.face4Yposition + 0;
      rect(this.face4Xposition, this.face4Yposition, this.face4Size);
  
      fill(0)
      circle(this.cir3Xposition, this.cir3Yposition, this.cir3Radius)
      this.cir3Xposition = this.cir3Xposition + 2;
      this.cir3Yposition = this.cir3Yposition + 0;
  
      fill(0)
      circle(this.cir4Xposition, this.cir4Yposition, this.cir4Radius)
      this.cir4Xposition = this.cir4Xposition + 2;
      this.cir4Yposition = this.cir4Yposition + 0;
     // car 2

      noStroke()
      fill(this.face5Color);
      this.face5Xposition = this.face5Xposition + .5;
      this.face5Yposition = this.face5Yposition + 0;
      rect(this.face5Xposition, this.face5Yposition, this.face5Size);
  
      noStroke()
      fill(this.face6Color);
      this.face6Xposition = this.face6Xposition + .5;
      this.face6Yposition = this.face6Yposition + 0;
      rect(this.face6Xposition, this.face6Yposition, this.face6Size);
  
      fill(0)
      circle(this.cir5Xposition, this.cir5Yposition, this.cir5Radius)
      this.cir5Xposition = this.cir5Xposition + .5;
      this.cir5Yposition = this.cir5Yposition + 0;
  
      fill(0)
      circle(this.cir6Xposition, this.cir6Yposition, this.cir6Radius)
      this.cir6Xposition = this.cir6Xposition + .5;
      this.cir6Yposition = this.cir6Yposition + 0;
      //   car 3

      

  
    }
  
  }
  