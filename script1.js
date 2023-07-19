window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw x-axis
    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();
    
    // Draw y-axis
    context.beginPath();
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();
    
    // Draw tick marks and labels
    const tickSize = 5;
    const tickSpacing = 10;
    const labelOffset = 10;
    
    // Draw ticks and labels on x-axis
    for (let x = -canvas.width / 2 + tickSpacing; x < canvas.width / 2; x += tickSpacing) {
      context.beginPath();
      context.moveTo(canvas.width / 2 + x, canvas.height / 2 - tickSize);
      context.lineTo(canvas.width / 2 + x, canvas.height / 2 + tickSize);
      context.stroke();
      
      context.fillText(x, canvas.width / 2 + x - labelOffset, canvas.height / 2 + labelOffset);
    }
    
    // Draw ticks and labels on y-axis
    for (let y = -canvas.height / 2 + tickSpacing; y < canvas.height / 2; y += tickSpacing) {
      context.beginPath();
      context.moveTo(canvas.width / 2 - tickSize, canvas.height / 2 + y);
      context.lineTo(canvas.width / 2 + tickSize, canvas.height / 2 + y);
      context.stroke();
      
      context.fillText(-y, canvas.width / 2 + labelOffset, canvas.height / 2 + y + labelOffset);
    }
   
    
  });
  