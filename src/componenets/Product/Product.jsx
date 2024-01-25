const Product = () => {

    return (

        <>
            <section className="new-product py-200">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "48px", fontWeight: "700", lineHeight: "1", marginBottom: "80px" }}>New Arrivals</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="single-product">
                                <div className="product-img" style={{marginBottom: "30px"}}>
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png.webp" alt=""  style={{ width: '100%', height:"100%" , backgroundSize: "cover" , display: 'block' }}/>
                                </div>
                                <div className="product-caption text-center">
                                    <h3 style={{color: "#444444" , fontWeight: "700" , fontSize: "24px" , marginBottom:"12px" , fontFamily: "'Josefin Sans', sans-serif"}}>
                                        Thermo Ball Etip Gloves
                                    </h3>
                                    <span style={{fontFamily:"'Josefin Sans', sans-serif" , color: "#ff2020"}}>$ 45,743</span>
                                </div>
                            </div>  
                        </div>
                        <div className="col-4">
                            <div className="single-product">
                                <div className="product-img" style={{marginBottom: "30px"}}>
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png.webp" alt=""  style={{ width: '100%', height:"100%" , backgroundSize: "cover" , display: 'block' }}/>
                                </div>
                                <div className="product-caption text-center">
                                    <h3 style={{color: "#444444" , fontWeight: "700" , fontSize: "24px" , marginBottom:"12px" , fontFamily: "'Josefin Sans', sans-serif"}}>
                                        Thermo Ball Etip Gloves
                                    </h3>
                                    <span style={{fontFamily:"'Josefin Sans', sans-serif" , color: "#ff2020"}}>$ 45,743</span>
                                </div>
                            </div>  
                        </div>
                        <div className="col-4">
                            <div className="single-product">
                                <div className="product-img" style={{marginBottom: "30px"}}>
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png.webp" alt=""  style={{ width: '100%', height:"100%" , backgroundSize: "cover" , display: 'block' }}/>
                                </div>
                                <div className="product-caption text-center">
                                    <h3 style={{color: "#444444" , fontWeight: "700" , fontSize: "24px" , marginBottom:"12px" , fontFamily: "'Josefin Sans', sans-serif"}}>
                                        Thermo Ball Etip Gloves
                                    </h3>
                                    <span style={{fontFamily:"'Josefin Sans', sans-serif" , color: "#ff2020"}}>$ 45,743</span>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}
export default Product;