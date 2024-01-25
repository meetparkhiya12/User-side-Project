import { Badge, Button } from "react-bootstrap";
import { FaSearch, FaUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Header = () => {

    return (

        <>

            <header style={{ display: "block" }}>
                <div className="header-area" style={{ height: "106px" }}>
                    <div className="main-header">
                        <div className="container-fluid">
                            <div className="menu-wrapper">
                                <div className="logo">
                                    <a href="#">
                                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp" alt="img" />
                                    </a>
                                </div>
                                <div className="main-menu">
                                    <div className="nav ">
                                        <ul className="d-flex list-unstyled ">
                                            <li>
                                                <NavLink to="/" className="text-decoration-none" >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/WatchShop" className="text-decoration-none" >
                                                    Shop
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/About" className="text-decoration-none" >
                                                    About
                                                </NavLink>
                                            </li>
                                            <li className="dropdown">
                                                <NavLink className="text-decoration-none" >
                                                    Latest
                                                </NavLink>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <NavLink style={{ textDecoration: "none", padding: "6px 10px" }}>Product list</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink style={{ textDecoration: "none", padding: "6px 10px" }}>Product Details</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <NavLink to="/Blog" className="text-decoration-none" >
                                                    Blog
                                                </NavLink>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <NavLink style={{ textDecoration: "none", padding: "6px 10px" }}>Blog</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink style={{ textDecoration: "none", padding: "6px 10px" }}>Blog Details</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <NavLink className="text-decoration-none" >
                                                    Pages
                                                </NavLink>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <NavLink style={{ textDecoration: "none", padding: "6px 10px" }}>Login</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink style={{ textDecoration: "none", padding: "6px 10px" }}>Cart</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink style={{ textDecoration: "none", padding: "6px 10px" }}>Element</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink style={{ textDecoration: "none", padding: "6px 10px" }}>Confirmation</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink style={{ textDecoration: "none", padding: "6px 10px" }}>Product Checkout</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <NavLink to="/ContactUs" className="text-decoration-none" >
                                                    Contact
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header-right">
                                    <ul className="list-unstyled d-flex">
                                        <li>
                                            <NavLink className="text-dark" >
                                                <FaSearch />
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/Login" className="text-dark" >
                                                <FaUser />
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/CartList" className="text-dark" >
                                                <GrCart /><Badge bg="secondary">0</Badge>
                                                <span className="visually-hidden">unread messages</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )

}
export default Header;