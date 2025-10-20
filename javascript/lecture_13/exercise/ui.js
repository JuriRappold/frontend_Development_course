export function renderList(container, products){
  container.replaceChildren(...products.map(p => renderItem(p)));
}
function renderItem(p){
  const li = document.createElement('li');
  // data-id on title span to demo dataset use
  const span = document.createElement('span');
  span.dataset.id = p.id;
  span.textContent = `${p.title} — $${p.price}`;
  const actions = document.createElement('span');
  const details = Object.assign(document.createElement('button'), { textContent: 'Details' });
  const stats = Object.assign(document.createElement('button'), { textContent: 'Stats' });
  details.dataset.id = p.id;
  actions.append(details, stats);
  li.append(span, actions);
  return li;
}
export function renderFooter(el, count){
  el.textContent = `${count} products loaded`;
}
