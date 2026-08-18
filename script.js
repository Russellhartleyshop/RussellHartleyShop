const products = [
  {
    id: 1,
    name: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 149,
    rating: 4.9,
    reviews: 382,
    badge: "Best seller",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "Rayban Smartglasses",
    category: "Electronics",
    price: 119,
    rating: 4.8,
    reviews: 241,
    badge: "New",
    image: "electronics/61fspqEKV3L._AC_UY218_.jpg"
  },
  {
    id: 3,
    name: "Multiple Charger Port",
    category: "Electronics",
    price: 89,
    rating: 4.7,
    reviews: 312,
    badge: "Hot deal",
    image: "electronics/51lGPGOkjUL._AC_UY218_.jpg"
  },
  {
    id: 4,
    name: "JBL headphones",
    category: "Electronics",
    price: 74,
    rating: 4.6,
    reviews: 198,
    badge: "Trending",
    image: "electronics/61kFL7ywsZS._AC_UY218_.jpg"
  },
  {
    id: 5,
    name: "Digital Rice Cooker",
    category: "Electronics",
    price: 34,
    rating: 4.8,
    reviews: 241,
    badge: "Best seller",
    image: "electronics/61x9NkiKkUS._AC_UY218_.jpg"
  },
  {
    id: 6,
    name: "Pressure Cooker",
    category: "Electronics",
    price: 49,
    rating: 4.7,
    reviews: 176,
    badge: "New",
    image: "electronics/61xsscK90-L._AC_UY218_.jpg"
  },
  {
    id: 7,
    name: "Handheld Air Blower",
    category: "Electronics",
    price: 89,
    rating: 4.6,
    reviews: 163,
    badge: "Popular",
    image: "electronics/713BEhBxXWL._AC_UY218_.jpg"
  },
  {
    id: 8,
    name: "Electric Multi-Cooker",
    category: "Electronics",
    price: 39,
    rating: 4.5,
    reviews: 143,
    badge: "Popular",
    image: "electronics/71BtCeOGssL._AC_UY218_.jpg"
  },
  {
    id: 9,
    name: "Hydrating Skin Care Set",
    category: "Beauty",
    price: 68,
    rating: 4.7,
    reviews: 196,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 130,
    name: "Luxury Eau de Parfum",
    category: "Beauty",
    price: 92,
    rating: 4.9,
    reviews: 311,
    badge: "Top rated",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 131,
    name: "Gold-Plated Pendant Necklace",
    category: "Jewelry",
    price: 79,
    rating: 4.8,
    reviews: 148,
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 132,
    name: "Classic Stainless Steel Watch",
    category: "Jewelry",
    price: 134,
    rating: 4.7,
    reviews: 204,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 133,
    name: "Premium Leather Handbag",
    category: "Fashion",
    price: 126,
    rating: 4.8,
    reviews: 175,
    badge: "Best seller",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 134,
    name: "Everyday Running Sneakers",
    category: "Fashion",
    price: 84,
    rating: 4.6,
    reviews: 229,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 135,
    name: "Minimal Table Lamp",
    category: "Home",
    price: 54,
    rating: 4.5,
    reviews: 102,
    badge: "New",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 10,
    name: "Home Strength Training Set",
    category: "Sports",
    price: 99,
    rating: 4.8,
    reviews: 88,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 11,
    name: "Educational Building Blocks",
    category: "Baby",
    price: 35,
    rating: 4.9,
    reviews: 163,
    badge: "Kids choice",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 12,
    name: "Premium Coffee Collection",
    category: "Groceries",
    price: 29,
    rating: 4.7,
    reviews: 120,
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 13,
    name: "Bestseller Novel Bundle",
    category: "Books",
    price: 45,
    rating: 4.8,
    reviews: 287,
    badge: "Bestseller",
    image: "./books/book1.jpg?v=1"

  },
  {
    id: 14,
    name: "Fantasy Adventure E-Book",
    category: "Books",
    price: 12,
    rating: 4.6,
    reviews: 156,
    badge: "Popular",
    image: "./books/book2.jpg"
  },
  {
    id: 15,
    name: "Car Phone Mount Pro",
    category: "Automotive",
    price: 24,
    rating: 4.7,
    reviews: 342,
    badge: "Best seller",
    image: "./books/carmount.jpg"
  },
  {
    id: 16,
    name: "Ceramic Car Air Freshener",
    category: "Automotive",
    price: 16,
    rating: 4.5,
    reviews: 89,
    badge: "New",
    image: "./automative/car.jpg"
  },
  {
    id: 17,
    name: "PlayStation 5 Console",
    category: "Gaming",
    price: 499,
    rating: 4.9,
    reviews: 521,
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 18,
    name: "Wireless Gaming Headset",
    category: "Gaming",
    price: 89,
    rating: 4.7,
    reviews: 278,
    badge: "Popular",
    image: "./gaming/gaming.jpg?v=1"
  },
  {
    id: 19,
    name: "Ergonomic Office Desk",
    category: "Office",
    price: 299,
    rating: 4.8,
    reviews: 205,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 20,
    name: "Premium Stationery Set",
    category: "Office",
    price: 42,
    rating: 4.6,
    reviews: 134,
    badge: "New",
    image: "./automative/stat.jpg"
  },
  {
    id: 21,
    name: "Deluxe Pet Bed",
    category: "Pets",
    price: 68,
    rating: 4.9,
    reviews: 312,
    badge: "Best seller",
    image: "./automative/deluxebed.jpg"
  },
  {
    id: 22,
    name: "Interactive Pet Toy Set",
    category: "Pets",
    price: 35,
    rating: 4.7,
    reviews: 178,
    badge: "Popular",
    image: "./automative/pettoy.jpg"
  },
  {
    id: 23,
    name: "Multivitamin Daily Supplement",
    category: "Wellness",
    price: 19,
    rating: 4.8,
    reviews: 421,
    badge: "Best seller",
    image: "./automative/multivit.jpg"
  },
  {
    id: 24,
    name: "Premium Yoga Mat",
    category: "Wellness",
    price: 45,
    rating: 4.7,
    reviews: 267,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 25, name: "Everyday Canvas Tote Bag", category: "Fashion", price: 28, rating: 4.8, reviews: 94, badge: "New",
    image: "tote bag/61Rsx4fLwSL._AC_UL320_.jpg",
    description: "A roomy, reusable canvas tote with sturdy handles for everyday errands and travel.", bulkMin: 10, bulkDiscount: 0.15
  },
  {
    id: 26, name: "XL Beach Towel", category: "Home", price: 32, rating: 4.9, reviews: 126, badge: "Summer pick",
    image: "beach towel/71aUlOQBOSL._AC_UL320_.jpg",
    description: "Oversized, quick-drying beach towel made for pool days, picnics, and sunny getaways.", bulkMin: 8, bulkDiscount: 0.12
  },
  {
    id: 27, name: "High Support Sports Bra", category: "Sports", price: 46, rating: 4.7, reviews: 218, badge: "Best seller",
    image: "high supp bra/51MWQwr89+L._AC_UL320_.jpg",
    description: "Comfortable high-support performance bra with breathable fabric for active days.", bulkMin: 6, bulkDiscount: 0.1
  },
  {
    id: 28, name: "Body Retinol", category: "Beauty", price: 24, rating: 4.6, reviews: 83, badge: "Trending",
    image: "body retinol/51NUDYykK0L._AC_UL320_.jpg",
    description: "A nourishing body retinol formula designed to complement your daily skincare routine.", bulkMin: 12, bulkDiscount: 0.18
  },
  {
    id: 29, name: "Hammock with Stand", category: "Home", price: 149, rating: 4.8, reviews: 71, badge: "Relaxation",
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=700&q=80",
    description: "Freestanding, easy-to-assemble hammock for comfortable lounging indoors or outdoors.", bulkMin: 4, bulkDiscount: 0.1
  },
  {
    id: 30, name: "Interactive Dog Toy", category: "Pets", price: 22, rating: 4.7, reviews: 145, badge: "Pet favorite",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=700&q=80",
    description: "Durable interactive toy that keeps dogs engaged during playtime and training.", bulkMin: 10, bulkDiscount: 0.15
  },
  {
    id: 31, name: "Travel Organizer Tote", category: "Fashion", price: 36, rating: 4.6, reviews: 67, badge: "Popular",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    description: "Lightweight organizer tote with multiple compartments for work, travel, and daily carry.", bulkMin: 8, bulkDiscount: 0.12
  },
  { id: 32, name: "Striped XL Beach Towel", category: "Home", price: 34, rating: 4.7, reviews: 86, badge: "New", image: "beach towel/812Xw4eQTVL._AC_UL320_.jpg", description: "Soft oversized beach towel with a vibrant striped finish.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 33, name: "Quick-Dry Beach Towel", category: "Home", price: 30, rating: 4.6, reviews: 73, badge: "Popular", image: "beach towel/813OjcNQQSL._AC_UL320_.jpg", description: "Lightweight quick-dry towel for beach days and poolside lounging.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 34, name: "Cabana Beach Towel", category: "Home", price: 36, rating: 4.8, reviews: 91, badge: "Summer pick", image: "beach towel/819hWHCkXsL._AC_UL320_.jpg", description: "Extra-large cabana-style towel with plush comfort.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 35, name: "Oversized Pool Towel", category: "Home", price: 31, rating: 4.7, reviews: 64, badge: "Trending", image: "beach towel/81BOgV7ZyXL._AC_UL320_.jpg", description: "Absorbent oversized towel for relaxing by the pool.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 36, name: "Tropical Print Beach Towel", category: "Home", price: 35, rating: 4.9, reviews: 118, badge: "Best seller", image: "beach towel/81MnSgjo2AL._AC_UL320_.jpg", description: "Colorful tropical-print towel with a soft, roomy design.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 37, name: "Sand-Free Beach Towel", category: "Home", price: 33, rating: 4.6, reviews: 59, badge: "New", image: "beach towel/81t34x64vbL._AC_UL320_.jpg", description: "Compact towel made for easy travel and beach adventures.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 38, name: "Family Size Beach Towel", category: "Home", price: 42, rating: 4.8, reviews: 102, badge: "Popular", image: "beach towel/915TgqPOD5L._AC_UL320_.jpg", description: "Generously sized towel for family trips and outdoor picnics.", bulkMin: 6, bulkDiscount: 0.12 },
  { id: 39, name: "Body Retinol Renewal Lotion", category: "Beauty", price: 27, rating: 4.7, reviews: 96, badge: "New", image: "body retinol/61fuHSbuE2L._AC_UL320_.jpg", description: "A smoothing body lotion to support your evening skincare routine.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 40, name: "Body Retinol Firming Cream", category: "Beauty", price: 29, rating: 4.8, reviews: 137, badge: "Top rated", image: "body retinol/61oo83+9TyL._AC_UL320_.jpg", description: "Rich body cream with retinol for a nourished, refined feel.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 41, name: "Body Retinol Night Serum", category: "Beauty", price: 32, rating: 4.6, reviews: 74, badge: "Trending", image: "body retinol/71EBgWQnWML._AC_UL320_.jpg", description: "A lightweight serum designed for overnight body care.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 42, name: "Body Retinol Smoothing Treatment", category: "Beauty", price: 31, rating: 4.7, reviews: 105, badge: "Popular", image: "body retinol/71FIzFvk+6L._AC_UL320_.jpg", description: "Targeted body treatment for a soft and polished skin feel.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 43, name: "Body Retinol Moisture Cream", category: "Beauty", price: 26, rating: 4.8, reviews: 122, badge: "Best seller", image: "body retinol/71qXqms0ICL._AC_UL320_.jpg", description: "Comforting body moisturizer for everyday skincare.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 44, name: "Award-Winning Body Retinol", category: "Beauty", price: 35, rating: 4.9, reviews: 186, badge: "Award winner", image: "body retinol/allure winner.jpg", description: "Award-recognized body retinol care for your nightly ritual.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 45, name: "Body Retinol Overall Pick", category: "Beauty", price: 34, rating: 4.9, reviews: 171, badge: "Editor's pick", image: "body retinol/overall pick.jpg", description: "A featured body retinol option for a simple skincare routine.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 46, name: "High Support Racerback Bra", category: "Sports", price: 48, rating: 4.8, reviews: 119, badge: "New", image: "high supp bra/611cOiwl+XL._AC_UL320_.jpg", description: "Secure racerback sports bra for high-impact workouts.", bulkMin: 6, bulkDiscount: 0.10 },
  { id: 47, name: "High Support Training Bra", category: "Sports", price: 44, rating: 4.6, reviews: 89, badge: "Popular", image: "high supp bra/616bCnT+0SL._AC_UL320_.jpg", description: "Breathable training bra with reliable support and comfort.", bulkMin: 6, bulkDiscount: 0.10 },
  { id: 48, name: "High Impact Sports Bra", category: "Sports", price: 49, rating: 4.7, reviews: 142, badge: "Best seller", image: "high supp bra/61s61H4OP0L._AC_UL320_.jpg", description: "High-impact coverage designed for running and gym sessions.", bulkMin: 6, bulkDiscount: 0.10 },
  { id: 49, name: "Seamless Support Bra", category: "Sports", price: 43, rating: 4.6, reviews: 77, badge: "New", image: "high supp bra/7109o3QobSL._AC_UL320_.jpg", description: "Seamless active bra with soft stretch fabric and dependable hold.", bulkMin: 6, bulkDiscount: 0.10 },
  { id: 50, name: "Adjustable High Support Bra", category: "Sports", price: 52, rating: 4.8, reviews: 154, badge: "Top rated", image: "high supp bra/71CCTGAEAHL._AC_UL320_.jpg", description: "Adjustable performance bra for a customized workout fit.", bulkMin: 6, bulkDiscount: 0.10 },
  { id: 51, name: "Breathable Support Bra", category: "Sports", price: 45, rating: 4.7, reviews: 98, badge: "Trending", image: "high supp bra/71ctU+ialXL._AC_UL320_.jpg", description: "Ventilated support bra for comfortable movement through every session.", bulkMin: 6, bulkDiscount: 0.10 },
  { id: 52, name: "Performance Sports Bra", category: "Sports", price: 47, rating: 4.8, reviews: 112, badge: "Popular", image: "high supp bra/71pljeEfOTL._AC_UL320_.jpg", description: "Supportive activewear essential for training, travel, and everyday wear.", bulkMin: 6, bulkDiscount: 0.10 },
  { id: 53, name: "Classic Canvas Tote", category: "Fashion", price: 27, rating: 4.7, reviews: 88, badge: "New", image: "tote bag/61t4jBybtfL._AC_UL320_.jpg", description: "A versatile canvas tote for groceries, books, and everyday essentials.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 54, name: "Printed Everyday Tote", category: "Fashion", price: 29, rating: 4.8, reviews: 103, badge: "Popular", image: "tote bag/713Q4cAWaPL._AC_UL320_.jpg", description: "A printed everyday tote with a roomy main compartment.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 55, name: "Large Shopper Tote", category: "Fashion", price: 33, rating: 4.6, reviews: 70, badge: "Trending", image: "tote bag/71fqT4i4SeL._AC_UL320_.jpg", description: "Extra room for shopping, work supplies, and weekend plans.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 56, name: "Reusable Market Tote", category: "Fashion", price: 25, rating: 4.7, reviews: 95, badge: "Eco pick", image: "tote bag/71iyundy3VL._AC_UL320_.jpg", description: "Reusable market tote made for easy, practical everyday carrying.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 57, name: "Structured Canvas Tote", category: "Fashion", price: 38, rating: 4.8, reviews: 115, badge: "Best seller", image: "tote bag/71PTrQ+KkwL._AC_UL320_.jpg", description: "A structured tote that keeps your daily items neatly organized.", bulkMin: 8, bulkDiscount: 0.15 },
  { id: 58, name: "Minimalist Carryall Tote", category: "Fashion", price: 35, rating: 4.6, reviews: 79, badge: "New", image: "tote bag/81Mk7ZGfcbL._AC_UL320_.jpg", description: "Clean, minimalist carryall for commuting and day trips.", bulkMin: 8, bulkDiscount: 0.15 },
  { id: 59, name: "Oversized Utility Tote", category: "Fashion", price: 41, rating: 4.8, reviews: 128, badge: "Top rated", image: "tote bag/81qLW3HjjyL._AC_UL320_.jpg", description: "An oversized utility tote for flexible storage on the go.", bulkMin: 8, bulkDiscount: 0.15 },
  { id: 60, name: "Classic Hammock with Stand", category: "Home", price: 149, rating: 4.8, reviews: 101, badge: "New", image: "hammock stand/61MkHEupelL._AC_UL320_.jpg", description: "A freestanding hammock set for restful indoor or outdoor lounging.", bulkMin: 4, bulkDiscount: 0.10 },
  { id: 61, name: "Portable Hammock Stand Set", category: "Home", price: 139, rating: 4.7, reviews: 84, badge: "Popular", image: "hammock stand/61TzbW19ZEL._AC_UL320_.jpg", description: "Easy-to-assemble hammock and stand for patios, gardens, and trips.", bulkMin: 4, bulkDiscount: 0.10 },
  { id: 62, name: "Quilted Hammock with Frame", category: "Home", price: 179, rating: 4.9, reviews: 139, badge: "Best seller", image: "hammock stand/71-OLpx7jGL._AC_UL320_.jpg", description: "A cushioned quilted hammock with a durable freestanding frame.", bulkMin: 4, bulkDiscount: 0.10 },
  { id: 63, name: "Outdoor Hammock Stand", category: "Home", price: 129, rating: 4.6, reviews: 68, badge: "Trending", image: "hammock stand/71CYASicg6L._AC_UL320_.jpg", description: "A reliable outdoor stand designed for comfortable relaxing anywhere.", bulkMin: 4, bulkDiscount: 0.10 },
  { id: 64, name: "Double Hammock with Stand", category: "Home", price: 169, rating: 4.8, reviews: 117, badge: "Top rated", image: "hammock stand/71F7SGxokNL._AC_UL320_.jpg", description: "Spacious double hammock set with sturdy support for two.", bulkMin: 4, bulkDiscount: 0.10 },
  { id: 65, name: "Curved Steel Hammock Stand", category: "Home", price: 159, rating: 4.7, reviews: 90, badge: "New", image: "hammock stand/71MUlPCxopL._AC_UL320_.jpg", description: "Modern curved steel stand with a comfortable fabric hammock.", bulkMin: 4, bulkDiscount: 0.10 },
  { id: 66, name: "Garden Hammock Set", category: "Home", price: 145, rating: 4.6, reviews: 76, badge: "Popular", image: "hammock stand/71PizpzreIL._AC_UL320_.jpg", description: "A practical garden hammock set for peaceful sunny afternoons.", bulkMin: 4, bulkDiscount: 0.10 },
  { id: 67, name: "Padded Hammock Lounger", category: "Home", price: 189, rating: 4.9, reviews: 155, badge: "Luxury", image: "hammock stand/81GumJM04PL._AC_UL320_.jpg", description: "A padded hammock lounger that brings extra comfort to your space.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 68, name: "Adjustable Hammock Stand", category: "Home", price: 154, rating: 4.7, reviews: 93, badge: "Trending", image: "hammock stand/91lhEkvYsSL._AC_UL320_.jpg", description: "An adjustable hammock stand designed for flexible outdoor comfort.", bulkMin: 4, bulkDiscount: 0.10 },
  { id: 69, name: "Lymphatic Support Drops", category: "Wellness", price: 24, rating: 4.7, reviews: 96, badge: "New", image: "lympatic drop/71oRAM09rhL._AC_UL640_QL65_.jpg", description: "A convenient wellness drop blend for your daily self-care routine.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 70, name: "Daily Lymphatic Drops", category: "Wellness", price: 22, rating: 4.6, reviews: 78, badge: "Popular", image: "lympatic drop/71rXo9KvMyL._AC_UL320_.jpg", description: "Easy-to-use wellness drops for a simple daily routine.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 71, name: "Herbal Lymphatic Drops", category: "Wellness", price: 26, rating: 4.8, reviews: 114, badge: "Top rated", image: "lympatic drop/71YC2HR8UnL._AC_UL320_.jpg", description: "An herbal wellness drop blend made for mindful self-care.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 72, name: "Lymphatic Wellness Formula", category: "Wellness", price: 28, rating: 4.7, reviews: 89, badge: "Trending", image: "lympatic drop/81AcwQ4txfL._AC_UL320_.jpg", description: "A concentrated wellness formula in convenient liquid-drop form.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 73, name: "Liquid Lymphatic Support", category: "Wellness", price: 25, rating: 4.6, reviews: 71, badge: "New", image: "lympatic drop/81Q4RTBLECL._AC_UL320_.jpg", description: "Liquid drops to complement your regular wellness habits.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 74, name: "Lymphatic Balance Drops", category: "Wellness", price: 27, rating: 4.8, reviews: 108, badge: "Best seller", image: "lympatic drop/81TrL-PHXzL._AC_UL320_.jpg", description: "A popular liquid drop option for daily wellness rituals.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 75, name: "Overall Best Lymphatic Drops", category: "Wellness", price: 30, rating: 4.9, reviews: 164, badge: "Editor's pick", image: "lympatic drop/overall best.jpg", description: "A featured lymphatic wellness drop blend for everyday care.", bulkMin: 12, bulkDiscount: 0.18 },
  { id: 76, name: "Durable Chew Dog Toy", category: "Pets", price: 18, rating: 4.7, reviews: 123, badge: "New", image: "dog toy/61+zvWJHTvL._AC_UL320_.jpg", description: "A durable chew toy designed to keep dogs active and entertained.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 77, name: "Interactive Dog Toy", category: "Pets", price: 22, rating: 4.8, reviews: 151, badge: "Popular", image: "dog toy/61Hho0wmddL._AC_UL320_.jpg", description: "An engaging interactive toy for rewarding everyday dog play.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 78, name: "Plush Squeaky Dog Toy", category: "Pets", price: 16, rating: 4.6, reviews: 82, badge: "New", image: "dog toy/71+NkuMzASL._AC_UL320_.jpg", description: "A soft squeaky toy for cuddles, fetch, and gentle play.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 79, name: "Tough Tug Dog Toy", category: "Pets", price: 20, rating: 4.7, reviews: 97, badge: "Trending", image: "dog toy/714ZBKyX-KL._AC_UL320_.jpg", description: "A tough tug toy for energetic games with your dog.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 80, name: "Treat Puzzle Dog Toy", category: "Pets", price: 24, rating: 4.8, reviews: 141, badge: "Best seller", image: "dog toy/71A4mhMFP8L._AC_UL320_.jpg", description: "A treat puzzle toy that gives dogs enriching playtime.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 81, name: "Rubber Fetch Dog Toy", category: "Pets", price: 19, rating: 4.6, reviews: 76, badge: "Popular", image: "dog toy/71lIf1eDgmL._AC_UL320_.jpg", description: "A flexible rubber fetch toy for active outdoor play.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 82, name: "Rope Ball Dog Toy", category: "Pets", price: 17, rating: 4.7, reviews: 104, badge: "New", image: "dog toy/813uC3hs3oL._AC_UL320_.jpg", description: "A playful rope ball for tossing, tugging, and chewing.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 83, name: "Best Seller Dog Toy", category: "Pets", price: 23, rating: 4.9, reviews: 192, badge: "Best seller", image: "dog toy/best seller.jpg", description: "A customer-favorite dog toy built for frequent, happy play.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 84, name: "Overall Best Dog Toy", category: "Pets", price: 25, rating: 4.9, reviews: 177, badge: "Editor's pick", image: "dog toy/overall seller.jpg", description: "A featured dog toy that keeps furry friends engaged.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 85, name: "Gaming Controller", category: "Gaming", price: 59, rating: 4.8, reviews: 184, badge: "New", image: "gaming/51DTcaDKELL._AC_UL320_.jpg", description: "Responsive gaming controller built for comfortable, immersive play.", bulkMin: 6, bulkDiscount: 0.12 },
  { id: 86, name: "Wireless Gaming Headset", category: "Gaming", price: 79, rating: 4.7, reviews: 139, badge: "Popular", image: "gaming/61AcT0ZuO3L._AC_UL320_.jpg", description: "Wireless headset with clear audio for games, chat, and streaming.", bulkMin: 5, bulkDiscount: 0.12 },
  { id: 87, name: "RGB Gaming Mouse", category: "Gaming", price: 42, rating: 4.6, reviews: 102, badge: "Trending", image: "gaming/61CQcGk5y9L._AC_UL320_.jpg", description: "Precision gaming mouse with customizable RGB lighting.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 88, name: "Mechanical Gaming Keyboard", category: "Gaming", price: 89, rating: 4.8, reviews: 163, badge: "Best seller", image: "gaming/61KD4hoirXL._AC_UL320_.jpg", description: "Durable mechanical keyboard with responsive keys for game nights.", bulkMin: 5, bulkDiscount: 0.12 },
  { id: 89, name: "Gaming Desk Mat", category: "Gaming", price: 29, rating: 4.6, reviews: 81, badge: "New", image: "gaming/61RM1rMoceL._AC_UL320_.jpg", description: "Large, smooth desk mat for your keyboard, mouse, and setup.", bulkMin: 10, bulkDiscount: 0.12 },
  { id: 90, name: "Console Gaming Bundle", category: "Gaming", price: 329, rating: 4.9, reviews: 221, badge: "Top rated", image: "gaming/71cjDQIKaPL._AC_UL320_.jpg", description: "A ready-to-play console bundle for your living-room gaming setup.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 91, name: "Gaming Monitor", category: "Gaming", price: 219, rating: 4.7, reviews: 118, badge: "Popular", image: "gaming/71mCbhfOTJL._AC_UL320_.jpg", description: "Fast, vivid gaming monitor for smooth and detailed gameplay.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 92, name: "Gaming Chair", category: "Gaming", price: 189, rating: 4.8, reviews: 142, badge: "Comfort pick", image: "gaming/71MvbQRvOuL._AC_UL320_.jpg", description: "Supportive gaming chair for long matches, streams, and work sessions.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 93, name: "Gaming Microphone", category: "Gaming", price: 64, rating: 4.7, reviews: 93, badge: "Trending", image: "gaming/71nQB0wEe9L._AC_UL320_.jpg", description: "Clear gaming microphone for team chat and content creation.", bulkMin: 6, bulkDiscount: 0.12 },
  { id: 94, name: "Gaming Speaker Set", category: "Gaming", price: 54, rating: 4.6, reviews: 76, badge: "New", image: "gaming/71ul-8eS9IL._AC_UL320_.jpg", description: "Compact speaker set for rich game audio at your desk.", bulkMin: 6, bulkDiscount: 0.12 },
  { id: 95, name: "Gaming Accessory Kit", category: "Gaming", price: 38, rating: 4.7, reviews: 111, badge: "Value pick", image: "gaming/71ywUl+M-JL._AC_UL320_.jpg", description: "A useful gaming accessory kit to round out your setup.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 96, name: "Gaming Starter Set", category: "Gaming", price: 99, rating: 4.8, reviews: 156, badge: "Best seller", image: "gaming/81cYQ1dO5xL._AC_UL320_.jpg", description: "A complete starter set for building a more enjoyable gaming station.", bulkMin: 5, bulkDiscount: 0.12 },
  { id: 97, name: "Red Heart Crystal Pendant Necklace", category: "Jewelry", price: 42, rating: 4.7, reviews: 94, badge: "New", image: "jewelry/61BjMNOKseL._AC_UL320_.jpg", description: "A heart-shaped red crystal pendant necklace with a silver-tone floral design.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 98, name: "To My Wife Heart Necklace Gift Set", category: "Jewelry", price: 35, rating: 4.8, reviews: 128, badge: "Popular", image: "jewelry/61wEf4w04oL._AC_UL320_.jpg", description: "A heart necklace presented in a keepsake gift box with a message for your wife.", bulkMin: 10, bulkDiscount: 0.12 },
  { id: 99, name: "To My Wife Heart Necklace", category: "Jewelry", price: 39, rating: 4.7, reviews: 86, badge: "Gift pick", image: "jewelry/61wEf4w04oL._AC_UL320_ (1).jpg", description: "A sentimental heart necklace and message card in a black presentation box.", bulkMin: 10, bulkDiscount: 0.12 },
  { id: 100, name: "Round Cubic Zirconia Stud Earrings", category: "Jewelry", price: 48, rating: 4.8, reviews: 142, badge: "Best seller", image: "jewelry/712uX4it-lL._AC_UL320_.jpg", description: "Classic round cubic zirconia stud earrings in a polished silver-tone setting.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 101, name: "69-Piece Gold-Tone Jewelry Set", category: "Jewelry", price: 32, rating: 4.6, reviews: 73, badge: "Trending", image: "jewelry/71yZCKlOAVL._AC_UL320_.jpg", description: "A large gold-tone jewelry set with necklaces, bracelets, rings, and earrings.", bulkMin: 10, bulkDiscount: 0.12 },
  { id: 102, name: "Gold Flower Hoop Earrings", category: "Jewelry", price: 44, rating: 4.9, reviews: 161, badge: "Top rated", image: "jewelry/811bqs7sY1L._AC_UL320_.jpg", description: "Statement gold-tone hoop earrings with delicate layered flower pendants.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 103, name: "Gold-Tone Bracelet Set", category: "Jewelry", price: 46, rating: 4.7, reviews: 109, badge: "New", image: "jewelry/81lZeXFyOsL._AC_UL320_.jpg", description: "A four-piece gold-tone bracelet set with floral, crystal, cable, and bangle styles.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 124, name: "Reusable Push-up Bra", category: "Sports", price: 24.99, rating: 4.8, reviews: 124, badge: "Trending", image: "./jelly bra/61NNCK9uSEL._AC_UL320_.jpg", description: "Push-Up Bra to Enhance your beautiful shape with our bra.", bulkMin: 10, bulkDiscount: 0.15 },

  { id: 104, name: "66-Piece Gold-Tone Jewelry Set", category: "Jewelry", price: 68, rating: 4.8, reviews: 137, badge: "Limited", image: "jewelry/91krpHS1OUL._AC_UL320_.jpg", description: "An extensive gold-tone jewelry set featuring necklaces, bracelets, rings, and earrings.", bulkMin: 6, bulkDiscount: 0.12 },
  { id: 105, name: "Oscillating Tower Fan", category: "Home", price: 54, rating: 4.7, reviews: 111, badge: "New", image: "living and house/61M3tql5XsL._AC_UY218_.jpg", description: "A slim oscillating tower fan with a remote control for convenient room cooling.", bulkMin: 5, bulkDiscount: 0.10 },
  { id: 106, name: "Smart RGB Floor Lamp", category: "Home", price: 38, rating: 4.8, reviews: 146, badge: "Popular", image: "living and house/71-SDmPVAmL._AC_UY218_.jpg", description: "A color-changing smart floor lamp with app and remote controls.", bulkMin: 8, bulkDiscount: 0.10 },
  { id: 107, name: "Artificial Olive Tree", category: "Home", price: 32, rating: 4.6, reviews: 77, badge: "Trending", image: "living and house/71DB4-HSTFL._AC_UY218_.jpg", description: "A realistic artificial olive tree in a decorative woven planter.", bulkMin: 8, bulkDiscount: 0.10 },
  { id: 108, name: "Portable HEPA Air Purifier", category: "Home", price: 45, rating: 4.7, reviews: 96, badge: "New", image: "living and house/71eM07+OB6L._AC_UY218_.jpg", description: "A compact portable air purifier with a digital control panel and carry handle.", bulkMin: 6, bulkDiscount: 0.10 },
  { id: 123, name: "Premium Silicone Push-Up Bra", category: "Sports", price: 19.99, rating: 4.8, reviews: 184, badge: "Limited", image: "./jelly bra/bra2.jpg", description: "Comfortable Reusable Push-Up Bra with Suppport.", bulkMin: 8, bulkDiscount: 0.15 },

  { id: 109, name: "Desktop Air Purifier", category: "Home", price: 29, rating: 4.8, reviews: 124, badge: "Best seller", image: "living and house/71UoENKnfkL._AC_UY218_.jpg", description: "A compact desktop air purifier for freshening smaller rooms and workspaces.", bulkMin: 10, bulkDiscount: 0.10 },
  { id: 110, name: "Plug-In LED Night Light", category: "Home", price: 49, rating: 4.7, reviews: 102, badge: "Home pick", image: "living and house/71Y0SEq9m4L._AC_UY218_.jpg", description: "A plug-in LED night light with a modern square shade and outlet passthrough.", bulkMin: 6, bulkDiscount: 0.10 },
  { id: 111, name: "Vintage Floral Area Rug", category: "Home", price: 27, rating: 4.6, reviews: 84, badge: "Fresh", image: "living and house/81Q9drqyxmL._AC_UY218_.jpg", description: "A vintage-style floral area rug in muted green and warm earth tones.", bulkMin: 10, bulkDiscount: 0.10 },
  { id: 121, name: "Ultra Hold Adhesive Bra", category: "Sports", price: 29.99, rating: 4.3, reviews: 136, badge: "Trending", image: "./jelly bra/bra3.jpg", description: "Strong self-adhesive Bra for a secure fit.", bulkMin: 10, bulkDiscount: 0.15 },

  { id: 112, name: "MaxCalm Magnesium Drink Mix", category: "Wellness", price: 24, rating: 4.7, reviews: 118, badge: "New", image: "wellness/71EOlF9jeqL._AC_SR480,570_.jpg", description: "Natural Vitality MaxCalm original unflavored magnesium drink mix.", bulkMin: 12, bulkDiscount: 0.15 },
  { id: 113, name: "Adjustable LED Floor Lamp", category: "Wellness", price: 26, rating: 4.8, reviews: 153, badge: "Popular", image: "wellness/71eZ7sOeoCL._AC_SY300_SX300_QL70_FMwebp_.webp", description: "An adjustable LED floor lamp with a wide light panel and remote control.", bulkMin: 12, bulkDiscount: 0.15 },
  { id: 114, name: "Heated Neck and Shoulder Massager", category: "Wellness", price: 29, rating: 4.6, reviews: 91, badge: "Trending", image: "wellness/71fdZ-Ei0tL._AC_SY300_SX300_QL70_FMwebp_.webp", description: "A wearable neck and shoulder massager with heat and control buttons.", bulkMin: 12, bulkDiscount: 0.15 },
  { id: 115, name: "Goli Ashwagandha Gummies", category: "Wellness", price: 22, rating: 4.7, reviews: 105, badge: "Daily pick", image: "wellness/71FKBWkm2SL._AC_SR480,570_.jpg", description: "Goli Nutrition ashwagandha gummies in a 60-count bottle.", bulkMin: 12, bulkDiscount: 0.15 },
  { id: 116, name: "BeNatu Essential Oil Roller Set", category: "Wellness", price: 28, rating: 4.8, reviews: 127, badge: "Top rated", image: "wellness/71I5P2wym6L._AC_SR480,570_.jpg", description: "A three-piece essential oil roller set with dream, lavender, and chamomile blends.", bulkMin: 12, bulkDiscount: 0.15 },
  { id: 117, name: "Wellness Absorbent Underwear", category: "Wellness", price: 25, rating: 4.7, reviews: 99, badge: "New", image: "wellness/71y6t3JxZCL._AC_SR480,570_.jpg", description: "Absorbent wellness underwear designed for discreet everyday comfort.", bulkMin: 12, bulkDiscount: 0.15 },
  { id: 118, name: "LES Labs Cortisol Health Capsules", category: "Wellness", price: 21, rating: 4.9, reviews: 188, badge: "Best seller", image: "wellness/71zFQHIaSyL._AC_SR480,570_.jpg", description: "LES Labs Cortisol Health dietary supplement capsules with phosphatidylserine and ashwagandha.", bulkMin: 12, bulkDiscount: 0.15 },
  { id: 119, name: "Ancient Minerals Magnesium Bath Flakes", category: "Wellness", price: 36, rating: 4.8, reviews: 144, badge: "Value pick", image: "wellness/81iSrDwN9zL._AC_SR480,570_.jpg", description: "Ancient Minerals magnesium bath flakes for body and foot soaks.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 120, name: "Invisble Silicone Adhesive Bra", category: "Sports", price: 19, rating: 4.6, reviews: 124, badge: "Top rated", image: "./jelly bra/71ZLN-OWu8L._AC_UL320_.jpg", description: "Invisible Silicone Adhesive Bra Enhance your beautiful shape with our bra.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 136, name: "Frozen Drink Slushie Machine", category: "Home", price: 129, rating: 4.8, reviews: 86, badge: "New", image: "slushie machine/81CUtrBg+jL._AC_UL320_.jpg", description: "A countertop frozen drink machine for making refreshing slushies at home.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 137, name: "Precision Toenail Cutter", category: "Beauty", price: 16, rating: 4.7, reviews: 74, badge: "Popular", image: "toenail cutter/614Gn65s9UL._AC_UL320_.jpg", description: "A precision toenail cutter designed for a clean, comfortable grooming routine.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 138, name: "Compact Slushie Maker", category: "Home", price: 109, rating: 4.7, reviews: 63, badge: "Popular", image: "slushie machine/614JTQGdMmL._AC_UY218_.jpg", description: "A compact frozen drink maker for easy homemade slushies.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 139, name: "Family Frozen Drink Machine", category: "Home", price: 149, rating: 4.8, reviews: 91, badge: "Best seller", image: "slushie machine/61tWrGvcQRL._AC_UL320_.jpg", description: "A frozen drink machine sized for family parties and entertaining.", bulkMin: 2, bulkDiscount: 0.10 },
  { id: 140, name: "Countertop Ice Slush Maker", category: "Home", price: 119, rating: 4.6, reviews: 58, badge: "New", image: "slushie machine/61tWrGvcQRL._AC_UY218_.jpg", description: "A countertop machine for chilled slush drinks and iced treats.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 141, name: "Home Party Slushie Blender", category: "Home", price: 139, rating: 4.7, reviews: 77, badge: "Trending", image: "slushie machine/61tyAGRjH5L._AC_UY218_.jpg", description: "A convenient frozen beverage maker for home parties.", bulkMin: 2, bulkDiscount: 0.10 },
  { id: 142, name: "Quick Freeze Slush Drink Maker", category: "Home", price: 124, rating: 4.8, reviews: 82, badge: "Top rated", image: "slushie machine/718FWUnpidL._AC_UY218_.jpg", description: "A quick-freeze machine for refreshing frozen drinks.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 143, name: "Frozen Beverage Station", category: "Home", price: 159, rating: 4.7, reviews: 69, badge: "Home pick", image: "slushie machine/71gsQqkFZTL._AC_UY218_.jpg", description: "A stylish frozen beverage station for kitchen counters.", bulkMin: 2, bulkDiscount: 0.10 },
  { id: 144, name: "Mini Slush Cup Maker", category: "Home", price: 79, rating: 4.6, reviews: 55, badge: "Value pick", image: "slushie machine/81jws2FABxL._AC_UY218_.jpg", description: "A compact maker for personal-sized slushie drinks.", bulkMin: 4, bulkDiscount: 0.10 },
  { id: 145, name: "Stainless Steel Nail Clipper", category: "Beauty", price: 14, rating: 4.7, reviews: 71, badge: "New", image: "toenail cutter/619zZIfIHYL._AC_UL320_.jpg", description: "A durable stainless steel nail clipper for precise grooming.", bulkMin: 12, bulkDiscount: 0.15 },
  { id: 146, name: "Wide Jaw Toenail Clipper", category: "Beauty", price: 19, rating: 4.8, reviews: 94, badge: "Top rated", image: "toenail cutter/61hrjbvEz5L._AC_UL320_.jpg", description: "A wide jaw clipper designed for thicker toenails.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 147, name: "Ergonomic Toenail Trimmer", category: "Beauty", price: 17, rating: 4.6, reviews: 66, badge: "Popular", image: "toenail cutter/61m4ieTx5yL._AC_UL320_.jpg", description: "An ergonomic trimmer for comfortable, controlled nail care.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 148, name: "Professional Nail Cutter", category: "Beauty", price: 22, rating: 4.8, reviews: 88, badge: "Best seller", image: "toenail cutter/71+HqqqBNRL._AC_UL320_.jpg", description: "A professional-style cutter for clean and accurate trimming.", bulkMin: 8, bulkDiscount: 0.15 },
  { id: 149, name: "Heavy Duty Nail Clipper", category: "Beauty", price: 18, rating: 4.7, reviews: 79, badge: "Trending", image: "toenail cutter/71kdA4Qb32L._AC_UL320_.jpg", description: "A heavy duty clipper for reliable everyday foot care.", bulkMin: 10, bulkDiscount: 0.15 },
  { id: 150, name: "Precision Pedicure Clipper", category: "Beauty", price: 21, rating: 4.8, reviews: 83, badge: "Limited", image: "toenail cutter/71vy2DPMv4L._AC_UL320_.jpg", description: "A precision pedicure clipper for detailed nail grooming.", bulkMin: 8, bulkDiscount: 0.15 },
  { id: 151, name: "Travel Toenail Grooming Cutter", category: "Beauty", price: 13, rating: 4.6, reviews: 62, badge: "Value pick", image: "toenail cutter/71wZ-mpQh6L._AC_UL320_.jpg", description: "A compact toenail cutter for travel and everyday grooming.", bulkMin: 12, bulkDiscount: 0.15 },
  { id: 152, name: "Cat Water Fountain", category: "Pets", price: 35, rating: 4.7, reviews: 84, badge: "Pet favorite", image: "cat water fountain/photo_2026-08-02_21-14-01.jpg", description: "A refreshing water fountain that helps keep your cat hydrated throughout the day.", bulkMin: 6, bulkDiscount: 0.12 },
  { id: 153, name: "Enclosed Cat Litter Box", category: "Pets", price: 160, rating: 4.8, reviews: 67, badge: "Top rated", image: "cat liiter box/photo_2026-08-02_21-10-04.jpg", description: "A spacious enclosed litter box that gives cats a comfortable and private place to go.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 154, name: "Automatic Cat Water Fountain", category: "Pets", price: 39, rating: 4.8, reviews: 91, badge: "Best seller", image: "cat water fountain/71QLaRKrdvL._AC_UL320_.jpg", description: "An automatic pet fountain that provides a steady supply of fresh water.", bulkMin: 6, bulkDiscount: 0.12 },
  { id: 155, name: "Quiet Flow Cat Fountain", category: "Pets", price: 34, rating: 4.6, reviews: 73, badge: "Popular", image: "cat water fountain/71p-+Io9OnL._AC_UL320_.jpg", description: "A quiet-flow water fountain designed for comfortable daily cat hydration.", bulkMin: 6, bulkDiscount: 0.12 },
  { id: 156, name: "Stainless Steel Cat Water Fountain", category: "Pets", price: 40, rating: 4.9, reviews: 108, badge: "Top rated", image: "cat water fountain/61h6AIoARIL._AC_SX679_.jpg", description: "A durable stainless steel fountain that makes fresh water easy to access.", bulkMin: 5, bulkDiscount: 0.12 },
  { id: 157, name: "Compact Cat Water Fountain", category: "Pets", price: 30, rating: 4.6, reviews: 59, badge: "Value pick", image: "cat water fountain/615wNJKaz3L._AC_UL320_.jpg", description: "A compact water fountain for cats that fits neatly into smaller spaces.", bulkMin: 8, bulkDiscount: 0.12 },
  { id: 158, name: "Covered Cat Litter Box", category: "Pets", price: 161, rating: 4.7, reviews: 76, badge: "Popular", image: "cat liiter box/811fl1tBX7L._AC_UL320_.jpg", description: "A covered litter box that helps give cats privacy and contain scattered litter.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 159, name: "Large Enclosed Cat Litter Box", category: "Pets", price: 162, rating: 4.9, reviews: 94, badge: "Best seller", image: "cat liiter box/7109-RlvFwL._AC_UL320_.jpg", description: "A roomy enclosed litter box with a comfortable, private design for cats.", bulkMin: 2, bulkDiscount: 0.10 },
  { id: 160, name: "Modern Cat Litter Box", category: "Pets", price: 163, rating: 4.8, reviews: 81, badge: "New", image: "cat liiter box/61teP46ev1L._AC_UL320_.jpg", description: "A modern litter box designed to blend neatly into your home while keeping cats comfortable.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 161, name: "Easy-Clean Cat Litter Box", category: "Pets", price: 160, rating: 4.6, reviews: 62, badge: "Value pick", image: "cat liiter box/61K4ShbJetL._AC_UL320_.jpg", description: "An easy-clean litter box for simple daily pet care and reliable odor control.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 162, name: "Premium Covered Cat Litter Box", category: "Pets", price: 161, rating: 4.8, reviews: 87, badge: "Top rated", image: "cat liiter box/61Gd1jlLxWL._AC_UL320_.jpg", description: "A premium covered litter box that provides a clean and private space for cats.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 163, name: "Mattress Vacuum Cleaner", category: "Home", price: 268, rating: 4.9, reviews: 87, badge: "Top rated", image: "newprods/vacuum cleaner.jpg", description: "A Vacuum cleaner that remove dust mites. Bed vacuum cleaner.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 164, name: "Anti-aging Serum", category: "Beauty", price: 74, rating: 4.6, reviews: 75, badge: "Best rated", image: "newprods/photo_2026-08-04_23-30-12.jpg", description: "A serum designed to reduce signs of aging and promote youthful skin.", bulkMin: 3, bulkDiscount: 0.10 },
  { id: 165, name: "128pcs Stainless Steel BBQ Grill", category: "Home", price: 28.64, rating: 4.7, reviews: 87, badge: "Summer Sale", image: "newprods/photo_2026-08-04_23-30-32.jpg", description: "A set of 128pcs stainless steel BBQ grills for outdoor cooking.", bulkMin: 3, bulkDiscount: 0.12 },
  { id: 166, name: "Cat-Toy Laser", category: "Pets", price: 26.70, rating: 4.8, reviews: 82, badge: "Extra coupon", image: "newprods/photo_2026-08-04_23-30-29.jpg", description: "A fun toy for cats to play with.", bulkMin: 3, bulkDiscount: 0.12 },
  { id: 167, name: "Remote Control Toy", category: "Pets", price: 26.00, rating: 5.0, reviews: 82, badge: "Popular", image: "newprods/remotecar.jpg", description: "A remote control toy for interactive play.", bulkMin: 3, bulkDiscount: 0.15 },
  { id: 168, name: "Cute Tablet ", category: "Electronicss", price: 132.00, rating: 4.0, reviews: 72, badge: "Value pick", image: "newprods/tab.jpg", description: "A cute tablet for entertainment and productivity.", bulkMin: 5, bulkDiscount: 0.15 },
  { id: 169, name: "Adjustable Mandoline Food sets ", category: "Home", price: 16.00, rating: 4.6, reviews: 77, badge: "Summer Sale", image: "newprods/mitten.jpg", description: "An adjustable mandoline for slicing and dicing vegetables.", bulkMin: 3, bulkDiscount: 0.12 },
  { id: 170, name: "Korean Style Stand Collar Halter", category: "Fashion", price: 20.40, rating: 4.6, reviews: 84, badge: "Top Rated", image: "newprods/blouse.jpg", description: "A Korean-style stand collar halter for a unique fashion statement.", bulkMin: 3, bulkDiscount: 0.12 },
  { id: 171, name: "UNISEX Choke Me Daddy printed T-shirt", category: "Fashion", price: 14.40, rating: 4.2, reviews: 84, badge: "Best Seller", image: "newprods/unisex.jpg", description: "A comfortable and stylish t-shirt for everyday wear.", bulkMin: 3, bulkDiscount: 0.14 },
  { id: 172, name: "Portable Electric Grill", category: "Home", price: 25.99, rating: 4.4, reviews: 82, badge: "Best Seller", image: "newprods/bbq.jpg", description: "A portable electric grill for convenient outdoor cooking.", bulkMin: 3, bulkDiscount: 0.14 },
  { id: 173, name: "Nike- Air Max", category: "Fashion", price: 300.00, rating: 4.9, reviews: 122, badge: "Trending", image: "newprods/nike.jpg", description: "A pair of trendy Nike Air Max sneakers.", bulkMin: 3, bulkDiscount: 0.14 },
  { id: 174, name: "Adidas- Samba Shoe ", category: "Fashion", price: 70.00, rating: 4.4, reviews: 102, badge: "Trending", image: "newprods/adidas.jpg", description: "A pair of trendy Adidas Samba shoes for casual fits and cool looks.", bulkMin: 3, bulkDiscount: 0.14 },
  { id: 175, name: "Medicube PDRN PINK PEPTIDE ", category: "Beauty", price: 30.00, rating: 4.2, reviews: 92, badge: "Hot", image: "newprods/medi1.jpg", description: "A nice luxurious and affordable beauty product.", bulkMin: 3, bulkDiscount: 0.14 },
  { id: 176, name: "Medicube PDRN Multi Balm", category: "Beauty", price: 20.00, rating: 4.7, reviews: 135, badge: "Best Seller", image: "newprods/medi2.jpg", description: "A very luxurious and affordable balm .", bulkMin: 3, bulkDiscount: 0.14 },
  { id: 177, name: "Pearl Chain", category: "Fashion", price: 8.99, rating: 4.7, reviews: 105, badge: "New", image: "newprods/pearlchain.jpg", description: "A beautiful pearl chain for a timeless accessory.", bulkMin: 3, bulkDiscount: 0.14 },
  { id: 178, name: " Semato Gold Crown for Women", category: "Fashion", price: 9.99, rating: 4.4, reviews: 105, badge: "New", image: "newprods/crown2.jpg", description: "A beautiful gold crown for women Baroque vintage gold.", bulkMin: 3, bulkDiscount: 0.14 },
  { id: 179, name: "Tiara Crown for Women", category: "Fashion", price: 6.99, rating: 4.6, reviews: 85, badge: "New", image: "newprods/crown1.jpg", description: "A elegant tiara crown for women.", bulkMin: 3, bulkDiscount: 0.14 },
 
];

/* Removed marketplace, account, checkout, preference, and storage features.
const currencyRates = {
  USD: { rate: 1, symbol: "$" },
  NGN: { rate: 1550, symbol: "₦" },
  GBP: { rate: 0.79, symbol: "£" },
  CAD: { rate: 1.37, symbol: "C$" },
  ZAR: { rate: 18.1, symbol: "R" },
  KES: { rate: 129, symbol: "KSh " },
  GHS: { rate: 15.4, symbol: "GH₵" },
  AED: { rate: 3.67, symbol: "AED " }
};

const countryCurrency = {
  US: "USD", NG: "NGN", GB: "GBP", CA: "CAD",
  ZA: "ZAR", KE: "KES", GH: "GHS", AE: "AED"
};

const countryNames = {
  US: "United States", NG: "Nigeria", GB: "United Kingdom", CA: "Canada",
  ZA: "South Africa", KE: "Kenya", GH: "Ghana", AE: "UAE"
};

const countryFlagCodes = {
  US: "us", NG: "ng", GB: "gb", CA: "ca", ZA: "za", KE: "ke", GH: "gh", AE: "ae"
};

let currentFilter = "All";
let searchTerm = "";
let cart = [];
let selectedCurrency = "USD";

const topSellers = [
  ["Ava's Finds", 67000], ["Nova Market", 62400], ["Mia Collective", 59800], ["Urban Loop", 56400],
  ["The Daily Edit", 53800], ["Luna Resale", 51700], ["Carter's Corner", 49600], ["Second Story", 47800],
  ["Olive & Oak", 46100], ["Bright Cart", 44500], ["The Good Refill", 42900], ["Studio Select", 41300],
  ["Kora Marketplace", 39800], ["Modern Repeat", 38200], ["Harper's Shelf", 36900], ["Golden Hour", 35400],
  ["ReLoved Depot", 34100], ["Sunday Supply", 32800]
].map(([name, revenue], index) => ({ id: `demo-seller-${index + 1}`, name, revenue }));

const demoResaleProducts = [
  ["Refurbished Bluetooth Speaker", "Electronics", 39, "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80"],
  ["Classic Leather Crossbody Bag", "Fashion", 64, "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"],
  ["Vintage Film Camera", "Electronics", 120, "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80"],
  ["Designer Running Shoes", "Fashion", 58, "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"],
  ["Smart Fitness iWatch", "Electronics", 9, "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"],
  ["Wireless Gaming Controller", "Gaming", 44, "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=500&q=80"],
  ["Gold Pendant Necklace", "Jewelry", 72, "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80"],
  ["Hardcover Book Bundle", "Books", 24, "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80"],
  ["Ceramic Coffee Set", "Home", 28, "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=500&q=80"],
  ["Premium Yoga Mat", "Wellness", 26, "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=500&q=80"],
  ["Travel Weekender Bag", "Fashion", 49, "tote bag/61Rsx4fLwSL._AC_UL320_.jpg"],
  ["Noise Cancelling Headphones", "Electronics", 95, "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"],
  ["Fragrance Gift Set", "Beauty", 38, "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80"],
  ["Mechanical Keyboard", "Office", 55, "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80"],
  ["Pet Travel Carrier", "Pets", 36, "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80"],
  ["Console Game Collection", "Gaming", 42, "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=500&q=80"],
  ["Stainless Water Bottle", "Wellness", 18, "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=80"]
];

products.filter(product => product.name.toLowerCase().includes("retinol")).forEach(product => {
  product.originalPrice = product.price;
  product.price = 0;
});

function productPriceMarkup(product) {
  return product.originalPrice
    ? `<span class="product-price"><del>${formatPrice(product.originalPrice)}</del> <strong>Free</strong></span>`
    : `<span class="product-price">${formatPrice(product.price)}</span>`;
}

const folderProducts = [
  ["perfume", "Beauty", [
    ["71swTd1XxAL._AC_UL320_.jpg", "Velvet Bloom Eau de Parfum", 48],
    ["71QswgJtiSL._AC_UL320_.jpg", "Midnight Rose Fragrance", 42],
    ["71MaCjEs0sL._AC_UL320_.jpg", "Golden Amber Perfume", 55],
    ["711fdw0zM3L._AC_UL320_.jpg", "Soft Vanilla Mist", 28],
    ["61WfTqDcqKL._AC_UL320_.jpg", "Signature Scent Spray", 39],
    ["61tQdEZVJQL._AC_UL320_.jpg", "Fresh Citrus Parfum", 36],
    ["61lIaaNDDqL._AC_UL320_.jpg", "Elegant Oud Fragrance", 62],
    ["61KGOzOQKJL._AC_UL320_.jpg", "Floral Garden Perfume", 45],
    ["61dXl+Zh54L._AC_UL320_.jpg", "Warm Cashmere Scent", 51],
    ["6197z7TqOyL._AC_UL320_.jpg", "Everyday Signature Perfume", 34],
    ["61+l68LckLL._AC_UL320_.jpg", "Pure Musk Fragrance", 44],
    ["31OGRery3tL._AC_UL320_.jpg", "Travel Size Fragrance", 24]
  ]],
  ["lashes", "Beauty", [
    ["91VX7oMz2VL._AC_UL320_.jpg", "Dramatic Volume Lashes", 16],
    ["91TOToLaDJL._AC_UL320_.jpg", "Wispy Cat-Eye Lashes", 14],
    ["91sDGDhbZ6L._AC_UL320_.jpg", "Natural Flare Lashes", 13],
    ["91sDGDhbZ6L._AC_UL320_ (1).jpg", "Soft Everyday Lashes", 13],
    ["917bdITYnML._AC_UL320_.jpg", "Featherlight Strip Lashes", 15],
    ["912brfxrF+L._AC_UL320_.jpg", "Luxury Faux Mink Lashes", 22],
    ["912bmz8teBL._AC_UL320_.jpg", "Full Glam Lashes", 18],
    ["81iWA38FMhL._AC_UL320_.jpg", "Cross-Style Lash Set", 17],
    ["81dkgsqFcvL._AC_UL320_.jpg", "Classic Natural Lashes", 12],
    ["81AFwgeiiiL._AC_UL320_.jpg", "Reusable Lash Collection", 25]
  ]],
  ["iron patch", "Wellness", [
    ["A11JPZoTqgL._AC_UL320_.jpg", "Iron Support Patch Pack", 19],
    ["91mOiJHbrfL._AC_UL320_.jpg", "Daily Iron Wellness Patches", 22],
    ["91mOiJHbrfL._AC_UL320_ (1).jpg", "Gentle Iron Patch Supply", 22],
    ["912yYXeEtnL._AC_UL320_.jpg", "Iron + Vitamin Patch Set", 24],
    ["81cykyrfiJL._AC_UL320_.jpg", "Monthly Iron Patch Pack", 29],
    ["71uu+nUEw6L._AC_UL320_.jpg", "Easy Wear Iron Patches", 18],
    ["61s9WubLMaL._AC_UL320_.jpg", "Iron Wellness Stickers", 21],
    ["61RFSx9LVpL._AC_UL320_.jpg", "Daily Nutrition Patch Set", 25],
    ["61gn9-RfBML._AC_UL320_.jpg", "Iron Balance Patches", 23],
    ["61F7ksJoPvL._AC_UL320_.jpg", "Long-Wear Iron Patches", 27],
    ["61DtrNmp1DL._AC_UL320_.jpg", "Travel Iron Patch Pack", 17]
  ]],
  ["prayer book", "Books", [
    ["41HEXXxD1FL._AC_UL320_.jpg", "Pocket Prayer Book", 18],
    ["41jQn0ZSBUL._AC_UL320_.jpg", "Daily Prayer Book", 22],
    ["6127ke5jzSL._AC_UL320_.jpg", "Inspirational Prayer Book", 20],
    ["61ic71K5-QL._AC_UL320_.jpg", "Guided Prayer Book", 24],
    ["61lXfMuIrdL._AC_UL320_.jpg", "Prayer and Reflection Book", 19],
    ["714cXKBAl4L._AC_UL320_.jpg", "Beautiful Prayer Book", 26],
    ["71BahZZyxEL._AC_UL320_.jpg", "Family Prayer Book", 21],
    ["81WR7UHXyBL._AC_UL320_.jpg", "Deluxe Prayer Book", 32],
    ["81xa6a8w9iL._AC_UL320_.jpg", "Complete Prayer Book", 29],
    ["81zdXb2G3IL._AC_UL320_.jpg", "Portable Prayer Book", 17],
    ["bible.jpg", "Classic Prayer Book", 23]
  ]],
  ["thigh lifting tape", "Beauty", [
    ["41nSZc+WZGL._AC_UL320_.jpg", "Thigh Lifting Tape", 15],
    ["61IWyKkCC3L._AC_UL320_.jpg", "Invisible Thigh Tape", 16],
    ["61Wu8gPcYjL._AC_UL320_.jpg", "Body Lift Tape Roll", 14],
    ["61ydKd482lL._AC_UL320_.jpg", "Fashion Body Tape", 13],
    ["71dPrvSFYtL._AC_UL320_.jpg", "Strong Hold Thigh Tape", 18],
    ["71DXenUkRsL._AC_UL320_.jpg", "Skin-Friendly Lift Tape", 17],
    ["71ebZBSmmRL._AC_UL320_.jpg", "Reusable Thigh Lift Tape", 19],
    ["71gGQ9mdKzL._AC_UL320_.jpg", "Everyday Body Lift Tape", 15]
  ]],
  ["pillow massager", "Wellness", [
    ["51CqBoOHifL._AC_UL320_.jpg", "Pillow Massager", 39],
    ["51kPijFJ5rL._AC_UL320_.jpg", "Heated Pillow Massager", 45],
    ["61FuY2PCzaL._AC_UL320_.jpg", "Neck and Pillow Massager", 42],
    ["71shwDHBPFL._AC_UL320_.jpg", "Shiatsu Pillow Massager", 49],
    ["71upv-0tsTL._AC_UL320_.jpg", "Cordless Pillow Massager", 55],
    ["71Wo+geCobL._AC_UL320_.jpg", "Comfort Pillow Massager", 37],
    ["81FfJRnpUKL._AC_UL320_.jpg", "Deep Kneading Pillow Massager", 59],
    ["91CnhP8mLeL._AC_UL320_.jpg", "Deluxe Pillow Massager", 65],
    ["91LGQYVh9BL._AC_UL320_.jpg", "Travel Pillow Massager", 34]
  ]]


];

let nextFolderProductId = 200;
folderProducts.forEach(([folder, category, items]) => {
  items.forEach(([file, name, price], index) => {
    products.push({
      id: nextFolderProductId++,
      name,
      category,
      price,
      rating: Number((4.5 + ((index * 3) % 5) / 10).toFixed(1)),
      reviews: 48 + index * 19,
      badge: index === 0 ? "Featured" : index % 3 === 0 ? "Popular" : "New",
      image: `${folder}/${file}`,
      description: `Quality ${name.toLowerCase()} selected for easy everyday use.`,
      bulkMin: 6,
      bulkDiscount: 0.1
    });
  });
});

function seedDemoResaleMarketplace() {
  const listings = JSON.parse(localStorage.getItem("russellshopResaleListings") || "[]");
  const correctedListings = listings.map(listing => {
    let correctedListing = listing.image?.includes("imageeeees.unsplash.com")
      ? { ...listing, image: listing.image.replace("imageeeees.unsplash.com", "images.unsplash.com") }
      : listing;
    if (listing.name === "Cozy Knit Throw") {
      correctedListing = { ...correctedListing, image: "living and house/71-SDmPVAmL._AC_UY218_.jpg" };
    }
    if (listing.name === "Travel Weekender Bag") {
      correctedListing = { ...correctedListing, image: "tote bag/61Rsx4fLwSL._AC_UL320_.jpg" };
    }
    return correctedListing;
  });
  if (correctedListings.some((listing, index) => listing.image !== listings[index]?.image)) {
    localStorage.setItem("russellshopResaleListings", JSON.stringify(correctedListings));
  }
  if (localStorage.getItem("russellshopDemoMarketplaceSeeded") === "true") return;
  const demoListings = demoResaleProducts.map(([name, category, price, image], index) => ({
    id: `demo-listing-${index + 1}`,
    ownerId: topSellers[index].id,
    sellerName: topSellers[index].name,
    name,
    category,
    image,
    price,
    quantity: 2 + index % 5,
    createdAt: new Date().toISOString()
  }));
  localStorage.setItem("russellshopResaleListings", JSON.stringify([...listings, ...demoListings]));
  localStorage.setItem("russellshopDemoMarketplaceSeeded", "true");
}

seedDemoResaleMarketplace();

const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartItemsLabel = document.getElementById("cartItemsLabel");
const cartTotal = document.getElementById("cartTotal");
const overlay = document.getElementById("overlay");
const toast = document.getElementById("toast");
const currencySelect = document.getElementById("currencySelect");
const countrySelect = document.getElementById("countrySelect");
const countryFlag = document.getElementById("countryFlag");

function updateCountryFlag(countryCode) {
  if (!countryFlag) return;
  const flagCode = countryFlagCodes[countryCode] || "us";
  countryFlag.src = `https://flagcdn.com/w40/${flagCode}.png`;
  countryFlag.alt = `${countryNames[countryCode] || "Selected country"} flag`;
}

Array.from(countrySelect.options).forEach(option => {
  option.textContent = countryNames[option.value] || option.textContent;
});

currencySelect.value = selectedCurrency;
updateCountryFlag(countrySelect.value);

function formatPrice(price) {
  const currency = currencyRates[selectedCurrency];
  const converted = price * currency.rate;
  const decimals = selectedCurrency === "NGN" ? 0 : 2;
  return `${currency.symbol}${converted.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })}`;
}

function getCurrentUserId() {
  const currentUser = JSON.parse(localStorage.getItem("russellshopCurrentUser") || "null");
  return currentUser ? currentUser.email || currentUser.name : "";
}

function getActiveResaleListings() {
  return JSON.parse(localStorage.getItem("russellshopResaleListings") || "[]")
    .filter(listing => listing.quantity > 0 && listing.status !== "taken_down");
}

function findCartProduct(item) {
  if (item.type === "resale") {
    return JSON.parse(localStorage.getItem("russellshopResaleListings") || "[]")
      .find(listing => listing.id === item.id && listing.quantity > 0 && listing.status !== "taken_down");
  }
  return products.find(product => product.id === Number(item.id));
}

function renderTopSellers() {
  const sellerGrid = document.getElementById("sellerGrid");
  if (!sellerGrid) return;
  sellerGrid.innerHTML = topSellers.map((seller, index) => {
    const initials = seller.name.split(/\s+/).map(word => word[0]).join("").slice(0, 2).toUpperCase();
    return `<article class="seller-card"><span class="seller-rank">#${index + 1}</span><span class="seller-avatar">${initials}</span><strong>${seller.name}</strong><small>Top resale seller</small><b>${formatPrice(seller.revenue)} revenue</b></article>`;
  }).join("");
}

function renderResaleShowcase() {
  const resaleProductGrid = document.getElementById("resaleProductGrid");
  const listings = getActiveResaleListings();
  resaleProductGrid.innerHTML = listings.length ? listings.map(listing => `
    <article class="product-card">
      <div class="product-image"><img src="${listing.image}" alt="${listing.name}"><span class="product-badge">Resale</span></div>
      <div class="product-content">
        <span class="product-category">${listing.category}</span><h3>${listing.name}</h3>
        <div class="rating"><span>${listing.quantity} available · Sold by ${listing.sellerName || listing.ownerId || "Community seller"}</span></div>
        <div class="product-bottom"><span class="product-price">${formatPrice(listing.price)}</span><button class="add-cart-btn" onclick="addToCart('${listing.id}', 'resale')" aria-label="Add ${listing.name} to cart">+</button></div>
      </div>
    </article>
  `).join("") : "<p>No resale products are available right now.</p>";
}

const featuredProductIds = new Set([152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162]);

function renderProducts() {
  const storeProducts = products.filter(product => {
    const matchesCategory = currentFilter === "All" || product.category === currentFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  }).sort((firstProduct, secondProduct) =>
    Number(featuredProductIds.has(secondProduct.id)) - Number(featuredProductIds.has(firstProduct.id))
  );
  const resaleProducts = getActiveResaleListings().filter(product => {
    const matchesCategory = currentFilter === "All" || product.category === currentFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  }).map(product => ({ ...product, type: "resale", badge: "Resale", rating: "5.0", reviews: `${product.quantity} available · Sold by ${product.sellerName || product.ownerId}` }));
  const filtered = [
    ...resaleProducts,
    ...storeProducts.map(product => ({ ...product, type: "store" }))
  ];

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card" onclick="openProductDetails(${product.id})" tabindex="0" role="button" aria-label="View details for ${product.name}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <span class="product-badge">${product.badge}</span>
        <button class="wishlist-btn" onclick="event.stopPropagation(); showToast('Saved to wishlist')">♡</button>
      </div>
      <div class="product-content">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <div class="rating">★★★★★ <span>${product.rating} (${product.reviews})</span></div>
        <div class="product-bottom">
          ${productPriceMarkup(product)}
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart('${product.id}', '${product.type}')" aria-label="Add ${product.name} to cart">+</button>
        </div>
      </div>
    </article>
  `).join("");

  emptyState.style.display = filtered.length ? "none" : "block";
}

function openProductDetails(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  document.getElementById("productDetailsContent").innerHTML = `
    <img class="details-image" src="${product.image}" alt="${product.name}">
    <div class="details-copy">
      <span class="product-category">${product.category}</span><h2>${product.name}</h2>
      <div class="rating">★★★★★ <span>${product.rating} (${product.reviews} reviews)</span></div>
      <p>${product.description || "A quality product selected for GlobalMart shoppers."}</p>
      <strong class="details-price" id="detailsPrice">${product.originalPrice ? `<del>${formatPrice(product.originalPrice)}</del> Free` : formatPrice(product.price)}</strong>
      <p class="bulk-note">Bulk offer: save ${product.bulkDiscount * 100}% when you buy ${product.bulkMin} or more.</p>
      <label class="quantity-label">Quantity <input id="detailsQuantity" type="number" min="1" value="1"></label>
      <button class="btn btn-primary btn-block" onclick="addDetailsToCart(${product.id})">Add to cart</button>
    </div>`;
  document.getElementById("productDetailsModal").classList.add("active");
  document.getElementById("detailsQuantity").addEventListener("input", event => {
    const quantity = Math.max(1, Number(event.target.value) || 1);
    event.target.value = quantity;
    const price = quantity >= product.bulkMin ? product.price * (1 - product.bulkDiscount) : product.price;
    document.getElementById("detailsPrice").innerHTML = product.originalPrice
      ? `<del>${formatPrice(product.originalPrice)}</del> Free each`
      : `${formatPrice(price)} each${quantity >= product.bulkMin ? " (bulk price)" : ""}`;
  });
}

function closeProductDetails() { document.getElementById("productDetailsModal").classList.remove("active"); }

function addDetailsToCart(id) {
  const quantity = Math.max(1, Number(document.getElementById("detailsQuantity").value) || 1);
  const existing = cart.find(item => String(item.id) === String(id) && (item.type || "store") === "store");
  if (existing) existing.quantity += quantity;
  else cart.push({ id, quantity });
  saveCart(); closeProductDetails(); showToast(`${quantity} item${quantity === 1 ? "" : "s"} added to cart`);
}

function addToCart(id, type = "store") {
  const product = findCartProduct({ id, type });
  if (!product || (type === "resale" && product.quantity < 1)) {
    showToast("This product is no longer available.");
    return;
  }
  if (type === "resale" && product.ownerId === getCurrentUserId()) {
    showToast("This is your resale listing. Another customer must buy it.");
    return;
  }
  const existing = cart.find(item => String(item.id) === String(id) && (item.type || "store") === type);
  if (type === "resale" && existing && existing.quantity >= product.quantity) {
    showToast("That is all the seller has available.");
    return;
  }
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, type, quantity: 1 });
  }
  saveCart();
  showToast("Product added to cart");
}

function changeQuantity(id, type, amount) {
  const item = cart.find(item => String(item.id) === String(id) && (item.type || "store") === type);
  if (!item) return;

  const product = findCartProduct(item);
  if (amount > 0 && item.type === "resale" && item.quantity >= product.quantity) {
    showToast("That is all the seller has available.");
    return;
  }

  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter(cartItem => String(cartItem.id) !== String(id) || (cartItem.type || "store") !== type);
  }
  saveCart();
}

function removeFromCart(id, type) {
  cart = cart.filter(item => String(item.id) !== String(id) || (item.type || "store") !== type);
  saveCart();
}

function saveCart() {
  localStorage.setItem("russellshopCart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const validCart = cart.map(item => {
    const product = findCartProduct(item);
    if (!product || !Number.isFinite(item.quantity) || item.quantity < 1) return null;
    return item.type === "resale" ? { ...item, quantity: Math.min(item.quantity, product.quantity) } : item;
  }).filter(item => item && item.quantity > 0);
  if (validCart.length !== cart.length || validCart.some((item, index) => item.quantity !== cart[index]?.quantity)) {
    cart = validCart;
    localStorage.setItem("russellshopCart", JSON.stringify(cart));
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  cartItemsLabel.textContent = `${totalItems} item${totalItems === 1 ? "" : "s"}`;

  if (!cart.length) {
    cartItems.innerHTML = `<div class="empty-cart"><h3>Your cart is empty</h3><p>Add a few products to get started.</p></div>`;
    cartTotal.textContent = formatPrice(0);
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart.map(item => {
    const product = findCartProduct(item);
    if (!product) return "";
    const unitPrice = item.type !== "resale" && item.quantity >= (product.bulkMin || Infinity)
      ? product.price * (1 - product.bulkDiscount)
      : product.price;
    total += unitPrice * item.quantity;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h4>${product.name}</h4>
          <small>${product.originalPrice ? `<del>${formatPrice(product.originalPrice)}</del> Free` : formatPrice(unitPrice)}${item.quantity >= (product.bulkMin || Infinity) && !product.originalPrice ? " · bulk price" : ""}</small>
          <div class="qty-controls">
            <button onclick="changeQuantity('${item.id}', '${item.type || "store"}', -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity('${item.id}', '${item.type || "store"}', 1)">+</button>
          </div>
        </div>
        <button class="remove-item" onclick="removeFromCart('${item.id}', '${item.type || "store"}')">Remove</button>
      </div>
    `;
  }).join("");

  cartTotal.textContent = total === 0 ? "Free" : formatPrice(total);
}

function openCart() {
  cartDrawer.classList.add("active");
  overlay.classList.add("active");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("active");
  overlay.classList.remove("active");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderProducts();
  });
});

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.category;
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === currentFilter);
    });
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    renderProducts();
  });
});

document.getElementById("searchToggle").addEventListener("click", () => {
  const panel = document.getElementById("searchPanel");
  panel.classList.toggle("active");
  if (panel.classList.contains("active")) {
    document.getElementById("searchInput").focus();
  }
});

document.getElementById("searchInput").addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderProducts();
});

currencySelect.addEventListener("change", event => {
  selectedCurrency = event.target.value;
  localStorage.setItem("russellshopCurrency", selectedCurrency);
  renderProducts();
  renderCart();
});

countrySelect.addEventListener("change", event => {
  updateCountryFlag(event.target.value);
  const suggestedCurrency = countryCurrency[event.target.value];
  selectedCurrency = suggestedCurrency;
  currencySelect.value = suggestedCurrency;
  localStorage.setItem("russellshopCurrency", selectedCurrency);
  renderProducts();
  renderCart();
  showToast(`Currency changed to ${suggestedCurrency}`);
});

document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

function completeCheckout() {
  if (!cart.length) {
    showToast("Your cart is empty");
    return false;
  }

  const currentUser = JSON.parse(localStorage.getItem("russellshopCurrentUser") || "null");
  if (!currentUser || !currentUser.name) {
    showToast("Please sign in before checking out");
    return false;
  }

  const buyerCountry = countryNames[countrySelect.value] || "Unknown";

  const resaleListingsAtCheckout = JSON.parse(localStorage.getItem("russellshopResaleListings") || "[]");
  const hasUnavailableResaleItem = cart.some(item => item.type === "resale" &&
    (!resaleListingsAtCheckout.find(listing => listing.id === item.id) ||
      item.quantity > resaleListingsAtCheckout.find(listing => listing.id === item.id).quantity));
  if (hasUnavailableResaleItem) {
    showToast("A resale listing changed. Please review your cart and try again.");
    renderCart();
    return false;
  }

  const purchases = JSON.parse(localStorage.getItem("russellshopPurchases") || "[]");
  const storeCartItems = cart.filter(item => (item.type || "store") === "store");
  const items = storeCartItems.map(item => {
    const product = products.find(product => product.id === Number(item.id));
    return product && {
      productId: product.id,
      name: product.name,
      category: product.category,
      image: product.image,
      price: product.price,
      quantity: item.quantity
    };
  }).filter(Boolean);

  if (items.length) {
    purchases.push({
      id: `GM-${Date.now()}`,
      buyer: currentUser.email || currentUser.name,
      country: buyerCountry,
      completedAt: new Date().toISOString(),
      status: "Completed",
      items
    });
    localStorage.setItem("russellshopPurchases", JSON.stringify(purchases));
  }

  const resaleCartItems = cart.filter(item => item.type === "resale");
  const listings = JSON.parse(localStorage.getItem("russellshopResaleListings") || "[]");
  const resaleOrders = JSON.parse(localStorage.getItem("russellshopResaleOrders") || "[]");
  const soldListings = resaleCartItems.map(item => {
    const listing = listings.find(candidate => candidate.id === item.id);
    return listing && item.quantity <= listing.quantity ? { listing, quantity: item.quantity } : null;
  }).filter(Boolean);

  if (soldListings.length !== resaleCartItems.length) {
    showToast("A resale listing changed. Please review your cart and try again.");
    renderCart();
    return false;
  }

  soldListings.forEach(({ listing, quantity }) => {
    listing.quantity -= quantity;
    const orderId = `RS-${Date.now()}-${listing.id}`;
    resaleOrders.push({
      id: orderId,
      sellerId: listing.ownerId,
      buyer: currentUser.email || currentUser.name,
      country: buyerCountry,
      listingId: listing.id,
      product: listing.name,
      image: listing.image,
      quantity,
      total: listing.price * quantity,
      completedAt: new Date().toISOString(),
      status: "Completed"
    });

    const notifications = JSON.parse(localStorage.getItem("russellshopNotifications") || "[]");
    notifications.push({
      id: `notification-${orderId}`,
      recipientId: listing.ownerId,
      type: "sale",
      title: "New resale sale",
      message: `${quantity} × ${listing.name} sold for $${(listing.price * quantity).toFixed(2)}.`,
      orderId,
      createdAt: new Date().toISOString(),
      read: false
    });
    localStorage.setItem("russellshopNotifications", JSON.stringify(notifications));
  });
  if (soldListings.length) {
    localStorage.setItem("russellshopResaleListings", JSON.stringify(listings));
    localStorage.setItem("russellshopResaleOrders", JSON.stringify(resaleOrders));
  }

  cart = [];
  saveCart();
  renderProducts();
  renderResaleShowcase();
  closeCart();
  showToast(soldListings.length ? "Order complete. The resale seller has been credited." : "Order complete. Your items are ready to list for resale.");
  return true;
}

function hasOnlyFreeProducts() {
  return cart.length > 0 && cart.every(item => {
    const product = findCartProduct(item);
    return item.type !== "resale" && product && Number(product.price) === 0;
  });
}

function handleCheckout() {
  if (hasOnlyFreeProducts()) {
    const currentUser = JSON.parse(localStorage.getItem("russellshopCurrentUser") || "null");
    if (!currentUser || !currentUser.name) return showToast("Please sign in before checking out");
    completeCheckout();
    return;
  }
  showToast("Contact management for payment details and information..");
}

document.getElementById("checkoutBtn").addEventListener("click", handleCheckout);

document.getElementById("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  showToast("You have joined our mailing list");
  event.target.reset();
});

function scrollToSection(target) {
  const headerOffset = document.querySelector(".site-header").offsetHeight + 14;
  const startPosition = window.scrollY;
  const destination = Math.max(0, target.getBoundingClientRect().top + startPosition - headerOffset);
  const distance = destination - startPosition;
  const duration = Math.min(900, Math.max(450, Math.abs(distance) * 0.45));
  const startTime = performance.now();
  const easeInOutCubic = progress => progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  function animateScroll(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(animateScroll);
    else {
      target.classList.remove("nav-section-reveal");
      requestAnimationFrame(() => target.classList.add("nav-section-reveal"));
    }
  }

  requestAnimationFrame(animateScroll);
}

document.querySelectorAll(".nav-links a[href^='#']").forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    document.querySelectorAll(".nav-links a").forEach(navLink => navLink.classList.remove("active"));
    link.classList.add("active");
    document.getElementById("navLinks").classList.remove("active");
    history.replaceState(null, "", link.getAttribute("href"));
    scrollToSection(target);
  });
});

const mobileMenuButton = document.getElementById("mobileMenuBtn");
const navigationLinks = document.getElementById("navLinks");

if (mobileMenuButton && navigationLinks) {
  const closeMobileMenu = () => {
    navigationLinks.classList.remove("active");
    mobileMenuButton.setAttribute("aria-expanded", "false");
  };

  mobileMenuButton.addEventListener("click", () => {
    const isOpen = navigationLinks.classList.toggle("active");
    mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigationLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", event => {
    if (!navigationLinks.contains(event.target) && !mobileMenuButton.contains(event.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMobileMenu();
  });
}

renderProducts();
renderTopSellers();
renderResaleShowcase();
renderCart();
*/

let currentFilter = "All";
let searchTerm = "";

const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const cart = [];
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartItemsLabel = document.getElementById("cartItemsLabel");
const cartTotal = document.getElementById("cartTotal");
const overlay = document.getElementById("overlay");
const toast = document.getElementById("toast");

function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

function productPriceMarkup(product) {
  return product.originalPrice
    ? `<span class="product-price"><del>${formatPrice(product.originalPrice)}</del> <strong>Free</strong></span>`
    : `<span class="product-price">${formatPrice(product.price)}</span>`;
}

function getUnitPrice(product, quantity) {
  if (product.originalPrice) return 0;
  return quantity >= product.bulkMin ? product.price * (1 - product.bulkDiscount) : product.price;
}

function renderProducts() {
  const filtered = products.filter(product => {
    const matchesCategory = currentFilter === "All" || product.category === currentFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card" onclick="openProductDetails(${product.id})" tabindex="0" role="button" aria-label="View details for ${product.name}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <span class="product-badge">${product.badge}</span>
      </div>
      <div class="product-content">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <div class="rating">★★★★★ <span>${product.rating} (${product.reviews})</span></div>
        <div class="product-bottom">${productPriceMarkup(product)}<button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})" aria-label="Add ${product.name} to cart">+</button></div>
      </div>
    </article>
  `).join("");

  emptyState.style.display = filtered.length ? "none" : "block";
}

function openProductDetails(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  document.getElementById("productDetailsContent").innerHTML = `
    <img class="details-image" src="${product.image}" alt="${product.name}">
    <div class="details-copy">
      <span class="product-category">${product.category}</span>
      <h2>${product.name}</h2>
      <div class="rating">★★★★★ <span>${product.rating} (${product.reviews} reviews)</span></div>
      <p>${product.description || "A quality product selected for Russell Shop."}</p>
      <strong class="details-price">${productPriceMarkup(product)}</strong>
      <p class="bulk-note">Buy ${product.bulkMin} or more and save ${product.bulkDiscount * 100}%.</p>
      <label class="quantity-label">Quantity <input id="detailsQuantity" type="number" min="1" value="1"></label>
      <button class="btn btn-primary btn-block" onclick="addDetailsToCart(${product.id})">Add to cart</button>
    </div>`;
  document.getElementById("productDetailsModal").classList.add("active");
  const quantityInput = document.getElementById("detailsQuantity");
  const priceDisplay = document.querySelector(".details-price");
  quantityInput.addEventListener("input", () => {
    const quantity = Math.max(1, Number(quantityInput.value) || 1);
    quantityInput.value = quantity;
    const unitPrice = getUnitPrice(product, quantity);
    priceDisplay.innerHTML = product.originalPrice
      ? `<del>${formatPrice(product.originalPrice)}</del> Free`
      : `${formatPrice(unitPrice)} each${quantity >= product.bulkMin ? " (bulk price)" : ""}`;
  });
}

function closeProductDetails() {
  document.getElementById("productDetailsModal").classList.remove("active");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function addToCart(id) {
  addProductQuantity(id, 1);
  showToast("Product added to cart");
}

function addDetailsToCart(id) {
  const quantityInput = document.getElementById("detailsQuantity");
  const quantity = Math.max(1, Number(quantityInput.value) || 1);
  addProductQuantity(id, quantity);
  closeProductDetails();
  showToast(`${quantity} item${quantity === 1 ? "" : "s"} added to cart`);
}

function addProductQuantity(id, quantity) {
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += quantity;
  else cart.push({ id, quantity });
  renderCart();
}

function changeQuantity(id, amount) {
  const item = cart.find(cartItem => cartItem.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart.splice(cart.indexOf(item), 1);
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
  cartItemsLabel.textContent = `${totalItems} item${totalItems === 1 ? "" : "s"}`;

  if (!cart.length) {
    cartItems.innerHTML = "<div class=\"empty-cart\"><h3>Your cart is empty</h3><p>Add products to get started.</p></div>";
    cartTotal.textContent = formatPrice(0);
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart.map(item => {
    const product = products.find(productItem => productItem.id === item.id);
    if (!product) return "";
    const unitPrice = getUnitPrice(product, item.quantity);
    const savings = (product.price - unitPrice) * item.quantity;
    total += unitPrice * item.quantity;
    return `<div class="cart-item">
      <img src="${product.image}" alt="${product.name}">
      <div><h4>${product.name}</h4><small>${product.originalPrice ? "Free" : `${formatPrice(unitPrice)} each${savings ? ` · You save ${formatPrice(savings)}` : ""}`}</small>
        <div class="qty-controls"><button onclick="changeQuantity(${product.id}, -1)">−</button><span>${item.quantity}</span><button onclick="changeQuantity(${product.id}, 1)">+</button></div>
      </div>
      <button class="remove-item" onclick="changeQuantity(${product.id}, -${item.quantity})">Remove</button>
    </div>`;
  }).join("");
  cartTotal.textContent = formatPrice(total);
}

function openCart() {
  cartDrawer.classList.add("active");
  overlay.classList.add("active");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("active");
  overlay.classList.remove("active");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function checkout() {
  if (!cart.length) return showToast("Your cart is empty");
  cart.length = 0;
  renderCart();
  closeCart();
  showToast("Please contact the admin to complete your checkout.");
}

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderProducts();
  });
});

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.category;
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === currentFilter);
    });
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    renderProducts();
  });
});

document.getElementById("searchToggle").addEventListener("click", () => {
  const panel = document.getElementById("searchPanel");
  panel.classList.toggle("active");
  if (panel.classList.contains("active")) document.getElementById("searchInput").focus();
});

document.getElementById("searchInput").addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderProducts();
});

const mobileMenuButton = document.getElementById("mobileMenuBtn");
const navigationLinks = document.getElementById("navLinks");

if (mobileMenuButton && navigationLinks) {
  mobileMenuButton.addEventListener("click", () => {
    const isOpen = navigationLinks.classList.toggle("active");
    mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
  });
  navigationLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navigationLinks.classList.remove("active");
    mobileMenuButton.setAttribute("aria-expanded", "false");
  }));
}

document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("checkoutBtn").addEventListener("click", checkout);
overlay.addEventListener("click", closeCart);

renderProducts();
renderCart();

