import { useEffect, useMemo, useRef, useState } from "react";

import menuIcon from "../Assets/Icons/options-white.png";
import closeIcon from "../Assets/Icons/cancel-color-white.png";

import logoIcon from "../Assets/logo.png";

import { HandleMenu } from "../Services/Functions";

import { Link } from 'react-scroll';

export const PageNav = (props) => {

    const [show, setShow] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);
    const [navPadding, setNavPadding] = useState("40px");
    const [bgColor, setBgColor] = useState("transparent");

    const navbarRef = useRef(null);

    const [active, setActive] = useState("home");

    const navRoutes = useMemo(() => {
        return [
            {
                text: "Home",
                route: "home",
            },
            {
                text: "Specials",
                route: "specials",
            },
            {
                text: "Menu",
                route: "our-menu",
            },
            {
                text: "Gallery",
                route: "events",
            },
             {
                text: "Chefs",
                route: "chefs",
            },
            {
                text: "Contact Us",
                route: "contact",
            }
        ]
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > scrollPos && show) {
                // Scrolling down
                setShow(false);
                setNavPadding("0");
            } else if (currentScrollPos < scrollPos && !show) {
                // Scrolling up
                setShow(true);
                setBgColor('rgba(60, 61, 55, 1)');
                setNavPadding("0");
            }

            if (window.pageYOffset === 0) {
                setBgColor('transparent')
                setNavPadding("40px");
            }
            setScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos, show]);


    // useEffect(() => {
    //     setActive(props.nav)
    // }, [props])

    function handleNavigation(route) {
        setActive(route);
    }


    return (
        <nav
            ref={navbarRef}
            style={{
                position: 'fixed',
                top: navPadding,
                left: 0,
                right: 0,
                margin: 0,
                backgroundColor: `${bgColor}`,
                padding: 0,
                transition: 'transform 0.3s ease-in-out',
                transform: show ? 'translateY(0)' : 'translateY(-100%)',
                zIndex: 90,
                width: "100%"
            }}
        >
            <div className="nav-content">
                <div className="wrapper">
                    <div className="left">
                        <div className="logo">
                            <img src={logoIcon} alt="logo" />
                        </div>
                        <div className="text">
                            <h2>The Hearth</h2>
                            <p>Bar & Grill</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="routes" id="routes">
                            {navRoutes.map((route, index) => (

                                <Link key={index} to={route.route} smooth={true} duration={500}>
                                    <button className={route.route === active ? "active" : null} title={route.text} onClick={() => handleNavigation(route.route)}>{route.text}</button>
                                </Link>
                            ))}

                            <button className="closebtn" id="close-btn" onClick={() => HandleMenu("close")} title="close"><img src={closeIcon} alt="closeIcon" /></button>
                        </div>


                        <button className="menu" id="menu" onClick={() => HandleMenu("open")} title="menu"><img src={menuIcon} alt="menuIcon" /></button>
                        <Link to={"book"} smooth={true} duration={500}>
                            <button className="book" title="Book A Table">Book A Table</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}