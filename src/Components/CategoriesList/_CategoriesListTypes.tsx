interface Category {
  title: string;
  description: string;
}

interface Categories {
  name: string;
  categories: Category[];
}

export type { Categories, Category };
