import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { TfiTablet } from "react-icons/tfi";

const ContactUs = () => {

    return (

        <>
            <section>   
                <div className="about-slider  d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-cap text-center">
                                    <h2 style={{ fontSize: "70px", fontWeight: "700", color: "#0b1c39" }}>Contacts</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-session py-100">
                    <div className="container">
                        <div className="mb-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988756716!2d-0.26640578112070873!3d51.528739804788714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1698207939820!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Get in Touch</h2>
                            </div>
                            <div className="col-8">
                                <form className="form-contact contact_form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control w-100"
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    rows="9"
                                                    placeholder="Enter Message"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control valid"
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control valid"
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    type="text"
                                                    placeholder="Enter Subject"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-3">
                                <div className="media-info d-flex justify-content-end mb-4">
                                    <span className="contact-info">
                                        <GrHomeRounded />
                                    </span>
                                    <div className="media-body">
                                        <h3>Buttonwood, California.</h3>
                                        <p>Rosemead, CA 91770</p>
                                    </div>
                                </div>
                                <div className="media-info d-flex justify-content-end mb-4">
                                    <span className="contact-info">
                                        <TfiTablet />
                                    </span>
                                    <div className="media-body">
                                        <h3>+1 253 565 2365</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="media-info d-flex justify-content-end mb-4">
                                    <span className="contact-info">
                                        <MdOutlineEmail />
                                    </span>
                                    <div className="media-body">
                                        <h3>support@colorlib.com</h3>
                                        <p>Send us your anytime!</p>
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
export default ContactUs