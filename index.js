fetch("https://fakestoreapi.com/products")
    .then(function (res) { return res.json(); })
    .then(function (products) {
    var tableHTML = "<thead><tr><th>ID</th><th>TITLE</th><th>PRICE</th><th>DESCRIPTION</th><th>CATEGORY</th><th>IMAGE</th><th>RATING-RATE</th><th>RATING-COUNT</th></tr></thead><tbody>";
    products.forEach(function (p) {
        tableHTML += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.price, "</td><td>").concat(p.description, "</td><td>").concat(p.category, "</td><td><img src=\"").concat(p.image, "\"></td><td>").concat(p.rating.rate, "</td><td>").concat(p.rating.count, "</td></tr>");
    });
    tableHTML += "</tbody>";
    document.querySelector("#tableElement").innerHTML = tableHTML;
    var spinnerElement = document.querySelector("#spinner-container");
    spinnerElement.style.display = "none";
});
