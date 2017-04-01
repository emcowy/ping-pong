let ball, left, right, score, ping;

function preload() {
	ping = loadSound('ping.mp3');
}

function setup() {
	createCanvas(600, 400);
	ball = new Ball();
	left = new Paddle('left');
	right = new Paddle('right');
	score = new Score();
}

function draw() {
	background(51);
	ball.update();
	score.update();
	right.update(right);
	left.update(left);
}
