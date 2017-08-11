$(document).ready(function() {
    loadProduct();

});

function loadProduct() {
    var myProduct = FindMyProduct(getJsonFromUrl())
    buildMyProduct(myProduct);
}

function FindMyProduct(id) {
    var ProductDetails = "";
    //MyCatalogData es mi Catalogo.json, y object es cada elemento de �ste
    $.each(myCatalog, function(element, object) {
        if (object.id == id)
            ProductDetails = object;
    });
    return ProductDetails;
}


//Dynamic build your collection
// function buildMyProduct(myProduct) {
//     var html = "<div class='row'><div class='col-md-offset-2 col-md-3'>";
//     html += "<div class='product-view'><h4>" + myProduct.title + "</h4>";
//     html += "<img src='" + myProduct.imageurl + "' class='' alt='' style=''>";
//     html += "<div class='product-image'>";
//     html += myProduct.imageurl + "' class='' alt='' style=''>";
//     html += myProduct.imageurl + "' class='' alt='' style=''>'";
//     html += myProduct.imageurl + "' class='' alt='' style=''></div>";
//     html += "<div class='product-model'><h4>" + myProduct.model + "</h4></div>";
//     html += "<div class='product-price'><h4>" + myProduct.price + "</h4></div>";
//     html += "<div class='product-description'>";
//     html += "<p>" + myProduct.description + "</p></div></div></div>";

//     $("#prueba2").append(html);
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