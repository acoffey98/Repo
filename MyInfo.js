import React from 'react';   //react lib enables JSX libary to work



//build the function
function MyInfo(){
	return(
	<div>
		<h1>Alexandria Coffey</h1>
		<p>I am 23 and this is my first job...</p>
		<ul>
			<li>Calafornia </li>
			<li> Paris </li>
			<li> Thailand </li>
		</ul>
	</div>
	)
}

ReactDOM.render(< MyInfo />, document.getElementById("root"))

export default MyInfo