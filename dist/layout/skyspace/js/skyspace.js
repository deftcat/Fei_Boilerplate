$(document).ready(function() {
	$('input[type="text"]').on('blur', function(event) {
		event.preventDefault();
		/* Act on the event */
		console.log($(this).attr('value'));
		if ($(this)[0].value === '') $(this)[0].value=$(this)[0].defaultValue;
	}).on('focus', function(event) {
		event.preventDefault();
		/* Act on the event */
		if($(this)[0].defaultValue === $(this)[0].value) $(this)[0].value='';		
		console.log($(this));
	});
});