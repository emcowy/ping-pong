function Ball(startingDirection) {
	this.r = 8;
	let direction;
	if (!startingDirection) {
		direction = random([-1, 1]);
	}
	else if (startingDirection === 'left') {
		direction = -1;
	}
	else if (startingDirection === 'right') {
		direction = 1;
	}
	this.position = createVector(width / 2, height / 2);
	this.vel = createVector(direction, 0);
	this.velocity = this.vel.normalize();
	this.velocity.mult(3);
}
Ball.prototype.update = function() {
	ball.edges();
	ball.move();
	ball.show();
	ball.out();
}
Ball.prototype.edges = function() {
	if (this.position.y < 0 || this.position.y > height) this.velocity.set(this.velocity.x, this.velocity.y * -1);
}
Ball.prototype.move = function() {
	this.position.add(this.velocity);
}
Ball.prototype.show = function() {
	fill(255);
	noStroke();
	ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2);
}
Ball.prototype.out = function() {
	if (this.position.x < 18) {
		ball = new Ball('right');
		score.right();
	}
	if (this.position.x > width - 18) {
		ball = new Ball('left');
		score.left();
	}
}
Ball.prototype.hit = function(angle) {
	ping.play();
	this.velocity.set(this.velocity.x * -1, angle);
	this.velocity.normalize();
	this.velocity.mult(10);
}
