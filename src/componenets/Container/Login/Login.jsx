const Login = () => {

    return (

        <>
            <section>
                <div className="about-slider d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-cap text-center">
                                    <h2 style={{ fontSize: "70px", fontWeight: "700", color: "#0b1c39" }}>Login</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="login-part py-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="login-part text-center">
                                    <div className="login-inner">
                                        <h2>New to our Shop?</h2>
                                        <p>There are advances being made in science and technology
                                            everyday, and a good example of this is the</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint tempora alias fugiat eos, quae corrupti reprehenderit dolorum quasi tenetur!</p>
                                        <a href="#" className="btn_3">Create an Account</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="login-part-form">
                                    <div className="login-part-inner">
                                        <h3>Welcome Back ! <br />
                                            Please Sign in now</h3>
                                        <form action="#" method="post" className="row">
                                            <div className="col-md-12 form-group p_star">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Username"
                                                />
                                            </div>
                                            <div className="col-md-12 form-group p_star">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="creat_account d-flex align-items-center">
                                                <input type="checkbox" id="f-option" name="selector" />
                                                <label htmlFor="f-option" style={{ marginLeft: "10px" }}>Remember me</label>
                                            </div>
                                            <button type="submit" value="submit" className="btn_3">
                                                log in
                                            </button>
                                            <a className="lost_pass" href="#">forget password?</a>
                                        </form>
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
export default Login;