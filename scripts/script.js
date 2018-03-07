$(document).ready(function(){
    var counter = getRandomInt(190000);


    $("#counter").text("Visitors: " + counter);

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
});