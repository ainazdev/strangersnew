import React from 'react';
import "./style.scss"
// import Carousel from "react-bootstrap"
import Book11 from "../../img/book11.svg"
import Book2 from "../../img/book2.svg"
import Book3 from "../../img/book3.svg"
import Book4 from "../../img/book4.svg"
import Book5 from "../../img/book5.svg"
import Book6 from "../../img/book6.svg"
import NewBooks from "../NewBooks";


const Genres = () => {
    return (
        <>
            <div id="genres">
                <div className="container">
                    <div className="text"><h1>Genres</h1></div>

                    <div className="genres">
                        <div className="genres--bg">
                            <div className="genres--bg__img">
                                <img src={Book11} alt=""/>
                                <h1>Sci-Fi</h1>
                            </div>
                        </div>
                        <div className="genres--bg">
                            <div className="genres--bg__img">
                                <img src={Book2} alt=""/>
                                <h1>For kids</h1>
                            </div>
                        </div>
                        <div className="genres--bg">
                            <div className="genres--bg__img">
                                <img src={Book3} alt=""/>
                                <h1>Psychology</h1>
                            </div>  </div>

                        <div className="genres--bg">
                            <div className="genres--bg__img">
                                <img src={Book4} alt=""/>
                                <h1>Romantic</h1>
                            </div>
                        </div>
                        <div className="genres--bg">
                            <div className="genres--bg__img">
                                <img src={Book5} alt=""/>
                                <h1>Detective</h1>
                            </div>
                        </div>
                        <div className="genres--bg">
                            <div className="genres--bg__img">
                                <img src={Book6} alt=""/>
                                <h1>Finance</h1>
                            </div>
                        </div>


                        {/*<Carousel>*/}
                        {/*    <Carousel.Item>*/}
                        {/*        <img src={Book11} alt=""/>*/}
                        {/*        <Carousel.Caption>*/}
                        {/*            <h1>Sci-Fi</h1>*/}
                        {/*        </Carousel.Caption>*/}
                        {/*    </Carousel.Item>*/}
                        {/*    <Carousel.Item>*/}
                        {/*        <img src={Book11} alt=""/>*/}
                        {/*        <Carousel.Caption>*/}
                        {/*            <h1>Sci-Fi</h1>*/}
                        {/*        </Carousel.Caption>*/}
                        {/*    </Carousel.Item>*/}
                        {/*    <Carousel.Item>*/}
                        {/*        <img src={Book11} alt=""/>*/}
                        {/*        <Carousel.Caption>*/}
                        {/*            <h1>Sci-Fi</h1>*/}
                        {/*        </Carousel.Caption>*/}
                        {/*    </Carousel.Item>*/}
                        {/*</Carousel>*/}

                    </div>

                </div>

            </div>
            <NewBooks/>
        </>
    );
};

export default Genres;


