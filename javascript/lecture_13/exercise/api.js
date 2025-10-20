const BASE = 'https://dummyjson.com';
export async function getProducts(limit=20){
  const res = await fetch(`${BASE}/products?limit=${limit}`);
  if(!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}
export async function getProduct(id){
  const res = await fetch(`${BASE}/products/${id}`);
  if(!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}
