function Paddle(paddle) {
	if (paddle === 'left') {
		this.position = createVector(20, height / 2 - 50);
	}
	if (paddle === 'right') {
		this.position = createVector(width - 20, height / 2 - 50);
	}
	this.highlight;
}
Paddle.prototype.update = function(paddle) {
	paddle.show(paddle);
	paddle.edges();
	paddle.hit(paddle);
	if (keyIsDown(65)) left.move(-5); //keycode 65 = a
	if (keyIsDown(90)) left.move(5); //keycode 90 = z
	if (keyIsDown(75)) right.move(-5); //keycode 75 = k
	if (keyIsDown(77)) right.move(5); //keycode 77 = m
}
Paddle.prototype.show = function(paddle) {
	fill(255, 100);
	stroke(0);
	if (paddle === left) {
		if (left.highlight) {
			fill(255, 0, 0);
		}
		beginShape();
		vertex(this.position.x, this.position.y);
		vertex(this.position.x - 10, this.position.y + 10);
		vertex(this.position.x - 10, this.position.y + 90);
		vertex(this.position.x, this.position.y + 100);
		endShape();
	}
	if (paddle === right) {
		beginShape();
		if (right.highlight) {
			fill(0, 255, 0);
		}
		vertex(this.position.x, this.position.y);
		vertex(this.position.x + 10, this.position.y + 10);
		vertex(this.position.x + 10, this.position.y + 90);
		vertex(this.position.x, this.position.y + 100);
		endShape();
	}
}
Paddle.prototype.edges = function() {
	if (this.position.y <= 0) this.position.y = 0;
	if (this.position.y >= height - 100) this.position.y = height - 100;
}
Paddle.prototype.hit = function(paddle) {
	const b = {
		up: ball.position.y - ball.r,
		middle: ball.position.y,
		down: ball.position.y + ball.r,
		left: ball.position.x - ball.r,
		right: ball.position.x + ball.r
	}
	const p = {
		up: paddle.position.y,
		down: paddle.position.y + 100,
		edge: paddle.position.x
	}
	let placeHit = b.middle - p.up;
	let angle = map(placeHit, 0, 100, -5, 5);
	if (paddle === left) {
		if (b.up <= p.down && b.down >= p.up && b.left <= p.edge) {
			ball.hit(angle);
			left.highlight = true;
		}
		else left.highlight = false;
	}
	if (paddle === right) {
		if (b.up <= p.down && b.down >= p.up && b.right >= p.edge) {
			ball.hit(angle);
			right.highlight = true;
		}
		else right.highlight = false;
	}
}
Paddle.prototype.move = function(direction) {
	let updatePosition = createVector(0, direction)
	this.position.add(updatePosition);
}
