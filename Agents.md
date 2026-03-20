Build a complete, modern and trendy restaurant website for "Momo Craft" — a momo (dumpling) restaurant with a wide variety of momos — in React + Tailwind CSS. Make it visually stunning, appetizing, and memorable.

🎨 Design Direction — "Modern Street Food Luxury"

Background: Deep charcoal #1a1a2e and dark navy #16213e for main sections
Accent Color: Vibrant orange-red #ff4d4d (hot, spicy, appetizing feel)
Secondary Accent: Golden yellow #ffd700 for highlights and ratings
Card Background: #0f3460 dark blue cards with subtle glow
Text: White #ffffff for headings, #cbd5e1 for body text
Heading Font: Poppins — bold, modern (import from Google Fonts)
Body Font: Nunito — friendly, round, readable
Style: Dark theme, neon-like glows on hover, smooth animations, floating food imagery feel
Buttons: Pill-shaped (rounded-full), red-to-orange gradient, with hover scale effect


📄 Pages to Build:

1. Home / Landing Page (/)
Navbar:

Logo: 🥟 "Momo Craft" in Poppins bold, white + red accent on "Craft"
Nav links: Home, Menu, About, Gallery, Contact
CTA button: "Order Now" — red-orange gradient pill button
Sticky navbar with blur backdrop on scroll backdrop-blur-md bg-black/40
Mobile hamburger menu

Hero Section:

Full viewport height
Left side: Big bold heading — "Crafted With Love, Steamed To Perfection 🥟"
Subtext: "Explore 20+ varieties of handcrafted momos made fresh every day"
Two CTA buttons: "Explore Menu" (red filled) + "Our Story" (outline white)
Right side: Large appetizing momo image/illustration (use a placeholder food image from https://source.unsplash.com/600x500/?dumplings,momos)
Floating badge: "⭐ 4.9 Rating" + "🔥 Bestseller"
Subtle animated floating particles or steam effect in background using CSS animation

Features Strip:

4 icon cards in a row: 🥟 "20+ Varieties" | 🌿 "Fresh Ingredients" | ⚡ "Fast Delivery" | 👨‍🍳 "Expert Chefs"
Dark cards with red icon glow

Popular Momos Section:

Heading: "Fan Favourites 🔥"
3 featured momo cards: Steamed Chicken Momo, Paneer Chilli Momo, Crispy Fried Momo
Each card: food image, name, price (₹80–₹150), spice level badges (🌶️), "Add to Cart" button
Cards with hover lift + red glow effect

Why Choose Us Section:

3 columns: "Handmade Daily" | "Secret Spice Blend" | "20+ Flavours"
Each with icon, heading, and 2-line description

Testimonials Section:

3 customer review cards
Star ratings in golden yellow
Customer name + avatar initials circle

CTA Banner:

Red-to-orange gradient full width section
"Hungry? Order Fresh Momos Now!" + "Order Online" button


2. Menu Page (/menu)

Page heading: "Our Menu 🥟" with subtext
Filter tabs: All | Steamed | Fried | Tandoori | Kurkure | Jhol | Soup | Veg | Non-Veg
Grid of 12+ momo items:

NameTypePriceSpiceClassic Steamed ChickenSteamed, Non-Veg₹80🌶️Paneer Steamed MomoSteamed, Veg₹75🌶️Crispy Fried MomoFried, Non-Veg₹100🌶️🌶️Cheese Corn MomoFried, Veg₹90🌶️Tandoori Chicken MomoTandoori, Non-Veg₹130🌶️🌶️🌶️Kurkure MomoKurkure, Veg₹110🌶️🌶️Jhol MomoJhol, Non-Veg₹120🌶️🌶️Chocolate MomoSweet, Veg₹95—Butter Chicken MomoSteamed, Non-Veg₹140🌶️🌶️Spinach Corn MomoSteamed, Veg₹85🌶️Schezwan Fried MomoFried, Non-Veg₹115🌶️🌶️🌶️Soup MomoSoup, Non-Veg₹110🌶️

Each card: food image (Unsplash placeholder), name, type badge (Veg 🟢 / Non-Veg 🔴), price, spice indicator, "Add to Cart" button
Filter tabs dynamically show/hide items using React useState
Cart icon in navbar showing item count badge


3. About Us Page (/about)

Hero: Full width dark section — "Our Story 🥟" heading + story paragraph
Story: "Momo Craft was born from a love of Himalayan street food. What started as a small stall in 2018 has grown into a beloved brand known for quality, variety, and flavor."
Stats row: 4 animated count-up numbers — "20+ Varieties" | "10K+ Happy Customers" | "5 Years of Crafting" | "4.9⭐ Rating"
Team section: 3 team cards — Chef name, role (Head Chef / Founder / Delivery Manager), avatar placeholder
Values section: 3 cards — "Fresh Daily" | "Made with Love" | "Always Authentic"


4. Order Online Page (/order)

Left side: Menu list (simplified, same items from menu page) with + / - quantity controls
Right side: Order Summary cart — item name, qty, price, subtotal
Delivery options: Pickup / Home Delivery toggle
Customer details form: Name, Phone, Address (shown only for delivery)
Total with GST (5%)
"Place Order" button — on click show success modal: "🎉 Order Placed! Your momos are being crafted with love."
All state managed with React useState


5. Gallery Page (/gallery)

Heading: "Momo Moments 📸"
Masonry-style grid of 12 food photos using Unsplash placeholders:
https://source.unsplash.com/400x400/?dumplings (vary query: momos, dumplings, street food, dimsum)
Hover effect: image zoom + dark overlay + "View" icon
Lightbox on click: full size image with prev/next navigation


6. Contact Page (/contact)

Left: Contact info cards:

📍 Address: "123 Food Street, Flavour Nagar, Mumbai - 400001"
📞 Phone: "+91 98765 43210"
📧 Email: "hello@momocraft.in"
🕐 Hours: "Mon–Sun: 11:00 AM – 10:00 PM"


Right: Contact form — Name, Email, Message, "Send Message" button
On submit: success toast notification "Message sent! We'll get back to you soon 🥟"
Google Maps embed placeholder (grey iframe with "Find Us Here" overlay)


🔁 Shared Components:

Navbar — sticky, blur backdrop, mobile hamburger, "Order Now" CTA, cart icon with count
Footer — dark background, logo, nav links, social icons (Instagram, Facebook, Zomato, Swiggy), copyright "© 2025 Momo Craft. All Rights Reserved."
ScrollToTop — scroll to top button (red circle, bottom right, appears after scrolling 300px)
Page transitions — smooth fade-in on route change


⚙️ Technical Requirements:

React with useState, useEffect hooks
React Router v6 for all page navigation
Tailwind CSS only for styling
Poppins + Nunito fonts from Google Fonts
FontAwesome or Lucide React for icons
All momo data in a single data/momos.js file as an array of objects
Cart state managed globally using React Context API
Fully responsive — mobile, tablet, desktop
Smooth hover animations and scroll reveal effects throughout
Food images from Unsplash free URLs

Folder Structure:
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── MomoCard.jsx
│   ├── CartContext.jsx
│   └── ScrollToTop.jsx
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── About.jsx
│   ├── Order.jsx
│   ├── Gallery.jsx
│   └── Contact.jsx
├── data/
│   └── momos.js
├── App.jsx
└── main.jsx
Build all 6 pages completely with working navigation, cart functionality, and form interactions.