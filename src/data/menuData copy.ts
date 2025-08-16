export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

// Flexible menu structure - easily modifiable
export const menuData: MenuCategory[] = [
  {
    title: "Hot Drinks",
    items: [
      { name: "Americano", description: "Rich espresso with hot water", price: "£2.80" },
      { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "£3.20" },
      { name: "Latte", description: "Smooth espresso with steamed milk", price: "£3.40" },
      { name: "Flat White", description: "Double espresso with microfoam milk", price: "£3.60" },
      { name: "Mocha", description: "Chocolate and espresso with steamed milk", price: "£3.80" },
      { name: "English Breakfast Tea", description: "Traditional blend", price: "£2.40" },
      { name: "Earl Grey", description: "Bergamot flavoured black tea", price: "£2.60" },
      { name: "Hot Chocolate", description: "Rich and creamy", price: "£3.20" }
    ]
  },
  {
    title: "All Day English Breakfast",
    items: [
      { name: "Full English Breakfast", description: "2 eggs, 2 bacon, 2 sausages, baked beans, grilled tomato, mushrooms, black pudding, toast", price: "£8.95" },
      { name: "Small English Breakfast", description: "1 egg, 1 bacon, 1 sausage, baked beans, grilled tomato, toast", price: "£6.95" },
      { name: "Vegetarian Breakfast", description: "2 eggs, vegetarian sausages, baked beans, grilled tomato, mushrooms, hash browns, toast", price: "£7.95" },
      { name: "Eggs Benedict", description: "Poached eggs on English muffins with hollandaise sauce", price: "£7.50" },
      { name: "Scrambled Eggs on Toast", description: "Creamy scrambled eggs on buttered toast", price: "£4.95" }
    ]
  },
  {
    title: "Sandwiches & Light Bites",
    items: [
      { name: "Bacon & Egg Roll", description: "Fresh roll with crispy bacon and fried egg", price: "£4.50" },
      { name: "Sausage & Egg Roll", description: "Fresh roll with sausage and fried egg", price: "£4.50" },
      { name: "BLT Sandwich", description: "Bacon, lettuce, tomato on fresh bread", price: "£5.20" },
      { name: "Ham & Cheese Toastie", description: "Grilled sandwich with ham and melted cheese", price: "£4.80" },
      { name: "Beans on Toast", description: "Baked beans on buttered toast", price: "£3.95" }
    ]
  },
  {
    title: "Cold Drinks",
    items: [
      { name: "Fresh Orange Juice", description: "Freshly squeezed", price: "£2.80" },
      { name: "Apple Juice", description: "Pure apple juice", price: "£2.60" },
      { name: "Soft Drinks", description: "Coca Cola, Sprite, Fanta", price: "£2.20" },
      { name: "Sparkling Water", description: "San Pellegrino", price: "£2.00" },
      { name: "Still Water", description: "Highland Spring", price: "£1.80" },
      { name: "Iced Coffee", description: "Cold brew with ice", price: "£3.20" }
    ]
  },
  {
    title: "Vegetarian Choices",
    items: [
      { name: "Avocado Toast", description: "Smashed avocado on sourdough with cherry tomatoes", price: "£5.95" },
      { name: "Vegetarian Sausage Roll", description: "Flaky pastry with seasoned vegetables", price: "£3.50" },
      { name: "Cheese & Onion Toastie", description: "Melted cheese with caramelized onions", price: "£4.50" },
      { name: "Mushroom on Toast", description: "Sautéed mushrooms on buttered toast", price: "£4.20" },
      { name: "Fruit Salad", description: "Fresh seasonal fruits", price: "£3.80" }
    ]
  }
];