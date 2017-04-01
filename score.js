function Score() {
	this.leftpoints = 0;
	this.rightpoints = 0;
	this.leftsets = 0;
	this.rightsets = 0;
}
Score.prototype.update = function() {
	score.show();
	score.set();
	score.match();
}
Score.prototype.show = function() {
	fill(255, 100);
	textSize(32);
	text(this.leftpoints, width / 2 - 32, 32);
	text(this.rightpoints, width / 2 + 32, 32);
	score.showsets();
}
Score.prototype.showsets = function() {
	for (let i = 0; i < this.leftsets; i++) {
		ellipse(width / 2 - 40, 14 * (i + 1), 8);
	}
	for (let i = 0; i < this.rightsets; i++) {
		ellipse(width / 2 + 75, 14 * (i + 1), 8);
	}
}
Score.prototype.set = function() {
	if (this.leftpoints == 11) {
		score.reset();
		this.leftsets++;
	}
	if (this.rightpoints == 11) {
		score.reset();
		this.rightsets++;
	}
}
Score.prototype.reset = function() {
	this.leftpoints = 0;
	this.rightpoints = 0;
}
Score.prototype.match = function() {
	if (this.leftsets == 3 || this.rightsets == 3) {
		score = new Score();
	}
}
Score.prototype.left = function() {
	this.leftpoints++;
}
Score.prototype.right = function() {
	this.rightpoints++;
}
