import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Header from './componants/Header';
import Profile from './pages/Profile';


function App() {

  return (
    <>
     <BrowserRouter >
     <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
