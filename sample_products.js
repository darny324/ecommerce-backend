const products = [
  {
    name: "Wireless Bluetooth Headphones",
    shortName: "BT Headphones",
    productType: "electronics",
    priceInCents: 5999,
    brand: "SoundMax",
    discount: 10,
    totalStock: 50,
    options: [
      {
        name: "normal",
        inStock: 20,
        priceInCents: 5999,
        availableColors: ["#000000", "#ff0000", "#ffffff"],
        availableSizes: [],
      }
    ],
    ratings: 4.5,
    reviews: [
      {
        userName: "John Doe",
        userId: "65a4bc12e9b73c001fc8f45a",
        review: "Great sound quality!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Noise Cancellation", "Microphone"],
    attributes: {
      chargingType: "Wireless and USB-C fast charging",
      material: "Carbon"
    },
    description: "Premium wireless headphones with deep bass and noise cancellation.",
    returnPolicy: "30-day return policy",
    images: ["headphones1.jpg", "headphones2.jpg"]
  },
  {
    name: "Smart LED TV 55-inch",
    shortName: "Smart TV",
    productType: "electronics",
    priceInCents: 42999,
    brand: "VisionTech",
    discount: 15,
    totalStock: 30,
    options: [
      {
        name: "55-inch",
        inStock: 15,
        priceInCents: 42999,
        availableColors: ["#000000"],
        availableSizes: [],
      }
    ],
    ratings: 4.7,
    reviews: [
      {
        userName: "Alice Smith",
        userId: "65a4bc34e9b73c001fc8f47c",
        review: "Amazing picture quality!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["4K Ultra HD", "HDR10", "Smart Apps"],
    attributes: {
      screenType: "LED",
      resolution: "4K UHD",
      refreshRate: "120Hz"
    },
    description: "Experience ultra-HD visuals with a 55-inch smart LED TV.",
    returnPolicy: "14-day return policy",
    images: ["tv1.jpg", "tv2.jpg"]
  },
  {
    name: "Gaming Laptop",
    shortName: "Gaming Laptop",
    productType: "electronics",
    priceInCents: 129999,
    brand: "PowerTech",
    discount: 5,
    totalStock: 25,
    options: [
      {
        name: "16GB RAM, 512GB SSD",
        inStock: 10,
        priceInCents: 129999,
        availableColors: ["#222222", "#444444"],
        availableSizes: [],
      }
    ],
    ratings: 4.8,
    reviews: [
      {
        userName: "Mike Johnson",
        userId: "65a4bc56e9b73c001fc8f49d",
        review: "Runs all my games smoothly!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["RTX 3060", "144Hz Display", "RGB Keyboard"],
    attributes: {
      processor: "Intel i7 12th Gen",
      graphicsCard: "NVIDIA RTX 3060",
      batteryLife: "Up to 8 hours"
    },
    description: "High-performance gaming laptop with powerful GPU and fast display.",
    returnPolicy: "30-day return policy",
    images: ["laptop1.jpg", "laptop2.jpg"]
  },
  {
    name: "Smartphone X Pro",
    shortName: "Smartphone X",
    productType: "electronics",
    priceInCents: 89999,
    brand: "TechOne",
    discount: 8,
    totalStock: 40,
    options: [
      {
        name: "128GB Storage",
        inStock: 25,
        priceInCents: 89999,
        availableColors: ["#000000", "#ffffff", "#a1a1a1"],
        availableSizes: [],
      }
    ],
    ratings: 4.6,
    reviews: [
      {
        userName: "Sarah Lee",
        userId: "65a4bc78e9b73c001fc8f4be",
        review: "Super fast and great camera!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["5G", "AMOLED Display", "Triple Camera"],
    attributes: {
      battery: "4500mAh",
      charging: "Fast Charging 50W",
      os: "Android 13"
    },
    description: "A powerful smartphone with stunning display and fast performance.",
    returnPolicy: "14-day return policy",
    images: ["phone1.jpg", "phone2.jpg"]
  }, 
  {
    name: "Men's Cotton T-Shirt",
    shortName: "Cotton Tee",
    productType: "clothes",
    priceInCents: 1999,
    brand: "FashionFit",
    discount: 5,
    totalStock: 100,
    options: [
      {
        name: "Standard Fit",
        inStock: 40,
        priceInCents: 1999,
        availableColors: ["#000000", "#ffffff", "#ff5733"],
        availableSizes: ["S", "M", "L", "XL"],
      }
    ],
    ratings: 4.4,
    reviews: [
      {
        userName: "Alex Carter",
        userId: "65a4bc12e9b73c001fc8f45a",
        review: "Very comfortable and great fit!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["100% Cotton", "Breathable Fabric"],
    attributes: {
      material: "Cotton",
      sleeveType: "Short Sleeve"
    },
    description: "Soft and breathable cotton t-shirt, perfect for daily wear.",
    returnPolicy: "15-day return policy",
    images: ["tshirt1.jpg", "tshirt2.jpg"]
  },
  {
    name: "Women's Denim Jacket",
    shortName: "Denim Jacket",
    productType: "clothes",
    priceInCents: 4999,
    brand: "UrbanStyle",
    discount: 10,
    totalStock: 50,
    options: [
      {
        name: "Classic Fit",
        inStock: 20,
        priceInCents: 4999,
        availableColors: ["#1e3d59", "#708090"],
        availableSizes: ["S", "M", "L"],
      }
    ],
    ratings: 4.7,
    reviews: [
      {
        userName: "Emily Smith",
        userId: "65a4bc34e9b73c001fc8f47c",
        review: "Stylish and comfortable!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Durable Fabric", "Slim Fit"],
    attributes: {
      material: "Denim",
      closureType: "Button-up"
    },
    description: "A trendy denim jacket for a stylish casual look.",
    returnPolicy: "30-day return policy",
    images: ["jacket1.jpg", "jacket2.jpg"]
  },
  {
    name: "Unisex Hooded Sweatshirt",
    shortName: "Hoodie",
    productType: "clothes",
    priceInCents: 3499,
    brand: "CozyWear",
    discount: 15,
    totalStock: 80,
    options: [
      {
        name: "Pullover",
        inStock: 35,
        priceInCents: 3499,
        availableColors: ["#000000", "#808080", "#ff0000"],
        availableSizes: ["M", "L", "XL", "XXL"],
      }
    ],
    ratings: 4.6,
    reviews: [
      {
        userName: "Ryan Johnson",
        userId: "65a4bc56e9b73c001fc8f49d",
        review: "Really warm and comfy!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Fleece Lining", "Adjustable Hood"],
    attributes: {
      material: "Cotton Blend",
      pocketType: "Kangaroo Pocket"
    },
    description: "A warm and cozy hoodie, great for winter wear.",
    returnPolicy: "30-day return policy",
    images: ["hoodie1.jpg", "hoodie2.jpg"]
  },
  {
    name: "Women's Summer Dress",
    shortName: "Summer Dress",
    productType: "clothes",
    priceInCents: 5999,
    brand: "Elegance",
    discount: 20,
    totalStock: 60,
    options: [
      {
        name: "Floral Pattern",
        inStock: 30,
        priceInCents: 5999,
        availableColors: ["#ff69b4", "#fffacd", "#8b0000"],
        availableSizes: ["S", "M", "L"],
      }
    ],
    ratings: 4.5,
    reviews: [
      {
        userName: "Sophia Martinez",
        userId: "65a4bc78e9b73c001fc8f4be",
        review: "Looks amazing and fits perfectly!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Lightweight Fabric", "Floral Design"],
    attributes: {
      material: "Chiffon",
      sleeveType: "Sleeveless"
    },
    description: "A stylish summer dress with a breezy and elegant look.",
    returnPolicy: "15-day return policy",
    images: ["dress1.jpg", "dress2.jpg"]
  },
  {
    name: "Professional Basketball",
    shortName: "Basketball",
    productType: "sports",
    priceInCents: 2999,
    brand: "ProHoops",
    discount: 10,
    totalStock: 50,
    options: [
      {
        name: "Standard Size 7",
        inStock: 25,
        priceInCents: 2999,
        availableColors: ["#ff8c00", "#000000"],
        availableSizes: ["7"],
      }
    ],
    ratings: 4.7,
    reviews: [
      {
        userName: "James Carter",
        userId: "65a4bc12e9b73c001fc8f45a",
        review: "Great grip and bounce!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Durable Rubber", "Indoor & Outdoor Use"],
    attributes: {
      material: "Composite Leather",
      weight: "600g"
    },
    description: "A high-quality basketball designed for both indoor and outdoor play.",
    returnPolicy: "30-day return policy",
    images: ["basketball1.jpg", "basketball2.jpg"]
  },
  {
    name: "Running Shoes",
    shortName: "Running Shoes",
    productType: "sports",
    priceInCents: 5999,
    brand: "SpeedRunner",
    discount: 15,
    totalStock: 100,
    options: [
      {
        name: "Men's Running Shoes",
        inStock: 40,
        priceInCents: 5999,
        availableColors: ["#000000", "#ffffff", "#00ff00"],
        availableSizes: ["8", "9", "10", "11"],
      }
    ],
    ratings: 4.6,
    reviews: [
      {
        userName: "Mark Johnson",
        userId: "65a4bc34e9b73c001fc8f47c",
        review: "Very lightweight and comfortable for long runs.",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Breathable Mesh", "Shock Absorption"],
    attributes: {
      soleType: "Rubber",
      closureType: "Lace-up"
    },
    description: "Premium running shoes designed for comfort and performance.",
    returnPolicy: "30-day return policy",
    images: ["shoes1.jpg", "shoes2.jpg"]
  },
  {
    name: "Yoga Mat",
    shortName: "Yoga Mat",
    productType: "sports",
    priceInCents: 2499,
    brand: "ZenFlex",
    discount: 20,
    totalStock: 70,
    options: [
      {
        name: "Non-Slip 6mm",
        inStock: 35,
        priceInCents: 2499,
        availableColors: ["#800080", "#008000", "#ff69b4"],
        availableSizes: ["Standard"],
      }
    ],
    ratings: 4.8,
    reviews: [
      {
        userName: "Lisa Anderson",
        userId: "65a4bc56e9b73c001fc8f49d",
        review: "Perfect grip and thickness for yoga sessions!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Eco-Friendly Material", "Non-Slip Surface"],
    attributes: {
      material: "TPE",
      thickness: "6mm"
    },
    description: "A non-slip yoga mat for comfort and stability during workouts.",
    returnPolicy: "15-day return policy",
    images: ["yogamat1.jpg", "yogamat2.jpg"]
  },
  {
    name: "Adjustable Dumbbells",
    shortName: "Dumbbells",
    productType: "sports",
    priceInCents: 8999,
    brand: "MuscleForge",
    discount: 10,
    totalStock: 40,
    options: [
      {
        name: "20kg Set",
        inStock: 20,
        priceInCents: 8999,
        availableColors: ["#000000", "#808080"],
        availableSizes: ["20kg"],
      }
    ],
    ratings: 4.7,
    reviews: [
      {
        userName: "David Brown",
        userId: "65a4bc78e9b73c001fc8f4be",
        review: "Great build quality, easy to adjust weight.",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Adjustable Weights", "Non-Slip Grip"],
    attributes: {
      material: "Iron",
      weightRange: "5kg - 20kg"
    },
    description: "A versatile dumbbell set with adjustable weight options.",
    returnPolicy: "30-day return policy",
    images: ["dumbbells1.jpg", "dumbbells2.jpg"]
  },
  {
    name: "The Art of Programming",
    shortName: "Art of Programming",
    productType: "books",
    priceInCents: 4999,
    brand: "TechPress",
    discount: 10,
    totalStock: 30,
    options: [
      {
        name: "Hardcover",
        inStock: 15,
        priceInCents: 4999,
        availableColors: ["#000000"],
        availableSizes: ["Standard"],
      }
    ],
    ratings: 4.8,
    reviews: [
      {
        userName: "John Doe",
        userId: "65a4bc12e9b73c001fc8f45a",
        review: "A must-read for any programmer!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Comprehensive Guide", "Best-Seller"],
    attributes: {
      author: "Donald Knuth",
      pages: 800,
      language: "English"
    },
    description: "An in-depth guide to mastering programming concepts and algorithms.",
    returnPolicy: "30-day return policy",
    images: ["programming1.jpg", "programming2.jpg"]
  },
  {
    name: "The History of Time",
    shortName: "History of Time",
    productType: "books",
    priceInCents: 2999,
    brand: "SciRead",
    discount: 5,
    totalStock: 50,
    options: [
      {
        name: "Paperback",
        inStock: 25,
        priceInCents: 2999,
        availableColors: ["#0000ff"],
        availableSizes: ["Standard"],
      }
    ],
    ratings: 4.7,
    reviews: [
      {
        userName: "Alice Johnson",
        userId: "65a4bc34e9b73c001fc8f47c",
        review: "A fascinating exploration of time and space!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Scientific Insights", "Easy to Understand"],
    attributes: {
      author: "Stephen Hawking",
      pages: 256,
      language: "English"
    },
    description: "A popular science book that explains time and the universe.",
    returnPolicy: "30-day return policy",
    images: ["history1.jpg", "history2.jpg"]
  },
  {
    name: "Mastering React",
    shortName: "React Guide",
    productType: "books",
    priceInCents: 3999,
    brand: "DevBooks",
    discount: 15,
    totalStock: 40,
    options: [
      {
        name: "Ebook",
        inStock: 30,
        priceInCents: 3999,
        availableColors: [],
        availableSizes: ["Digital"],
      }
    ],
    ratings: 4.6,
    reviews: [
      {
        userName: "Mike Robertson",
        userId: "65a4bc56e9b73c001fc8f49d",
        review: "Helped me improve my React skills a lot!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Hands-on Examples", "Latest React Features"],
    attributes: {
      author: "Eric Elliott",
      pages: 350,
      language: "English"
    },
    description: "A complete guide to building modern applications with React.",
    returnPolicy: "Non-refundable (Digital Product)",
    images: ["react1.jpg", "react2.jpg"]
  },
  {
    name: "Fantasy World: A Novel",
    shortName: "Fantasy World",
    productType: "books",
    priceInCents: 2599,
    brand: "NovelHouse",
    discount: 20,
    totalStock: 60,
    options: [
      {
        name: "Paperback",
        inStock: 40,
        priceInCents: 2599,
        availableColors: ["#ff4500"],
        availableSizes: ["Standard"],
      }
    ],
    ratings: 4.5,
    reviews: [
      {
        userName: "Sophia Martinez",
        userId: "65a4bc78e9b73c001fc8f4be",
        review: "Amazing storytelling and characters!",
        rating: 5
      }
    ],
    totalReviews: 1,
    features: ["Bestselling Novel", "Fantasy Adventure"],
    attributes: {
      author: "J.K. Rowling",
      pages: 480,
      language: "English"
    },
    description: "An epic fantasy novel filled with adventure and magic.",
    returnPolicy: "30-day return policy",
    images: ["fantasy1.jpg", "fantasy2.jpg"]
  }
];

module.exports = {products};
