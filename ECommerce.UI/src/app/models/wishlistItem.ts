import { WishProduct } from "./wishProduct";


export class WishlistItem{
    detailId: number;
    id :number;
    productId:number;

    product: WishProduct;

    constructor(dId : number, Id:number, pId:number, wp:WishProduct){
        this.detailId = dId,
        this.id = Id,
        this.productId = pId,
        this.product = wp
    }
}