export interface Ingredient {
    name: string;
    description: string;
    image?: string;
}

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

export interface Extra {
    id: string;
    name: string;
    price: number;
}

export interface Menu {
    id: string;
    title: string;
    chef: string;
    basePrice: number;
    image: string;
    badge: string;
    description: string;
    items: MenuItem[];
    extras?: Extra[];
    soldOut?: boolean;
}

export interface Occasion {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    features: string[];
}

export const menus: Menu[] = [
    {
        id: "hans-private",
        title: "Signature Private Dining",
        chef: "Hans Van Wolde",
        basePrice: 185,
        image: "/images/menu-brut.png",
        badge: "2 Michelin Stars",
        description: "A world-class culinary journey brought to your table by Hans van Wolde. Experience the pinnacle of experimental gastronomy.",
        items: [
            {
                id: "hvw-1",
                name: "Truffle Infused Langoustine",
                description: "Fresh langoustine with black winter truffle and cauliflower purée.",
                image: "/images/Hero images/menu-south-indian.png",
                price: 45
            },
            {
                id: "hvw-2",
                name: "Aged Wagyu Beef",
                description: "28-day aged Wagyu with red wine jus and seasonal roots.",
                image: "/images/menu-classic.png",
                price: 65
            },
            {
                id: "hvw-3",
                name: "Gold Leaf Chocolate Sphere",
                description: "Valrhona chocolate sphere with raspberry coulis and edible gold.",
                image: "/images/menu-dessert.png",
                price: 35
            }
        ],
        extras: [
            { id: "wine-pairing", name: "Grand Cru Wine Pairing", price: 120 },
            { id: "caviar-service", name: "Premium Caviar Service", price: 150 }
        ]
    },
    {
        id: "ron-gastrobar-athome",
        title: "Gastrobar at Home",
        chef: "Ron Blaauw",
        basePrice: 95,
        image: "/images/menu-ron.png",
        badge: "Gastrobar Style",
        description: "Ron's famous gastrobar concept, reimagined for your home. Pure flavors with a touch of rock-and-roll.",
        items: [
            {
                id: "rb-1",
                name: "Tuna Taco",
                description: "Fresh tuna with wasabi and crispy ginger.",
                image: "/images/menu-ron.png",
                price: 18
            },
            {
                id: "rb-2",
                name: "Spare Ribs Ron's Style",
                description: "The legendary boneless ribs with homemade BBQ sauce.",
                image: "/images/menu-classic.png",
                price: 32
            }
        ],
        extras: [
            { id: "cocktail-kit", name: "Gastrobar Cocktail Kit", price: 45 }
        ]
    },
    {
        id: "berg-bistronomique",
        title: "Bistronomique Feast",
        chef: "Bergpaviljoen",
        basePrice: 75,
        image: "/images/menu-classic.png",
        badge: "Bib Gourmand",
        description: "French soul in the heart of Amersfoort. Seasonal ingredients prepared with respect and served with warmth.",
        items: [
            {
                id: "bp-1",
                name: "Pan-seared Scallops",
                description: "With parsnip cream and beurre blanc.",
                image: "/images/menu-brut.png",
                price: 24
            }
        ]
    },
    {
        id: "christmas-box-moms-magic",
        title: "Mom's Magic Christmas Box",
        chef: "Mom's Magic",
        basePrice: 85,
        image: "/images/Hero images/menu-south-indian.png",
        badge: "Authentic",
        description: "A heartwarming Christmas feast with authentic flavors. Choose from Veg, Non-Veg, or Premium options.",
        items: [
            {
                id: "mm-1",
                name: "Paneer / Chicken Tikka",
                description: "Marinated and grilled to perfection.",
                image: "/images/menu-classic.png",
                price: 25
            },
            {
                id: "mm-2",
                name: "Mutton Biriyani",
                description: "Fragrant basmati rice with tender mutton and spices.",
                image: "/images/menu-ron.png",
                price: 35
            }
        ],
        extras: [
            { id: "mango-lassi", name: "Fresh Mango Lassi", price: 5 },
            { id: "dessert-box", name: "Extra Dessert Box", price: 20 }
        ]
    },
    {
        id: "christmas-box-la-esquina",
        title: "La Esquina Dominicana Box",
        chef: "La Esquina Dominicana",
        basePrice: 75,
        image: "/images/menu-classic.png",
        badge: "Caribbean",
        description: "Celebrate Christmas with the vibrant flavors of the Dominican Republic.",
        items: [
            {
                id: "led-1",
                name: "Roast Pork Shoulder (Pernil)",
                description: "Slow-roasted pork with traditional Dominican spices.",
                image: "/images/menu-classic.png",
                price: 40
            }
        ]
    },
    {
        id: "christmas-box-sprinkle-swirl",
        title: "Sprinkle and Swirl Box",
        chef: "Sprinkle and Swirl",
        basePrice: 50,
        image: "/images/menu-dessert.png",
        badge: "Sweets",
        description: "Delightful sweet treats and baked goods to brighten your holiday season.",
        items: [
            {
                id: "ss-1",
                name: "Holiday Assortment",
                description: "Selection of cakes, cupcakes, and festive cookies.",
                image: "/images/menu-dessert.png",
                price: 50
            }
        ]
    },
    {
        id: "christmas-box-bottega",
        title: "Bottega Christmas Box",
        chef: "Bottega",
        basePrice: 95,
        image: "/images/menu-ron.png",
        badge: "Gourmet",
        description: "Italian gourmet selection for a sophisticated Christmas celebration.",
        items: [
            {
                id: "bt-1",
                name: "Artisanal Pasta Kit",
                description: "Handcrafted pasta with premium truffle sauce.",
                image: "/images/menu-brut.png",
                price: 45
            }
        ]
    },
    // --- Sold Out / Fully Booked Menus below ---
    {
        id: "christmas-4-course",
        title: "Christmas 4-course",
        chef: "Bergpaviljoen Bistronomique",
        basePrice: 64.5,
        image: "/images/menu-classic.png",
        badge: "Classic",
        description: "A classic 4-course culinary journey designed to bring the restaurant experience to your dining table.",
        items: [],
        soldOut: true
    },
    {
        id: "brut172",
        title: "Brut172 Christmas",
        chef: "Hans Van Wolde",
        basePrice: 99.5,
        image: "/images/menu-brut.png",
        badge: "Exclusive",
        description: "An exclusive menu curated by Hans Van Wolde, focusing on bold flavors and exquisite presentation.",
        items: [],
        soldOut: true
    },
    {
        id: "ron-gastrobar",
        title: "Ron Gastrobar",
        chef: "Ron Blaauw",
        basePrice: 31,
        image: "/images/menu-ron.png",
        badge: "Signature",
        description: "Accessible top-tier dining with Ron Blaauw's signature gastrobar style. Fun, tasty, and unpretentious.",
        items: [],
        soldOut: true
    },
    {
        id: "christmas-veggie",
        title: "Vegetarian Festive Feast",
        chef: "Green Leaf Kitchen",
        basePrice: 55,
        image: "/images/menu-veggie.png",
        badge: "Vegetarian",
        description: "A vibrant and hearty plant-based menu that celebrates winter produce.",
        items: [],
        soldOut: true
    },
    {
        id: "seafood-royale",
        title: "Seafood Spectacular",
        chef: "Ocean Blue",
        basePrice: 85,
        image: "/images/menu-seafood.png",
        badge: "Seafood",
        description: "A luxurious dive into the ocean's finest offerings. Lobster, oysters, and more.",
        items: [],
        soldOut: true
    },
    {
        id: "asian-fusion",
        title: "Asian Christmas Fusion",
        chef: "Kenji Moto",
        basePrice: 75,
        image: "/images/menu-fusion.png",
        badge: "Fusion",
        description: "East meets West in this spectacular fusion menu. Unexpected flavors for a memorable night.",
        items: [],
        soldOut: true
    }
];

