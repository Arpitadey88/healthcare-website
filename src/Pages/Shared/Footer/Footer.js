import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="container-fluid pt-2 pb-0">
                <hr />
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 pb-3">
                    <div className="col border-0">
                        <h4 className="fw-bold text-warning pb-2">Services Treatments</h4>
                        <h6>COVID-19 Testing</h6>
                        <h6>Urgent Care</h6>
                        <h6>Direct Primary Care</h6>
                        <h6>TrustCare Kids</h6>
                        <h6>Allergy Testing and Treatment</h6>
                    </div>
                    <div className="col border-0">
                        <h4 className="fw-bold text-warning pb-2">ABOUT US</h4>
                        <h6>Carears</h6>
                        <h6>Insurance</h6>
                        <h6>Contact</h6>
                        <h6>Employee Portal</h6>
                        <h6>Send Inquiry</h6>
                    </div>
                    <div className="col border-0">
                        <h4 className="fw-bold text-warning pb-2">Site Information</h4>
                        <h6>Our Clinics and Centers</h6>
                        <h6>Laboratory Services</h6>
                        <h6>Food and Beverage</h6>
                        <h6>Information Request</h6>
                        <h6>Newsroom</h6>
                    </div>
                    <div className="col border-0">
                        <h5 className="text-secondary fw-bold">Sign up for medical news and updates.</h5>
                        <form className="row g-3 pt-1">
                            <div className="col-auto">
                                <input type="email" className="form-control text-secondary fw-bold border-0"
                                    id="inputPassword2" placeholder="Enter Email" aria-label="Search" />
                            </div>
                        </form>
                        <hr />
                        <div className="col">
                            <h6 className="text-warning">FOLLOW US</h6>
                            <span><i className="fab fa-facebook fs-6 text-white"></i></span>
                            <span><i className="fab fa-twitter fs-6 text-white ps-2"></i></span>
                            <span><i className="fab fa-youtube fs-6 text-white ps-2"></i></span>
                            <span><i className="fab fa-instagram fs-6 text-white ps-2"></i></span>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p><small><span className="text-secondary fw-bold">Copyright © All Rights Reserved by</span> <span
                        className="text-warning fw-bold">HealthCare Hospital</span></small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;