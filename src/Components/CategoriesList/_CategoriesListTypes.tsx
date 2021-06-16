interface CategoryItem {
  title: string;
  description: string;
}

interface Categories {
  name: string;
  categories: CategoryItem[];
}

export type { Categories, CategoryItem };
