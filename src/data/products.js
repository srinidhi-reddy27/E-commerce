// src/data/products.js

// --- Product Data Array ---
// Note: All prices are in Indian Rupees (INR, symbol: ₹).
export const products = [
    // ===== Electronics =====
    {
        id: 1,
        sku: "ELEC-SMT-P10X",
        name: "Smartphone Pro X",
        brand: "TechGadget",
        price: 66399.17,
        originalPrice: 70549.17,
        category: "Electronics",
        images: [
            "/images/smartphone1.webp",
            "/images/smartphone2.webp",
            "/images/smartphone3.webp",
            "/images/smartphone4.webp",
            "/images/smartphone5.webp"
        ],
        description: "Experience the future with the Smartphone Pro X. Features a stunning OLED display, AI-powered triple camera system, and blazing-fast 5G connectivity.",
        specifications: { "Display": "6.7-inch Super Retina XDR", "Processor": "A17 Bionic Chip" },
        reviews: [{ user: "Alice", rating: 5, comment: "Amazing phone...", date: "2024-05-10" }],
        frequentlyBought: true,
        stock: 55,
        tags: ["smartphone"]
    },
    {
        id: 2,
        sku: "ELEC-AUD-NCWH",
        name: "Wireless Noise-Cancelling Headphones",
        brand: "SoundWave",
        price: 16558.50,
        category: "Electronics",
        images: [
            "/images/headphones1.webp",
            "/images/headphones2.jpg",
            "/images/headphones3.jpg",
            "/images/headphones4.jpg"
        ],
        description: "Immerse yourself in pure sound with advanced noise cancellation.",
        specifications: { "Type": "Over-ear" },
        reviews: [{ user: "Charlie", rating: 5, comment: "Best headphones...", date: "2024-04-20" }],
        frequentlyBought: true,
        stock: 120,
        tags: ["headphones"]
    },
    {
        id: 3,
        sku: "ELEC-TV-4K55",
        name: "Ultra HD 4K TV 55 inch",
        brand: "VisionMax",
        price: 41417.00,
        category: "Electronics",
        images: [
            "/images/Product3-1.webp",
            "/images/Product3-2.webp",
            "/images/Product3-3.webp",
            "/images/Product3-4.webp",
            "/images/Product3-5.webp"
        ],
        description: "Bring the cinema home with stunning 4K resolution.",
        specifications: { "Screen Size": "55 inches" },
        reviews: [{ user: "David", rating: 4, comment: "Great picture quality...", date: "2024-03-15" }],
        frequentlyBought: true,
        stock: 30,
        tags: ["tv"]
    },
    {
        id: 10,
        sku: "ELEC-LAP-ULTR1",
        name: "UltraSlim Laptop 14 inch",
        brand: "NovaTech",
        price: 78767.00,
        category: "Electronics",
        images: [
            "/images/laptop1.webp",
            "/images/laptop2.webp",
            "/images/laptop3.webp",
            "/images/laptop4.webp"
        ],
        description: "Powerful yet portable laptop for all your needs.",
        specifications: { "Processor": "Intel Core i5" },
        reviews: [{ user: "George", rating: 5, comment: "Perfect for work...", date: "2024-05-01" }],
        frequentlyBought: false,
        stock: 45,
        tags: ["laptop"]
    },

    // ===== Clothing =====
    {
        id: 4,
        sku: "CLO-MEN-TS01B",
        name: "Men's Classic Cotton T-Shirt",
        brand: "UrbanStyle",
        price: 2075.00,
        category: "Clothing",
        images: [
            "/images/TShirt1.jpg",
            "/images/TShirt2.jpg",
            "/images/TShirt3.jpg",
            "/images/TShirt4.jpg",
            "/images/TShirt5.jpg"
        ],
        description: "A wardrobe essential made from soft cotton.",
        specifications: { "Material": "100% Cotton" },
        reviews: [{ user: "Frank", rating: 5, comment: "Soft fabric...", date: "2024-05-05" }],
        frequentlyBought: true,
        stock: 250,
        tags: ["t-shirt"]
    },
    {
        id: 5,
        sku: "CLO-WOM-SHOE03",
        name: "Women's CloudRun Running Shoes",
        brand: "ActiveFit",
        price: 7137.17,
        originalPrice: 9130.00,
        category: "Clothing",
        images: [
            "/images/Shoe1.webp",
            "/images/Shoe2.webp",
            "/images/Shoe3.webp",
            "/images/Shoe4.webp",
            "/images/Shoe5.webp"
        ],
        description: "Lightweight and responsive running shoes.",
        specifications: { "Type": "Neutral Running" },
        reviews: [{ user: "Grace", rating: 5, comment: "Very comfortable...", date: "2024-04-10" }],
        frequentlyBought: true,
        stock: 88,
        tags: ["shoes"]
    },
    {
        id: 6,
        sku: "CLO-UNI-JEAN01",
        name: "Classic Straight-Fit Blue Jeans",
        brand: "DenimCo",
        price: 4975.85,
        category: "Clothing",
        images: [
            "/images/Pant1.jpg",
            "/images/Pant2.jpg",
            "/images/Pant3.jpg",
            "/images/Pant4.jpg",
            "/images/Pant5.jpg"
        ],
        description: "Timeless style with durable denim.",
        specifications: { "Material": "98% Cotton, 2% Elastane" },
        reviews: [{ user: "Judy", rating: 4, comment: "Good quality denim...", date: "2024-05-02" }],
        frequentlyBought: true,
        stock: 150,
        tags: ["jeans"]
    },
    {
        id: 11,
        sku: "CLO-WOM-DRESS01",
        name: "Women's Floral Midi Dress",
        brand: "SummerBloom",
        price: 5395.00,
        category: "Clothing",
        images: [
            "/images/floral.avif",
            "/images/floral1.avif",
            "/images/floral2.avif",
            "/images/floral3.avif",
            "/images/floral4.avif",
        ],
        description: "Elegant and breezy floral midi dress.",
        specifications: { "Material": "Viscose Blend" },
        reviews: [{ user: "Isla", rating: 5, comment: "Beautiful dress...", date: "2024-05-18" }],
        frequentlyBought: false,
        stock: 75,
        tags: ["dress"]
    },

    // ===== Home Goods =====
    {
        id: 7,
        sku: "HOME-KIT-COOK01",
        name: "10-Piece Non-Stick Cookware Set",
        brand: "KitchenMaster",
        price: 9960.00,
        category: "Home Goods",
        images: [
            "/images/Set1.webp",
            "/images/Set2.webp",
            "/images/Set3.webp",
            "/images/Set4.webp",
            "/images/Set5.webp"
        ],
        description: "Upgrade your kitchen with this non-stick set.",
        specifications: { "Pieces": "10 (incl. lids)" },
        reviews: [{ user: "Mallory", rating: 5, comment: "Makes cooking easier...", date: "2024-03-25" }],
        frequentlyBought: true,
        stock: 95,
        tags: ["cookware"]
    },
    {
        id: 8,
        sku: "HOME-APP-VAC02R",
        name: "Smart Robotic Vacuum Cleaner",
        brand: "CleanBot",
        price: 24817.00,
        originalPrice: 28967.00,
        category: "Home Goods",
        images: [
            "/images/Cleaner.webp",
            "/images/Cleaner1.webp",
            "/images/Cleaner2.webp",
            "/images/Cleaner3.webp",
            "/images/Cleaner4.webp"
        ],
        description: "Keep your floors spotless effortlessly.",
        specifications: { "Navigation": "LiDAR Mapping" },
        reviews: [{ user: "Oscar", rating: 4, comment: "Cleans well...", date: "2024-04-05" }],
        frequentlyBought: true,
        stock: 40,
        tags: ["vacuum"]
    },
    {
        id: 9,
        sku: "HOME-APP-COFF01E",
        name: "BaristaPro Espresso Coffee Machine",
        brand: "CafeStyle",
        price: 12491.50,
        category: "Home Goods",
        images: [
           "/images/coffee1.jpg",
           "/images/coffee2.jpg",
           "/images/coffee3.jpg",
           "/images/coffee4.jpg",
           "/images/coffee5.jpg"
        ],
        description: "Become your own barista with professional espresso.",
        specifications: { "Pump Pressure": "15 Bar" },
        reviews: [{ user: "Trent", rating: 5, comment: "Makes excellent coffee...", date: "2024-02-10" }],
        frequentlyBought: true,
        stock: 60,
        tags: ["coffee"]
    },
    {
        id: 12,
        sku: "HOME-DEC-LAMP01",
        name: "Modern LED Desk Lamp",
        brand: "LightUp",
        price: 3319.17,
        category: "Home Goods",
        images: [
            "/images/Photo_Lamp1.jpg",
            "/images/Photo_Lamp2.jpg",
            "/images/Photo_Lamp3.jpg",
            "/images/Photo_Lamp4.jpg",
            "/images/Photo_Lamp5.jpg"
        ],
        description: "Illuminate your workspace with modern design.",
        specifications: { "Light Source": "LED" },
        reviews: [{ user: "Victor", rating: 5, comment: "Great lamp...", date: "2024-05-15" }],
        frequentlyBought: false,
        stock: 110,
        tags: ["lamp"]
    },
];

