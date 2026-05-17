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
    dietary?: string[];
    allergens?: string[];
}

export interface Extra {
    id: string;
    name: string;
    price: number;
    image?: string;
    description?: string;
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
    desserts?: Extra[];
    serviceExtras?: Extra[];
    includes?: string[];
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
        title: "Michelin Star Home Experience",
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
            { id: "wine-pairing", name: "Grand Cru Wine Pairing", price: 120, image: "/images/menu-brut.png" },
            { id: "caviar-service", name: "Premium Caviar Service", price: 150, image: "/images/menu-classic.png" }
        ],
        serviceExtras: [
            { id: "hans-serv-butler", name: "Private White-Glove Butler", price: 200, image: "/images/hero-bg.jpg" },
            { id: "hans-serv-waiter", name: "Elite Waitstaff Service", price: 150, image: "/images/menu-classic.png" }
        ]
    },
    {
        id: "ron-gastrobar-athome",
        title: "Urban Comfort Feast",
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
            { id: "cocktail-kit", name: "Gastrobar Cocktail Kit", price: 45, image: "/images/menu-brut.png" },
            { id: "ron-extra-fries", name: "Truffle Parmesan Fries", price: 12, image: "/images/menu-classic.png" }
        ],
        serviceExtras: [
            { id: "ron-serv-dj", name: "Gastrobar DJ Set (2h)", price: 250, image: "/images/hero-bg.jpg" },
            { id: "ron-serv-setup", name: "Industrial Style Table Setup", price: 85, image: "/images/menu-ron.png" }
        ]
    },
    {
        id: "berg-bistronomique",
        title: "Classic French Sunday Lunch",
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
        ],
        extras: [
            { id: "bp-extra-wine", name: "Regional Wine Pairing", price: 55, image: "/images/menu-brut.png" },
            { id: "bp-extra-dessert", name: "Chef's Dessert Trolley", price: 25, image: "/images/menu-dessert.png" }
        ],
        serviceExtras: [
            { id: "bp-serv-waiter", name: "Traditional French Service", price: 100, image: "/images/menu-classic.png" },
            { id: "bp-serv-cleanup", name: "Sunday Evening Cleanup", price: 75, image: "/images/hero-bg.jpg" }
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
            { id: "mango-lassi", name: "Fresh Mango Lassi", price: 5, image: "/images/menu-ron.png" },
            { id: "dessert-box", name: "Extra Dessert Box", price: 20, image: "/images/menu-dessert.png" }
        ],
        serviceExtras: [
            { id: "mm-serv-deliv", name: "Priority Home Delivery", price: 15, image: "/images/hero-bg.jpg" },
            { id: "mm-serv-plating", name: "Authentic Plating Service", price: 45, image: "/images/menu-classic.png" }
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
        ],
        extras: [
            { id: "led-extra-plantains", name: "Fried Sweet Plantains", price: 12, image: "/images/menu-ron.png" },
            { id: "led-extra-juice", name: "Fresh Tropical Juice Jug", price: 18, image: "/images/menu-brut.png" }
        ],
        serviceExtras: [
            { id: "led-serv-deliv", name: "Dominican Festive Delivery", price: 20, image: "/images/hero-bg.jpg" }
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
        ],
        extras: [
            { id: "ss-extra-coffee", name: "Artisan Coffee Beans (250g)", price: 18, image: "/images/menu-ron.png" },
            { id: "ss-extra-toppers", name: "Custom Festive Cake Toppers", price: 15, image: "/images/menu-dessert.png" }
        ],
        serviceExtras: [
            { id: "ss-serv-wrap", name: "Luxury Gift Wrapping Service", price: 10, image: "/images/menu-classic.png" }
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
    },
];

