const Banner = () => {

    return (

        <>
            <main>
                <div className="banner">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-8">
                                <div className="banner-caption">
                                    <h1 style={{ fontSize: " 96px" }}>Select Your New <br /> Perfect Style</h1>
                                    <p style={{ lineHeight: "1.6", fontSize: "17px" , marginBottom: "60px" }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat is aute irure.</p>
                                    <div className="banner-btn">
                                        <a href="#" className="btn hero-btn">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="banner-img">
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="img" className="heartbeat"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )

}
export default Banner;