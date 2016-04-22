// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //var init_x= Math.floor(Math.random() * 4)*83;
    //var init_y= Math.floor(Math.random() * 5)*101;
    this.x=x;
    this.y=y;    
    this.speed=speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if ((Math.abs(this.x-player.x)<101) && (Math.abs(this.y-player.y)<83)) 
    {
        this.x=0;
        
        player.x=2*101;
        player.y=5*83;
    } 
    else if(this.x>404){
    	
    	this.x=0;
    }
    else
    {
       this.x = this.x + this.speed*dt;
       this.y = this.y; 
    }
   

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y,dx,dy) {

	//var init_x=2*83;
	//var init_y=0;

	this.x = x;
    this.y = y;

    //var dx,dy; 
    this.dx=dx;
    this.dy=dy;

    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    this.x=this.x + this.dx;
    this.y=this.y + this.dy;
    this.dx=0;
    this.dy=0;
    if (this.y<83)
    {
    	this.x=2*101;
    	this.y=5*83;
    }	
   
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyCode) {

	 switch (keyCode) {

    	case 'left':
    	  if (this.x>=101)
    	  { 
    	    this.dx = - 101;
    	    this.dy = 0;
    	  }
    	  else
    	  {
    	  	this.dx = 0;
    	    this.dy = 0;
    	  }	
    	  break;

    	case 'up':
    	  
    	    this.dx = 0;
    	    this.dy = -83;
    	  break;

    	case 'right':

    	   if (this.x<4*101)
    	  { 
    	    this.dx = 101;
    	    this.dy = 0;
    	  }
    	  else
    	  {
    	  	this.dx = 0;
    	    this.dy = 0;
    	  }	
    	  break;

    	case 'down':
    	   if (this.y<5*83)
    	  {	
    	    this.dx = 0;
    	    this.dy = 83;
    	  }
    	  else
    	  {
            this.dx = 0;
    	    this.dy = 0;
    	  }
    	  break;

    	default:
    	  this.dx = 0;
    	  this.dy = 0; 


        }
    
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies =[];

allEnemies[0]=new Enemy(0,83,30);
allEnemies[1]=new Enemy(0,2*83,70);
allEnemies[2]=new Enemy(0,3*83,50);
allEnemies[3]=new Enemy(0,4*83,80);


var player = new Player(2*101,5*83,0,0);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

