//Business Logic
function player(userRoll, playerTotal) {
this.userRoll = roll;
this.playerTotal = total;
}

function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

var rollArray = [];







//User Interface Logic
$(document).ready(function(){
  $("#roll").click(function() {
    var currentRoll = diceRoll();
    rollArray.push(currentRoll);
    var sum = rollArray.reduce((a, b) => a + b, 0);


      var roll = currentRoll ++
    $("#output").text(sum);
    console.log(currentRoll);


  });
});
