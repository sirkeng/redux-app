"use strict"

// Add to cart
export function addTocart(book) {
	return {
		type:"ADD_TO_CART", 
		payload: book
	}
}