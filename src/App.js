import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import BookShop from "./components/BookShop";
import Genres from "./components/Genres";
import AboutUs from "./components/AboutUs";
import Books from "./components/BooksBlock";
import Recent from "./components/Recent";
import Height from "./components/height";

function App() {
    return (
        <div className="App">
            <Header/>
            <Height/>
            <Routes>
                <Route path={"/bookShop"} element={<BookShop/>}/>
                <Route path={"/genres"} element={<Genres/>}/>
                <Route path={"/about"} element={<AboutUs/>}/>
                <Route path={"/books"} element={<Books/>}/>
                <Route path={"/recent"} element={<Recent/>}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
