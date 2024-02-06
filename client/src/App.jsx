import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profie from './pages/Profie'
import Home from './pages/Home'
import NotFound from './pages/NotFound';


function App() {

  return (
    <>
     <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/profie" element={<Profie />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
