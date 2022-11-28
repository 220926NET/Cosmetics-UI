import { Product } from "./product";
import { User } from "./user";

export interface Review {
	// The review id
	id?:number;

	// The userId making the review 
	userId:number;

	// The user object
	user:User;

	// The productId you are reviewing
	productId:number;

	// The product object
	product:Product;

	// Rating out of 5 
	rating:number;

	// Review text
	text:string;

	/*
    constructor(id:number, userId:number, productId:number, rating:number, text:string) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.rating = rating;
        this.text = text;
    }
	*/
}