export class ProductDetails
{
  id: number;
  apiId?: number;
  name: string;
  type: string;
  brand: string;
  quantity: number;
  price: number;
  description: string;
  image: string;
  colorHexValues: string[];

  constructor(
    id: number,
    apiId:number,
    name: string,
    type: string,
    quantity: number,
    description: string,
    price: number,
    image: string,
    brand: string,
    colorHexValues: string[]
  )
  {
    this.brand = brand;
    this.apiId = apiId;
    this.colorHexValues = colorHexValues;
    this.id = id;
    this.name = name;
    this.type = type;
    this.quantity = quantity;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
