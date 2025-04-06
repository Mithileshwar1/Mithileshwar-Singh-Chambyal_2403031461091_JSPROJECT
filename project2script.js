function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Add 0 in front of single digit numbers
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    const time = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').textContent = time;
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  
  // Show time immediately on page load
  updateClock();
  