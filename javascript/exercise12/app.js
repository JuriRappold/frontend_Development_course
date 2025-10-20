// 1) Basics — grab elements
const form = document.getElementById("searchForm");
const q = document.getElementById("query");              // TODO: wire in HTML
const onlyInStock = document.getElementById("onlyInStock"); // TODO
const results = document.getElementById("results");
const error = document.getElementById("error");
const statusEl = document.getElementById("status");      // TODO: create in HTML

// 2) Tiny model class
class Product {
  constructor(p) {
    // TODO: store needed fields (id, title, brand, price, rating, stock, thumbnail, category)
      this.id = p.id;
      this.title = p.title;
      this.brand = p.brand;
      this.price = p.price;
      this.rating = p.rating;
      this.stock = p.stock;
      this.thumbnail = p.thumbnail;
      this.category = p.category;

  }
  get inStock() {
    // TODO: return true if stock > 0
      return this.stock > 0;
  }
  // (optional) get priceLabel(){ ... }
}

// 3) Build the URL depending on query presence
function buildUrl(query) {
  // TODO:
  // - if query exists -> "https://dummyjson.com/products/search?q=<encoded>&limit=100"
  // - else -> "https://dummyjson.com/products?limit=100"
    if(query){
        return `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=100`;
    }
    else{
        return `https://dummyjson.com/products?limit=100`;
    }
}

// 4) Fetch products (async/await)
async function fetchProducts(query) {
  // TODO:
  // - set status to "Loading..."
  // - fetch(buildUrl(query))
  // - check res.ok and handle non-OK
  // - res.json() -> data.products
  // - map to Product instances
  // - clear status when done
  // - on error: set a short message in #error and clear status
    const products = [];
    statusEl.innerText = "Loading...";
    await fetch(buildUrl(query))
        .then(response => {
            if(!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status}`)
            }
            return response.json();
        })
        .then(data =>{
            data.products.forEach(product => {
                products.push(new Product(product));
            })
            statusEl.innerText = "";
        })
        .catch(er => {
            error.innerText =`An Error occurred: ${er}`;
        });
    return products
}

// 5) Render using DocumentFragment (performance)
function renderProducts(list) {
  // TODO:
  // - clear results
  // - if empty: show "No results."
  // - create DocumentFragment
  // - for each product, create a .card containing:
  //     - img.thumb (src=thumbnail, alt=title)
  //     - title, brand/category, rating, price
  //     - a badge: "In stock" / "Out of stock"
  // - append the fragment once to #results
    results.innerText= "";
    const fragment = document.createDocumentFragment();
    if(!list){
        results.innerText = "No Results.";
    }
    else{
        list.forEach(product => {
            const cont = document.createElement("article");
            cont.classList.toggle("card");

            const thumb = document.createElement("img");
            thumb.src=product.thumbnail;
            thumb.alt=product.title;

            const title = document.createElement("h3");
            title.innerText = product.title;

            const brand = document.createElement("span");
            brand.innerText = `Brand: ${product.brand}`;

            const category = document.createElement("span");
            category.innerText = `Category: ${product.category}`;

            const rating = document.createElement("span");
            rating.innerText = `Rating: ${product.rating}`;

            const price = document.createElement("span");
            price.innerText = `Price: ${product.price}kr`;

            const badge = document.createElement("p");
            if(product.inStock){
                badge.innerText = "In Stock";
            } else{
                badge.innerText = "Out of Stock";
            }

            cont.appendChild(thumb);
            cont.appendChild(title);
            cont.appendChild(brand);
            cont.appendChild(category);
            cont.appendChild(rating);
            cont.appendChild(price);
            cont.appendChild(badge);

            fragment.appendChild(cont);
        })
    }
    results.appendChild(fragment);

}

// 6) Client-side stock filter
function applyStockFilter(list, requireInStock) {
  // TODO: if requireInStock -> return list.filter(p => p.inStock), else return list
    if(requireInStock){
        return list.filter(p => p.inStock)
    }
    else{
        return list;
    }

}

// 7) Search flow — runs on submit and input
async function performSearch(query) {
  // TODO:
  // - clear #error
  // - validate: allow either a non-empty query OR the stock box checked
  // - await fetchProducts(query)
  // - apply applyStockFilter
  // - renderProducts
  // - set statusEl to "Showing N item(s)" or "No results."
    if(query){
        error.innerText = "";
        let inStock = false;
        if(onlyInStock.checked === true){
            inStock = true;
        }
        let products = await fetchProducts(query);
        products = applyStockFilter(products, inStock);
        renderProducts(products);
        if(products){
            statusEl.innerText = `Showing ${products.length} item(s).`;
        } else{
            statusEl.innerText = "No results.";
        }
    } else{
        statusEl.innerText = "Empty Query.";
    }



}

// 8) Events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // TODO: call performSearch()
    performSearch(q.value);
});

// (bonus) simple debounce for live search
let t = null;
q?.addEventListener("input", () => {
  // TODO: clearTimeout + setTimeout -> performSearch after ~300–400ms
});

onlyInStock?.addEventListener("change", () => {
  // TODO: call performSearch()
});

// 9) Init
document.addEventListener("DOMContentLoaded", () => {
  // TODO: initial load (either empty query or show an instruction)
});
