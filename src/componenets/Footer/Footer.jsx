import { FaBehance, FaFacebookF, FaGlobe, FaTwitter } from "react-icons/fa";

const Footer = () => {

    return (

        <>
            <section>
                <div className="footer py-200">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-3">
                                <div className="single-footer">
                                    <div className="footer-logo">
                                        <a href="#">
                                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png.webp" alt="img" />
                                        </a>
                                    </div>
                                    <div className="footer-title">
                                        <p style={{ color: "#868c98", lineHeight: "1.8" }}>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="single-footer" >
                                    <h4 className="fw-bolder" style={{ fontSize: "20px", marginBottom: "25px" }}>Quick Links</h4>
                                    <ul className="list-unstyled ">
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}>About</a>
                                        </li>
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}> Offers & Discounts</a>
                                        </li>
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}> Get Coupon</a>
                                        </li>
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}> Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="single-footer" >
                                    <h4 className="fw-bolder" style={{ fontSize: "20px", marginBottom: "25px" }}>New Products</h4>
                                    <ul className="list-unstyled ">
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}>Woman Cloth</a>
                                        </li>
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}>Fashion Accessories</a>
                                        </li>
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}>  Man Accessories</a>
                                        </li>
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}> Rubber made Toys</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="single-footer" >
                                    <h4 className="fw-bolder" style={{ fontSize: "20px", marginBottom: "25px" }}>Support</h4>
                                    <ul className="list-unstyled ">
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}>Frequently Asked Questions</a>
                                        </li>
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}> Terms & Conditions</a>
                                        </li>
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}> Privacy Policy</a>
                                        </li>
                                        <li style={{ marginBottom: "15px" }}>
                                            <a href="#" style={{ color: "#868c98" }}> Report a Payment Issue</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center ">
                            <div className="col-7">
                                <div className="footer-copy" style={{ paddingTop: "50px", color: "#888888" }}>
                                    <p>
                                        Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="footer-copy " style={{ paddingTop: "50px" , float: "right"}}>
                                    <div className="footer-social">
                                        <a href="#" className="text-dark" style={{padding: "5px 10px"}}>
                                            <FaTwitter />
                                        </a>
                                        <a href="#" className="text-dark" style={{padding: "5px 10px"}}>
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="text-dark" style={{padding: "5px 10px"}}>
                                            <FaBehance />
                                        </a>
                                        <a href="#" className="text-dark" style={{padding: "5px 10px"}}>
                                            <FaGlobe />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}
export default Footer;