import { useRef } from "react";

import closeIcon from "../Assets/Icons/cancel-color-white.png";
import defaultVid from "../Assets/the-hearth.mp4";

import prevIcon from "../Assets/Icons/arrow-left.png";
import nextIcon from "../Assets/Icons/arrow-right.png";
import { HandleNext, HandlePrev } from "../Services/Functions";


export const VideoPopUp = (props) => {

    const videoRef = useRef(null);

    const handleClosePopUp = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;

            props.setPopUp(false);
        }
    };
    return (
        <div className="pop-up">
            <div className="overlay" onClick={handleClosePopUp} />
            <button className="closebtn" onClick={handleClosePopUp}><img src={closeIcon} alt="icon" /></button>

            <video controls ref={videoRef}>
                <source src={defaultVid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export const GalleryPopUp = (props) => {

    const items = [...props.items];
    const item = props.item;
    const handleClosePopUp = () => {
        props.setPopUp(false);
    };

    const handleGalleryImage = (type) => {
        let image = null;

        switch (type) {
            case "next":
                image = HandleNext(item, items)
                props.setImageToDisplay(image);
                break;

            case "prev":
                image = HandlePrev(item, items)
                props.setImageToDisplay(image);
                break;

            default:
                break;
        }
    }

    return (
        <div className="pop-up">
            <div className="overlay" onClick={handleClosePopUp} />
            <button className="closebtn" onClick={handleClosePopUp}><img src={closeIcon} alt="icon" /></button>

            <div className="image-wrap">
                <img src={item.image} alt="" />
                <div className="buttons">
                    <button onClick={() => handleGalleryImage("prev")}><img src={prevIcon} alt="icon" /></button>
                    <button onClick={() => handleGalleryImage("next")}><img src={nextIcon} alt="icon" /></button>
                </div>
            </div>
        </div>
    );
}