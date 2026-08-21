const restaurants = [
    {
        name: "Spice Garden",
        cuisine: "Indian",
        rating: 4.6,
        price: 350,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    },
    {
        name: "Pizza House",
        cuisine: "Italian",
        rating: 4.4,
        price: 650,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
    {
        name: "Burger Point",
        cuisine: "Fast Food",
        rating: 4.2,
        price: 250,
         image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"       
    }
];

const restaurantContainer =
    document.getElementById("restaurantContainer");

function displayRestaurants(items) {
    if (items.length === 0) {
        restaurantContainer.innerHTML =
            "<p>No restaurants found.</p>";
        return;
    }

    restaurantContainer.innerHTML = items.map(restaurant => `
        <article class="restaurant-card">
                        <img
                src="${restaurant.image}"
                alt="${restaurant.name}"
                onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'"
            >

            <div class="restaurant-info">
                <h2>${restaurant.name}</h2>
                <p>Cuisine: ${restaurant.cuisine}</p>
                <p>Rating: ${restaurant.rating}</p>
                <p>Price: ₹${restaurant.price}</p>
                                <a
                    href="menu.html?restaurant=${encodeURIComponent(restaurant.name)}"
                    class="add-button"
                >
                    View Menu
                </a>
            </div>
        </article>
    `).join("");
}

function filterRestaurants() {
    const cuisine =
        document.getElementById("cuisineFilter").value;

    const minimumRating =
        Number(document.getElementById("ratingFilter").value);

    const maximumPrice =
        document.getElementById("priceFilter").value;

    const filtered = restaurants.filter(restaurant => {
        const cuisineMatches =
            cuisine === "All" ||
            restaurant.cuisine === cuisine;

        const ratingMatches =
            restaurant.rating >= minimumRating;

        const priceMatches =
            maximumPrice === "All" ||
            restaurant.price <= Number(maximumPrice);

        return cuisineMatches &&
               ratingMatches &&
               priceMatches;
    });

    displayRestaurants(filtered);
}

document
    .getElementById("cuisineFilter")
    .addEventListener("change", filterRestaurants);

document
    .getElementById("ratingFilter")
    .addEventListener("change", filterRestaurants);

document
    .getElementById("priceFilter")
    .addEventListener("change", filterRestaurants);

displayRestaurants(restaurants);