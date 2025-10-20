// TODO: export async function showDetails(id, modal) { ... }
//import { getProduct } from "./api";

export async function showDetails(id, modal){
    const { getProduct } = await import('./api.js');
    const json = await getProduct(id);

    const product = {
        name: json.title,
        description: json.description,
        category: json.category,
        price: json.price,
    }

    productHTML(product, modal);
}

function productHTML(product, container){
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const category = document.createElement("p")
    const price = document.createElement("p");
    const closeBtn = document.createElement("button")

    title.innerText = `${product.name}`;
    description.innerText = product.description;
    category.innerText = `Category: #${product.category}`;
    price.innerText = `Price: ${product.price}`;
    closeBtn.innerText = "X";

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(category);
    container.appendChild(price);
    container.appendChild(closeBtn);
}