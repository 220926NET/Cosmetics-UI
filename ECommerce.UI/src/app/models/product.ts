export class Product {
  id: number;
  apiId?:number;
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
    APIId:number,
    name: string,
    quantity: number,
    description: string,
    price: number,
    image: string,
    brand: string,
    colorHexValues: string[],
    colour:string,
    // hex:string
  ) {
    this.id = id;
    this.apiId = APIId;
    this.name = name;
    this.quantity = quantity;
    this.description = description;
    this.price = price;
    this.image = image;
    this.brand = brand;
    this.colorHexValues = colorHexValues;
    this.colourName = colour;
    // this.hexValue = hex;
  }


}
