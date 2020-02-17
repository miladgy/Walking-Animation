window.onload = () => {
  const canvas = document.getElementById("walking-animation");
  const context = canvas.getContext("2d");

  moveX = 80;
  moveY = 250;
  moveInXDirection = 10;
  isBackgroundLoaded = false;
  isCharacterLoaded = false;

  const backgroundImage = new Image();
  backgroundImage.src = "background.png";
  backgroundImage.onload = () => {
    isBackgroundLoaded = true;
  };
  const spriteImage = new Image();
  spriteImage.src = "sprite.png";

  spriteImage.onload = () => {
    isCharacterLoaded = true;
  };
  // animation speed & timing
  let animationStart = new Date();

  // cell specs
  cellWidth = 256;
  cellHeight = 256;
  currentCell = 0;

  const animationLoop = () => {
    let animationNow = new Date();

    if (animationNow - animationStart >= 100) {
      animationStart = animationNow;
      // clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // update
      currentCell++;
      currentCell %= 6;
      if (moveX > canvas.width) {
        moveX = Math.ceil(-1 * (cellWidth / 2));
      } else {
        moveX += moveInXDirection;
      }
      // draw
      if (isBackgroundLoaded) {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      }
      if (isCharacterLoaded) {
        context.drawImage(
          spriteImage,
          0,
          0,
          cellWidth,
          cellHeight,
          80,
          250,
          100,
          100
        );
      }
    }
    window.requestAnimationFrame(animationLoop);
  };
  window.requestAnimationFrame(animationLoop);
};
