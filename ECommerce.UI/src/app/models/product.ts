export class Product {
  id: number;
  apiId?: number;
  name: string;
  type: string;
  brand: string;
  inventory: number;
  price: number;
  description: string;
  image: string;
  colourName?:string;
  hexValue?:string;
  discount?: number;
  

  constructor(
    Id: number,
    ApiId:number,
    Name: string,
    Type: string,
    Brand: string,
    Inventory: number,
    Price: number,
    Description: string,
    Image: string,
    ColourName: string,
    HexValue: string,
    Discount: number
  ) {
    this.id = Id;
    this.apiId = ApiId;
    this.name = Name;
    this.type = Type;
    this.brand = Brand;
    this.inventory = Inventory;
    this.price = Price;
    this.description = Description;
    this.image = Image;
    this.colourName = ColourName;
    this.hexValue = HexValue;
    this.discount = Discount;
  }


}
