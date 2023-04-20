import React from 'react';
import "./style.scss"
import Genres from "../Genres";

const BookShop = () => {
    return (
        <>
            <div id="book">
                <div className="container">
                    <div className="book">
                        <h1>Welcome to our Bookshop</h1>
                        <div>
                            <h5>A place where you can get all the books you want!</h5>
                        </div>
                    </div>

                </div>
            </div>
            <Genres/>
        </>

    );
};

export default BookShop;