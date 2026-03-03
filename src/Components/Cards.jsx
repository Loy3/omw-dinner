import { HandleRate } from "../Services/Functions";

import socialIcon1 from "../Assets/Icons/facebook-color.png";
import socialIcon2 from "../Assets/Icons/instagram-color.png";
import socialIcon3 from "../Assets/Icons/social-color.png";
import socialIcon4 from "../Assets/Icons/twitter-color.png";


export const SpecialsCard = (props) => {
    const item = props.item;

    return (
        <div className="specials-card">
            <div className="left">
                <h4>{item.title}</h4>
                <div className="numbers">
                    <div className="rate">
                        <h3>{item.rate}</h3>
                    </div>
                    <h3>R{item.price}.<span>00</span></h3>
                </div>

            </div>

            <div className="right">
                <img src={item.image} className="main-img" alt="img" />
                <div className="category">
                    <img src={item.icon} alt="icon" />
                </div>
            </div>
        </div>
    );
}

export const SpecialsCardOpp = (props) => {
    const item = props.item;

    return (
        <div className="specials-card">
            <div className="right">
                <img src={item.image} className="main-img-opp" alt="img" />
                <div className="category-opp">
                    <img src={item.icon} alt="icon" />
                </div>
            </div>

            <div className="left">
                <h4>{item.title}</h4>
                <div className="numbers">
                    <h3>R{item.price}.<span>00</span></h3>
                    <h3 className="rate">{item.rate}</h3>
                </div>
            </div>
        </div>
    );
}


export const MenuCard = (props) => {
    const item = props.item;

    return (
        <div className="menu-card">
            <div className="card-wrap">
                <div className="card-top">
                    <img src={item.image} alt="img" className="main-img" />
                    <div className="icon">
                        <img src={item.icon} alt="icon" />
                    </div>
                </div>

                <div className="card-btm">
                    <h4>{item.title}</h4>
                    <h3>R{item.price}.<span>00</span></h3>
                    <HandleRate rate={item.rate} />
                </div>
            </div>
        </div>
    );
}

export const TeamCard = (props) => {
    const member = props.member;

    return (
        <div className="team-card">
            <div className="card-wrap">
                <img src={member.image} alt="img" className="main-img" />

                <div className="card-btm">
                    <h4>{member.fullName}</h4>
                    <p>{member.position}</p>

                    <div className="socials">
                        <img src={socialIcon1} alt="icon" />
                        <img src={socialIcon2} alt="icon" />
                        <img src={socialIcon3} alt="icon" />
                        <img src={socialIcon4} alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}