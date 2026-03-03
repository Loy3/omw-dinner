export const Title = (props) => {

    return (
        <div className="title">
            <p style={{ textAlign: props.align }}>{props.titleHead}</p>
            <h1 style={{ textAlign: props.align }}>{props.title}</h1>
        </div>
    );
}

export const BookingForm = () => {

    return (
        <div className="form">
            <input type="text" placeholder="Full Name(s):" className="long" />
            <input type="date" placeholder="dd/mm/yyyy" className="short" id="space" />
            <input type="time" placeholder="00:00" className="short" />
            <select className='long'>
                <option hidden={true} >
                    Select Table
                </option>
                <option value={"Standard Dining (Low-Tops)"}>Standard Dining (Low-Tops)</option>
                <option value={"High-Tops (Pub Tables)"}>High-Tops (Pub Tables)</option>
                <option value={"Booths"}>Booths</option>
                <option value={"Bar Seating"}>Bar Seating</option>
                <option value={"Communal Tables"}>Communal Tables</option>

            </select>
            <input type="email" placeholder="Email Address:" className="long" />
            <input type="number" placeholder="Contact Number:" className="long" />

            <div className="buttons">
                <button>Book A table</button>
            </div>
        </div>
    );
}