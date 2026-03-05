const sampleListings = [
{
title: "Cozy Beachfront Cottage",
description: "Relaxing beachfront stay with amazing ocean view.",
image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
price: 1500,
location: "Malibu",
country: "United States"
},
{
title: "Modern Loft in Downtown",
description: "Stylish loft apartment in the heart of the city.",
image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
price: 1200,
location: "New York City",
country: "United States"
},
{
title: "Mountain Retreat",
description: "Peaceful mountain cabin surrounded by nature.",
image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
price: 1000,
location: "Aspen",
country: "United States"
},
{
title: "Historic Villa in Tuscany",
description: "Beautiful restored villa in the hills of Tuscany.",
image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
price: 2500,
location: "Florence",
country: "Italy"
},
{
title: "Treehouse Getaway",
description: "Unique treehouse stay in the forest.",
image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
price: 800,
location: "Portland",
country: "United States"
},
{
title: "Beachfront Paradise",
description: "Condo directly on the beach with stunning view.",
image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
price: 2000,
location: "Cancun",
country: "Mexico"
},
{
title: "Rustic Cabin by the Lake",
description: "Perfect place for fishing and kayaking.",
image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
price: 900,
location: "Lake Tahoe",
country: "United States"
},
{
title: "Luxury Penthouse",
description: "Penthouse apartment with panoramic city views.",
image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
price: 3500,
location: "Los Angeles",
country: "United States"
},
{
title: "Ski Chalet",
description: "Ski-in ski-out chalet in snowy mountains.",
image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
price: 3000,
location: "Verbier",
country: "Switzerland"
},
{
title: "Safari Lodge",
description: "Experience wildlife in Serengeti safari lodge.",
image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
price: 4000,
location: "Serengeti",
country: "Tanzania"
},
{
title: "Canal House",
description: "Historic canal house in Amsterdam.",
image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
price: 1800,
location: "Amsterdam",
country: "Netherlands"
},
{
title: "Private Island",
description: "Entire island just for you.",
image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
price: 10000,
location: "Fiji",
country: "Fiji"
},
{
title: "Cotswolds Cottage",
description: "Traditional English countryside cottage.",
image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f",
price: 1200,
location: "Cotswolds",
country: "UK"
},
{
title: "Historic Brownstone",
description: "Elegant brownstone in Boston.",
image: "https://images.unsplash.com/photo-1533619239233-6280475a633a",
price: 2200,
location: "Boston",
country: "United States"
},
{
title: "Bali Bungalow",
description: "Beachfront bungalow with private pool.",
image: "https://images.unsplash.com/photo-1602391833977-358a52198938",
price: 1800,
location: "Bali",
country: "Indonesia"
},
{
title: "Banff Cabin",
description: "Cabin with breathtaking mountain views.",
image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
price: 1500,
location: "Banff",
country: "Canada"
},
{
title: "Miami Art Deco Apartment",
description: "Stylish 1920s art deco apartment.",
image: "https://images.unsplash.com/photo-1670963964797-942df1804579",
price: 1600,
location: "Miami",
country: "United States"
},
{
title: "Phuket Villa",
description: "Luxury villa with infinity pool.",
image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9",
price: 3000,
location: "Phuket",
country: "Thailand"
},
{
title: "Scottish Castle",
description: "Live like royalty in Scotland.",
image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
price: 4000,
location: "Scottish Highlands",
country: "United Kingdom"
},
{
title: "Dubai Desert Oasis",
description: "Luxury oasis in the desert.",
image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
price: 5000,
location: "Dubai",
country: "UAE"
},
{
title: "Montana Log Cabin",
description: "Quiet cabin surrounded by forests.",
image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
price: 1100,
location: "Montana",
country: "United States"
},
{
title: "Greek Island Villa",
description: "Villa with Mediterranean sea view.",
image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
price: 2500,
location: "Mykonos",
country: "Greece"
},
{
title: "Eco Treehouse",
description: "Eco-friendly stay in the forest.",
image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
price: 750,
location: "Costa Rica",
country: "Costa Rica"
},
{
title: "Charleston Cottage",
description: "Historic southern cottage with garden.",
image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904",
price: 1600,
location: "Charleston",
country: "United States"
},
{
title: "Tokyo Apartment",
description: "Modern apartment in Tokyo.",
image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
price: 2000,
location: "Tokyo",
country: "Japan"
},
{
title: "Lake Cabin",
description: "Relax by the lake in a cozy cabin.",
image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce",
price: 1200,
location: "New Hampshire",
country: "United States"
},
{
title: "Maldives Villa",
description: "Overwater luxury villa.",
image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
price: 6000,
location: "Maldives",
country: "Maldives"
},
{
title: "Aspen Ski Chalet",
description: "Luxury ski chalet in Aspen.",
image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
price: 4000,
location: "Aspen",
country: "United States"
},
{
title: "Costa Rica Beach House",
description: "Secluded beach house for surfers.",
image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
price: 1800,
location: "Costa Rica",
country: "Costa Rica"
},
{
title: "Paris Apartment",
description: "Romantic apartment near Eiffel Tower.",
image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
price: 2200,
location: "Paris",
country: "France"
}
];

module.exports = { data: sampleListings };