export type TProduct = {
  id: string;
  title: string;
  category: 'bisque' | 'cheesecake' | 'shortbread' | 'dessert';
  type: 'chocolate' | 'vanilla' | 'vegetarian' | 'honey-cake' | 'lemon' | 'new-york' | 'tart' | 'funnel-cake' | 'basket-cake' | 'chocolate-muffin' | 'brand-muffin';
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}

export type TProducts = TProduct[];

export type TFullProductInfo = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}
