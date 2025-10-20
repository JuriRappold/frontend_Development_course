// TODO: export function showStats(products) { ... }
export function showStats(products){
    let priceAvg = 0;
    let ratingAvg = 0;
    const length = products.length;

    products.forEach(json => {
        priceAvg += json.price;
        ratingAvg += json.rating;
    })
    priceAvg = priceAvg/length;
    ratingAvg = ratingAvg/length;


    return statsHtml(priceAvg, ratingAvg);

}

function statsHtml(price, rating){
    const container = document.createElement("div")
    const header = document.createElement("h3");
    header.innerText = "Statistics:"

    const priceAvg = document.createElement("p")
    priceAvg.innerText = `Average Price: ${price}`;

    const ratingAvg = document.createElement("p");
    ratingAvg.innerText = `Average Rating: ${rating}`;

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "X";

    container.appendChild(header);
    container.appendChild(priceAvg);
    container.appendChild(ratingAvg);
    container.appendChild(closeBtn);

    return container

}
