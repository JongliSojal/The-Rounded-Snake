function setup(){
    createCanvas(1200, 600); //Creating the canvas
}

var score = 0; //Initializing score to 0. It will be zero whenever the player dies

var d = 20; //This is the diameter of our snake

var pos = { //Initializing the snake position
    x : 600,
    y : 300
}

var theFood = { //Initializing the food position
    x : 100,
    y : 100
}

function resetXYD(){ //When player dies, snake position and size will be reset
    pos.x = 600;
    pos.y = 300;
    d = 20;
    score = 0;
}

function food(size){ //The food will grow as the snake grows. So the size is variable
    fill(255, 0, 100);
    ellipse(theFood.x+random(-1,1), theFood.y+random(-1,1), size, size); //The food will buffer a little
}

function foodPosition(){ //The position of food will be random
    theFood.x = random(100, 1100);
    theFood.y = random(100, 500);
}

function draw(){
    background(0);
    noFill();
    stroke(0, 190, 140);
    strokeWeight(10);
    rect(0, 0, 1200, 600); //Background for our game is created

    //The snake parameters
    noStroke();
    fill(255);
    ellipse(pos.x, pos.y, d, d); //The rounded snake is created

    //By pressing arrow key, the player can move the snake
    if (keyIsDown(RIGHT_ARROW)){
        pos.x += 5;
    }

    if (keyIsDown(LEFT_ARROW)){
        pos.x -= 5;
    }

    if (keyIsDown(UP_ARROW)){
        pos.y -= 5;
    }

    if (keyIsDown(DOWN_ARROW)){
        pos.y += 5;
    }

    //If the snake hits the wall
    if (pos.x>width-4 || pos.x<0+4 ||  pos.y<0+4 || pos.y>height-4){
        resetXYD();
        foodPosition();
    }

    //Basic algorithm to check if the snake 'eats' the food
    if (pos.x>=theFood.x-15 && pos.x<=theFood.x+15 && pos.y>=theFood.y-15 && pos.y<=theFood.y+15){
        foodPosition();
        d += 5;
        score++
    }

    //The Function food is called with new d-value
    food(d);

    //Instruction given on screen on how to play
    fill(255);
    textSize(14);
    text("Use arrow keys to move the ball. Pass through the 'food' properly to score. And do not hit the border!", 20, 30);
    textSize(22);
    text("Score: " + score, 1000, 50);
}
