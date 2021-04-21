import React from 'react'


// Given a lis of products (as an array of objects, as seen in productsData.js) 
// render a <Product /> component (which you need to create) for each product in the list 
// Make sure to use the array's map() method to create these components and dont forget to pass a 'key' prop to it to avoid the waning 

function Product(props){
	return (
		<div>
			<h5>{props.product.name}</h5>               
			<p> {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}
			- {props.product.description} </p>



		</div>
	)
}



export default Product


//Like the todoItem. 