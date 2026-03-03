import { BookingForm, Title } from "./Components";
import { Link } from 'react-scroll';

import aboutImg1 from "../Assets/Images/abt-1.png";
import aboutImg2 from "../Assets/Images/abt-2.jpg";
import aboutImg3 from "../Assets/Images/abt-3.jpg";

import prevIcon from "../Assets/Icons/arrow-left.png";
import nextIcon from "../Assets/Icons/arrow-right.png";

import { CategoryArr, GalleryArr, MenuArr, SpecialsArr, TeamArr } from "./Arrays";
import { MenuCard, SpecialsCard, SpecialsCardOpp, TeamCard } from "./Cards";
import { useState } from "react";
import { HandleMenuItems } from "../Services/Functions";
import { GalleryPopUp } from "./PopUps";

export const PageMain = () => {
    return (
        <main>
            <MainAbout />
            <MainCTA />
            <MainSpecials />
            <MainMenu />
            <MainMenuGallary />
            <MainTeam />
            <MainBooking />
            <MainContact />
        </main>
    );
}

const MainAbout = () => {
    return (
        <div className="main-about">
            <div className="wrapper">
                <div className="left">
                    <Title title={"The Hearth"} titleHead={"About Us"} align={"left"} />
                    <div className="line" />

                    <p className="text">Welcome to The Hearth, your neighborhood gathering place where good food, warm company, and a crackling fire come together.  We're passionate about serving up delicious, handcrafted dishes from our grill, alongside a carefully curated selection of craft beers, fine wines, and signature cocktails.  Whether you're looking for a casual bite with friends, a cozy date night, or a place to celebrate a special occasion, The Hearth is the perfect spot to relax, unwind, and savor the moment.</p>
                    <Link to={"specials"} smooth={true} duration={500}>
                        <button>View Specials</button>
                    </Link>
                </div>
                <div className="right">
                    <img src={aboutImg3} alt="" className="abt-1" />
                    <img src={aboutImg2} alt="" className="abt-2" />
                    <img src={aboutImg1} alt="" className="abt-3" />
                </div>
            </div>
        </div>
    );
}

const MainCTA = () => {

    return (
        <div className="main-cta">
            <div className="overlay" />
            <div className="wrapper">
                <h3>Ready to experience the warmth and charm of The Hearth?</h3>
                <p>Gather your friends and family and join us for an unforgettable dining experience. Our cozy atmosphere and delicious menu are the perfect combination for any occasion.  Reservations are recommended, so book your table today and let us take care of the rest.</p>

                <Link to={"book"} smooth={true} duration={500}>
                    <button>Book a Table</button>
                </Link>
            </div>
        </div>
    );
}

