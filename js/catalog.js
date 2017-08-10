var myCatalog2 = {
    "MyCollection": {
        "Product1": {
            "id": 0,
            "title": "myProduct",
            "description": "myDescription",
            "imgUrl": "img/play_android_cell_phone_mobile_video_icon-icons.com_55211.png"
        },

        "Product2": {
            "id": 1,
            "title": "myProduct",
            "description": "myDescription",
            "imgUrl": "img/play_android_cell_phone_mobile_video_icon-icons.com_55211.png"
        },
        "Product3": {
            "id": 2,
            "title": "myProduct",
            "description": "myDescription",
            "imgUrl": "img/play_android_cell_phone_mobile_video_icon-icons.com_55211.png"
        },
        "Product4": {
            "id": 3,
            "title": "myProduct",
            "description": "myDescription",
            "imgUrl": "img/play_android_cell_phone_mobile_video_icon-icons.com_55211.png"
        },
        "Product5": {
            "id": 4,
            "title": "myProduct",
            "description": "myDescription",
            "imgUrl": "img/play_android_cell_phone_mobile_video_icon-icons.com_55211.png"
        },
        "Product6": {
            "id": 5,
            "title": "myProduct",
            "description": "myDescription",
            "imgUrl": "img/play_android_cell_phone_mobile_video_icon-icons.com_55211.png"
        },

    }
}


$(document).ready(function() {
    // Handler for .ready() called.
    $("#DynamicHTML").append(buildMyProduct(myCatalog2));
});

function buildMyProduct(obj) {
    var html = "";
    $.each(obj, function(element, object) {
        html += "<div class=''catalog-item>";
        html += "<div><a href='details.html?id=" + object.id + "'>" + object.title + "</a></div>";
        html += "<div><img class='catalog' src='" + object.imgUrl + "'></div>";
        html += "<div>" + object.description + "</div></div>";
    });
    return html;
}