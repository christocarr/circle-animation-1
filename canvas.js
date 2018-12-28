window.onload = function() {
  const CANVAS = document.getElementById('canvas');7
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;

  const c = CANVAS.getContext('2d');

  let x = Math.random() * innerWidth; //starting point of circle on x-axis
  let y = Math.random() * innerHeight; //starting poing of circle on y-axis
  let dx = (Math.random() - 0.5) * 8; //velocity on x-axis
  let dy = (Math.random() - 0.5) * 8; //velocity on y-axis
  let radius = 20;

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); //clears canvas for every animate

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, true);
    c.fill();

    if (x + radius > innerWidth || x - radius < 0) {
      dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
      dy = -dy;
    }

    x += dx;
    y += dy;

  }

  animate();
  
}
