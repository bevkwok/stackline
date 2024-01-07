export type ProductAction = {
  type: string;
  payload?: any;
};

export type Review = {
  customer: string;
  review: string;
  score: number;
};

export type Sale = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

export type Product = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Review[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Sale[];
};

export type State = {
  loading: boolean;
  products?: any;
  error?: any;
};