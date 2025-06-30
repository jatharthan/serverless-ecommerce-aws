let products = [];
let cart = [];

// Load products from API and render them
async function loadProducts() {
  const list = document.getElementById("product-list");

  if (!list) {
    console.error("Element #product-list not found in HTML.");
    return;
  }

  try {
    const response = await fetch("https://0uw3u7u1lj.execute-api.us-east-1.amazonaws.com/dev/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const outer = await response.json();
	products = JSON.parse(outer.body);
	console.log("roducts loaded:", products);

    products.forEach(product => {
      const item = document.createElement("div");
      item.className = "product";
      item.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart('${product.productId}')">Add to Cart</button>
      `;
      list.appendChild(item);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    list.innerHTML = "<p>Failed to load products.</p>";
  }
}


// Add item to cart
function addToCart(productId) {
  const product = products.find(p => p.productId === productId);

  if (!product) {
    console.error("Product not found for ID:", productId);
    alert("Error: Product not found.");
    return;
  }

  cart.push(product);
  alert(`Added "${product.name}" to cart`);
  renderCart();
}

// Show cart items
function renderCart() {
  const cartList = document.getElementById("cart");

  if (!cartList) {
    console.error("Element #cart not found in HTML.");
    return;
  }

  cartList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  // Create and append total line
const totalLi = document.createElement("li");
totalLi.style.fontWeight = "bold";
totalLi.style.fontSize = "1.5rem";
totalLi.style.color = "red";
totalLi.style.border = "2px solid red";         // Add red border
totalLi.style.padding = "8px";                  // Some padding inside the box
totalLi.style.marginTop = "10px";               // Space above the total
totalLi.style.borderRadius = "6px";             // Optional: rounded corners
totalLi.textContent = `Total: $${total.toFixed(2)}`;
cartList.appendChild(totalLi);

}

// Simulate placing an order
async function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  try {
    const response = await fetch("https://0uw3u7u1lj.execute-api.us-east-1.amazonaws.com/dev/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
		body: JSON.stringify({
		cart: cart,
		total: total,
		customerName: "jatharthan"
		})
	})
    });

    const apiResponse = await response.json();
	const responseBody = JSON.parse(apiResponse.body);

    if (response.ok) {
      alert("✅ " + responseBody.message);
      cart = [];
      renderCart();
    } else {
      alert("❌ " + responseBody.message);
    }
  } catch (error) {
    console.error("Order error:", error);
    alert("❌ Something went wrong placing the order.");
  }
}

// Initialize on page load
window.onload = loadProducts;
