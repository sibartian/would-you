import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ButtonMovement from '../helpers/ButtonMovement'

const QuestionPage = () => {
    const location = useLocation()
    const {id} = useParams()
    

    const [que, setQue] = useState(
		[
			{qid: 1, imgSrc: 'https://media.giphy.com/media/zGk5I6VUTBQRrTxTmf/giphy.gif', questionText: 'Do you want to eat in Çatı?' },
			{qid: 2, imgSrc: 'https://media.giphy.com/media/yl3xCL7IMbMxwscPlm/giphy.gif', questionText: 'Let\'go gym?' },
			{qid: 3, imgSrc: 'https://media.giphy.com/media/eltZvfFAW9f9HI1foH/giphy.gif', questionText: 'Do you want go to club?' },
			{qid: 4, imgSrc: 'https://media.giphy.com/media/hm8GqsZ2RteDRWW7OS/giphy.gif', questionText: 'Can you warm me up?' },
			{qid: 5, imgSrc: 'https://media.giphy.com/media/G4qeX5sEqA6gBHaFNM/giphy.gif', questionText: 'Am I precious?' },
			{qid: 6, imgSrc: 'https://media.giphy.com/media/ZCSPaG9pPpSJEBiOUF/giphy.gif', questionText: 'Do you want to go for a walk?' },
		]
	);
    const [obj, setObj] = useState({})

    useEffect(() => {
        setObj(...(que.filter((i) =>  i.qid == id)))
    }, [])
	return (
		<>
            <div>
             <h1 className="header_text">{obj.questionText || 'Do you wanna go out with me?'}</h1>
            </div>
            <div className="gif_container">
                <img src={obj.imgSrc || "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"}
                    alt="Cute animated illustration"/>
            </div>
            <div className="buttons">
				<Link  className="btn" id="yesButton"  to="/YesPage">Yes</Link>
				<ButtonMovement/>
            </div>
</>        
	)
}

QuestionPage.propTypes = {}

export default QuestionPage