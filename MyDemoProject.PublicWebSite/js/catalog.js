$(document).ready(function() {
    // Handler for .ready() called.
    $("#DynamicHTML").append(buildMyProduct(jsonCatalog));
    GetAllProducts();
});

function buildMyProduct(obj) {
    var html = " ";
    $.each(obj, function (element, object) {        
        html += " <div class='row'><div class='col-md-4'>";
        html += " <div class='catalog-item'><div class='thumbnail'>";
        html += "<h4><a href='details.html'>" + object.title + "</a></h4>";
        html += "<img src='" + object.imgUrl + "' class='img-rounded' alt='cellphone' style='width:50%'>";
        html += "<div class='caption'><p>" + object.description + "</p></div>";
        html += "</div></div></div></div>";
    });
    return html;        
}


function GetAllProducts() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:63041/api/products',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

        },
        error: function (a, b, c) {

        }
    });
}