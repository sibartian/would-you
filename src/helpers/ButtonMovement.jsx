import React from 'react'

const ButtonMovement = props => {

	const moveButton = (e) =>  {
		// var x = Math.random() * (window.innerWidth - 50 - e.offsetWidth)
		// var y = Math.random() * (window.innerHeight - 50 - e.offsetHeight)
		// if(x >= window.innerWidth) {
		// 	e.style.left = `${x - 40}px`
		// } else {
		// 	e.style.left = `${x}px`
		// }
		// if (y > window.innerHeight) {
		// 	e.style.top = `${y- 20}px`
		// } else {
		// 	e.style.top = `${y}px`
		// }
		e.style.top = Math.floor(Math.random()*90+5)+'%';
		e.style.left = Math.floor(Math.random()*90+5)+'%';
	 
	}
	return (
		<button onMouseEnter={(e) => moveButton(e.target)} onClick={(e) => moveButton(e.target)} class="btn" id="noButton" onmouseover="moveButton()" onclick="moveButton()">No</button>			
	)
}

ButtonMovement.propTypes = {}

export default ButtonMovement