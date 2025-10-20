import { getProducts } from './api.js';
import { setProducts, getProductsFromStore } from './store.js';
import { renderList, renderFooter } from './ui.js';

const list = document.getElementById('list');
const footer = document.getElementById('footer');
const modal = document.getElementById('modal');
const test = document.getElementById("testing");

// Top-level await for initial data load
const { products } = await getProducts(20);
setProducts(products);
renderList(list, products);
renderFooter(footer, products.length);

// Event delegation with robust handling
list.addEventListener('click', async (e) => {
  const btn = e.target.closest('button');
  if(!btn) return;
  if(btn.textContent === 'Details'){
        modal.innerText = "";
        const { showDetails } = await import('./details.js'); // to be implemented by students
        await showDetails(btn.dataset.id, modal);
        modal.classList.toggle("show");
  } else if(btn.textContent === 'Stats'){
        modal.innerText = "";
        const { showStats } = await import('./stats.js'); // to be implemented by students
        modal.appendChild(showStats(getProductsFromStore()));
        modal.classList.toggle("show");
  }
});

modal.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if(!btn) return;
    if(btn.textContent === 'X'){
        modal.classList.toggle("show");
    }
})


