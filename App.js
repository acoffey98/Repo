import React from 'react'

import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"
import Joke from "./Joke"
import JokesData from "./JokesData"

function App(){
	
	return(
		<div>
			<Header />	
			<MainContent />
			<TodoItem />

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
			<Joke 
				question="What is the best thing about Newfoundland?" 
				punchLine="The scenary"
			/>
			<Joke 
				question="What is your favouirte show?" 
				punchLine= "Wentworth"
			/>
			<Joke 
				question="What is your last name?" 
				punchLine="Coffey"
			/>
			<Joke 
				question="What is the capital of Newfoundland?" 
				punchLine="St.John's"
			/>


			<Footer />
		</div>
	)
}

export default App