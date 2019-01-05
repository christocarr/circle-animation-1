window.onload = function() {
  const CANVAS = document.getElementById('canvas');7
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;

  const c = CANVAS.getContext('2d');

  const maxRadius = 70;

  mousePos = {
    x: undefined,
    y: undefined
  }

  window.addEventListener('mousemove', function(ev) {
    mousePos.x = ev.x;
    mousePos.y = ev.y;
  });

  function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = color;

    this.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      c.strokeStyle = this.color;
      c.stroke();
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

      //mouse interactivity
      if (mousePos.x - this.x < 70 && mousePos.x - this.x > -70 
          && mousePos.y - this.y < 70 && mousePos.y - this.y > -70) {
            if (this.radius < maxRadius) {
              this.radius += 1;
            }
      } else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }

      this.draw();
    }
  }

  let circleArr = [];

  for (let i = 0; i < 120; i++) {
    let radius = (Math.random() * 20) + 10;
    let x = Math.random() * (innerWidth - radius * 2) + radius; //starting point of circle on x-axis
    let y = Math.random() * (innerHeight - radius * 2) + radius; //starting poing of circle on y-axis
    let dx = (Math.random() - 0.5) * 4; //velocity on x-axis
    let dy = (Math.random() - 0.5) * 4; //velocity on y-axis
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);

    circleArr.push(new Circle(x, y, dx, dy, radius, color));
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); //clears canvas for every animate
    
    for (let i = 0; i < circleArr.length; i++) {
      circleArr[i].update();
    }

    // circle.update();
  }

  animate();
  
}
