$(document).ready(function() {
    GetAllProducts();
});



function GetAllProducts() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:63041/api/products',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var html = "";
            $.each(data, function (element, object) {
                html += " <div class='row'><div class='col-md-4'>";
                html += " <div class='catalog-item'><div class='thumbnail'>";
                html += "<h4><a href='details.html'>" + object.Name + "</a></h4>";
                html += "<img src='" + object.imgUrl + "' class='img-rounded' alt='cellphone' style='width:50%'>";
                html += "<div class='caption'><p>" + object.Description + "</p></div>";
                html += "</div></div></div></div>";
            });
            $("#DynamicHTML").append(html);
        },
        error: function (a, b, c) {

        }
    });
}