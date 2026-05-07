alert("AAP SAHI JAGAH AAYE HAIN")
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const closeCartButton = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

let cart = [];

const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 15, image: 'images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 20, image: 'images/product3.jpg' },
    { id: 4, name: 'Product 4', price: 20, image: 'images/product3.jpg' },
    { id: 5, name: 'Product 5', price: 10, image: 'images/product1.jpg' },
    { id: 6, name: 'Product 6', price: 15, image: 'images/product2.jpg' },
    { id: 7, name: 'Product 7', price: 20, image: 'images/product3.jpg' },
    { id: 8, name: 'Product 8', price: 20, image: 'images/product3.jpg' },
];

document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (e) => {
        const productId = parseInt(e.target.closest('.product').dataset.id);
        addToCart(productId);
    });
});

cartButton.addEventListener('click', () => {
    showCart();
});

closeCartButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    cartButton.innerText = `Cart (${cart.length})`;
    renderCartItems();
}

function renderCartItems() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    totalPriceElement.textContent = total;
}

function showCart() {
    cartModal.style.display = 'flex';
}



const toggle = document.getElementById('darkModeToggle');
toggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
};


 const chatBtn = document.getElementById('chatSupport');
  const chatBox = document.getElementById('chatBox');
  const closeBtn = document.getElementById('closeChat');

  chatBtn.addEventListener('click', () => {
    chatBox.style.display = 'flex';  // Show chat popup
  });

  closeBtn.addEventListener('click', () => {
    chatBox.style.display = 'none';  // Hide chat popup
  });


  const btn = document.getElementById("scrollTopBtn");
  window.onscroll = function () {
    btn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
      ? "block" : "none";
  };
  btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function showToast() {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 3000);
  }

  // Example usage on Add to Cart button
  document.querySelectorAll('.product button').forEach(btn => {
    btn.addEventListener('click', showToast);
  });

  const countdown = document.getElementById("countdown");
let timeLeft = 3600; // 1 hour in seconds

const formatTime = (val) => val.toString().padStart(2, '0');

setInterval(() => {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  countdown.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  if (timeLeft > 0) timeLeft--;
}, 1000);

window.onload = () => {
  document.getElementById("loader").style.display = "none";
};



// Show login modal
document.getElementById("login").addEventListener("click", () => {
  document.getElementById("loginModal").style.display = "flex";
});
document.getElementById("closeLogin").addEventListener("click", () => {
  document.getElementById("loginModal").style.display = "none";
});

// Validation
document.getElementById("loginBtn").addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "" || pass === "") {
    alert("Please fill in both fields.");
  } else {
    alert(`Welcome, ${user}!`);
    document.getElementById("loginModal").style.display = "none";
  }
});


function animateAddToCart(button) {
  const cartIcon = document.getElementById("cartIcon");
  const clone = button.cloneNode(true);
  clone.style.position = "absolute";
  clone.style.top = button.getBoundingClientRect().top + "px";
  clone.style.left = button.getBoundingClientRect().left + "px";
  clone.style.transition = "all 0.7s ease";
  document.body.appendChild(clone);

  setTimeout(() => {
    clone.style.top = cartIcon.getBoundingClientRect().top + "px";
    clone.style.left = cartIcon.getBoundingClientRect().left + "px";
    clone.style.opacity = 0;
  }, 10);

  setTimeout(() => clone.remove(), 800);
}




// Countdown Timer for Flash Sale
const countdownEl = document.getElementById("countdown");

// Set timer duration (e.g., 2 hours from now)
const endTime = new Date();
endTime.setHours(endTime.getHours() + 2);

function updateCountdown() {
  const now = new Date();
  const timeLeft = endTime - now;

  if (timeLeft <= 0) {
    countdownEl.textContent = "00:00:00";
    return;
  }

  const hours = String(Math.floor(timeLeft / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');

  countdownEl.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Optional: Add interactivity to shop boxes (hover animation or click effect)
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
  box.addEventListener("mouseenter", () => {
    box.style.transform = "scale(1.03)";
    box.style.transition = "all 0.3s ease";
  });
  box.addEventListener("mouseleave", () => {
    box.style.transform = "scale(1)";
  });
});


document.getElementById("subscribeBtn").addEventListener("click", () => {
  let email = document.getElementById("newsletter").value;
  if (email === "") {
    alert("Please enter your email before subscribing!");
  } else {
    alert("Thanks for subscribing: " + email);
    document.getElementById("newsletter").value = ""; // box clear ho jayega
  }
});

document.getElementById("subscribeBtn").addEventListener("click", () => {
  let email = document.getElementById("newsletter").value;
  let toast = document.getElementById("toast");

  if (email === "") {
    toast.innerText = "⚠️ Please enter your email!";
  } else {
    toast.innerText = "✅ Subscribed Successfully!";
    document.getElementById("newsletter").value = ""; // box clear
  }

  // Show toast
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
});

const loginBtn = document.getElementById("login");

// Jab page load ho
window.addEventListener("load", () => {
  const user = localStorage.getItem("username");
  if (user) {
    loginBtn.textContent = `Logout (${user})`;
  } else {
    loginBtn.textContent = "Login";
  }
});

// Jab button click ho
loginBtn.addEventListener("click", () => {
  const user = localStorage.getItem("username");

  if (user) {
    // Already login hai → logout karo
    localStorage.removeItem("username");
    alert("You have logged out.");
    loginBtn.textContent = "Login";
  } else {
    // Login nahi hai → naam puchho
    const username = prompt("Enter your name:");
    if (username && username.trim() !== "") {
      localStorage.setItem("username", username);
      alert(`Hello, ${username}! You are logged in.`);
      loginBtn.textContent = `Logout (${username})`;
    } else {
      alert("Please enter a valid name.");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("recommendSizeBtn").addEventListener("click", () => {
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let result = document.getElementById("sizeResult");

    if (isNaN(height) || isNaN(weight)) {
      result.textContent = "⚠️ Please enter both height and weight.";
      result.style.color = "red";
      return;
    }

    // Simple AI Logic (Rules)
    let size = "";
    if (weight < 55 && height < 165) size = "Small (S)";
    else if (weight >= 55 && weight < 70 && height >= 165 && height < 180) size = "Medium (M)";
    else if (weight >= 70 && weight < 85 && height >= 170 && height < 185) size = "Large (L)";
    else if (weight >= 85 || height >= 185) size = "Extra Large (XL)";
    else size = "Medium (M)"; // Default fallback

    result.textContent = `✅ Recommended Size: ${size}`;
    result.style.color = "green";
  });
});
