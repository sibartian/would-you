import React, { useState } from 'react'
import QuestionPage from './QuestionPage'
import QuestionKind from '../components/QuestionKind'

const Home = props => {
	const [que, setQue] = useState(
		[
			{path: '/question', imgSrc: 'https://media.giphy.com/media/zGk5I6VUTBQRrTxTmf/giphy.gif', questionText: 'Do you wanna eat in Çatı?' },
			{path: '/question', imgSrc: 'https://media.giphy.com/media/Q47i2kDz8w1utetr7i/giphy.gif', questionText: 'Can you do this move for me?' },
			{path: '/question', imgSrc: 'https://media.giphy.com/media/yl3xCL7IMbMxwscPlm/giphy.gif', questionText: 'Do you want go to club?' },
			{path: '/question', imgSrc: 'https://media.giphy.com/media/hm8GqsZ2RteDRWW7OS/giphy.gif', questionText: 'Can you warm me up?' },
			{path: '/question', imgSrc: 'https://media.giphy.com/media/G4qeX5sEqA6gBHaFNM/giphy.gif', questionText: 'Am I precious?' },
			{path: '/question', imgSrc: 'https://media.giphy.com/media/ZCSPaG9pPpSJEBiOUF/giphy.gif', questionText: 'Do you want to go for a walk?' },
		]
	);
	return (
		<div className='questions__container'>
			{que.map(({path, questionText, imgSrc}) =>
			<QuestionKind props={{path: path, imgSrc: imgSrc, questionText: questionText }}/>
			)
}
		</div>
	)
}

Home.propTypes = {}

export default Home