$(document).ready(function() {
    var fb_url = 'https://graph.facebook.com/v2.1/me';
    var access_token = 'EAACEdEose0cBAPZAt1ax1c6kBY25fe6YemkWTgVWKf6VZCdbR3wTYanoVZCGEn9qyWXpWoSFZBtW5lBkwJ7sAHcz4oVpgheV9N58Yee2k1XO5YtV0YNd34HbLKv0EmDqntZAT9VZBr5oAuOStN4kVj4HhFDmOltY4cZAoxVNe6sIVY4xPESWFPIc8vGZAQPHD14ZD';
    var fields = 'albums{photos{images,name,likes}}';
    $.ajax({
            url: fb_url,
            type: 'GET',
            dataType: 'json',
            data: { access_token: access_token, fields: fields },
            beforeSend: function() {
                $('ul').prepend('<li>').children().first().attr('id', 'loading');;
            }
        })
        .done(function(response) {
            console.log("success");
            var albumid = '985172724832826';
            var album = '';
            for (index in response.albums.data) {
                if (response.albums.data[index].id == albumid) {
                    gallery(response.albums.data[index].photos.data);
                }
            }
            // after finish the get_url then call the plugin
            $('ul').jSlider();
        })
        .fail(function(response) {
            console.log(response.error.message + "error");
        })
        .always(function() {
            $('ul').children().remove('#loading'); //.find('id="loading"')
            console.log("complete");
        });

    var gallery = function(photos) {
        for (index in photos) {
            var id = photos[index].id;
            var src = photos[index].images[0].source;
            var name = photos[index].name;
            var tag_img = '<img src="' + src + '" alt="' + src + '" />';
            var tag_article = '<article class="content">' + name.replace(/\n/g, "<br />") + '</article>';
            $('ul').append($('<li>' + tag_img + '</li>'));
        }
    }

    $.fn.jSlider = function() {
        var defaults = {
            speed: 3000,
            pause: 2000,
            transition: 'slide'
        };
        var $holder = $(this);
        //for each element call the slide (eg. ul)
        $holder.each(function() {
            $holder.wrap('<div class="slider-wrapper"></div>');
            $holder.css({
                width: '9999990px',
                position: 'relative',
                padding: 0,
                height: 'inherit',
            });
            $holder.children().css({
                float: 'left',
                width: '700px',
                listStyle: 'none',
                height: 'inherit',
            });

            $('.slider-wrapper').css({
                width: '700px',
                height: '550px',
                margin: '0 auto',
                overflow: 'hidden',
            });

            slide();

            function slide() {
                setInterval(function() {
                    $holder
                        .animate({ left: '-' + $holder.parent().width() },
                            defaults.speed,
                            function() {
                                $holder.css('left', '0')
                                    .children(':first')
                                    .appendTo($holder)

                            });
                }, defaults.pause);
            }
        });
    }


});
