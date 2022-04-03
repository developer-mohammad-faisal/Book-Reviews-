import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import Four_O_Four_Page from './components/Four_O_Four_Page/Four_O_Four_Page';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='*' element={<Four_O_Four_Page></Four_O_Four_Page>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
