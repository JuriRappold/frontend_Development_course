// Prove the script runs and set a starter message
console.log("Mini-Shop loaded");
document.getElementById("message").innerText = "Welcome!";

const cart = []; // up to 3 items: { name: string, price: number, qty: number }

// ------- Helpers (NO LOOPS) -------

// Read current inputs and return an item object
function readItemFromInputs() {
  const name = document.getElementById("productName").value;
  const price = Number(document.getElementById("price").value);
  const qty   = Number(document.getElementById("qty").value);
  return { name, price, qty };
}

// Validate item or throw Error
function validateItem(item) {
  if (!item || typeof item.name !== "string") {
    throw new Error("Invalid item.");
  }
  if (item.name.trim().length === 0) {
    throw new Error("Name required.");
  }
  if (!Number.isFinite(item.price) || !Number.isFinite(item.qty)) {
    throw new Error("Price and quantity must be numbers.");
  }
  if (!(item.price > 0 && item.qty > 0)) {
    throw new Error("Price and quantity must be > 0.");
  }
}

// Compute a single line total
function lineTotal(item) {
  return item.price * item.qty;
}

// Subtotal for up to 3 items WITHOUT LOOPS
function subtotalNoLoops() {
  let subtotal = 0;
  if (cart.length >= 1) subtotal += lineTotal(cart[0]);
  if (cart.length >= 2) subtotal += lineTotal(cart[1]);
  if (cart.length >= 3) subtotal += lineTotal(cart[2]);
  return subtotal;
}

// Coupon via switch; returns { discount, shipping, grandTotal }
function applyCoupon(codeRaw, subtotal) {
  const code = (codeRaw || "").trim().toUpperCase();
  let shipping = 39;
  let discount = 0;

  switch (code) {
    case "STUDENT":
      discount = 0.10 * subtotal;
      break;
    case "FREESHIP":
      shipping = 0;
      break;
    case "NONE":
    default:
      // no changes
      break;
  }

  const grandTotal = subtotal + shipping - discount;
  return { discount, shipping, grandTotal };
}

// Render receipt into #cartView WITHOUT LOOPS
function renderCartView(subtotal, discount, shipping, grandTotal) {
  let view = "";
  if (cart.length === 0) {
    view += "Cart is empty\n";
  }
  if (cart.length >= 1) {
    view += `${cart[0].name} x ${cart[0].qty} = ${(lineTotal(cart[0]))}\n`;
  }
  if (cart.length >= 2) {
    view += `${cart[1].name} x ${cart[1].qty} = ${(lineTotal(cart[1]))}\n`;
  }
  if (cart.length >= 3) {
    view += `${cart[2].name} x ${cart[2].qty} = ${(lineTotal(cart[2]))}\n`;
  }
  view += `Shipping: ${shipping.toFixed(2)}\n`;
  view += `Discount: ${discount.toFixed(2)}\n`;
  view += `Subtotal: ${subtotal.toFixed(2)}\n`;
  view += `Total:    ${grandTotal.toFixed(2)}\n`;
  document.getElementById("cartView").innerText = view;
}

// Status line with a ternary
function updateMessage(amount) {
  const note = amount >= 100 ? "Big spender! 🎉" : "Keep going!";
  document.getElementById("message").innerText =
    `Items: ${cart.length} | Amount: ${amount.toFixed(2)} | ${note}`;
}

// ------- Button handlers -------

function addToCart() {
  try {
    const item = readItemFromInputs();
    validateItem(item);

    if (cart.length === 3) {
      alert("Cart full (max 3 items).");
      return;
    }

    cart.push(item);

    const currentSubtotal = subtotalNoLoops();
    updateMessage(currentSubtotal);
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
}

function calculateTotals() {
  const subtotal = subtotalNoLoops();
  const code = document.getElementById("coupon").value;
  const { discount, shipping, grandTotal } = applyCoupon(code, subtotal);

  renderCartView(subtotal, discount, shipping, grandTotal);
  updateMessage(grandTotal);
}
