let count = 0;

// Schedule a counter to update every 1 second
const counterInterval = setInterval(() => {
  count++;
  console.log(`Current Count: ${count}`);

  // Set a condition to stop the interval
  if (count === 5) {
    clearInterval(counterInterval);
    console.log("Interval stopped.");
  }
}, 1000);
 