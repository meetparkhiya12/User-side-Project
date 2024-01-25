import { FaPlay } from "react-icons/fa"

const WatchArea = () => {

    return (

        <>
            <section>
                <div className="watch">
                    <div className="container">
                        <div className="row align-items-center justify-content-between p-30">
                            <div className="col-6">
                                <div className="watch-details">
                                    <h2 style={{ fontSize: "56px", fontWeight: "700", marginBottom: "40px" }}>Watch of Choice</h2>
                                    <p style={{ color: "#6c757d", marginBottom: "50px", letterSpacing: "1px" }}>Enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br /> irure dolor in reprehenderit in voluptate velit esse.</p>
                                    <div className="banner-btn text-danger">
                                        <a href="#" className="btn hero-btn" style={{ backgroundColor: "#ff2020", textTransform: "uppercase", fontSize: "16px", fontWeight: "600" }}>
                                            Show Watches
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="watch-img">
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png.webp" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="watch">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-6">
                                <div className="watch-img">
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png.webp" alt="img" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="watch-details">
                                    <h2 style={{ fontSize: "56px", fontWeight: "700", marginBottom: "40px" , textAlign: "right" }}>Watch of Choice</h2>
                                    <p style={{ color: "#6c757d", marginBottom: "50px", letterSpacing: "1px" ,textAlign: "right" ,  lineheight: "1.6" }}>Enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br/> irure dolor in reprehenderit in voluptate velit esse.</p>
                                    <div className="banner-btn text-danger" style={{textAlign: "right"}}>
                                        <a href="#" className="btn hero-btn" style={{ backgroundColor: "#ff2020", textTransform: "uppercase", fontSize: "16px", fontWeight: "600" ,}}>
                                            Show Watches
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
export default WatchArea