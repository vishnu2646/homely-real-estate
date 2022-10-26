import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import PropertiesList from './Pages/PropertiesList/PropertiesList';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/list' element={<PropertiesList />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
