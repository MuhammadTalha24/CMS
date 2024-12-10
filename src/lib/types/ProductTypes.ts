export type ProductType = {
	imgSrc: string;
	hoverImgSrc: string;
	productName: string;
	price: number;
	tags: string[];
	rating: number;
};

export type CartItemProps = {
	id: string;
	image: string;
	name: string;
	price: number;
	qty: number;
};
