$(document).ready(function() {
    var Acctoken = 'EAACEdEose0cBALYQnuHZAvXQGryDoEH1FC9J3CRjpnCVWOXQlSO8QQl1vXAvIXySze6O1do1FrsM8yC37zNXaZAq1VD99ZAYHtHK14aVq7H0jleG4AnMdZAsMeVYyy0y8OqHLvMH6Sw7h57kwoazTNqzFsvfVP4gAIrj2tmydsHtStv7OWGZAn7fcrg7oWt8ZD';
    var fb_photos_url = 'https://graph.facebook.com/v2.1/me?';
    var fields = 'albums{photos{images,name,likes}}';
    var galleryIDs = ['#img'];
    // galleryIDs.push('#img2');
    var curID = 0;
    $.ajax({
            url: fb_photos_url,
            type: 'GET',
            dataType: 'json',
            data: { access_token: Acctoken, fields, fields },
        })
        // .beforeSend(function(){
        // 	$('section').html(>'')
        // }),
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
        .fail(function(msg) {
            console.log("error" + msg);
        });
    // .always(function() {
    //     console.log("complete");
    // });

    var gallery = function(photos) {
            for (index in photos) {
                var id = photos[index].id;
                galleryIDs.push('#' + id);
                var src = photos[index].images[0].source;
                var name = photos[index].name;
                var tag_img = '<img src="' + src + '" alt="' + src + '" />';
                var tag_article = '<article class="content">' + name.replace(/\n/g, "<br />") + '</article>';
                $('section').append($('<div class="content" ' + 'id="' + id + '">' + tag_img + tag_article + '</div>').hide());
            }
        }
        // $('#img2').hide();
    $('button.next').on('click', function() {
        $(galleryIDs[curID++]).toggle('drop', { direction: 'left' }, 500, function() {
            console.log(curID);
            $(galleryIDs[curID]).toggle('drop', { direction: 'right' }, 500);
        });
        curID %= galleryIDs.length;
        console.log(curID);
    });
    $('button.prev').on('click', function(callback) {
        $(galleryIDs[curID--]).toggle('drop', { direction: 'right' }, 500, function() {
            curID = (curID<0?curID+galleryIDs.length:curID);
            $(galleryIDs[curID]).toggle('drop', { direction: 'left' }, 500);
        });
        curID %= galleryIDs.length;
    });

});
