const Gallery = () => {

    return (
        
        <>
            <section className="gallery-area">
                <div className="container-fluid p-0 fix">
                    <div className="row">
                        <div className="col-6">
                            <div className="single-gallery mb-30">
                                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery1.png.webp" alt="img" style={{width:"100%"}}/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="single-gallery mb-30">
                                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png.webp" alt="img" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-gallery mb-30">
                                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery3.png.webp" alt="img" style={{width: "100%"}}/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-gallery mb-30">
                                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery4.png.webp" alt="img" style={{width: "100%"}}/>
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
export default Gallery;