// --- Helper Functions ---
export const getCategories = () => {
    const categories = products.map(p => p.category.trim());
    return [...new Set(categories)];
};

export const getFrequentlyBought = (countPerCategory = 1) => {
    const categories = getCategories();
    const frequentlyBought = [];
    categories.forEach(category => {
        const allCategoryProducts = products.filter(p => p.category === category);
        const frequentInCategory = allCategoryProducts.filter(p => p.frequentlyBought);
        const neededFrequent = Math.min(countPerCategory, frequentInCategory.length);
        frequentlyBought.push(...frequentInCategory.slice(0, neededFrequent));
        const remainingNeeded = countPerCategory - neededFrequent;
        if (remainingNeeded > 0) {
            const otherProducts = allCategoryProducts.filter(p => !p.frequentlyBought);
            frequentlyBought.push(...otherProducts.slice(0, remainingNeeded));
        }
    });
    return frequentlyBought;
};

export const getProductById = (id) => {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) return undefined;
    return products.find(p => p.id === numericId);
};

export const getProductsByCategory = (categoryName) => {
    if (!categoryName) return [];
    const lowerCaseCategoryName = categoryName.toLowerCase().trim();
    return products.filter(p => p.category.toLowerCase() === lowerCaseCategoryName);
};

export const searchProducts = (searchTerm) => {
    if (!searchTerm || typeof searchTerm !== 'string' || searchTerm.trim() === '') return [];
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
    return products.filter(p =>
        p.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        (p.brand && p.brand.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (p.description && p.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (p.tags && p.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))) ||
        (p.sku && p.sku.toLowerCase().includes(lowerCaseSearchTerm))
    );
};