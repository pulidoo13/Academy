$(document).ready(function() {
    //loadProduct();
    buildMyProduct();

});

function loadProduct() {
    var myProduct = FindMyProduct(getJsonFromUrl())
    buildMyProduct(myProduct);
}

function FindMyProduct(id) {
    var ProductDetails = "";
    //MyCatalogData es mi Catalogo.json, y object es cada elemento de �ste
    $.each(jsonDetails, function(element, object) {
        if (object.id == id)
            ProductDetails = object;
    });
    return ProductDetails;
}


//Dynamic build your collection
//function buildMyProduct(myCollection) {
//     //var html = "<div id='prueba2'><div class='row'><div class='col-md-offset-2 col-md-3'>";
//     //html += "<div class='product-view'><h4>" + myCollection.title + "</h4>";
//     //html += "<img src='" + myCollection.imgUrl + "' class='img-rounded' alt='cellphone' style='width:80%'>";
//     //html += "<div class='product-image'>";
//     //html += "<img src='" + myCollection.imgUrl + "' class='img-rounded' alt='cellphone' style='width:20%'>";
//     //html += "<img src='" + myCollection.imgUrl + "' class='img-rounded' alt='cellphone' style='width:20%'>'";
//     //html += "<img src='" + myCollection.imgUrl + "' class='img-rounded' alt='cellphone' style='width:20%'></div>";
//     //html += "<div class='product-model'><h4>" + myCollection.model + "</h4></div>";
//     //html += "<div class='product-price'><h4>" + myCollection.price + "</h4></div>";
//     //html += "<div class='product-description'>";
//     //html += "<p>" + myCollection.description + "</p></div> </div> </div>";

//     //$("#prueba2").append(html);
// }

function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
        var item = part.split("=");

        //Decode to avoid errors due to blank spaces on the URL
        result[item[0]] = decodeURIComponent(item[1]);
    });
    //we need only the ID
    return result.id;
}

function buildMyProduct() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:63041/api/products',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var html = "";
            $.each(data, function (element, object) {
                var html = "<div id='prueba2'><div class='row'><div class='col-md-offset-2 col-md-3'>";
                html += "<div class='product-view'><h4>" + object.Name + "</h4>";
                html += "<img src='" + object.imgUrl + "' class='img-rounded' alt='cellphone' style='width:80%'>";
                html += "<div class='product-image'>";
                html += "<img src='" + object.imgUrl + "' class='img-rounded' alt='cellphone' style='width:20%'>";
                html += "<img src='" + object.imgUrl + "' class='img-rounded' alt='cellphone' style='width:20%'>'";
                html += "<img src='" + object.imgUrl + "' class='img-rounded' alt='cellphone' style='width:20%'></div>";
                html += "<div class='product-model'><h4>" + object.Model + "</h4></div>";
                html += "<div class='product-price'><h4>" + object.Price + "</h4></div>";
                html += "<div class='product-description'>";
                html += "<p>" + object.Description + "</p></div> </div> </div>";

                $("#prueba2").append(html);
            });
            //$("#DynamicHTML").append(html);
        },
        error: function (a, b, c) {

        }
    });
}