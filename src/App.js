import './App.css';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './SignIn';
function App() {
  return (
  <div>
<Router>

<Routes>


<Route path='/' element={<Home/>} />
<Route path='/Sign-in'element={<SignIn/>} />
<Route path='/Sign-up' element={<SignUp/>} />
<Route path='/About' element={<About/>} />
<Route path='/Profile' element={<Profile/>} />

</Routes>


</Router>

  </div>
  );
}

export default App;
