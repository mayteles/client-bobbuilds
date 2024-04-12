# Project Title
Bobbuilds

## Overview

BobBuilds is an e-commerce platform specializing in the retail distribution of consumer goods, facilitating transactions between suppliers or B2B entities and contractors or individual customers.

### Problem

BobBuilds has developed a system aimed at tackling various challenges within the construction material delivery and procurement sector. Originating with the primary objective of facilitating online sales of job materials, BobBuilds has evolved to address issues concerning logistics, personalization, national markets, third-party sellers, payments, personalized assistance in the construction material industry, thus revolutionizing the traditional practices that have remained largely unchanged over the years, spanning from small to large suppliers.

### User Profile

- Online Shoppers:
    - Seeking various products across different categories.
    - Interested in finding deals and discounts.
    - Looking for schedule and selecting products without need to talk with someone on the phone
    - Comparing prices and features before making a purchase
    - Seeking fast and reliable shipphing options
    - Several material orders from various suppliers are consolidated into a single order for scheduled or same-day delivery.

### Features

- As a user, I want to be able to search for products by keyworks.
- As a user, I want to be able to filter search results by various criteria such as prince range, brand, and more.

- As a user, I want to be able to view detailed product information including descriptions, specifications, and customer reviews.
- As a user, I want to be able to add products to my shopping cart for later purchase.
- As a user, I want to be able to proceed to checkout and complete my purchase securely.
- As a user, I want to be able to track the status of my orders and view estimated delivery times.
- As a user, I want to be able to manage my account information, including shipping addresses and payment methods.

- As a logged-in user, I want to be able to view my order history to track past purchases. 
- As a logged-in user, I want to be able to track the status of my returns and refunds.
- As a logged-in user, I want to return material and get credit for it for future purchase
- As a logged-in user, I want to be able to access my receipt, track it for specific PO numbers


## Implementation of BobBuilds

### Tech Stack
- Frontend
    - React.JS
    - HTML/SASS: For structuring and styling the web pages.
    - Bootstrap: For designing responsive
- Backend
    - MySQL
        - Redux: For state management, especially for handling user authentication and shopping cart data.
    - Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - express
- Deplyment
    - Amazon Web Servers (AWS): For deploying the application to a cloud platform for scalability and reliability.
    - Docker: For containerization and ensuring consistency across different environments.

### APIs

- BobBuilds may integrate with various APIs to enhance its functionality:
- Payment Gateway APIs (e.g., Stripe): For securely processing payments and managing transactions.
- Shipping APIs (e.g., UPS, FedEx): For calculating shipping costs, generating labels, and tracking shipments in real-time.
- Geolocation APIs (e.g., Google Maps API): For providing location-based services such as store locators and delivery tracking.
- Product Information APIs (e.g., bobBuilds Product Advertising API): For fetching product details, images, and reviews from external sources.

### Sitemap

- Home: Displaying featured products, promotions, and announcements.
    - Products: Listing various categories and subcategories of products available for purchase.
        - Product Details: Showing detailed information about a selected product, including descriptions, specifications, and customer reviews.
- Shopping Cart: Allowing users to view and manage items added to their cart before proceeding to checkout.
    - Checkout: Guiding users through the payment process, including selecting shipping options and entering billing information.
    - Returns and Refunds: Allowing users to initiate returns, track return status, and request refunds.
- Login: Provide acces to logged user    
- Account Management: Providing users with options to view order history, manage shipping addresses, and update payment methods.
- Help and Support: Offering resources, FAQs, and contact information for customer assistance.
- Registe: Provide user to create logged profile

### Mockups

#### Home Page
![](home.png) Featuring a carousel of featured products, navigation menu, and search bar.
#### Register Page
![](register.png)

#### Login Page
![](login.png)

#### Shopping Cart Page
![](Cart-page.png) Presenting a summary of items in the cart, with options for quantity adjustment and removal.

#### Checkout Page
![](check-out.png) Providing fields for entering shipping and billing information, as well as payment method selection.

### Data

![](sql-diagram.png)

### Authentication Endpoints

**POST /user/register**

- Registers a new user account.
    - Request Body: (perl)
    {
        "email": "example@example.com",
        "password": "password123"
    }

    - Response: (json)
    {
        "message": "User successfully registered"
    }

**POST/users/login**
    - Request Body: (perl)
    {
        "email": "example@example.com",
        "password": "password123"
    }
    - Response: (json)
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
    }

### Product Endpoints

**GET /products**
    - retrieves a list of products 

## Query Parameters:
- category (optional): Filters products by category
- brand (optional): Filters products by brand.
    - response: (css)

    [    {        "id": 1,        "name": "Product 1",        "category": "Category 1",        "brand": "Brand A",        "price": 20.99,        "description": "Product 1 description",        "rating": 4.5    },    {        "id": 2,        "name": "Product 2",        "category": "Category 2",        "brand": "Brand B",        "price": 15.99,        "description": "Product 2 description",        "rating": 3.8    },    ...]

**GET /products/:id**
    - Retrieves detailed information about a specific product.

## Parameters

- id:Product ID.

- Response (json)

{
    "id": 1,
    "name": "Product 1",
    "category": "Category 1",
    "brand": "Brand A",
    "price": 20.99,
    "description": "Product 1 description",
    "rating": 4.5,
    "reviews": [
        {
            "user": "User A",
            "rating": 4.5,
            "comment": "Great product!"
        },
        ...
    ]
}

**POST/products/:id/review**
    - adds a review for a specific product

## Parameters

- id: Products ID

- Request body (json)

{
    "rating": 4.5,
    "comment": "Great product!"
}

- Response (json)

{
    "message": "Review added successfully"
}

**GET /products/:id/reviews**
    - Retrieves reviews for a specific product.

## Parameters

- id: Product ID.

- Response (css)

    [    {        "user": "User A",        "rating": 4.5,        "comment": "Great product!"    },    {        "user": "User B",        "rating": 3.8,        "comment": "Could be better."    },    ...]


### order Endpoints

**POST/orders**

- Place a new order

- Request Body (json)

{
    "products": [
        {
            "product_id": 1,
            "quantity": 2
        },
        {
            "product_id": 3,
            "quantity": 1
        }
    ],
    "shipping_address": "123 Main St, City, Country",
    "payment_method": "credit_card"
}

- Response (json)
{
    "message": "Order placed successfully"
}

**GET/orders**

- Retrieves a list of orders for the logged-in user

- Response (css)
[    {        "id": 1,        "products": [      {       "id": 1,          "name": "Product 1",           "quantity": 2           },     ...     ],
        "total_price": 56.97,
        "status": "shipped"
    },
    ...
]
