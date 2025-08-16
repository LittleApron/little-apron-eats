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
export const menuData: MenuCategory[] = [];
