import { useRef, useEffect } from "preact/hooks";

import { invitePath } from "./invitePath";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 8;

    let start, previousTimeStamp;

    function step(timestamp) {
      if (start === undefined) {
        start = timestamp;
      }
      const elapsed = timestamp - start;

      if (previousTimeStamp !== timestamp) {
        const count = Math.floor(0.1 * elapsed);

        console.log(elapsed, count);
        context.beginPath();
        context.moveTo(invitePath[count][0], invitePath[count][1]);
        context.lineTo(invitePath[count + 1][0], invitePath[count + 1][1]);
        context.stroke();
      }

      // Stop the animation when end of array is reached
      if (elapsed < invitePath.length * 100) {
        previousTimeStamp = timestamp;
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;

    function draw(e) {
      if (!isDrawing) return; // stop the fn from running when they are not moused down
      context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      context.beginPath();
      // start from
      context.moveTo(lastX, lastY);
      // go to
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];

      console.log(lastX, lastY);

      hue++;
      if (hue >= 360) {
        hue = 0;
      }
    }

    canvas.addEventListener("mousedown", (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));

    return () => {
      canvas.removeEventListener("mousedown");
      canvas.removeEventListener("mousemove");
      canvas.removeEventListener("mouseup");
      canvas.removeEventListener("mouseout");
    };
  }, []);

  return (
    <canvas
      class="rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500"
      width="400"
      height="400"
      ref={canvasRef}
      {...props}
    />
  );
};

export default Canvas;
