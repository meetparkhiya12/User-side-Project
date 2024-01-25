import { TfiPackage, TfiReload } from "react-icons/tfi";
import { MdOutlineLockOpen } from "react-icons/md";
const Shop = () => {

    return (

        <>
            <section>
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
export default Shop;