//http://thecodeplayer.com/walkthrough/canvas-fireworks-tutorial

var canvas,
	context,
	cHeight,
	cWidth,
	fireworks = [],
	particles = [],
	tick = 0,
	limitTick = 100,
	timer;

$(document).ready(function(){
	//caching variables
	canvas = $("#canvas");
	context = canvas.get(0).getContext("2d");

	//Fixing canvas size
	$(window).resize(resizeCanvas);
	function resizeCanvas(){
		var h = canvas.parent().height();
		var w = canvas.parent().width();
		canvas.attr("height", h);	//set height
		canvas.attr("width", w);	//set width
		cHeight = canvas.height();
		cWidth = canvas.width();
	}
	resizeCanvas();


	//returns random number
	function random(min, max){
		return Math.random() * (max - min) + min;
	}


	//calculate distance between 2 points
	function calculateDistance(p1x, p1y, p2x, p2y){
		var x = p2x - p1x,
			y = p2y - p1y;
		return Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) );
	}


	/*---------------------------------
	-----------Firework Object---------
	---------------------------------*/
	function Firework(sx, sy, dx, dy){
		//current location
		this.x = sx;
		this.y = sy;
		//starting location
		this.sx = sx;
		this.sy = sy;
		//destination location
		this.dx = dx;
		this.dy = dy;
		//distance to target
		this.distanceToTarget = calculateDistance(sx,sy,dx,dy);
		this.distanceTraveled = 0;
		//keep track of past coordinates to make trail
		this.coordinates = [];
		this.coordinateCount = 3;
		while(this.coordinateCount--){
			this.coordinates.push(this.x, this.y);
		}
		//stats
		this.angle = Math.atan2(dy - sy, dx - sx);
		this.speed = 2;
		this.acceleration = 1.05;
		//circle target indicator radius
		this.targetRadius = 1;
	}

	//updates Firework
	Firework.prototype.update = function(index){
		//remove last coordonate and add new one
		this.coordinates.pop();
		this.coordinates.unshift([this.x, this.y]);

		//animate target arc
		if(this.targetRadius < 8){
			this.targetRadius += 0.3;
		} else {
			this.targetRadius = 1;
		}

		//speed up firework
		this.speed *= this.acceleration;

		//get current velocities based on angle and speed
		var vx = Math.cos(this.angle) * this.speed,
			vy = Math.sin(this.angle) * this.speed;

		//how far the firework will have to travel with velocities applied?
		this.distanceTraveled = calculateDistance(	this.sx, 
													this.sy, 
													this.x + vx,
													this.y + vy);

		//if the distance travelled, including velo is greated than init
		if(this.distanceTraveled >= this.distanceToTarget){
			//create a particle explosion
			
			//remove firework
			createParticles(this.dx, this.dy);
			fireworks.splice(index, 1);
		} else {
			//target not reached, keep goin
			this.x += vx;
			this.y += vy;
		}
	}

	//draw Firework
	Firework.prototype.draw = function(){
		context.beginPath();
		context.moveTo(this.coordinates[this.coordinates.length - 1][0],
			this.coordinates[this.coordinates.length - 1][1]);
		context.lineTo( this.x, this.y);
		context.strokeStyle = "#ffffff";
		context.stroke();

		//draw target with pulsing circle
		context.beginPath();
		context.arc(this.dx, this.dy, this.targetRadius, 0, Math.PI * 2);
		context.stroke();
	}


	/*---------------------------------
	-----------Particle Object---------
	---------------------------------*/
	function Particle(x, y){
		this.x = x;
		this.y = y;
		//mini Particles
		this.coordinates = [];
		this.coordinateCount = 5;
		while(this.coordinateCount--){
			this.coordinates.push([ this.x, this.y]);
		}
		//properties
		this.angle = random(0, Math.PI * 2);
		this.speed = random(2,10);
		this.friction = 0.95
		this.gravity = 1;
		//how fast particle fades out
		this.alpha = 1;
		this.decay = random(0.015, 0.03);
	}

	//update Particle
	Particle.prototype.update = function(index){
		//remove last item
		this.coordinates.pop();
		//place current
		this.coordinates.unshift([this.x, this.y]);
		//slow down
		this.speed = (this.speed * this.friction)
		//apply velocity
		this.x = (Math.cos(this.angle) * this.speed) + this.x;
		this.y = (Math.sin(this.angle) * this.speed + this.gravity) + this.y;
		//fade out
		this.alpha = this.alpha - this.decay;

		if(this.alpha <= this.decay){
			particles.splice(index, 1);
		}
	}

	//draw Particle
	Particle.prototype.draw = function(){
		context.beginPath();
		context.moveTo(this.coordinates[this.coordinates.length - 1][0],
				this.coordinates[this.coordinates.length - 1][1]);
		context.lineTo(this.x, this.y);
		var r = Math.floor(random(0, 255)),
			g = Math.floor(random(0, 255)),
			b = Math.floor(random(0, 255));
		context.strokeStyle = "rgba("+ r + ","+ g +","+ b +","+ this.alpha +")";
		context.stroke();
	}


	//create particles
	function createParticles(x,y){
		var particleCount = 30;
		while(particleCount--){
			particles.push( new Particle(x,y) );
		}
	}

	/*---------------------------------
	-----------Update Event------------
	---------------------------------*/
	timer = $.timer(function() {
		//clears the screen in a cool way
		context.globalCompositeOperation = 'destination-out';
		context.fillStyle = "rgba(0,0,0,0.5)";
		context.fillRect(0,0, cWidth, cHeight);

		//reset style and composite
		context.globalCompositeOperation = "lighter";

		//loop through each firework, update and draw
		var i = fireworks.length;
		while(i--){
			fireworks[i].draw();
			fireworks[i].update();
		}

		//loop through each particle, draw and update
		var j = particles.length;
		while(j--){
			particles[j].draw();
			particles[j].update();
		}

		//throw firework at random
		if(tick >= limitTick){
			//can't have too many fireworks
			if(fireworks.length < 3){
				fireworks.push( 
					new Firework(cWidth/2, cHeight, random(0,cWidth), random(0, cWidth/2))
				);
			}
			tick = 0;
		} else {
			tick++;
		}
	}, 1000/60, true);

	//click button to pause
	$("#timerToogle").click(function(){
		//is running
		timer.toggle();
		if(timer.isActive){
			$(this).html("Pause");
		} else {
			$(this).html("Play");
		}
	});

	//click anywhere to shoot
	canvas.bind("mouseup", function(e){
		//can't have too many fireworks
		if(fireworks.length < 9 && timer.isActive){
			var x,
				y;
			//not firefox
			if(event.offsetX!==undefined){
				x = event.offsetX;
				y = event.offsetY;
	        } else {
	        	x = random(0, cWidth);
	        	y = random(0, cHeight/2)
	        }
			fireworks.push( 
				new Firework(cWidth/2, cHeight, x, y)
			);
			tick = 0;
		}
	})
});


