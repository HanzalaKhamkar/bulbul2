function Index() {
    return (
        <>

            <div className="hero_area">
                <header className="header_section">
                    <div className="header_top">
                        <div className="container-fluid">
                            <div className="contact_nav">
                                <a href="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Call : +01 123455678990
                                    </span>
                                </a>
                                <a href="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        Email : demo@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header_bottom">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <a className="navbar-brand" href="index.html">
                                    <span>
                                        Inance
                                    </span>
                                </a>

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className=""> </span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.html"> About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="service.html">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                <section className="slider_section ">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="detail-box">
                                    <h1>
                                        Repair and <br />
                                        Maintenance <br />
                                        Services
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
                                    </p>
                                    <a href="">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src="ASSETS/images/slider-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

           
        </>
    );
}

export default Index;