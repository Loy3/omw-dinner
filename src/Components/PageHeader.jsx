import { Link } from 'react-scroll';
import { VideoPopUp } from './PopUps';
import { useState } from 'react';

import playIcon from "../Assets/Icons/play.png";

export const PageHeader = () => {

    const [popUp, setPopUp] = useState(false);

    return (
        <header>
            <div className="header-bg" />
            <div className="header-gradient" />

            <div className="header-text">
                <p>Welcome To</p>
                <h1>The Hearth</h1>
                <p>Where your neighborhood gathering place where good food, warm company,
                    and a crackling fire come together.</p>

                <div className="header-buttons">
                    <Link to={"book"} smooth={true} duration={500}>
                        <button>Book a table</button>
                    </Link>
                    <button className='video-btn' onClick={() => setPopUp(true)}>Watch Our Story <div className='play'><img src={playIcon} alt="play" /></div></button>
                </div>
            </div>
            {popUp ?
                <VideoPopUp setPopUp={setPopUp} />
                : null
            }
        </header>
    );
}