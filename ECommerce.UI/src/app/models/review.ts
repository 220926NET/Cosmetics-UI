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
}

export class Review {
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

	constructor(
		Id: number,
		UserId: number,
		User: User,
		ProductId: number,
		Product: Product,
		Rating: number,
		Text: string
	) {
		this.id = Id,
		this.userId = UserId,
		this.user = User,
		this.productId = ProductId,
		this.product = Product,
		this.rating = Rating,
		this.text = Text
	}
}