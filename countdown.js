var countdownGenerator = function (x) {
  var count = 0;
  return function () {
    if (count < x) {
      console.log("T-minus ", x - count + "...");
    } else if (count === x) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");

    }; count++
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!