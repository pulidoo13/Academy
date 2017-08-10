$(document).ready(function() {
    // Handler for .ready() called.
    $("#DynamicHTML").append(buildMyProduct(myCatalogData));
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