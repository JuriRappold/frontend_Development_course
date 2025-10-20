# 🛍️ Mini Product Finder — Exercise (DummyJSON)

## Learning goals
- Form events & basic validation
- Fetch from a real API; handle loading/empty/error
- Efficient rendering via DocumentFragment
- Small ES6 class for data modeling

## API
- All: `https://dummyjson.com/products?limit=100`
- Search: `https://dummyjson.com/products/search?q=<term>&limit=100` (use `encodeURIComponent`)

## Steps
1) Scaffold HTML/CSS/JS (see files)  
2) Build `buildUrl(query)`  
3) Implement `fetchProducts(query)` with status + error handling  
4) Create `Product` class and `inStock` getter  
5) `renderProducts(list)` using a DocumentFragment and `.card` UI  
6) `applyStockFilter(list, only)` for the checkbox  
7) Wire `performSearch()` to submit + live input (with debounce)

## Acceptance criteria
- Submit triggers search without page reload
- “Only in stock” hides items with `stock === 0`
- Shows “Loading…” while fetching; “No results.” when empty
- Rendering uses DocumentFragment
- Errors show a brief message in `#error`
