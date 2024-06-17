// sidebar links for admin
export const adminLinks = [
    {
        title: "Dashboard",
        links: [
            {
                name: "Dashboard",
                icon: "/icons/icons8-dashboard-layout-24.png",
                link: "dashboard",
            },
        ],
    },
    {
        title: "HOMEPAGE",
        links: [
            {
                name: "Home",
                icon: "/icons/home.svg",
                link: "",
            },
        ],
    },
    {
        title: "TOURISM-UPDATES",
        links: [
            {
                name: "Tour by choice",
                icon: "/icons/tourByChoice.svg",
                link: "tour-by-choice",
            },

            {
                name: "Package  tour",
                icon: "/icons/tourbox.svg",
                link: "package-tour",
            },

            {
                name: "Blog",
                icon: "/icons/blog.svg",
                link: "blog",
            },
            {
                name: "Events",
                icon: "/icons/event-upcoming-rounded.svg",
                link: "upcoming-event",
            },
        ],
    },
    {
        title: "GENERAL",
        links: [
            {
                name: "About Us",
                icon: "/icons/abt.svg",
                link: "about us",
            },

            {
                name: "Reviews",
                icon: "/icons/review.svg",
                link: "reviews",
            },
        ],
    },
    {
        title: "SUPPORT",
        links: [
            {
                name: "Contacts",
                icon: "/icons/contact.svg",
                link: "contact",
            },

            {
                name: "FAQ",
                icon: "/icons/faq.svg",
                link: "faq",
            },
        ],
    },
];

export const defaultImage =
    "https://res.cloudinary.com/hostingimagesservice/image/upload/v1680632612/mediAid/default-profile-pic_lktd2q.webp";

// {
//     name: "order",
//     title: "Order",
//     icon: "/icons/category.svg",
//     link: "",
// },

// {
//     title: "overview",
//     icon: "/icons/category.svg",
//     link: "order",
// },

// {
//     title: "Order",
//     icon: "/icons/order.svg",
//     link: "order",
//     extend: [
//         { title: "New Order", link: "order/new-order" },
//         { title: "Invoices", link: "order/invoices" },
//     ],
// },
// {
//     title: "Customers",
//     icon: "/icons/user-line.svg",
//     link: "customers",
// },
// {
//     title: "Packages",
//     icon: "/icons/packages.svg",
//     link: "packages",
// },
// {
//     title: "Product Catalogue",
//     icon: "/icons/product-catalogue.svg",
//     link: "product-catalogue",
//     extend: [
//         { title: "Product Family", link: "product-catalogue/product-family" },
//         { title: "Plan", link: "product-catalogue/plan" },
//         { title: "Addons", link: "product-catalogue/addons" },
//         { title: "Charges", link: "product-catalogue/charges" },
//         { title: "Coupon", link: "product-catalogue/coupon" },
//     ],
// },
// {
//     title: "Projects",
//     icon: "/icons/projects.svg",
//     link: "projects",
// },
// {
//     title: "Resource Management",
//     icon: "/icons/resource-management.svg",
//     link: "resource-management",
// },
// {
//     title: "Ticket",
//     icon: "/icons/ticket.svg",
//     link: "ticket",
// },
// {
//     title: "Live Chat",
//     icon: "/icons/live-chat.svg",
//     link: "live-chat",
// },
// {
//     title: "Users",
//     icon: "/icons/user-line.svg",
//     link: "users",
// },
// {
//     title: "Team",
//     icon: "/icons/group-line.svg",
//     link: "team",
// },
// {
//     title: "Reports",
//     icon: "/icons/reports.svg",
//     link: "reports",
// },
// {
//     title: "Settings",
//     icon: "/icons/settings.svg",
//     link: "settings",
// },

export const transportationData = [
    {
        id: crypto.randomUUID(),
        image: "/images/bus.png",
        heading: "Local Transports",
        description: "Lorem Ipsum is simply dummy text of the printing and",
    },
    {
        id: crypto.randomUUID(),
        image: "/images/car.png",
        heading: "Private Car services",
        description: "Lorem Ipsum is simply dummy text of the printing and",
    },
    {
        id: crypto.randomUUID(),
        image: "/images/bike.png",
        heading: "Bike services",
        description:
            "Lorem Ipsum is simply dummy text of the printing and text of the printing end",
    },
];