export const occasions: Occasion[] = [
    {
        id: "kerst",
        title: "Christmas Specials",
        subtitle: "Seasonal",
        image: "/images/occasion-christmas.png",
        description: "Celebrate the magic of Christmas with our specially curated holiday menus. From traditional roasts to modern gourmet experiences.",
        features: ["Traditional Decor styling included", "Wine pairing options", "Kid-friendly alternatives"]
    },
    {
        id: "shared",
        title: "Shared Dining",
        subtitle: "Social",
        image: "/images/occasion-shared.png",
        description: "Food is best when shared. Enjoy large platters and family-style serving for a warm, communal dining experience.",
        features: ["Large serving platters", "Interactive courses", "Casual atmosphere"]
    },
    {
        id: "newyear",
        title: "New Year's Eve",
        subtitle: "Celebration",
        image: "/images/occasion-newyear.png",
        description: "Ring in the New Year with sparkles and culinary fireworks. A luxurious menu to countdown to midnight.",
        features: ["Champagne toast included", "Late-night snacks", "Festive dessert finale"]
    },
    {
        id: "corporate",
        title: "Corporate Events",
        subtitle: "Professional",
        image: "/images/occasion-corporate.png",
        description: "Impress your colleagues and clients with a high-end culinary experience. Perfect for year-end parties.",
        features: ["Branded menus available", "Professional service staff", "Dietary requirement handling"]
    },
    {
        id: "romantic",
        title: "Romantic Dinner",
        subtitle: "Intimate",
        image: "/images/occasion-romantic.png",
        description: "Waitlists? No thank you. A private chef ensures the most romantic setting possible: your own home.",
        features: ["Candlelit setup", "Premium wine selection", "Discreet service"]
    }
];

