import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ButtonMovement from '../helpers/ButtonMovement'

const QuestionPage = () => {
    const location = useLocation()
    const { imgSrc, questionText } = location.state
	return (
		<>
            <div>
                <h1 class="header_text">{questionText || 'Do you wanna go out with me?'}</h1>
            </div>
            <div class="gif_container">
                <img src={imgSrc || "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"}
                    alt="Cute animated illustration"/>
            </div>
            <div class="buttons">
				<Link  class="btn" id="yesButton"  to="/YesPage">Yes</Link>
				<ButtonMovement/>
            </div>
</>        
	)
}

QuestionPage.propTypes = {}

export default QuestionPage