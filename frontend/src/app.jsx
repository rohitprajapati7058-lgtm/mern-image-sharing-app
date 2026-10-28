import React from 'react'
import CreatePost from './pages/CreatePost'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'



const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<CreatePost/>} >
        </Route>
        <Route path='/about' element = {<Feed/>} ></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App