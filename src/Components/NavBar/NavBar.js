import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../Photos/Icons/greenMain.png";
import EnrollIcon from "../../Photos/Enroll Now/icon.svg"


const NavBar = ({ fullNav }) => {

    return (
        <div className="navigationbar">
            <div className="backgroundBlur"></div>
            <div className="leftNav">
                {fullNav &&
                    <img src={Logo} alt="logo" />
                }

            </div>
            <div className="middleNav">
                <div className="Links">
                    {/* <div className='logoImgMiddle'>
                        <img src={HalfLogo} />
                    </div> */}
                    <NavLink to="/" className={({ isActive }) => isActive ? "active noScroll" : "scrollLinkNav"}>
                        <span>Home</span>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active noScroll" : "scrollLinkNav"}>
                        <span>About us</span>
                        <span>About us</span>
                    </NavLink>
                    <NavLink to="/courses" className={({ isActive }) => isActive ? "active noScroll" : "scrollLinkNav"}>
                        <span>Courses</span>
                        <span>Courses</span>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active noScroll" : " scrollLinkNav"}>
                        <span>Contact</span>
                        <span>Contact</span>
                    </NavLink>

                    {fullNav === false &&
                        <Link className='middleNavEnroll' to={"/contact"}>
                            <img src={EnrollIcon} alt='enrollNow' />Enroll Now
                        </Link>
                    }

                    </div>
                </div>
                <div className="rightNav">
                    {fullNav &&
                        <div className="EnrollNow">
                            <Link to={"/contact"}> <img src={EnrollIcon} alt='enrollNow' /> Enroll Now</Link>
                        </div>
                    }

                </div>
            </div>
            );
};

            export default NavBar;

