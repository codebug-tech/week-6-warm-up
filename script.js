document.addEventListener("DOMContentLoaded", function() {
  // write your javascript code below.

  var redo = true;

  while (redo) {
    var snowAnswer = prompt("Do you like snow?");
        if (snowAnswer == "Yes") {
          alert("YAY! Let's go watch the movie Elf and talk about Christmas!!");
          redo = false;
        }
        else if (snowAnswer == "No") {
          alert("MOVE DOWN TO NASHVILLE THEN AND DON'T COME BACK!!");
          redo = false;
        }
        else {
          alert("You did not enter a valid response. Please try again.");
        };
  };

});