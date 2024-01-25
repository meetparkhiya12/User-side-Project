import { useEffect } from "react";
import { MdOutlineLockOpen } from "react-icons/md";
import { TfiPackage, TfiReload } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { dataGet } from "../../../Service/Action/product.action";

const WatchShop = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.ProductReducer);

    useEffect(() => {
        dispatch(dataGet());
    }, [dispatch]);
    return (
        <>

            <div className="about-slider  d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-cap text-center">
                                <h2 style={{ fontSize: "70px", fontWeight: "700", color: "#0b1c39" }}>Watch Shop</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-100">
                <div className="container">
                    <div className="row">
                        {products.map((pro) => (
                            <div key={pro.id} className="col-md-3 mb-4">
                                <div className="card border-none">
                                    <a href="#" className="products-img mb-4">
                                        <img src={pro.image} alt={pro.Product_name} className="img-fluid" />
                                    </a>
                                    <div className="text-center">
                                        <h5 className="mb-2" style={{ fontSize: "14px", fontWeight: "600" }}>{pro.Product_name}</h5>
                                        <h3 className="mb-3 fs-5 pe-2">Rating: {pro.rating}</h3>
                                        <div className="price-tag d-flex justify-content-center">
                                            <h3 className="fs-5 m-0 pe-2">Price:</h3>
                                            <span className="fw-bold">₹{pro.price}</span>
                                        </div>
                                    </div>
                                    <div className="cart-button text-center mt-3">
                                        <button className="btn btn-primary mb-3" >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WatchShop;
