"use strict"
import { createStore } from 'redux';

// Import combinded reducers
import reducers from './reducers/index';

// Import action
import  { addTocart } from './actions/cartActions';

// console.log(addTocart);
// Step 1 create the store
const store = createStore(reducers);

store.subscribe(function() {
	console.log('current state is: ', store.getState());
	//console.log('current price: ', store.getState()[1].price);
})

// Step 2 create and dispatch actions
store.dispatch({
	type:"POST_BOOK", 
	payload: [{
		id: 1,
		title: 'this is the book title',
		description: 'this is the book description',
		price: 33.33
	},
	{
		id: 2,
		title: 'this is the secound book title',
		description: 'this is the secound book description',
		price: 50
	}
]
})

// DELETE a abook
store.dispatch({
	type:"DELETE_BOOK", 
	payload: {id: 1}
})

// UPDATE a book
store.dispatch({
	type:"UPDATE_BOOK",
	payload:{
		id: 2,
		title:'Learn React in 24h'
	}
})

//--> Cart actions <<---
// Add to cart
store.dispatch(addTocart([{id: 1}]))
