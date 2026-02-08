export interface productAPIResponse{
    products:Products[]
}

export interface Products {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  weight: number;
  availabilityStatus: string;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  minimumOrderQuantity: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  dimensions: object;
  meta: object;
  reviews: object[];
}