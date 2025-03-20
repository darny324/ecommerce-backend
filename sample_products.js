const products = [
  {
    "name": "Wireless Bluetooth Headphones",
    "shortName": "BT Headphones",
    "productType": "electronics",
    "priceInCents": 5999,
    "brand": "SoundMax",
    "discount": 10,
    "totalStock": 50,
    "options": [
      {
        "color": { "hex": "#000000", "label": "black"}, 
        "sizes": [
          { "label": "sm", "inStockPercent": 35}, 
          { "label": "md", "inStockPercent": 65},
        ], 
        "inStockPercent": 20, 
      }, {
        "color": { "hex": "#ffffff", "label": "white"}, 
        "sizes": [
          { "label": "sm", "inStockPercent": 35}, 
          { "label": "md", "inStockPercent": 65},
        ], 
        "inStockPercent": 40, 
      }, {
        "color": { "hex": "#ff0000", "label": "red"}, 
        "sizes": [
          { "label": "sm", "inStockPercent": 35}, 
          { "label": "md", "inStockPercent": 65},
        ], 
        "inStockPercent": 40, 
      }
    ],
    "ratings": 4.5,
    "reviews": [
      {
        "userName": "John Doe",
        "userId": "65a4bc12e9b73c001fc8f45a",
        "review": "Great sound quality!", 
        "rating": 4.5
      }
    ],
    "totalReviews": 1,
    "features": ["Noise Cancellation", "Microphone"],
    "attributes": {
      "chargingType": "Wireless and USB-C fast charging", 
      "material": "Carbon"
    },
    "description": "Premium wireless headphones with deep bass and noise cancellation.",
    "returnPolicy": "30-day return policy",
    "images": ["headphones1.jpg", "headphones2.jpg"]
  },
  {
    "name": "Men's Running Shoes",
    "shortName": "Running Shoes",
    "productType": "sports",
    "priceInCents": 7999,
    "brand": "RunFast",
    "discount": 15,
    "totalStock": 30,
    "options": [
      {"size": "10", "color": "Blue"},
      {"size": "9", "color": "Black"}
    ],
    "ratings": 4.2,
    "reviews": [
      {
        "userName": "Mike Smith",
        "userId": "65b7cde891a62f0032c9a712",
        "review": "Very comfortable for long runs!"
      }
    ],
    "totalReviews": 1,
    "features": {"Breathable": true, "Lightweight": true},
    "attributes": {"Material": "Mesh", "Sole Type": "Rubber"},
    "description": "Durable and lightweight running shoes for daily training.",
    "returnPolicy": "15-day return policy",
    "images": ["shoes1.jpg", "shoes2.jpg"]
  },
  {
    "name": "Yoga Mat with Extra Cushion",
    "shortName": "Yoga Mat",
    "productType": "sports",
    "priceInCents": 2999,
    "brand": "FlexFit",
    "discount": 5,
    "totalStock": 40,
    "options": [
      {"color": "Green", "thickness": "8mm"}
    ],
    "ratings": 4.7,
    "reviews": [
      {
        "userName": "Emily Johnson",
        "userId": "65c12dfe8b6a4a002d3f87b1",
        "review": "Perfect for yoga sessions!"
      }
    ],
    "totalReviews": 1,
    "features": {"Non-slip": true, "Eco-friendly": true},
    "attributes": {"Material": "TPE", "Dimensions": "72x24 inches"},
    "description": "High-quality yoga mat with non-slip surface and extra cushioning.",
    "returnPolicy": "30-day return policy",
    "images": ["yogamat1.jpg", "yogamat2.jpg"]
  },
  {
    "name": "Bestseller Mystery Novel",
    "shortName": "Mystery Book",
    "productType": "books",
    "priceInCents": 1499,
    "brand": "Penguin Books",
    "discount": 0,
    "totalStock": 100,
    "options": [
      {"format": "Hardcover", "pages": 320}
    ],
    "ratings": 4.8,
    "reviews": [
      {
        "userName": "Sarah Brown",
        "userId": "65d98ba47c3f60002f4b73d5",
        "review": "Couldn't put it down!"
      }
    ],
    "totalReviews": 1,
    "features": {"Genre": "Mystery", "Bestseller": true},
    "attributes": {"Author": "Jane Doe", "Language": "English"},
    "description": "A thrilling mystery novel with unexpected twists.",
    "returnPolicy": "No returns on books",
    "images": ["mysterybook1.jpg", "mysterybook2.jpg"]
  }
];
