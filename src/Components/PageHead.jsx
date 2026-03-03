// import icons
import phoneIcon from "../Assets/Icons/telephone-call-color.png";
import mailIcon from "../Assets/Icons/message-color.png";
import timeIcon from "../Assets/Icons/clock-bg-color.png";

export const PageHead = () => {
    return (
        <div className="head" id="home">
            <div className="wrapper">
                <div className="left">
                    <div className="icon-text">
                        <img src={phoneIcon} alt="phoneIcon" />
                        <p>+27 00 000 0000</p>
                    </div>
                    <div className="icon-text">
                        <img src={mailIcon} alt="mailIcon" />
                        <p>info@thehearth.co.za</p>
                    </div>
                </div>

                <div className="right">
                    <div className="icon-text">
                        <img src={timeIcon} alt="timeIcon" />
                        <p>Mon-Fri: 11am-10pm <span>|</span> Sat-Sun: 12pm-9pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}