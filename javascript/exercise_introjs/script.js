


// Warm-up: prove the script runs, touch DOM, recall typeof.
console.log("Mini-Shop loaded");
document.getElementById("message").innerText = "Welcome!";

const cart = [];// { name: string, price: number, qty: number }

//      == Caller → Callees ==
// addToCart → readItemFromInputs, validateItem, subtotalNoLoops, updateMessage
// subtotalNoLoops → lineTotal (up to 3 times, conditionally)
// calculateTotals → subtotalNoLoops, applyCoupon, renderCartView, updateMessage
// renderCartView → lineTotal (up to 3 times, conditionally)
// applyCoupon → (none)
// readItemFromInputs → (none)
// validateItem → (none)
// lineTotal → (none)
// updateMessage → (none)


// Return a fresh item object from current inputs
function readItemFromInputs() {
  // 1) Read values from #productName, #price, #qty
  // 2) Convert price/qty to numbers using Number(...)
  // 3) Return a plain object: { name, price, qty }
}

// Validate item or throw Error
function validateItem(item) {
  // 1) If item.name.trim().length === 0 -> throw new Error("Name required")
  // 2) If item.price <= 0 OR item.qty <= 0 -> throw new Error("Price and qty must be > 0")
  // 3) (Optional) If not Number.isFinite(item.price/qty) -> throw new Error("Invalid number")
  // Otherwise: do nothing (validation passed)
}

// Compute a single line total
function lineTotal(item) {
  // Return item.price * item.qty
}

// Compute subtotal for up to 3 items, WITHOUT LOOPS
function subtotalNoLoops() {
  // 1) Start subtotal at 0
  // 2) If cart.length >= 1, add lineTotal(cart[0])
  // 3) If cart.length >= 2, add lineTotal(cart[1])
  // 4) If cart.length >= 3, add lineTotal(cart[2])
  // 5) Return subtotal
}

// Apply coupon using switch; return { discount, shipping, grandTotal }
function applyCoupon(codeRaw, subtotal) {
  // 1) Normalize: const code = codeRaw.trim().toUpperCase()
  // 2) Set a default shipping (e.g., 39) and discount = 0
  // 3) switch(code):
  //    - case "STUDENT": set discount to e.g. 0.10 * subtotal; break
  //    - case "FREESHIP": set shipping to 0; break
  //    - case "NONE" or default: no changes
  // 4) Compute grandTotal = subtotal + shipping - discount
  // 5) Return { discount, shipping, grandTotal }
}

// Render receipt into #cartView WITHOUT LOOPS
function renderCartView(subtotal, discount, shipping, grandTotal) {
  // 1) Start with an empty string: let view = ""
  // 2) If cart.length >= 1, append line for cart[0]  ("name x qty = price*qty")
  // 3) If cart.length >= 2, append line for cart[1]
  // 4) If cart.length >= 3, append line for cart[2]
  // 5) Append "Shipping:", "Discount:", and "Total:" lines
  // 6) Write the string to #cartView via innerText
}

// Update the status line with a ternary message
function updateMessage(amount) {
  // 1) Decide a note with a ternary: amount >= 100 ? "Big spender! 🎉" : "Keep going!"
  // 2) Set #message text to: "Items: <cart.length> | Amount: <amount.toFixed(2)> | <note>"
}

// ========== Button handlers ==========

function addToCart() {
  // 1) Use try { ... } catch (err) { ... }
  // 2) Inside try: read the item from inputs (readItemFromInputs)
  // 3) Validate the item (validateItem)
  // 4) If cart already has 3 items, alert("Cart full (max 3)") and return
  // 5) Otherwise push the item into cart
  // 6) Compute current subtotal (subtotalNoLoops) and call updateMessage(subtotal)
  // 7) In catch: alert(err.message) and console.log(err)
}

function calculateTotals() {
  // 1) Get subtotal via subtotalNoLoops()
  // 2) Read coupon from #coupon and call applyCoupon(code, subtotal)
  // 3) Render receipt via renderCartView(subtotal, discount, shipping, grandTotal)
  // 4) Call updateMessage(grandTotal)
}

// ===== Optional thinking prompt (not graded) =====
// const divideTest = 10 / 0;  // Observe in console. How would you avoid similar invalid math?
