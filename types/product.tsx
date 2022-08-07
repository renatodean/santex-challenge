interface FeaturedAsset {
  id: number;
  name: string;
  type: string;
  source: string;
  preview: string;
}

export interface Products {
  items: Item[];
}

export interface Variant {
  price: number;
}

export interface Item {
  id: number;
  name: string;
  slug: string;
  description: string;
  featuredAsset: FeaturedAsset;
  variants: Variant[];
}
