import React from 'react'

import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"

import productsData from "./vschoolProducts"
import Product from "./Product"
import todosData from "./todosData"


function App(){
	const productComponents = productsData.map(item => <Product key={item.id} product={item} />)     
	//productsData will create a new array
	//new variable called productComponents and coming from productsData.map()
	//Creates a new array and fill with productComponent 
	//Array is filled with productComponents 

	const todoItems = todosData.map(item => <TodoItem key={item.id}item={item} />)
	
		return(
		<div>
			<Header />	
			<MainContent />

				{productComponents}

				{todoItems}

			<ContactCard 
				name="Mr. Jax" 
				imgUrl="https://placekitten.com/300/200"
				phone="(212)-338-2455"
				email="mykitty44@hotmail.com"
	
			/>
			<ContactCard 
				name="Mr. Jax" 
				imgUrl="https://placekitten.com/300/200"
				phone="(212)-338-2455"
				email="mykitty44@hotmail.com"
			/>
			<ContactCard 
				name="Mr. KittyKat" 
				imgUrl="https://placekitten.com/300/200"
				phone="(212)-338-2882"
				email="mykitty5323@hotmail.com"	
			/>
			<ContactCard 
				name="Mr.Cat" 
				imgUrl="https://placekitten.com/300/200" 
				phone="(212)-338-2566"
				email="mykitty@gmail.com"
			/>

			<Footer />
		</div>
	)
}


// class App extends React.Component{
// 	render(){
// 		return(
// 		<div>
// 			<Header />	
// 			<MainContent />

// 				{productComponents}

// 				{todoItems}

// 			<ContactCard 
// 				name="Mr. Jax" 
// 				imgUrl="https://placekitten.com/300/200"
// 				phone="(212)-338-2455"
// 				email="mykitty44@hotmail.com"
	
// 			/>
// 			<ContactCard 
// 				name="Mr. Jax" 
// 				imgUrl="https://placekitten.com/300/200"
// 				phone="(212)-338-2455"
// 				email="mykitty44@hotmail.com"
// 			/>
// 			<ContactCard 
// 				name="Mr. KittyKat" 
// 				imgUrl="https://placekitten.com/300/200"
// 				phone="(212)-338-2882"
// 				email="mykitty5323@hotmail.com"	
// 			/>
// 			<ContactCard 
// 				name="Mr.Cat" 
// 				imgUrl="https://placekitten.com/300/200" 
// 				phone="(212)-338-2566"
// 				email="mykitty@gmail.com"
// 			/>

// 			<Footer />
// 		</div>
// 	)
// }
// }


export default App
