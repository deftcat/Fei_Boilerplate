$(document).ready(function() {
    var Acctoken = 'EAACEdEose0cBALwNYgM4bluJIaDOjecNVu0agj2lWQOcf7CR8CwfKq1Pf1Cbfk8FB5mgmCMFEjkJbanShGD9okTAvIUeEVKXpdVSJE7zkDKfN06aqZB0b7Pm8IXH4m1RiRcQ8MvZAuCwFK4C7HFudUf285dXPawwCw2SKErZAQ7ZCzeCLZBny72DZCx1rPPogZD';
    var fb_photos_url = 'https://graph.facebook.com/v2.1/me?';
    var fields = 'albums{photos{images,name,likes}}';
    $.ajax({
            url: fb_photos_url,
            type: 'GET',
            dataType: 'json',
            data: { access_token: Acctoken, fields, fields },
        })
        .done(function(response) {
            console.log("success");
            //find 'Life is a story' album
            var albumid = '985172724832826';
            var album = '';
            for (index in response.albums.data) {
                if (response.albums.data[index].id == albumid) {
                    gallery(response.albums.data[index].photos.data);
                }
            }
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

    var gallery = function(photos) {
        for (index in photos) {
            var id = photos[index].id;
            var src = photos[index].images[0].source;
            var name = photos[index].name;
            var tag_img = '<img src="' + src + '" alt="' + src + '" />';
            var tag_article = '<article class="content">' + name.replace(/\n/g, "<br />") + '</article>';
            $('section').append('<div class="content" ' + 'id="' + id + '">' + tag_img  + tag_article+ '</div>');
        }
    }

});


