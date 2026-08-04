export const site = {
  name: "The Forest Lounge",
  tagline: "A Rooftop Escape in the Heart of Dhanmondi.",
  subTagline: "Fresh Ingredients, Tasty Meals.",
  address:
    "Imperial Amin Centre (rooftop), House #54, Road #10/A, Satmasjid Road, Dhanmondi, Dhaka, Bangladesh",
  phones: ["+8801322853811", "+8801322853812"],
  email: "hello@theforestlounge.com",
  hours: "Open daily, 12:00 PM – 11:00 PM",
  social: {
    facebook: "https://www.facebook.com/theforestlounge",
    instagram: "https://www.instagram.com/the_forest_lounge",
    youtube: "https://www.youtube.com/@theforestlounge7009",
  },
  mapEmbed:
    "https://www.google.com/maps?q=Imperial+Amin+Centre,+House+54,+Road+10/A,+Satmasjid+Road,+Dhanmondi,+Dhaka&output=embed",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "A La Carte", to: "/a-la-carte" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reservations", to: "/reservations" },
  { label: "Contact", to: "/contact" },
  { label: "News", to: "/news" },
] as const;

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  label: string;
  note: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    note: "Small plates built for sharing under the pergola.",
    items: [
      {
        name: "Charred Corn Ribs",
        description: "Grilled sweetcorn, smoked paprika butter, lime, coriander.",
        price: 420,
        tags: ["Veg", "Spicy"],
      },
      {
        name: "Roastery Mushroom Toast",
        description: "Wild mushrooms, thyme cream, sourdough from our bakery bench.",
        price: 540,
        tags: ["Veg"],
      },
      {
        name: "Chicken Gilafi Kebab",
        description: "Hand-minced chicken, bell pepper crust, mint chutney.",
        price: 590,
      },
      {
        name: "Prawn Tempura Bao",
        description: "Crisp tiger prawns, sriracha aioli, pickled cucumber.",
        price: 680,
        tags: ["Spicy"],
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    note: "Open-kitchen plates, finished in front of you.",
    items: [
      {
        name: "Prawn Aglio Olio",
        description: "Tiger prawns, garlic confit, chilli flakes, parsley, olive oil.",
        price: 890,
        tags: ["Spicy"],
      },
      {
        name: "Forest Beef Burger",
        description: "180g patty, aged cheddar, caramelised onion, brioche, rosemary fries.",
        price: 780,
      },
      {
        name: "Butter Chicken Rice Bowl",
        description: "Slow-simmered tomato butter gravy, basmati, burnt garlic.",
        price: 720,
      },
      {
        name: "Grilled Sea Bass",
        description: "Lemon caper butter, seasonal greens, crushed potato.",
        price: 1150,
      },
    ],
  },
  {
    id: "grill",
    label: "From the Grill",
    note: "Charcoal-fired over the rooftop grill.",
    items: [
      {
        name: "Lamb Chops",
        description: "Four chops, herb oil, charred vegetables, mint yoghurt.",
        price: 1450,
      },
      {
        name: "Tenderloin Steak",
        description: "200g tenderloin, peppercorn sauce, brass-pan potatoes.",
        price: 1590,
      },
      {
        name: "Peri Peri Half Chicken",
        description: "24-hour marinade, house peri sauce, slaw.",
        price: 890,
        tags: ["Spicy"],
      },
      {
        name: "Grilled Halloumi Skewers",
        description: "Halloumi, courgette, cherry tomato, oregano.",
        price: 690,
        tags: ["Veg"],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    note: "Made each morning in the pastry corner.",
    items: [
      {
        name: "Dark Chocolate Cremeux",
        description: "70% chocolate, salted caramel, berries.",
        price: 480,
        tags: ["Veg"],
      },
      {
        name: "Basque Burnt Cheesecake",
        description: "Slow-baked, caramelised top, roasted plum.",
        price: 520,
        tags: ["Veg"],
      },
      {
        name: "Tiramisu, Our Way",
        description: "Espresso from our roastery, mascarpone, cocoa.",
        price: 540,
        tags: ["Veg"],
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee & Beverages",
    note: "Roasted on site, six days a week.",
    items: [
      {
        name: "Single Origin Filter",
        description: "Rotating micro-lot, brewed as V60.",
        price: 320,
        tags: ["Veg"],
      },
      {
        name: "Forest Flat White",
        description: "House espresso blend, silky milk.",
        price: 290,
        tags: ["Veg"],
      },
      {
        name: "Cardamom Cold Brew",
        description: "18-hour steep, green cardamom, orange peel.",
        price: 380,
        tags: ["Veg"],
      },
      {
        name: "Lemongrass Iced Tea",
        description: "Fresh lemongrass, honey, mint.",
        price: 260,
        tags: ["Veg"],
      },
    ],
  },
];

export const aLaCarte: MenuCategory[] = [
  {
    id: "raw-bar",
    label: "Raw & Cold",
    note: "Chilled plates, cut to order at the marble pass.",
    items: [
      {
        name: "Tuna Crudo",
        description: "Yellowfin, brown butter ponzu, radish, chive oil.",
        price: 1290,
      },
      {
        name: "Beef Carpaccio",
        description: "Tenderloin, aged parmesan, capers, truffle emulsion.",
        price: 1390,
      },
      {
        name: "Burrata & Heirloom Tomato",
        description: "Basil oil, aged balsamic, focaccia crisp.",
        price: 1150,
        tags: ["Veg"],
      },
    ],
  },
  {
    id: "signature",
    label: "Signature Plates",
    note: "Our chef's table selection, served à la carte only.",
    items: [
      {
        name: "Duck Breast, Cherry & Beet",
        description: "Rosé duck, cherry gastrique, roasted beet, jus.",
        price: 2150,
      },
      {
        name: "Wagyu Rump Cap 250g",
        description: "MB5 wagyu, bone marrow butter, charred leek.",
        price: 3450,
      },
      {
        name: "Lobster Thermidor",
        description: "Half lobster, cognac cream, gruyère gratin.",
        price: 3890,
      },
      {
        name: "Saffron Risotto & Morels",
        description: "Carnaroli, morel mushrooms, aged parmesan.",
        price: 1790,
        tags: ["Veg"],
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    note: "Built to sit beside the signatures.",
    items: [
      {
        name: "Truffle Pommes Purée",
        description: "Butter-heavy potato, black truffle.",
        price: 590,
        tags: ["Veg"],
      },
      {
        name: "Charred Broccolini",
        description: "Chilli, garlic, toasted almond.",
        price: 520,
        tags: ["Veg", "Spicy"],
      },
      {
        name: "Bone Marrow Butter Bread",
        description: "House sourdough, roasted marrow butter.",
        price: 560,
      },
    ],
  },
  {
    id: "pairings",
    label: "Pairings",
    note: "Zero-proof pairings and roastery finishes.",
    items: [
      {
        name: "Tasting Coffee Flight",
        description: "Three roastery lots, filter, espresso, milk.",
        price: 890,
        tags: ["Veg"],
      },
      {
        name: "Botanical Zero-Proof Trio",
        description: "Three seasonal alcohol-free pairings.",
        price: 990,
        tags: ["Veg"],
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "The rooftop at dusk is the best seat in Dhanmondi. We came for coffee and stayed until closing for the lamb chops.",
    name: "Nusrat Jahan",
    detail: "Dhanmondi",
  },
  {
    quote:
      "You can smell the roastery from the stairwell. Genuinely the best flat white I have had in Dhaka, and the open kitchen is a show.",
    name: "Tanvir Ahmed",
    detail: "Coffee lover",
  },
  {
    quote:
      "Booked the corner table for our anniversary. Warm service, quiet greenery, and food that would hold up anywhere.",
    name: "Farhana & Rakib",
    detail: "Anniversary dinner",
  },
  {
    quote:
      "Soft lighting, plants everywhere, and a menu that keeps changing. It has become our default team dinner spot.",
    name: "Sadia Islam",
    detail: "Gulshan",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: "roastery" | "interior" | "coffee" | "grill";
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "new-single-origin-lot",
    title: "A New Single Origin Lands in the Roastery",
    date: "2026-07-18",
    category: "Coffee",
    excerpt:
      "A washed Bourbon lot with stone fruit and cane sugar is now roasting on site — available as filter, espresso, and takeaway beans.",
    image: "roastery",
    body: [
      "Every few weeks our roaster brings in a small lot and we build a profile around it on the rooftop. This one is a washed Bourbon, roasted light enough to keep the stone fruit intact while still pulling sweetly as espresso.",
      "You will find it on the filter bar from noon, and as a 250g retail bag at the take-out counter by the stairs. Ask the barista for a taste before you commit — that is the whole point of roasting in the same building we serve in.",
      "The lot is limited to 60 kilograms, so once it is gone we move on to the next one.",
    ],
  },
  {
    slug: "monsoon-rooftop-evenings",
    title: "Monsoon Evenings on the Rooftop",
    date: "2026-06-30",
    category: "Events",
    excerpt:
      "Covered seating, warm lighting, and a short monsoon menu of grilled plates and spiced hot drinks through the rainy weeks.",
    image: "interior",
    body: [
      "Rain in Dhaka does not have to end the evening. Our pergola seating stays dry while keeping the city skyline in view, and the greenery smells better than ever once it has been washed down.",
      "Through the monsoon we run a short menu alongside the regular one: charcoal-grilled plates, a spiced hot chocolate made with our own roast, and a lemongrass ginger infusion.",
      "Tables fill quickly on rainy nights, so reserving ahead is worth the two minutes.",
    ],
  },
  {
    slug: "inside-the-open-kitchen",
    title: "Inside the Open Kitchen",
    date: "2026-05-22",
    category: "Kitchen",
    excerpt:
      "Why we put the pass in the middle of the dining room, and what changes when guests can see every plate leave the line.",
    image: "grill",
    body: [
      "An open kitchen is a commitment. There is nowhere to hide a messy station, a shortcut, or a cold plate. That was exactly the point when we designed the room.",
      "The pass sits between the dining room and the grill so guests can watch the char happen. Our team plates at eye level, and the conversation between the line and the floor happens in the open.",
      "It also changes how we buy. Produce arrives daily because there is no room to store a compromise.",
    ],
  },
  {
    slug: "coffee-take-out-bar",
    title: "The Take-Out Bar Is Open All Day",
    date: "2026-04-11",
    category: "Coffee",
    excerpt:
      "Coffee to go from the ground-floor bar — no lift, no wait, same beans we pour upstairs.",
    image: "coffee",
    body: [
      "Not every visit needs a table. The take-out bar pours the same espresso and filter we serve on the rooftop, packaged for the walk down Satmasjid Road.",
      "We also sell whole beans, ground to order, plus brewing gear for people who would rather make it at home.",
      "Open from noon to eleven, seven days a week, like the rest of the house.",
    ],
  },
];

export const formatPrice = (value: number) => `৳${value.toLocaleString("en-US")}`;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
