import { Link } from 'react-scroll';

export const NavRouteBTN = (props) => {

    return (
        <Link
            to={props.route.route}
            smooth={true}
            duration={500}
        >
            <button
                className={props.isActive ? "active" : ""}
                title={props.route.text}
                onClick={() => props.onNavigate(props.route.route)}
            >
                {props.route.text}
            </button>
        </Link>
    );
}