// Parameters for Lebanese cuisine distribution
const lebaneseMains = (prefix: string): MenuItem[] => [
    {
        id: `${prefix}-main-warak-enab`,
        name: "Warak Enab",
        description: "Stuffed grape leaves filled with rice, herbs, and spices, cooked with potato or carrot slices. — Small €18 / Large €28",
        image: "/images/dishes/warak_enab.jpg",
        price: 0,
        dietary: ["Vegan", "Gluten-Free"],
        allergens: []
    },
    {
        id: `${prefix}-main-makloubeh`,
        name: "Makloubeh Aubergine",
        description: "An upside-down rice dish layered with aubergine, meat or chicken, tomato sauce, and toasted cashews. — Small €22 / Large €32",
        image: "/images/dishes/makloubeh_aubergine.jpg",
        price: 0,
        dietary: ["Halal"],
        allergens: ["Nuts"]
    },
    {
        id: `${prefix}-main-rice-meat`,
        name: "Lebanese Rice with Meat and Nuts",
        description: "Fragrant rice topped with tender lamb or beef and toasted almonds and pine nuts. — Small €22 / Large €32",
        image: "/images/dishes/lebanese_rice_meat_nuts.jpg",
        price: 0,
        dietary: ["Halal"],
        allergens: ["Nuts"]
    },
    {
        id: `${prefix}-main-chicken-rice`,
        name: "Chicken Rice Platter",
        description: "Spiced yellow rice served with roasted chicken, potatoes, cashews, almonds, and fresh parsley. — Small €24 / Large €34",
        image: "/images/dishes/chicken_rice_platter.jpg",
        price: 0,
        dietary: ["Halal"],
        allergens: ["Nuts"]
    },
    {
        id: `${prefix}-main-grilled-chicken`,
        name: "Grilled Chicken",
        description: "Marinated Lebanese-style roasted chicken served with garlic sauce and mezze sides. — €28",
        image: "/images/dishes/grilled_chicken.jpg",
        price: 0,
        dietary: ["Halal"],
        allergens: []
    },
    {
        id: `${prefix}-main-grilled-lamb-chops`,
        name: "Grilled Lamb Chops",
        description: "Seared lamb chops seasoned with Lebanese spices and served with herbs and lemon. — €32",
        image: "/images/dishes/grilled_lamb_chops.jpg",
        price: 0,
        dietary: ["Halal"],
        allergens: []
    },
    {
        id: `${prefix}-main-crispy-pita`,
        name: "Crispy Fried Pita",
        description: "Golden fried pita strips served as a crunchy side for fattoush, dips, and mezze plates. — €10",
        image: "/images/dishes/crispy_fried_pita.jpg",
        price: 0,
        dietary: ["Vegan"],
        allergens: ["Gluten"]
    }
];

