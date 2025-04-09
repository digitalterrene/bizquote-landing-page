document.addEventListener("DOMContentLoaded", () => {
  // Fixed date to count down to (May 10nd, 2025)
  const targetDate = new Date("2025-05-10T00:00:00").getTime() / 1000;

  // Get current timestamp
  const currentTime = new Date().getTime() / 1000;

  // Only start countdown if target date is in the future
  if (targetDate > currentTime) {
    // Set up FlipDown
    var flipdown = new FlipDown(targetDate)
      // Start the countdown
      .start()
      // Do something when the countdown ends
      .ifEnded(() => {
        console.log("The countdown has ended!");
      });

    // Toggle theme
    var interval = setInterval(() => {
      let body = document.body;
      body.classList.toggle("light-theme");
      body.querySelector("#flipdown").classList.toggle("flipdown__theme-dark");
      body.querySelector("#flipdown").classList.toggle("flipdown__theme-light");
    }, 5000);

    // Show version number
    var ver = document.getElementById("ver");
    if (ver) ver.innerHTML = flipdown.version;
  } else {
    console.log("The target date has already passed!");
    // You might want to display a message to the user here
  }
});
