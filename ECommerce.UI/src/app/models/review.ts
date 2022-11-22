export class Review {
	// The review id (GET)
	id?:number;

	// The userId making the review (GET/POST)
	userId:number;

	// The user object making the review (GET)
	//user?:User;

	// The productId you are reviewing (GET/POST)
	productId:number;

	// The productId you are reviewing (GET)
	//product?:Product;

	// Rating out of 5 (GET/POST)
	rating:number;

	// Review text (GET/POST)
	text:string;

    constructor(id:number, userId:number, productId:number, rating:number, text:string) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.rating = rating;
        this.text = text;
    }
}