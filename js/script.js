

function randomNumGenerator(arrayName) { // create random number for random reply

//YOUR CODE HERE

	return Math.floor(Math.random()* arrayName.length);
 //assign a ramdo number to the question
 //we do this by assiging randomNum to call the generator function
 




}
var count = 0,
    $svg = $('svg').drawsvg({
      callback: function() {
        $('#log').html('<p>Animation complete! <strong>' + (count++) + '</strong></p>');
        animate();
      }
    });

function animate() {
  $svg.drawsvg('animate');  
}




// -- step 3
// init function will initialize the rest of the functions
function init() {
	console.log('Hello World'); // check to see if script is linked properly and running

//YOUR CODE HERE
 

$("#submit").click(function(){
	answerQuestion();
});

}

// -- step 2
// wait until dom is loaded then run init function
$(document).ready(function(){
	init();
}); 

$(document).ready(function(){
    $("submit").click(function(){
        $("#question").fadeOut();
        
    });
});