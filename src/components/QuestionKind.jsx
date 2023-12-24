import React from 'react'
import { Link } from 'react-router-dom'
const QuestionKind = ({props}) => {
	return (
		<Link  state ={{imgSrc: props.imgSrc, questionText: props.questionText}} to={props.path} className='home__question'>
			<div className='question__preview-img'><img src={props.imgSrc} alt="Question Animation" /></div>
			<div className="question__kind">
				{props.questionText}
			</div>
		</Link>
	)
}

QuestionKind.propTypes = {

}

export default QuestionKind