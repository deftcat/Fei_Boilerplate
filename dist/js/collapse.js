var $myTarget = 700;
var $speed = 8;
var $myPos = $('#box1')[0].offsetLeft;

function boxMove() {
    var $myPos = $('#box1').offset().left;
    $myPos += ($myTarget - $myPos) / $speed;
    console.log($('#box1').offset().left);
    $('#box1').offset({ left: $myPos });
	setTimeout("boxMove()", 10); 
	//equal to setTimeout(boxMove, 10);setTimeout("boxMove();", 10);
	// if use setTimeout(boxMove(), 10); will loop
}
// all loaded including img etc
$(window).on('load', function(event) {
    event.preventDefault();
    /* Act on the event */
    boxMove();
});
//load dom
$(document).ready(function() {
	
});
