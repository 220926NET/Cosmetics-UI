export class WishProduct {
    id: number;
    name: string;
    brand: string;
    quantity: number;
    price: number;
    description: string;
    image:string;
    colourName:string;
    hexValue:string;
  
    constructor(
      id: number,
      name: string,
      quantity: number,
      description: string,
      price: number,
      image: string,
      brand: string,
      color:string,
      hex: string 
    ) {
      this.brand = brand;
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.description = description;
      this.price = price;
      this.image = image;
      this.colourName = color;
      this.hexValue = hex;
    }
  
  
  }