import axios from 'axios';

const loadProducts = () => {
	
	return dispatch => {

		return axios.get("http://localhost:3001/products")
			.then(response => {
				dispatch({
					type: "REPLACE_PRODUCTS",
					products: response.data
				})
			});
			
	};

};

const addToCart = product => {
	return {
      type:"ADD_TO_CART",
      product: product
    };
};

const removeFromCart = product => {
	return {
      type:"REMOVE_FROM_CART",
      product: product
    };
};

export { loadProducts, addToCart, removeFromCart };