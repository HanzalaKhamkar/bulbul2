import React from "react";

function Contact() {
    return (
        <>
       <section className="contact_section layout_padding">
                    <div className="container">
                        <div className="heading_container">
                            <h2>
                                Contact Us
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form action="">
                                    <div>
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" />
                                    </div>
                                    <div className="d-flex ">
                                        <button>
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="map_container">
                                    <div className="map">
                                    <div id="myMap" style={{ width: '100%', height: '100%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
        </>
    );
}

export default Contact;