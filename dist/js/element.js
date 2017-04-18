var $json = [{
        'link': 'light_bulb.html',
        'img': './designs/light_bulb.png',
        'figcaption': 'Light Bulb',
        'note': 'use html to draw the bulb div basic position involved css use animation alternate for the animation',
        'coding': ['position: absolute, relative', ' @keyframes, animation',
            'transform: translateX(px) rotate(deg)'
        ],
        'ref': 'http://codepen.io/Simentesempre/pen/raoERY',

    }, {
        'link': 'flipCard.html',
        'img': './designs/flip_card.png',
        'figcaption': 'Flip Card',
        'note': '3d perspective use div card to control the animation perspective to set the distance of crad(box) rotateX and roateY to transition two cards',
        'coding': ['perspective ', ' transition, pseudo:hover',
            'transform: rotateX  roateY'
        ],
        'ref': 'https://desandro.github.io/3dtransforms/docs/card-flip.html',

    }

];
$(document).ready(function() {
    //for each article
    for (var i in $json) {
        var $link = $json[i].link;
        var $img = $json[i].img;
        var $figcaption = $json[i].figcaption;
        var $note = $json[i].note;
        var $codings = $json[i].coding;
        var $ref = $json[i].ref;
        var $divimg = $('<div />', { class: 'snapshot' });
        var $figure = $('<figure/>', { 'data-link': $link })
        var $img = $('<img>', { src: $img, alt: $figcaption });
        var $data = $('<figcaption>' + $figcaption + '</figcaption>');
        $divimg.append($figure.append($img).append($data));
        var $divdes = $('<div />').addClass('description');
        $divdes.append($('<h3>Note</h3>')).append($('<p>' + $note + '</p>'));
        $divdes.append($('<h3>Coding Point</h3>'));
        var $codeUl = $('<ul />');
        for (var coding in $codings) {
            $codeUl.append($('<li>' + $codings[coding] + '</li>'));
        }
        $divdes.append(($('<code>').append($codeUl)));
        $divdes.append('<h3>Reference</h3>').append('<blockquote>' + $ref + '</blockquote>');
        ($('<article />').append($divimg).append($divdes)).appendTo('section');

    }
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
});