const lebaneseStartersAndExtras = (prefix: string): Extra[] => [
    {
        id: `${prefix}-extra-hummus`,
        name: "Hummus",
        price: 10,
        image: "/images/dishes/hummus.jpg",
        description: "A smooth chickpea and tahini dip finished with olive oil and chickpeas. A classic Lebanese mezze staple. — €10"
    },
    {
        id: `${prefix}-extra-hummus-lahme`,
        name: "Hummus Bil Lahme",
        price: 14,
        image: "/images/dishes/hummus_bil_lahme.jpg",
        description: "Creamy hummus topped with spiced minced meat and toasted nuts. Rich, savory, and perfect for sharing. — €14"
    },
    {
        id: `${prefix}-extra-mutabbal`,
        name: "Mutabbal Batenjen",
        price: 12,
        image: "/images/dishes/mutabbal_batenjen.jpg",
        description: "Smoky roasted aubergine blended with tahini, lemon, and garlic, finished with olive oil and pomegranate. — €12"
    },
    {
        id: `${prefix}-extra-green-hummus`,
        name: "Green Herb Hummus",
        price: 12,
        image: "/images/dishes/green_herb_hummus.jpg",
        description: "A vibrant chickpea dip blended with fresh herbs and olive oil. Light, fresh, and modern. — €12"
    },
    {
        id: `${prefix}-extra-tabbouleh`,
        name: "Tabbouleh",
        price: 12,
        image: "/images/dishes/tabbouleh.jpg",
        description: "Fresh parsley salad with tomato, bulgur, lemon, and olive oil, served with crisp lettuce leaves. — €12"
    },
    {
        id: `${prefix}-extra-fattoush`,
        name: "Fattoush",
        price: 12,
        image: "/images/dishes/fattoush.jpg",
        description: "A refreshing mixed salad with tomatoes, cucumber, herbs, and crispy fried pita. — €12"
    },
    {
        id: `${prefix}-extra-batata-harra`,
        name: "Batata Harra",
        price: 12,
        image: "/images/dishes/batata_harra.jpg",
        description: "Crispy potatoes tossed with garlic, coriander, chili, lemon, and fresh herbs. — €12"
    },
    {
        id: `${prefix}-extra-kibbeh`,
        name: "Kibbeh",
        price: 14,
        image: "/images/dishes/kibbeh.jpg",
        description: "Fried bulgur and meat shells filled with spiced minced meat, onion, and nuts. — €14"
    },
    {
        id: `${prefix}-extra-kibbeh-cups`,
        name: "Kibbeh Cups",
        price: 16,
        image: "/images/dishes/kibbeh_cups.jpg",
        description: "Mini kibbeh cups filled with hummus and aubergine, finished with pomegranate. — €16"
    },
    {
        id: `${prefix}-extra-pastries`,
        name: "Fatayer and Sambousek",
        price: 16,
        image: "/images/dishes/fatayer_sambousek.jpg",
        description: "Assorted baked Lebanese pastries filled with spinach, cheese, meat, or za’atar. — €16"
    },
    {
        id: `${prefix}-extra-aubergine-mezze`,
        name: "Roasted Aubergine and Cauliflower Mezze",
        price: 14,
        image: "/images/dishes/roasted_aubergine_cauliflower.jpg",
        description: "Charred aubergine and cauliflower topped with herbs and toasted nuts. — €14"
    },
    {
        id: `${prefix}-extra-olives`,
        name: "Olives and Fresh Herb Platter",
        price: 10,
        image: "/images/dishes/olives_herb_platter.jpg",
        description: "A simple mezze plate of olives, mint, radish, spring onion, and fresh greens. — €10"
    }
];

const lebaneseDesserts = (prefix: string): Extra[] => [
    {
        id: `${prefix}-dessert-knafeh`,
        name: "Knafeh",
        price: 14,
        image: "/images/dishes/knafeh.jpg",
        description: "A warm Lebanese cheese dessert with a golden semolina crust, served with fragrant sugar syrup. — €14"
    }
];