export const volunteerData = [
    {
        id: crypto.randomUUID(),
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        description: "Fluent in Bangla, English & Hindi, adept in communication & leadership",
        rating: 3,
    },
    {
        id: crypto.randomUUID(),
        name: "Dave Doe",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        description: "Fluent in Bangla, English & Hindi, adept in communication & leadership",
        rating: 4,
    },
    {
        id: crypto.randomUUID(),
        name: "Rayhan Doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        description: "Fluent in Bangla, English & Hindi, adept in communication & leadership",
        rating: 5,
    },
    {
        id: crypto.randomUUID(),
        name: "Jack Doe",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        description: "Fluent in Bangla, English & Hindi, adept in communication & leadership",
        rating: 4,
    },
    {
        id: crypto.randomUUID(),
        name: "Adrian Doe",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        description: "Fluent in Bangla, English & Hindi, adept in communication & leadership",
        rating: 4.5,
    },
    {
        id: crypto.randomUUID(),
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        description: "Fluent in Bangla, English & Hindi, adept in communication & leadership",
        rating: 3.5,
    },
    {
        id: crypto.randomUUID(),
        name: "William Doe",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
        description: "Fluent in Bangla, English & Hindi, adept in communication & leadership",
        rating: 3.7,
    },
];

export const packageData = [
    {
        id: crypto.randomUUID(),
        title: "Sonargaon Tour Package",
        image: "/images/sonargaon.jpg",
        description: "Panam Nagar, Old Capital, Sonargaon Museum & Boro Sardar Bari",
        rating: 3,
        time: "9 hours",
        price: 230,
    },
    {
        id: crypto.randomUUID(),
        title: "Sylhet Tour Package",
        image: "/images/Sylhet.jpg",
        description: "Jaflong, Bholaganj, Ratargul Forest & Hazrat Shahjalal Rah. Mazar Sharif",
        rating: 4,
        time: "2 days",
        price: 560,
    },
    {
        id: crypto.randomUUID(),
        title: "Cox's bazar Tour Package",
        image: "/images/sea-3243357_1280.jpg",
        description: "Saint Martin’s Island, Bangabandhu Safari Park & Marine Drive",
        rating: 5,
        time: "2 days",
        price: 825,
    },
    {
        id: crypto.randomUUID(),
        title: "Kuakata Tour Package",
        image: "/images/Kuakata.jpg",
        description: "Kuakata is a town in southern Bangladesh known for its panoramic sea beach.",
        rating: 4,
        time: "2 days",
        price: 725,
    },
    {
        id: crypto.randomUUID(),
        title: "Sonargaon Tour Package",
        image: "/images/sonargaon.jpg",
        description: "Panam Nagar, Old Capital, Sonargaon Museum & Boro Sardar Bari",
        rating: 3,
        time: "9 hours",
        price: 230,
    },
    {
        id: crypto.randomUUID(),
        title: "Sylhet Tour Package",
        image: "/images/Sylhet.jpg",
        description: "Jaflong, Bholaganj, Ratargul Forest & Hazrat Shahjalal Rah. Mazar Sharif",
        rating: 4,
        time: "2 days",
        price: 560,
    },
    {
        id: crypto.randomUUID(),
        title: "Cox's bazar Tour Package",
        image: "/images/sea-3243357_1280.jpg",
        description: "Saint Martin’s Island, Bangabandhu Safari Park & Marine Drive",
        rating: 5,
        time: "2 days",
        price: 825,
    },
    {
        id: crypto.randomUUID(),
        title: "Kuakata Tour Package",
        image: "/images/Kuakata.jpg",
        description: "Kuakata is a town in southern Bangladesh known for its panoramic sea beach.",
        rating: 4,
        time: "2 days",
        price: 725,
    },
];

export const eventsData = [
    {
        id: crypto.randomUUID(),
        title: "The Home Of Royal Bengal Tigers",
        image: "/images/tiger.jpg",
        time: "9 hours",
        price: 320,
    },
    {
        id: crypto.randomUUID(),
        title: "Cherry Blossoms Festivals Of Japan",
        image: "/images/Cherry.jpg",
        time: "10 days",
        price: 2450,
    },
    {
        id: crypto.randomUUID(),
        title: "Venice City Tour Festivals Italy",
        image: "/images/Italy.jpg",
        time: "8 days",
        price: 2820,
    },
];

// city's center latitude and longitude according to the google maps
export const locations = {
    dhaka: { lat: 23.7952, lon: 90.4162 },
    oldDhaka: { lat: 23.7981, lon: 90.4121 },
    rajshahi: { lat: 24.3736, lon: 88.6048 },
    khulna: { lat: 22.8472, lon: 89.5367 },
    barishal: { lat: 22.7111, lon: 90.3509 },
    mymensingh: { lat: 24.7466, lon: 90.4155 },
    rangpur: { lat: 25.749, lon: 89.2591 },
    chattogram: { lat: 22.3757, lon: 91.8115 },
    sylhet: { lat: 24.903, lon: 91.8648 },
};

// WMO Weather interpretation codes (WW)
export const weatherCode = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Haze",
    48: "Depositing rime fog",
    51: "Drizzle: Light intensity",
    52: "Drizzle: Moderate intensity",
    53: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    80: "Rain showers: Slight intensity",
    81: "Rain showers: Moderate intensity",
    82: "Rain showers: Violent intensity",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
};
