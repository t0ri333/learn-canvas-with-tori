function draw() {
  const canvas = document.getElementById("tutorial");
  const triangle = document.getElementById("triangle");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const triangleCtx = triangle.getContext("2d");

    //notice how I applied the fillStyle, which only applied to fillRect but not the other two
    ctx.fillStyle = "rgb(200, 0, 0)";
    triangleCtx.fillStyle = "rgb(0, 0, 200)";

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);

    //draw triangle
    triangleCtx.beginPath();
    triangleCtx.moveTo(75, 50);
    triangleCtx.lineTo(100, 75);
    triangleCtx.lineTo(100, 25);
    triangleCtx.fill();

    drawBubble(ctx);
    
  }
}

function drawBubble(ctx) {
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
}
