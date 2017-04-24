$(window).on('load', function() {
    /* Act on the event */
    var collapse = $('#nav-collpase');
    var nav = $('nav');
    // test the collapse is displayed nor none, to decide whether to show the nav
    if (collapse.css('display') == 'none') {
        $(this).show()
    }
    collapse.on('click', function(event) {
        /* Act on the event */
        nav.toggle('slow');
    });
    $(window).resize(function(event) {
        /* Act on the event */
        if (collapse.css('display') == 'none') {
            nav.css('display', 'block');
        } else {
            nav.css('display', 'none');
        }
    });


});
