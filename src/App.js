import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import FavList from './components/FavList';
import Footer from './components/Footer';


function App() {
  return (
   <>
   <Header/>
   
   <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<FavList />}></Route>
      </Routes>
   <Footer />
   </>
  );
}

export default App;
