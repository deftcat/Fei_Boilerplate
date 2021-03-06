var $json = [{
        'link': './layout/store.html',
        'figcaption': 'Store',
        'tag': ['layout', 'angular', 'module'],
        'note': 'anuglar',
        'points': ['angular1', 'layout', 'bootstrap'],
        'ref': 'codeSchool'
    }, {
        'link': 'http://data.gov.tw/wise_search?nodetype=metadataset',
        'figcaption': 'Government',
        'tag': ['layout', 'blog'],
        'note': 'connect api',
        'points': ['project', 'layout', 'bootstrap'],
        'ref': 'WiSe search'
    }, {
        'link': './layout/gallery.html',
        'figcaption': 'Facebook gallery',
        'tag': ['layout', 'gallery'],
        'note': 'connect facebook api, jquery exension',
        'points': ['api', 'jQuery.fn'],
        'ref': 'internet'
    }, {
        'link': './layout/bandWebsite/bandWebsite.html',
        'figcaption': 'Band Website',
        'tag': ['layout', 'blog'],
        'note': 'design the page with photoshop, and praceice psd to layout',
        'points': ['photoshop', 'layout'],
        'ref': 'six reversion'
    }, {
        'link': './designs/cube.html',
        'figcaption': 'Cube',
        'tag': ['designs', 'css'],
        'note': 'design cube with css',
        'points': ['perspective', 'transition'],
        'ref': 'internet'
    }, {
        'link': './layout/RWD/index.html',
        'figcaption': 'RWD',
        'tag': ['layout', 'RWD'],
        'note': 'desing RWD page',
        'points': ['RWD', 'layout'],
        'ref': 'book'
    }, {
        'link': './designs/loadingBox.html',
        'figcaption': 'Loading Box',
        'tag': ['design', 'loading'],
        'note': 'position one div, add animation',
        'points': ['poisition', 'animation'],
        'ref': 'internet'
    }, {
        'link': './layout/letterpress/letterpress.html',
        'figcaption': 'letterpress',
        'tag': ['layout', 'blog'],
        'note': 'design the page with photoshop, and praceice psd to layout',
        'points': ['photoshop', 'layout'],
        'ref': 'six reversion'
    }, {
        'link': './designs/light_bulb.html',
        'figcaption': 'Light Bulb',
        'tag': ['element', 'css'],
        'note': 'use html to draw the bulb div basic position involved css use animation alternate for the animation',
        'points': ['position: absolute, relative', ' @keyframes, animation',
            'transform: translateX(px) rotate(deg)'
        ],
        'ref': 'http://codepen.io/Simentesempre/pen/raoERY',
        }, {
     'link': './designs/flipCard.html',
     'figcaption': 'Flip Card',
     'tag': ['element', 'css'],
     'note': '3d perspective use div card to control the animation perspective to set the distance of crad(box) rotateX and roateY to transition two cards',
     'points': ['perspective ', ' transition, pseudo:hover',
         'transform: rotateX  roateY'
     ],
     'ref': 'https://desandro.github.io/3dtransforms/docs/card-flip.html',

    }, {
        'link': './layout/collapse.html',
        'figcaption': 'Collapse',
        'tag': ['layout', 'css', 'javascript'],
        'note': '...',
        'points': ['transform-origin ', ' setTimeout',
            'animate : queue - false'
        ],
        'ref': 'ch3',

    }

];
$(document).ready(function() {
    //for each article
    for (var i in $json) {
        var $link = $json[i].link;
        var $img = $json[i].img;
        var $figcaption = $json[i].figcaption;
        var $note = $json[i].note;
        var $points = $json[i].points;
        var $ref = $json[i].ref;
        var $divimg = $('<div />', { class: 'snapshot' });
        // var $figure = $('<figure/>', { 'data-link': $link })
        var $iframe = $('<iframe/>', { 'data-link': $link, 'src': $link });
        // var $img = $('<img>', { src: $img, alt: $figcaption });
        // var $data = $('<figcaption>' + $figcaption + '</figcaption>');
        var $data = $('<h3>' + $figcaption + '</h3>');
        // $divimg.append($figure.append($iframe).append($data));
        $divimg.append($iframe).append($data);
        var $divdes = $('<div />').addClass('description');
        $divdes.append($('<h3>Note</h3>')).append($('<p>' + $note + '</p>'));
        $divdes.append($('<h3>Coding Point</h3>'));
        var $codeUl = $('<ul />');
        for (var point in $points) {
            $codeUl.append($('<li>' + $points[point] + '</li>'));
        }
        $divdes.append(($('<code>').append($codeUl)));
        $divdes.append('<h3>Reference</h3>').append('<blockquote>' + $ref + '</blockquote>');
        ($('<article />').append($divimg).append($divdes)).appendTo('section');

    }
    // $('div.snapshot')
    $('div.snapshot')
        .on('mouseover', function(event) {
            event.preventDefault();
            /* Act on the event */
            $(this).css('cursor', 'pointer');

        })
        .on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            console.log($(this).find('iframe').data('link'));
            window.open($(this).find('iframe').data('link'));
        });
});
