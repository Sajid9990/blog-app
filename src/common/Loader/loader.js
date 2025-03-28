import { Fragment } from "react";
import "./loader.css";

const Loader = () => {
    return (
        <Fragment>
            <div className="diceLoader">
                <div>
                <div className="dice">
                    <div className="face first-face">
                        <div className="dot"></div>
                    </div>

                    <div className="face second-face">
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                    <div className="face third-face">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                    <div className="face fourth-face">
                        <div className="column">
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="column">
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>

                    <div className="face fifth-face">
                        <div className="column">
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="column">
                            <div className="dot"></div>
                        </div>
                        <div className="column">
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>

                    <div className="face sixth-face">
                        <div className="column">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="column">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    </div>
                    <p>Wait, please...</p>

                </div>
            </div>
        </Fragment>
    );
}

export default Loader;