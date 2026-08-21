// ===============================
// FOOD DATA
// ===============================

const foodItems = [
    {
        id: 1,
        name: "Classic Veg Burger",
        category: "Burger",
        restaurant: "Burger Point",
        price: 120,
        description: "Crispy vegetable patty with fresh vegetables.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        // ID 1
  dietaryTags: ["Veg"],
ingredients: ["Vegetable patty", "Lettuce", "Tomato", "Burger bun"],
nutrition: "420 calories"
    },

    {
        id: 2,
        name: "Chicken Burger",
        category: "Burger",
        restaurant: "Burger Point",
        price: 180,
        description: "Juicy chicken patty with cheese and vegetables.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
        // ID 2
dietaryTags: ["Non-Veg"],
ingredients: ["Chicken patty", "Cheese", "Lettuce", "Burger bun"],
nutrition: "560 calories"
    },

    {
        id: 3,
        name: "Margherita Pizza",
        category: "Pizza",
        restaurant: "Pizza House",
        price: 250,
        description: "Classic pizza with tomato, mozzarella and basil.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
        // ID 3
dietaryTags: ["Veg"],
ingredients: ["Tomato", "Mozzarella", "Basil", "Pizza dough"],
nutrition: "680 calories"
    },

    {
        id: 4,
        name: "Chicken Pizza",
        category: "Pizza",
        restaurant: "Pizza House",
        price: 320,
        description: "Delicious pizza topped with chicken and cheese.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        // ID 4
dietaryTags: ["Non-Veg"],
ingredients: ["Chicken", "Cheese", "Tomato sauce", "Pizza dough"],
nutrition: "760 calories"
    },

    {
        id: 5,
        name: "Chicken Biryani",
        category: "Biryani",
        restaurant: "Spice Garden",
        price: 220,
        description: "Aromatic basmati rice cooked with spicy chicken.",
        image: "images/chicken-biryani.jpg",
        // ID 5
dietaryTags: ["Non-Veg"],
ingredients: ["Chicken", "Basmati rice", "Onion", "Spices"],
nutrition: "720 calories" 
    },

    {
        id: 6,
        name: "Veg Biryani",
        category: "Biryani",
        restaurant: "Spice Garden",
        price: 170,
        description: "Fragrant rice cooked with fresh vegetables.",
        image: "images/veg-biryani.jpg",
        // ID 6
dietaryTags: ["Veg"],
ingredients: ["Basmati rice", "Onion", "Spices"],
nutrition: "580 calories"
    },

    {
        id: 7,
        name: "Cold Coffee",
        category: "Drinks",
        restaurant: "Spice Garden",
        price: 90,
        description: "Refreshing chilled coffee with creamy milk.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
        // ID 7
dietaryTags: ["Veg", "Gluten-Free"],
ingredients: ["Coffee", "Milk", "Sugar", "Ice"],
nutrition: "220 calories"
    },

    {
        id: 8,
        name: "Fresh Orange Juice",
        category: "Drinks",
        restaurant: "Spice Garden",
        price: 80,
        description: "Freshly prepared orange juice.",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
       // ID 8
dietaryTags: ["Veg", "Gluten-Free"],
ingredients: ["Fresh oranges"],
nutrition: "110 calories" 
    },

    {
        id: 9,
        name: "Chocolate Cake",
        category: "Dessert",
        restaurant: "Spice Garden",
        price: 150,
        description: "Soft and delicious chocolate cake.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        // ID 9
dietaryTags: ["Veg"],
ingredients: ["Cocoa", "Flour", "Milk", "Sugar", "Chocolate"],
nutrition: "480 calories"
    },

    {
        id: 10,
        name: "Ice Cream",
        category: "Dessert",
        restaurant: "Spice Garden",
        price: 100,
        description: "Creamy vanilla ice cream.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
        // ID 10
dietaryTags: ["Veg"],
ingredients: ["Milk", "Sugar", "Vanilla extract"],
nutrition: "280 calories"
    },
    {
    id: 11,
    name: "Healthy Salad",
    category: "Healthy",
    restaurant: "Spice Garden",
    price: 130,
    description: "Fresh vegetables with a light dressing.",
    image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    dietaryTags: ["Veg", "Gluten-Free"],
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Carrot"],
    nutrition: "180 calories"
}
];


// ===============================
// CART
// ===============================

let cart = JSON.parse(localStorage.getItem("foodieCart")) || [];


// ===============================
// DISPLAY FOOD
// =============================
function displayFood(items) {

    const container = document.getElementById("foodContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (items.length === 0) {
        container.innerHTML = "<p>No food items found.</p>";
        return;
    }

    items.forEach(food => {

        const card = document.createElement("div");

        card.className = "food-card";

        card.innerHTML = `
            <img src="${food.image}" alt="${food.name}">

            <div class="food-info">

                <h3>${food.name}</h3>

                <p>${food.description}</p>

                <div class="dietary-tags">
                    ${food.dietaryTags
                        .map(tag => `<span>${tag}</span>`)
                        .join("")}
                </div>

                <p>
                    <strong>Ingredients:</strong>
                    ${food.ingredients.join(", ")}
                </p>

                <p>
                    <strong>Nutrition:</strong>
                    ${food.nutrition}
                </p>

                <span class="price">
                    ₹${food.price}
                </span>

                <a
                    class="add-button"
                    href="product.html?id=${food.id}"
                >
                    View Details
                </a>

            </div>
        `;

        container.appendChild(card);
    });
}
// ===============================
// FILTER FOOD
// ===============================

