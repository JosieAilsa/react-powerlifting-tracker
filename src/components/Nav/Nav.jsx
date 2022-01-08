import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = ({toggleLiftList, toggleShowForm}) => {

    return (
        <>
        <nav className = "nav">
            <h3 className = "nav__logo">Lift5X5</h3>
            <svg className = "nav__hamburger"xmlns="http://www.w3.org/2000/svg" width="40.141" height="28.317" viewBox="0 0 40.141 28.317">
            <g id="Group_24" data-name="Group 24" transform="translate(-680.526 -46.699)">
                <g id="Group_19" data-name="Group 19" transform="translate(681.526 47.699)">
                <line id="Line_1" data-name="Line 1" x2="38.141" transform="translate(0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_2" data-name="Line 2" x2="38.141" transform="translate(0 13.385)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_3" data-name="Line 3" x2="38.141" transform="translate(0 26.317)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                </g>
            </g>
            </svg>
            <ul className = "nav__container">
            <Link to = "/addLift">
                <li className = "nav__link" onClick = {toggleShowForm}>Add Lift</li>
            </Link>
            <Link to ="/showLifts">
                <li className = "nav__link" onClick = {toggleLiftList}>Logged lifts</li>
            </Link>
            </ul>
        </nav>
        </>
      );
}
 
export default Nav;