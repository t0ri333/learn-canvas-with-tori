//Get Mouse Position
function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

function draw() {
  const canvas = document.getElementById("hohoho");
  const ctx = canvas.getContext("2d");

  const img = document.createElement("img");
  img.src = "images/memoji_sm.png";

  canvas.addEventListener(
    "click",
    function (evt) {
      let mousePos = getMousePos(canvas, evt);
      console.log(mousePos.x + "," + mousePos.y);
      ctx.drawImage(img, mousePos.x, mousePos.y);
    },
    false 
  );
}
