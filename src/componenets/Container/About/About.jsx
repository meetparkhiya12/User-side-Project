import { FaArrowRight, FaPlay } from "react-icons/fa";
import { MdOutlineLockOpen } from "react-icons/md";
import { TfiPackage, TfiReload } from "react-icons/tfi";

const About = () => {

    return (

        <>
            <section>
                <div className="about-slider  d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-cap text-center">
                                    <h2 style={{ fontSize: "70px", fontWeight: "700", color: "#0b1c39" }}>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-details py-200">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 off-set">
                                <div className="about-cap">
                                    <h4>Our Mission</h4>
                                    <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                                    </p>
                                    <p className="mb-5"> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                                </div>
                            </div>
                            <div className="col-8 off-set">
                                <div className="about-cap">
                                    <h4>Our Vision</h4>
                                    <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                                    </p>
                                    <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='video'>
                    <div className="video-area">
                        <div className='container-fluid'>
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="video-wrap">
                                        <div className="play-btn">
                                            <a className="popup-video" href="https://www.youtube.com/watch?v=KMc6DyEJp04">
                                                <FaPlay />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='thumb-content-box'>
                                    <div className='thumb-content'>
                                        <h3>Next Video</h3>
                                        <a href="#">
                                            <FaArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shop-area py-100">
                    <div className="container">
                        <div className="shop-method" style={{ background: "#ea0000" }}>
                            <div className="row">
                                <div className="col-4">
                                    <div className="single-shop mb-40" style={{ padding: "43px 20px 0px 45px" }}>
                                        <a href="#" className="text-light mb-5" >
                                            <TfiPackage />
                                        </a>
                                        <h6 className="pt-3 text-light" style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>Free Shipping Method</h6>
                                        <p className="text-light">aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="single-shop mb-40" style={{ padding: "43px 20px 0px 45px" }}>
                                        <a href="#" className="text-light mb-5" >
                                            <MdOutlineLockOpen />
                                        </a>
                                        <h6 className="pt-3 text-light" style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>Secure Payment System</h6>
                                        <p className="text-light">aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="single-shop mb-40" style={{ padding: "43px 20px 0px 45px" }}>
                                        <a href="#" className="text-light mb-5" >
                                            <TfiReload />
                                        </a>
                                        <h6 className="pt-3 text-light" style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>Secure Payment System</h6>
                                        <p className="text-light">aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.</p>
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
export default About;