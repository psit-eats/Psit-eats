export const campusCanteens = [
  {
    id: "north-square",
    name: "North Square Canteen",
    location: "Near Library Block",
    eta: "15-20 min",
    rating: 4.5,
    minOrder: 60,
    cuisine: "Snacks & Fast Food",
    items: [
      { id: "ns-1", name: "Veg Burger", price: 80, veg: true },
      { id: "ns-2", name: "Cheese Maggi", price: 70, veg: true },
      { id: "ns-3", name: "Cold Coffee", price: 55, veg: true },
    ],
  },
  {
    id: "engineers-hub",
    name: "Engineers' Hub",
    location: "Engineering Department",
    eta: "10-15 min",
    rating: 4.3,
    minOrder: 50,
    cuisine: "North Indian",
    items: [
      { id: "eh-1", name: "Chole Bhature", price: 90, veg: true },
      { id: "eh-2", name: "Paneer Roll", price: 85, veg: true },
      { id: "eh-3", name: "Masala Tea", price: 30, veg: true },
    ],
  },
  {
    id: "sports-corner",
    name: "Sports Corner Eatery",
    location: "Near Main Ground",
    eta: "20-25 min",
    rating: 4.6,
    minOrder: 80,
    cuisine: "Healthy Bowls",
    items: [
      { id: "sc-1", name: "Protein Bowl", price: 120, veg: false },
      { id: "sc-2", name: "Grilled Sandwich", price: 95, veg: true },
      { id: "sc-3", name: "Fresh Lime Soda", price: 40, veg: true },
    ],
  },
];
