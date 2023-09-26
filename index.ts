import { Product } from "./types";

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products: Product[]) => {
    let tableHTML: string =
      "<thead><tr><th>ID</th><th>TITLE</th><th>PRICE</th><th>DESCRIPTION</th><th>CATEGORY</th><th>IMAGE</th><th>RATING-RATE</th><th>RATING-COUNT</th></tr></thead><tbody>";
    products.forEach((p: Product) => {
      tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.price}</td><td>${p.description}</td><td>${p.category}</td><td><img src="${p.image}"></td><td>${p.rating.rate}</td><td>${p.rating.count}</td></tr>`;
    });
    tableHTML += "</tbody>";
    document.querySelector("#tableElement")!.innerHTML = tableHTML;
    const spinnerElement: HTMLElement =
      document.querySelector("#spinner-container")!;
    spinnerElement.style.display = "none";
  });
