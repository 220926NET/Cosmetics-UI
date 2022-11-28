import { Product } from "./product";

export class WishlistItem{
    detailId: number;
    id :number;
    productId:number;

    product: Product;

    constructor(dId : number, Id:number, pId:number, p:Product){
        this.detailId = dId,
        this.id = Id,
        this.productId = pId,
        this.product = p
    }
}