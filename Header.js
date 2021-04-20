import React from 'react'
import "./style.css" 


//can only apply class name to elements like header, footer NOT components
function Header(){
	return (
		<div>
			<header className="navbar">WELCOME!</header>

		</div>

	)
}

export default Header