export interface Chef {
    slug: string;
    name: string;
    image: string;
    heroImage: string;
    description: string;
    longDescription: string;
    videoUrl?: string;
    gallery: string[];
    specialties: string[];
    experience: string;
    languages: string[];
    awards?: string[];
    philosophy?: string;
}

export const chefs: Chef[] = [
    {
        slug: "hans-van-wolde",
        name: "Hans Van Wolde",
        image: "/images/chefs/hans.png",
        heroImage: "/images/Hero images/hero-chef.png",
        description: "Michelin Star Chef known for Brut172.",
        longDescription: "Hans van Wolde is a culinary visionary whose passion for perfection has earned him two Michelin stars. His approach is a blend of traditional techniques and avant-garde innovation, creating dishes that are as visually stunning as they are delicious. Hans believes that every meal should be an unforgettable performance.",
        philosophy: "To create a culinary experience that touches all the senses and leaves a lasting memory.",
        awards: ["2 Michelin Stars", "GaultMillau Chef of the Year"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
        gallery: [
            "/images/menu-brut.png",
            "/images/Hero images/menu-south-indian.png",
            "/images/menu-classic.png",
            "/images/menu-ron.png"
        ],
        specialties: ["Modern European", "Experimental Gastronomy", "Fine Dining", "Seasonal Sourcing", "Artistic Presentation"],
        experience: "25+ Years",
        languages: ["Dutch", "English", "French"]
    },
    {
        slug: "ron-blaauw",
        name: "Ron Blaauw",
        image: "/images/chefs/ron.png",
        heroImage: "/images/Hero images/menu-ron.png",
        description: "Famous for his gastrobar concept.",
        longDescription: "Ron Blaauw is a household name in the Dutch culinary world. After years of running a two-star Michelin restaurant, he revolutionized the scene by opening Ron Gastrobar—focusing on high-quality food in a relaxed, accessible atmosphere. His cooking is characterized by pure flavors and a touch of rock-and-roll.",
        philosophy: "Good food should be accessible to everyone without compromising on quality or creativity.",
        awards: ["Former 2 Michelin Stars", "Restaurant of the Year"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        gallery: [
            "/images/menu-ron.png",
            "/images/menu-classic.png",
            "/images/menu-veggie.png",
            "/images/menu-brut.png"
        ],
        specialties: ["Contemporary Dutch", "Gastrobar Style", "Local Sourcing", "Indonesian Influence", "Meat & Seafood"],
        experience: "30+ Years",
        languages: ["Dutch", "English"]
    },
    {
        slug: "bergpaviljoen",
        name: "Bergpaviljoen",
        image: "/images/chefs/berg.png",
        heroImage: "/images/Hero images/menu-classic.png",
        description: "Bistronomique excellence.",
        longDescription: "The team at Bergpaviljoen Bistronomique brings the soul of French cuisine to Amersfoort. Their philosophy is simple: use the best seasonal ingredients, treat them with respect, and serve them with warmth. It's fine dining without the pretension, where every guest feels like family.",
        philosophy: "Authentic flavors, seasonal products, and a warm atmosphere make for the perfect meal.",
        awards: ["Bib Gourmand", "Best Terrace in NL"],
        gallery: [
            "/images/menu-classic.png",
            "/images/menu-ron.png",
            "/images/menu-brut.png",
            "/images/Hero images/menu-south-indian.png"
        ],
        specialties: ["French Bistronomique", "Seasonal Menu", "Wine Pairing", "Seafood Specialties", "Game Dishes"],
        experience: "15+ Years",
        languages: ["Dutch", "English"]
    },
    {
        slug: "kenji-moto",
        name: "Kenji Moto",
        image: "/images/chefs/kenji.png",
        heroImage: "/images/Hero images/menu-south-indian.png",
        description: "Asian fusion innovator.",
        longDescription: "Kenji Moto is a master of balance, blending the delicate traditions of Japanese cuisine with bold influences from across Asia and the West. His menus are a journey of discovery, featuring unexpected textures and vibrant flavor profiles that challenge and delight the palate.",
        philosophy: "Cooking is about finding the perfect harmony between contrasting flavors and cultures.",
        awards: ["Rising Star Award", "Best Asian Fusion Concept"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        gallery: [
            "/images/menu-fusion.png",
            "/images/menu-seafood.png",
            "/images/menu-veggie.png",
            "/images/menu-classic.png"
        ],
        specialties: ["Japanese Fusion", "Modern Asian", "Umami Specialists", "Sushi Art", "Wok Techniques"],
        experience: "12+ Years",
        languages: ["Japanese", "English", "Dutch"]
    },
    {
        slug: "patisserie-marie",
        name: "Patisserie Marie",
        image: "/images/chefs/marie.png",
        heroImage: "/images/Hero images/menu-dessert.png",
        description: "Queen of sweets.",
        longDescription: "Marie's creations are more than just desserts; they are edible works of art. From delicate macarons to towering multi-layered cakes, every piece is crafted with meticulous attention to detail and the finest ingredients. Her patisserie brings a touch of Parisian elegance to any celebration.",
        philosophy: "Every dessert should be a celebration of flavor and a feast for the eyes.",
        awards: ["Master Patissier", "Gold Medal - Cake Design"],
        gallery: [
            "/images/menu-dessert.png",
            "/images/menu-brut.png",
            "/images/menu-classic.png",
            "/images/menu-ron.png"
        ],
        specialties: ["High-end Patisserie", "Custom Cakes", "French Pastry", "Chocolate Work", "Artisanal Breads"],
        experience: "10+ Years",
        languages: ["French", "English", "Dutch"]
    },
    {
        slug: "ocean-blue",
        name: "Ocean Blue",
        image: "/images/chefs/ocean.png",
        heroImage: "/images/menu-seafood.png",
        description: "Seafood specialist.",
        longDescription: "Ocean Blue is dedicated to the treasures of the sea. Their chefs specialize in sourcing the freshest sustainable seafood and preparing it with techniques that highlight its natural brilliance. From raw bars to grilled masterpieces, it's a celebration of all things aquatic.",
        philosophy: "Respect the ocean by choosing sustainable seafood and letting its natural flavors shine.",
        awards: ["Sustainable Seafood Award", "Best Seafood Experience"],
        gallery: [
            "/images/menu-seafood.png",
            "/images/menu-classic.png",
            "/images/menu-ron.png",
            "/images/menu-brut.png"
        ],
        specialties: ["Sustainable Seafood", "Raw Bar", "Mediterranean Fish", "Shellfish Platters", "Smoked Specialties"],
        experience: "18+ Years",
        languages: ["Dutch", "English", "Spanish"]
    },
    {
        slug: "moms-magic",
        name: "Mom's Magic",
        image: "/images/chefs/moms.png",
        heroImage: "/images/Hero images/menu-south-indian.png",
        description: "Authentic Indian flavors.",
        longDescription: "Mom's Magic brings the warmth and spice of a traditional Indian kitchen to your home. Every dish is prepared with family recipes passed down through generations, using freshly ground spices and local produce.",
        philosophy: "Food is love, and home-cooked meals are the purest expression of that love.",
        awards: ["Best Indian Cuisine 2024"],
        gallery: [
            "/images/Hero images/menu-south-indian.png",
            "/images/menu-classic.png",
            "/images/menu-ron.png",
            "/images/menu-brut.png"
        ],
        specialties: ["South Indian", "Mutton Biriyani", "Tandoori Specialties"],
        experience: "20+ Years",
        languages: ["English", "Hindi", "Tamil"]
    },
    {
        slug: "la-esquina",
        name: "La Esquina Dominicana",
        image: "/images/chefs/esquina.png",
        heroImage: "/images/menu-classic.png",
        description: "Vibrant Caribbean cuisine.",
        longDescription: "La Esquina Dominicana brings the rhythm and flavors of the Caribbean to the Netherlands. Specializing in traditional Dominican feasts, their cooking is a celebration of slow-roasted meats, tropical flavors, and communal dining.",
        philosophy: "Life is a party, and every meal should be a celebration.",
        awards: ["Caribbean Culinary Excellence"],
        gallery: [
            "/images/menu-classic.png",
            "/images/menu-ron.png",
            "/images/menu-brut.png",
            "/images/Hero images/menu-south-indian.png"
        ],
        specialties: ["Dominican Pernil", "Slow Roast Pork", "Caribbean Spices"],
        experience: "15+ Years",
        languages: ["Spanish", "Dutch", "English"]
    }
];

export interface DoodleStory {
    title: string;
    description: string;
    image: string;
    bgColor: string;
}

export const doodleStories = [
    {
        title: "The Seed of Quality",
        description: "It all starts with a seed. We partner with local farmers who treat their crops like gold. No nasties, just pure, sun-soaked goodness grown right here.",
        image: "/images/doodles/seed.svg",
        bgColor: "bg-green-100"
    },
    {
        title: "The Chef's Canvas",
        description: "Our chefs aren't just cooks; they're artists. They take these fresh ingredients and sketch out flavors that dance on your palate. It's culinary wizardry in motion.",
        image: "/images/doodles/chef-art.svg",
        bgColor: "bg-orange-100"
    },
    {
        title: "Your Flavor Profile",
        description: "We don't do cookie-cutter. We listen to your cravings, your quirks, and your dreams to craft a menu that feels like it was made just for you. Because it was.",
        image: "/images/doodles/profile.svg",
        bgColor: "bg-blue-100"
    },
    {
        title: "Magic in the Making",
        description: "Watch as your kitchen transforms. The sizzle, the aroma, the energy—it's a live performance where the grand finale is a meal you'll never forget.",
        image: "/images/doodles/magic.svg",
        bgColor: "bg-purple-100"
    },
    {
        title: "Memories Served",
        description: "The best part? It's not just about the food. It's about the laughter, the stories shared, and the memories created around the table. We just set the stage.",
        image: "/images/doodles/memories.svg",
        bgColor: "bg-yellow-100"
    }
];
