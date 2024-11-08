# Swiggy Clone - Front-End with Angular

A front-end clone of Swiggy, built using Angular, simulating a food discovery platform with essential UI elements, interactions, and static data for an engaging user experience.

## Objective

This project replicates Swiggy’s core UI and user interactions, focusing on a simplified front-end-only version. Using Angular, the project implements essential components such as a homepage, restaurant listings, menu interactions, favorites, and cart features.

## Features

### Homepage
- A visually appealing homepage that displays:
  - **Featured Restaurants** with sample data.
  - **Popular Cuisines or Categories** to explore different types of food.
  - **Search Bar** to filter and search food items by name.
- The homepage closely resembles Swiggy’s UI for a consistent user experience.

### Favorites Page
- A dedicated page for users to view their favorite food items.
- Utilizes **Angular Services** or **localStorage** to keep track of favorite items within the user’s session.

### Cart Simulation
- An **Add to Cart** feature for menu items, accessible from each restaurant’s detail page.
- **Real-Time Price Calculation** in a service to show updated cart total as items are added or removed.
- A separate **Cart Page** to display selected items and the total price.

### 4. Static Data Management
  - **Restaurant Details**: Basic information about each restaurant, such as name, cuisine, and location.
  - **Menu Items**: Static lists of menu items for each restaurant.
- Favorites and cart items are managed via Angular services or localStorage to simulate session-based data storage.

### 5. Authentication
- Basic **authentication system** using MockAPI to manage user sessions and simulate login/logout functionality.

### 6. Order Management
- User order details are stored in MockAPI.


### Components

- **categories-section**: Displays a list of available food categories for users to browse, such as pizza, desserts, and drinks. Helps users filter and explore different food types.

- **category-card**: Represents an individual category card with an image and name of the category. Used within the `categories-section` to present a visually appealing grid of food categories.

- **delivery-card**: Shows details for individual delivery options, highlighting details like delivery fees or estimated delivery time.

- **delivery-section**: Groups multiple `delivery-card` components, presenting all available delivery options in a single section.

- **dish-page**: Displays detailed information for a specific dish, including its description, ingredients, price, and an option to add it to the cart.

- **favourites-page**: Provides a page that displays a list of the user’s favorite food items. Uses Angular services or `localStorage` to manage and persist the list of favorite items.

- **food-item**: Represents an individual food item card, displaying the item's name, price, image, and an option to add it to the cart. This component is used across various pages for displaying food items.

- **food-options**: Allows users to customize their food choices by providing options like toppings, spice levels, or portion sizes for selected items.

- **footer**: Contains the footer of the site, providing links, copyright info, and other essential site information.

- **grocery-card**: Displays a grocery item in card format, including details like name, price, and an option to add it to the cart.

- **grocery-section**: Groups multiple `grocery-card` components, displaying all available grocery items in a structured section.

- **hero-section**: The main banner or hero area at the top of the homepage, often used for promotions or to attract user attention with a large, visually appealing image or message.

- **home-page**: The landing page of the application, displaying a combination of featured restaurants, popular items, categories, groceries, and delivery options.

- **models**: Contains TypeScript interfaces or models, defining the structure of data objects used across the app, such as `CartItem` or `Restaurant`.

- **navbar**: The navigation bar that provides links to different sections of the application, including Home, Favorites, and Cart.

- **restaurant-page**: Displays detailed information about a selected restaurant, including its menu items, description, and reviews.

- **restaurant-section**: Shows a list of restaurants available on the platform, with options to filter or search.