function filterFood(category) {

    const selectedRestaurant =
        new URLSearchParams(window.location.search)
            .get("restaurant");

    const restaurantItems = selectedRestaurant
        ? foodItems.filter(
            food => food.restaurant === selectedRestaurant
        )
        : foodItems;

    const filteredItems =
        category === "All"
            ? restaurantItems
            : restaurantItems.filter(
                food => food.category === category
            );

    displayFood(filteredItems);
}

// ===============================
// SEARCH FOOD
// ===============================

function searchFood() {

    const searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const selectedRestaurant =
        new URLSearchParams(window.location.search)
            .get("restaurant");

    const restaurantItems = selectedRestaurant
        ? foodItems.filter(
            food => food.restaurant === selectedRestaurant
        )
        : foodItems;

    const filtered = restaurantItems.filter(food =>
        food.name.toLowerCase().includes(searchText) ||
        food.category.toLowerCase().includes(searchText)
    );

    displayFood(filtered);
}    


// ===============================
// ADD TO CART
// ===============================

function addToCart(id) {

    const food = foodItems.find(item => item.id === id);

    const existingItem =
        cart.find(item => item.id === id);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            ...food,
            quantity: 1
        });
    }

    saveCart();

    updateCartCount();

    alert(`${food.name} added to cart!`);
}


// ===============================
// SAVE CART
// ===============================

function saveCart() {

    localStorage.setItem(
        "foodieCart",
        JSON.stringify(cart)
    );
}


// ===============================
// CART COUNT
// ===============================

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");

    if (!cartCount) {
        return;
    }

    const count = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = count;
}


// ===============================
// OPEN CART
// ===============================

function openCart() {

    document.getElementById("cartModal").style.display = "flex";

    displayCart();
}


// ===============================
// CLOSE CART
// ===============================

function closeCart() {

    document.getElementById("cartModal").style.display = "none";
}


// ===============================
// DISPLAY CART
// ===============================

function displayCart() {

    const cartContainer =
        document.getElementById("cartItems");

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML =
            "<p>Your cart is empty.</p>";

        document.getElementById("cartTotal").textContent = "0";

        return;
    }

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <div>

                <strong>${item.name}</strong>

                <p>
                    ₹${item.price} × ${item.quantity}
                </p>

            </div>

            <div class="quantity-controls">

                <button onclick="changeQuantity(${item.id}, -1)">
                    −
                </button>

                <span>${item.quantity}</span>

                <button onclick="changeQuantity(${item.id}, 1)">
                    +
                </button>

                <button onclick="removeFromCart(${item.id})">
                    🗑
                </button>

            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    document.getElementById("cartTotal").textContent = total;
}


// ===============================
// CHANGE QUANTITY
// ===============================

function changeQuantity(id, amount) {

    const item = cart.find(
        item => item.id === id
    );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(
            item => item.id !== id
        );
    }

    saveCart();

    updateCartCount();

    displayCart();
}


// ===============================
// REMOVE FROM CART
// ===============================

function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== id
    );

    saveCart();

    updateCartCount();

    displayCart();
}

// ===============================
// CHECKOUT
// ===============================

function showCardFields() {
    const payment = document.getElementById("payment").value;
    const cardFields = document.getElementById("cardFields");

    if (payment === "Card") {
        cardFields.style.display = "block";
    } else {
        cardFields.style.display = "none";
    }
}

function openCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    closeCart();

    document.getElementById(
        "checkoutModal"
    ).style.display = "flex";
}


function closeCheckout() {

    document.getElementById(
        "checkoutModal"
    ).style.display = "none";
}


// ===============================
// PLACE ORDER
// ===============================
const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {
    checkoutForm.addEventListener("submit", function(event) {


        event.preventDefault();

        const name =
            document.getElementById("customerName").value;

        const phone =
            document.getElementById("phone").value;

        const address =
            document.getElementById("address").value;

        const payment =
            document.getElementById("payment").value;


        const total = cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


        // Create order object

        const order = {

            orderId:
                "FD" +
                Math.floor(
                    100000 + Math.random() * 900000
                ),

            customerName: name,

            phone: phone,

            address: address,

            paymentMethod: payment,
           

deliveryTime:
    document.getElementById("deliveryTime").value,

items: cart,


            total: total,

            date: new Date().toLocaleString()
        };


        // Get previous orders

        let orders =
            JSON.parse(
                localStorage.getItem("foodieOrders")
            ) || [];


        // Add new order

        orders.push(order);


        // Save orders

        localStorage.setItem(
            "foodieOrders",
            JSON.stringify(orders)
        );


        // Display confirmation

        document.getElementById("orderMessage").innerHTML = `

            Thank you, <strong>${name}</strong>!<br><br>

            Your order ID is:
            <strong>${order.orderId}</strong><br><br>

            Total Amount:
            <strong>₹${total}</strong><br><br>

            Payment:
            <strong>${payment}</strong>
        `;


        // Clear cart

        cart = [];

        saveCart();

        updateCartCount();

        // Reset form

        document
            .getElementById("checkoutForm")
            .reset();


        closeCheckout();

        document.getElementById(
            "successModal"
        ).style.display = "flex";
    });
}

// ===============================
// CLOSE SUCCESS
// ===============================

function closeSuccess() {

    document.getElementById(
        "successModal"
    ).style.display = "none";
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been sent.");

        this.reset();
    });
}

// ===============================
// INITIAL LOAD
// ===============================

const selectedRestaurant =
    new URLSearchParams(window.location.search)
        .get("restaurant");

const restaurantFood = selectedRestaurant
    ? foodItems.filter(
        food => food.restaurant === selectedRestaurant
    )
    : foodItems;

const restaurantTitle =
    document.getElementById("restaurantTitle");

if (restaurantTitle && selectedRestaurant) {
    restaurantTitle.textContent =
        `${selectedRestaurant} Menu`;
}

displayFood(restaurantFood);

updateCartCount();