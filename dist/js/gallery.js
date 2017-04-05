$(document).ready(function() {
    var fb_url = 'https://graph.facebook.com/v2.1/me';
    var access_token = 'EAACEdEose0cBABX0MLuNqgEZA72vIOdlgFCXD4lR4UpbD3DaXgZB4YAkJwVLcQj7TqIMQ2MTLNrYhkOIgbhVYZCEGAhi7HulVhn1xQYOkJlhaZA8NeZBRgmfvQx4FdUQwaQ3tMAPwkRdM562MVPypuWx7lYbUUCI2NRwc9orGFIp5hAdndrXZAZAhP6vs4cZAZAkZD';
    var fields = 'albums{photos{images,name,likes}}';
    $.ajax({
            url: fb_url,
            type: 'GET',
            dataType: 'json',
            data: { access_token: access_token, fields: fields },
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
        .fail(function() {
            console.log($(this).url + "error");
        })
        .always(function() {
            console.log("complete");
        });

    var gallery = function(photos) {
        for (index in photos) {
            var id = photos[index].id;
            // galleryIDs.push('#' + id);
            var src = photos[index].images[0].source;
            var name = photos[index].name;
            var tag_img = '<img src="' + src + '" alt="' + src + '" />';
            var tag_article = '<article class="content">' + name.replace(/\n/g, "<br />") + '</article>';
            $('ul').append($('<li>' + tag_img + '</li>'));
        }
    }

    $.fn.jSlider = function() {
        console.log('call slider');

        var defaults = {
            speed: 3000,
            pause: 2000,
            transition: 'slide'
        };

        //for each element call the slide (eg. ul)
        $(this).each(function() {
            console.log($(this));
            console.log(this);
            $(this).wrap('<div class="slider-wrapper"></div>');
            $(this).css({
                width: '9999990px',
                position: 'relative',
                padding: 0
            });
            $(this).children().css({
                float: 'left',
                width: '550px',
                listStyle: 'none'

            });

            $('.slider-wrapper').css({
                width: '550px',
                height: '300px',
                overflow: 'hidden'
            });
            slide($(this));

            function slide(holder) {
                setInterval(function() {
                    holder
                        .animate({ left: '-' + holder.parent().width() },
                            defaults.speed,
                            function() {
                                /* stuff to do after animation is complete */
                                holder.css('left', '0')
                                    .children(':first')
                                    .appendTo(holder)

                            });
                }, defaults.pause);
            }

            // console.log(el);
        });
    }


});