const MainSpecials = () => {

    const items = [...SpecialsArr];

    return (
        <div className="main-specials" id="specials">
            <div className="wrapper">
                <Title title="Let’s look at today’s specials" titleHead="specials" align="center" />

                <div className="main-specials-wrap">
                    {items && (
                        items.map((item, index) => (
                            index % 2 === 0 ? <SpecialsCard key={index} item={item} />
                                :
                                <SpecialsCardOpp key={index} item={item} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}


const MainMenu = () => {

    const categories = [...CategoryArr];
    const menuItems = [...MenuArr];

    const [displayMenu, setDisplayMenu] = useState(MenuArr.slice(0, 4));
    const [btnStatus, setBtnStatus] = useState(false);

    const handlePrevNext = (type) => {
        const res = HandleMenuItems(type, displayMenu, menuItems);

        setDisplayMenu(res);
    }


    const handleCategoryView = (type) => {
        setBtnStatus(true);

        let itms = [];
        for (let m of menuItems) {
            if (m.category === type) {
                itms.push(m);
            }
        }

        if (type === "All") {
            setBtnStatus(false);
            itms = [...menuItems.slice(0, 4)];
        }

        setDisplayMenu(itms);
    }


    return (
        <div className="main-menu" id="our-menu">
            <div className="overlay" />

            <div className="wrapper">
                <Title title="Check Out Our Menu" titleHead="menu" align="center" />

                <div className="categories">
                    {categories && (
                        categories.map((cat, index) => (
                            <div key={index} className="category" onClick={() => handleCategoryView(cat.category)}>
                                <div className="category-icon">
                                    <img src={cat.icon} alt="icon" />
                                </div>
                                <h5>{cat.category}</h5>
                            </div>
                        ))
                    )}

                    <div className="menu-cards">
                        {displayMenu && (
                            displayMenu.map((itm) => (
                                <MenuCard key={itm.id} item={itm} />
                            ))
                        )}
                    </div>
                    {!btnStatus ?
                        <div className="menu-nav">
                            <button onClick={() => handlePrevNext("prev")}><img src={prevIcon} alt="icon" /></button>
                            <button onClick={() => handlePrevNext("next")}><img src={nextIcon} alt="icon" /></button>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    );
}


const MainMenuGallary = () => {

    const [gallaryPopUp, setGallaryPopUp] = useState(false);
    const [imageToDisplay, setImageToDisplay] = useState(null);

    const galleryItems = [...GalleryArr];

    const handleImageView = (item) => {
        setImageToDisplay(item);
        setGallaryPopUp(true);
    }

    return (
        <div className="main-gallary" id="events">
            <div className="wrapper">
                <Title title="Our Photo Collection" titleHead="gallery" align="center" />

                <div className="gallery-images">
                    {galleryItems && (
                        galleryItems.map((item, index) => (
                            <div key={item.id} className={`gallery-img${index + 1}`}>
                                <img src={item.image} alt="img" onClick={() => handleImageView(item)} />
                            </div>
                        ))
                    )}

                </div>
            </div>

            {gallaryPopUp ?
                <GalleryPopUp setPopUp={setGallaryPopUp} item={imageToDisplay} items={galleryItems} setImageToDisplay={setImageToDisplay} />
                : null
            }
        </div>
    );
}

const MainTeam = () => {

    const team = [...TeamArr];

    return (
        <div className="main-team" id="chefs">
            <div className="overlay" />
            <div className="wrapper">
                <Title title="Our Kitchen Heroes" titleHead="chefs" align="center" />
                <div className="team-cards">
                    {team && (
                        team.map((tm) => (
                            <TeamCard key={tm.id} member={tm} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}


const MainBooking = () => {

    return (
        <div className="main-booking" id="book">
            <div className="wrapper">
                <Title title="Reserve Your Place" titleHead="bookings" align="center" />

                <div className="booking-form">
                    <div className="left">
                        <div className="overlay" />
                    </div>
                    <div className="right">
                        <div className="form-wrap">
                            <h3>Booking a table online is easy</h3>

                            <BookingForm />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

const MainContact = () => {

    return (
        <div className="main-contact" id="contact">
            <div className="wrapper">
                <Title title="Connect With Us" titleHead="contact" align="left" />

                <div className="contact-wrap">
                    <div className="left">
                        <h3>Contact Info:</h3>

                        <h4><b>Phone Number:</b>  +27 00 000 0000</h4>
                        <h4><b>Email Address:</b>  info@thehearth.co.za</h4>
                        <Link to={"book"} smooth={true} duration={500}>
                            <button>Book a Table</button>
                        </Link>
                    </div>
                    <div className="center">
                        <h3>Get Directions:</h3>

                        <h4><b>Physical Address:</b><br />
                            123 Main Street, Anytown, CA 91234</h4>
                        {/* <button>Book a table</button> */}
                    </div>
                    <div className="right">
                        <h3>Opening Hours:</h3>

                        <div className="time">
                            <h4><b>Monday - Friday:</b></h4>
                            <h4>11am - 10pm</h4>
                        </div>
                        <div className="time">
                            <h4><b>Saturday - Sunday:</b></h4>
                            <h4>12pm - 9pm</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}