// Append Heaven's Kitchen menus to primary database
menus.push(
    {
        id: "heavens-kitchen-silver",
        title: "The Elegant Celebration Menu",
        chef: "Heaven's Kitchen",
        basePrice: 300,
        image: "/images/dishes/chicken_rice_platter.jpg",
        badge: "Classic Gathering",
        description: "An elegant, multi-course dining experience perfectly tailored for romantic dates, intimate birthday gatherings, or family celebrations.",
        includes: ["3-Course Signature Meal", "Chef Presentation", "Linen Napkins Included"],
        items: lebaneseMains("hk-silver"),
        extras: lebaneseStartersAndExtras("hk-silver"),
        desserts: lebaneseDesserts("hk-silver"),
        serviceExtras: [
            { id: "hk-silver-serv-napkins", name: "Linen Napkins & Custom Tableware", price: 30, image: "/images/dishes/olives_herb_platter.jpg", description: "Beautifully styled cloth napkins and elegant tableware for your setting." },
            { id: "hk-silver-serv-staff", name: "Professional Waitstaff", price: 240, image: "/images/dishes/roasted_aubergine_cauliflower.jpg" }
        ]
    },
    {
        id: "hk-workshop",
        title: "Lebanese Masterclass & Workshop",
        chef: "Heaven's Kitchen",
        basePrice: 240,
        image: "/images/dishes/makloubeh_aubergine.jpg",
        badge: "Workshop",
        description: "Learn the secrets of traditional Lebanese cooking in a hands-on masterclass. Prepare classic dips, savory pastries, and master the art of spices.",
        includes: ["3-Hour Culinary Workshop", "Custom Aprons & Spices", "Shared Dining & Tasting", "Linen Napkins Included"],
        items: lebaneseMains("hk-workshop"),
        extras: lebaneseStartersAndExtras("hk-workshop"),
        desserts: lebaneseDesserts("hk-workshop"),
        serviceExtras: [
            { id: "hk-workshop-serv-napkins", name: "Linen Napkins & Custom Tableware", price: 30, image: "/images/dishes/olives_herb_platter.jpg", description: "Beautifully styled cloth napkins and elegant tableware for your setting." },
            { id: "hk-workshop-serv-gift", name: "Bespoke Ceramic Platter", price: 160, image: "/images/dishes/kibbeh_cups.jpg" }
        ]
    },
    {
        id: "hk-party",
        title: "Grand Celebration & Event Feast",
        chef: "Heaven's Kitchen",
        basePrice: 400,
        image: "/images/dishes/grilled_chicken.jpg",
        badge: "Grand Event",
        description: "A spectacular celebration banquet featuring a grand selection of hot and cold mezze, delicious grills, and traditional desserts. Perfect for weddings, birthday parties, and corporate events.",
        includes: ["Grand Celebration Feast", "Event Culinary Styling", "Linen Napkins Included"],
        items: lebaneseMains("hk-party"),
        extras: lebaneseStartersAndExtras("hk-party"),
        desserts: lebaneseDesserts("hk-party"),
        serviceExtras: [
            { id: "hk-party-serv-napkins", name: "Linen Napkins & Custom Tableware", price: 30, image: "/images/dishes/olives_herb_platter.jpg", description: "Beautifully styled cloth napkins and elegant tableware for your setting." },
            { id: "hk-party-serv-music", name: "Live DJ Performance", price: 600, image: "/images/dishes/roasted_aubergine_cauliflower.jpg" }
        ]
    },
    {
        id: "hk-luxury-tasting",
        title: "Gourmet Luxury Tasting Journey",
        chef: "Heaven's Kitchen",
        basePrice: 700,
        image: "/images/dishes/grilled_lamb_chops.jpg",
        badge: "Luxury Tasting",
        description: "An ultra-refined 5-course degustation menu showcasing the absolute pinnacle of authentic Lebanese gastronomy with elevated presentation.",
        includes: ["5-Course Premium Tasting", "Sommelier-guided Pairings", "Linen Napkins Included"],
        items: lebaneseMains("hk-tasting"),
        extras: lebaneseStartersAndExtras("hk-tasting"),
        desserts: lebaneseDesserts("hk-tasting"),
        serviceExtras: [
            { id: "hk-tasting-serv-napkins", name: "Linen Napkins & Custom Tableware", price: 30, image: "/images/dishes/olives_herb_platter.jpg", description: "Beautifully styled cloth napkins and elegant tableware for your setting." },
            { id: "hk-tasting-serv-butler", name: "Private White-Glove Butler", price: 400, image: "/images/dishes/tabbouleh.jpg" }
        ]
    },
    {
        id: "hk-brunch",
        title: "Beirut Sunrise Pastry Brunch",
        chef: "Heaven's Kitchen",
        basePrice: 170,
        image: "/images/dishes/fatayer_sambousek.jpg",
        badge: "Pastry Brunch",
        description: "A bright and warm brunch experience focusing on freshly baked traditional pastries, refreshing herbaceous dips, and classic breakfast bites.",
        includes: ["Fresh Pastry Assortment", "Morning Coffee & Tea Station", "Linen Napkins Included"],
        items: lebaneseMains("hk-brunch"),
        extras: lebaneseStartersAndExtras("hk-brunch"),
        desserts: lebaneseDesserts("hk-brunch"),
        serviceExtras: [
            { id: "hk-brunch-serv-napkins", name: "Linen Napkins & Custom Tableware", price: 30, image: "/images/dishes/olives_herb_platter.jpg", description: "Beautifully styled cloth napkins and elegant tableware for your setting." },
            { id: "hk-brunch-serv-butler", name: "Mimosa Butler Service", price: 190, image: "/images/dishes/kibbeh_cups.jpg" }
        ]
    },
    {
        id: "hk-subscription",
        title: "Weekly Premium Meal Subscription",
        chef: "Heaven's Kitchen",
        basePrice: 440,
        image: "/images/dishes/chicken_rice_platter.jpg",
        badge: "Subscription",
        description: "Three complete, fresh, chef-prepared Lebanese meals portioned for your week. Savor hearty authentic main courses and delicious starters with zero effort.",
        includes: ["3 Chef-Prepared Meals Weekly", "Calorie & Macro Labeling", "Linen Napkins Included"],
        items: lebaneseMains("hk-sub"),
        extras: lebaneseStartersAndExtras("hk-sub"),
        desserts: lebaneseDesserts("hk-sub"),
        serviceExtras: [
            { id: "hk-sub-serv-napkins", name: "Linen Napkins Pack", price: 30, image: "/images/dishes/olives_herb_platter.jpg", description: "Premium reusable linen napkins for your weekly dining setup." },
            { id: "hk-sub-serv-consult", name: "Personalized Nutrition Consultation", price: 240, image: "/images/dishes/kibbeh_cups.jpg" }
        ]
    },
    {
        id: "hk-table-setup",
        title: "Royal Table Setup & Dining",
        chef: "Heaven's Kitchen",
        basePrice: 320,
        image: "/images/dishes/lebanese_rice_meat_nuts.jpg",
        badge: "Table Setup",
        description: "A breathtaking visual and culinary experience. We transform your dining space with luxury centerpieces, custom tableware, and serve a stunning classic Lebanese menu.",
        includes: ["Luxury Centerpieces & Linens", "Full Dinner Set Presentation", "Linen Napkins Included"],
        items: lebaneseMains("hk-setup"),
        extras: lebaneseStartersAndExtras("hk-setup"),
        desserts: lebaneseDesserts("hk-setup"),
        serviceExtras: [
            { id: "hk-setup-serv-napkins", name: "Linen Napkins & Custom Tableware", price: 30, image: "/images/dishes/olives_herb_platter.jpg", description: "Beautifully styled cloth napkins and elegant tableware for your setting." },
            { id: "hk-setup-serv-cleanup", name: "Full Table Cleanup & Removal", price: 190, image: "/images/dishes/kibbeh.jpg" }
        ]
    },
    {
        id: "hk-cook-with-chef",
        title: "Collaborative Chef's Kitchen",
        chef: "Heaven's Kitchen",
        basePrice: 260,
        image: "/images/dishes/grilled_chicken.jpg",
        badge: "Cook with Chef",
        description: "Don't just eat—cook alongside a master chef! A fun, highly interactive dining experience where you learn core Lebanese techniques while preparing a beautiful feast.",
        includes: ["Hands-on Chef Guidance", "Recipe Folder & Kitchen Gift", "Linen Napkins Included"],
        items: lebaneseMains("hk-cook"),
        extras: lebaneseStartersAndExtras("hk-cook"),
        desserts: lebaneseDesserts("hk-cook"),
        serviceExtras: [
            { id: "hk-cook-serv-napkins", name: "Linen Napkins & Custom Tableware", price: 30, image: "/images/dishes/olives_herb_platter.jpg", description: "Beautifully styled cloth napkins and elegant tableware for your setting." },
            { id: "hk-cook-serv-photo", name: "Culinary Action Photoshoot", price: 400, image: "/images/olives_herb_platter.jpg" }
        ]
    },
    {
        id: "heavens-kitchen-gold",
        title: "The Royal Banquet & Tasting",
        chef: "Heaven's Kitchen",
        basePrice: 500,
        image: "/images/dishes/lebanese_rice_meat_nuts.jpg",
        badge: "Royal Banquet",
        description: "The grandest multi-course feast featuring premium Wagyu, slow-roasted lamb, lobster, and gold leaf.",
        includes: ["Royal Lebanese Dining Experience", "Chef's Storytelling Presentation", "Linen Napkins Included"],
        items: lebaneseMains("hk-gold"),
        extras: lebaneseStartersAndExtras("hk-gold"),
        desserts: lebaneseDesserts("hk-gold"),
        serviceExtras: [
            { id: "hk-gold-serv-napkins", name: "Linen Napkins & Custom Tableware", price: 30, image: "/images/dishes/olives_herb_platter.jpg", description: "Beautifully styled cloth napkins and elegant tableware for your setting." },
            { id: "hk-gold-serv-tamada", name: "Professional Chef Tamada (Host)", price: 500, image: "/images/dishes/kibbeh_cups.jpg" }
        ]
    }
);

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
    verticalVideos?: string[];
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
        image: "/images/chefs/berg.png",
        heroImage: "/images/menu-seafood.png",
        description: "The masters of the sea.",
        longDescription: "Ocean Blue specializes in bringing the freshest, most sustainable seafood directly to your table. Their expertise lies in honoring the delicate flavors of the ocean, using minimal intervention to let the natural quality shine.",
        philosophy: "Respect the ocean, and it will reward you with the finest flavors.",
        gallery: [
            "/images/menu-seafood.png",
            "/images/menu-classic.png",
            "/images/menu-brut.png",
            "/images/menu-ron.png"
        ],
        specialties: ["Sustainable Seafood", "Oyster Shucking", "Sushi & Sashimi", "Mediterranean Style"],
        experience: "15+ Years",
        languages: ["Dutch", "English", "Spanish"]
    },
    {
        slug: "heavens-kitchen",
        name: "Heaven's Kitchen",
        image: "/images/dishes/hummus.jpg",
        heroImage: "/images/chefs/heavens-kitchen-hero.png",
        description: "Premium pre-packaged dining experiences.",
        longDescription: "Heaven's Kitchen is designed to bring you unparalleled culinary experiences with our premium, pre-packaged service plans. We craft every dish with exquisite attention to detail and offer a tailored approach that fits your sophisticated taste.",
        philosophy: "Taste the divine in every bite, wrapped in a premium package.",
        gallery: [
            "/images/dishes/hummus.jpg",
            "/images/dishes/hummus_bil_lahme.jpg",
            "/images/dishes/mutabbal_batenjen.jpg",
            "/images/dishes/green_herb_hummus.jpg",
            "/images/dishes/tabbouleh.jpg",
            "/images/dishes/fattoush.jpg",
            "/images/dishes/batata_harra.jpg",
            "/images/dishes/kibbeh.jpg",
            "/images/dishes/kibbeh_cups.jpg",
            "/images/dishes/fatayer_sambousek.jpg",
            "/images/dishes/roasted_aubergine_cauliflower.jpg",
            "/images/dishes/olives_herb_platter.jpg",
            "/images/dishes/warak_enab.jpg",
            "/images/dishes/makloubeh_aubergine.jpg",
            "/images/dishes/lebanese_rice_meat_nuts.jpg",
            "/images/dishes/chicken_rice_platter.jpg",
            "/images/dishes/grilled_chicken.jpg",
            "/images/dishes/grilled_lamb_chops.jpg",
            "/images/dishes/crispy_fried_pita.jpg",
            "/images/dishes/knafeh.jpg"
        ],
        specialties: ["Premium Deals", "Exclusive Ingredients", "Fine Dining", "Custom Menus"],
        experience: "20+ Years",
        languages: ["Dutch", "English", "Arabic"],
        verticalVideos: [
            "/videos/story1.mp4",
            "/videos/story2.mp4",
            "/videos/story3.mp4"
        ]
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
