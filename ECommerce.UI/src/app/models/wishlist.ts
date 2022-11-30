import { WishlistItem } from "./wishlistItem";

export class Wishlist{
    id:number;
    userId:number;
    wishItems: WishlistItem[];

    constructor(Id:number, UserId:number ){
        this.id = Id,
        this.userId = UserId,
        this.wishItems = this.listMaker();
    }

    listMaker(){
        let newList: WishlistItem[] = []; 
       return newList; 
    }
}