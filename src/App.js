import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewBlog from './pages/NewBlog';
import RouteFallbackPage from './pages/RouteFallbackPage';
import ReadBlog from './pages/ReadBlog';
import Login from './pages/Login';
import ProtectedLayout from './components/ProtectedLayout';
import LoginProtectedLayout from './components/LoginProtectedLayout';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route element={<LoginProtectedLayout/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>} />
          </Route>
          
          <Route element={<ProtectedLayout/>}>
            <Route path='*' element={<RouteFallbackPage/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/new-blog' element={<NewBlog/>}/>
            <Route path='/read-blog/:id' element={<ReadBlog/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;
