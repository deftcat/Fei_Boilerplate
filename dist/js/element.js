$json = [{
    'link': 'light_bulb.html',
    'img': './designs/light_bulb.png',
    'figcaption': 'Light Bulb',
    'note': 'use html to draw the bulb div basic position involved css use animation alternate for the animation',
    'coding': ['position: absolute, relative', ' @keyframes, animation',
        'transform: translateX(px) rotate(deg)'
    ],
    'ref': 'http://codepen.io/Simentesempre/pen/raoERY',

}, {


}

];
$(document).ready(function() {
    $('div.snapshot')
        .on('mouseover', function(event) {
            event.preventDefault();
            /* Act on the event */
            $(this).css('cursor', 'pointer');
        })
        .on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            window.open($(this).find('figure').data('link'));
        });
    console.log($json);

});
