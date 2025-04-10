// import React, { useEffect } from "react";
import "./404_Error.css";
import { Link } from "react-router-dom";

const Error400 = () => {

    // const moveIcon = () => {
    //     const pageX = document.documentElement.clientWidth;
    //     const pageY = document.documentElement.clientHeight;
    //     let mouseY = 0;
    //     let mouseX = 0;
    //     try {

    //         document.addEventListener('mousemove', (event) => {
    //             // verticalAxis
    //             mouseY = event.pageY;
    //             const yAxis = (pageY / 2 - mouseY) / pageY * 300;
    //             // horizontalAxis
    //             mouseX = event.pageX / -pageX;
    //             const xAxis = -mouseX * 100 - 100;

    //             document.querySelector('.box__ghost-eyes').style.transform = `translate(${xAxis}%, -${yAxis}%)`;
    //         });
    //     } catch (error) {

    //     }
    // };

    // useEffect(() => {
    //     // moveIcon();
    // }, []);
    return (
        <React.Fragment>
            <div className="box">
                <div className="box__ghost">
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>

                    <div className="box__ghost-container">
                        <div className="box__ghost-eyes">
                            <div className="box__eye-left"></div>
                            <div className="box__eye-right"></div>
                        </div>
                        <div className="box__ghost-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="box__ghost-shadow"></div>
                </div>

                <div className="box__description">
                    <div className="box__description-container">
                        <div className="box__description-title">Whoops!</div>
                        <div className="box__description-text">It seems like we couldn't find the page you were looking for</div>
                    </div>

                    <Link to="#" className="box__button">Go Back Please</Link>

                </div>

            </div>
        </React.Fragment>
    );
}


export default Error400; 