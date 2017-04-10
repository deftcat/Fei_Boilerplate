$(document).ready(function() {
    $("#design ul").hide();
    $("#design").on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(this).children('ul').slideToggle('slow', function() {

        });
    });
});
