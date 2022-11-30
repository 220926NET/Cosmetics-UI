export class Product {
  id: number;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  description: string;
  image: string;
  colorHexValues: string[];
  colourName?:string;
  hexValue?:string;

  constructor(
    id: number,
    name: string,
    quantity: number,
    description: string,
    price: number,
    image: string,
    brand: string,
    colorHexValues: string[]
  ) {
    this.brand = brand;
    this.colorHexValues = colorHexValues;
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.description = description;
    this.price = price;
    this.image = image;
  }


}
