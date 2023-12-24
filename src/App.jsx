import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import QuestionPage from './pages/QuestionPage'
import YesPage from './pages/YesPage/YesPage'

function App() {

  return (
    <>
      <div className="container">
      <Routes> 
        <Route path="/yespage" element={<YesPage/>}/>
        <Route path="/question/:id" element={<QuestionPage/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
