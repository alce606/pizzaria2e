import React, {useState} from "react"
import { Routes, Route } from "react-router-dom"
 import Home from "./pages/Home"
const App = () => {
 
  const [color] = useState("#e5ffcc")
  document.body.style.backgroundColor = color
 
  return (
    <Routes>
      <Route path="/"  element={<Home />}/>
    </Routes>
  )
}
export default App