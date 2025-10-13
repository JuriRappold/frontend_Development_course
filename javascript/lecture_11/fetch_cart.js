const API = `https://dummyjson.com/carts?limit=5`;
const byID = (id) => document.getElementById(id);
const show = (el, ...things) => {
    el.textContent += things.map(t =>
        typeof t === 'string' ? t : JSON.stringify(t, null, 2)
    ).join(' ') + '\n';
};
const clear = (el) => el.textContent="";

// object factory, cart factory
function createCart(cart){
    const productTitles = cart.products.map(p => p.title);

    return {
        cart: {
            userID: cart.userId,
            total: `${cart.total}`,
            products: productTitles
        }
    }
}

const simpleCarts = []

byID("fetchCart").onclick = async () => {
    const log = byID("log7"); clear(log);

    fetch(API)
        .then(response => {
            if (!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status}`)
            }
            return response.json();
        })
        .then(data => {
            show(log, "fetched successfully\n")
            data.carts.forEach(element => {
                const simpleCart = createCart(element);
                simpleCarts.push(simpleCart);
            })

            show(log, simpleCarts, "\nEnd")
        })
        .catch( error => {
            show(log, `Fetch failed: ${error}`);
        })
}