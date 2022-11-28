import { WishlistItem } from "./wishlistItem";

export class Wishlist{
    id:number;
    userId:number;
    list: WishlistItem[];

    constructor(Id:number, UserId:number, myWList: WishlistItem[] ){
        this.id = Id,
        this.userId = UserId,
        this.list = myWList;
    }
}