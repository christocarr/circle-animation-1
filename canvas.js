window.onload = function() {
  const CANVAS = document.getElementById('canvas');7
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;

  const c = CANVAS.getContext('2d');

  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      c.fill();
    }

    this.update = function() {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
  
      this.x += this.dx;
      this.y += this.dy;

      circle.draw();
    }
  }

  let circle = new Circle(200, 200, 3, 3, 30);

  let x = Math.random() * innerWidth; //starting point of circle on x-axis
  let y = Math.random() * innerHeight; //starting poing of circle on y-axis
  let dx = (Math.random() - 0.5) * 8; //velocity on x-axis
  let dy = (Math.random() - 0.5) * 8; //velocity on y-axis
  let radius = 20;

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); //clears canvas for every animate
    c.beginPath();

    circle.update();
  }

  animate();
  
}
