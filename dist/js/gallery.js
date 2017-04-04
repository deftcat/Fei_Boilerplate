$(document).ready(function() {
    var fb_url = 'https://graph.facebook.com/v2.1/me';
    var access_token = 'EAACEdEose0cBAEC85lZB5rm3bkeXLPvdy5ZATZBAtowidM3HC7XphncUIZCZCqqK7yNPtZBjZCaQI0n3qxNheo9ydJrM8WSNWaUrDGp7k20DknLBGzjvNEbTXHmCHV12TIC5ZBGk8orQiMlkOIlHoGm3TJVzQ8JmZADBiYwt4bN3m7ycYKsFBiVa9bOsH2lZCtIZCwZD';
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
            transition: 'slider'
        };
        $(this).each(function(index, el) {
        	console.log(el);
        });
    }
    $('ul').jSlider();

});
