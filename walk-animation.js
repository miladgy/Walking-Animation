window.onload = () => {
  const canvas = document.getElementById("walking-animation");
  const context = canvas.getContext("2d");

  const backgroundImage = new Image();
  backgroundImage.src = "background.png"
  backgroundImage.onload = () => {
    context.drawImage(backgroundImage, 0, 0, canvas.clientWidth, canvas.height)
  };
  const spriteImage = new Image()
  spriteImage.src="sprite.png"

  spriteImage.onload = () => {
    context.drawImage(spriteImage, 0, 0, 256, 256, 80 , 260, 100, 100)
  }


};