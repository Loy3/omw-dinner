import logoIcon from "../Assets/logo.png";
import subIcon from "../Assets/Icons/paper-plane.png";
import { SocialsArr } from "./Arrays";

export const PageFooter = () => {

    const socials = [...SocialsArr];

    return (
        <footer>
            <div className="wrapper">
                <div className="footer-top">
                    <div className="left">
                        <div className="logo">
                            <img src={logoIcon} alt="logo" />
                        </div>
                        <div className="text">
                            <h2>The Hearth</h2>
                            <p>Bar & Grill</p>
                        </div>
                    </div>

                    <div className="center">
                        <p>
                            Where your neighborhood gathering place where good food, warm company, and a crackling fire come together.
                        </p>
                    </div>

                    <div className="right">
                        <p>subscribe to get latest updates</p>
                        <div className="footer-sub">
                            <input type="text" placeholder="Your Email Address:" />
                            <button><img src={subIcon} alt="icon" /></button>
                        </div>
                    </div>
                </div>

                <div className="line" />
                <div className="footer-btm">
                    <h3>Designed & Developed by <b><a href="https://theoneaboutloy.vercel.app/" rel="noreferrer" target="_blank">dev_loy</a></b></h3>
                    <div className="socials">
                        {socials && (
                            socials.map((soc) => (
                                <a href={soc.link} key={soc.id} rel="noreferrer" target="_blank" >
                                    <img src={soc.icon} alt="icon" />
                                </a>
                            ))
                        )}


                    </div>
                </div>
            </div>
        </footer>
    );
}