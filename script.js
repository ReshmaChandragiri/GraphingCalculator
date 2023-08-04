window.addEventListener("load", () => {
  function drawGraph() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const display = document.getElementById("cal-display");
    const graphButton = document.getElementById("Graph");
    var buttons = document.getElementsByClassName("btn");
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawGridLines(canvas, context);
    graphButton.addEventListener("click", function () {
      // Plot parabolic graph
      let maxX = 100;
      let minX = -100;
      const scale = canvas.width / (maxX - minX);

      context.beginPath();
      context.strokeStyle = "green";
      context.lineWidth = 2;

      let expr = display.value;
      if (display.value.includes('x²')) {
        expr = display.value.replace('x²', 'x*x');
        console.log('expr :', expr);
      }
      else if (display.value.includes('÷')) {
        expr = display.value.replace('÷', '/');
        console.log('expr :', expr);

      }

      let expression = expr;

      let yvalues = [];
      for (let x = minX; x <= maxX; x += 0.1) {
        const y = eval(expression);
        yvalues.push({ x: x, y: y });
        const mappedX = canvas.width / 2 + x * scale;
        const mappedY = canvas.height / 2 - y * scale;

        if (x === minX) {
          context.moveTo(mappedX, mappedY);
        } else {
          context.lineTo(mappedX, mappedY);
        }
      }
      console.log(yvalues);
      context.stroke();
      //to replace the graph with new graph according to the input
      for (let button of buttons) {
        if (button.innerText == "Graph") {
          button.addEventListener("click", function () {
            // Plot parabolic graph
            let maxX = 100;
            let minX = -100;
            const scale = canvas.width / (maxX - minX);

            context.beginPath();
            context.strokeStyle = "green";
            context.lineWidth = 2;

            let expr = display.value;
            if (display.value.includes('x²')) {
              expr = display.value.replace('x²', 'x*x');
              console.log('expr :', expr);
            }
            else if (display.value.includes('≤')) {
              expr = display.value.replace('≤', '<=');
              console.log('expr :', expr);
            }
            else if (display.value.includes('≥')) {
              expr = display.value.replace('≥', '>=');
              console.log('expr :', expr);
            }
            else if (display.value.includes('÷')) {
              expr = display.value.replace('÷', '/');
              console.log('expr :', expr);

            }

            let expression = expr;

            let yvalues = [];
            for (let x = minX; x <= maxX; x += 0.1) {
              const y = eval(expression);
              yvalues.push({ x: y });
              const mappedX = canvas.width / 2 + x * scale;
              const mappedY = canvas.height / 2 - y * scale;

              if (x === minX) {
                context.moveTo(mappedX, mappedY);
              } else {
                context.lineTo(mappedX, mappedY);
              }
            }
            console.log(yvalues);
            context.stroke();
          });
        } else {
          button.addEventListener("click", function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawGridLines(canvas, context);
          });
        }
      }
    });
  }
  function drawGridLines(canvas, context) {
    const originX = canvas.width / 2;
    const originY = canvas.height / 2;
    const gridSize = 20;

    // Draw grid lines
    context.strokeStyle = "#ccc";
    context.lineWidth = 1;

    // Vertical grid lines
    for (let x = originX; x < canvas.width; x += gridSize) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
      context.stroke();
    }

    for (let x = originX - gridSize; x > 0; x -= gridSize) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
      context.stroke();
    }

    // Horizontal grid lines
    for (let y = originY; y < canvas.height; y += gridSize) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.stroke();
    }

    for (let y = originY - gridSize; y > 0; y -= gridSize) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.stroke();
    }

    // Draw x-axis
    context.beginPath();
    context.moveTo(0, originY);
    context.lineTo(canvas.width, originY);
    context.strokeStyle = "black";
    context.stroke();

    // Draw y-axis
    context.beginPath();
    context.moveTo(originX, 0);
    context.lineTo(originX, canvas.height);
    context.stroke();

    // Draw tick marks on x-axis
    context.font = "10px Arial";
    context.textAlign = "center";
    context.textBaseline = "top";

    for (let x = originX + gridSize; x < canvas.width; x += gridSize) {
      context.beginPath();
      context.moveTo(x, originY - 5);
      context.lineTo(x, originY + 5);
      context.stroke();

      const label = (x - originX) / gridSize;
      context.fillText(label, x, originY + 5);
    }

    for (let x = originX - gridSize; x >= 0; x -= gridSize) {
      context.beginPath();
      context.moveTo(x, originY - 5);
      context.lineTo(x, originY + 5);
      context.stroke();

      const label = (x - originX) / gridSize;
      context.fillText(label, x, originY + 5);
    }

    // Draw tick marks on y-axis
    context.textAlign = "right";
    context.textBaseline = "middle";

    for (let y = originY + gridSize; y < canvas.height; y += gridSize) {
      context.beginPath();
      context.moveTo(originX - 5, y);
      context.lineTo(originX + 5, y);
      context.stroke();

      const label = -(y - originY) / gridSize;
      context.fillText(label, originX - 5, y);
    }

    for (let y = originY - gridSize; y >= 0; y -= gridSize) {
      context.beginPath();
      context.moveTo(originX - 5, y);
      context.lineTo(originX + 5, y);
      context.stroke();

      const label = -(y - originY) / gridSize;
      context.fillText(label, originX - 5, y);
    }
  }

  drawGraph();
});
