import React from 'react'


function Joke(props){
	return(
		<div>
			<h4 style={{display: !props.question && "none"}}> Question: {props.question} </h4>
			<h4 style={{display: !props.question && "#888888"}}> Answer: {props.punchLine} </h4>
		</div>

	)
}
export default Joke

//The style and display aboce says if there is no props question 