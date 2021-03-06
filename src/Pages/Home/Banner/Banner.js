import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';

const Banner = () => {
    return (
        <div>

            <div id="banner" className="card my-3 rounded-2">
                <div className="row g-0">
                    <div className="col-md-6">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100" style={{ height: '400px' }}
                                    src={banner1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h2 className="fw-bold" style={{ color: 'crimson' }}>Making a Medical Decission??</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100" style={{ height: '400px' }}
                                    src={banner2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h2 className="fw-bold" style={{ color: 'crimson' }}>Find Important Inforamtion So You Can be Prepared!</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100" style={{ height: '400px' }}
                                    src={banner3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h2 className="fw-bold" style={{ color: 'crimson' }}>Let Us Help You Plan Your Visit!!</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-6" style={{ backgroundColor: 'azure' }}>
                        <div className="text-center mx-5 mt-5">
                            <h2 className="card-title fw-bold" style={{ color: 'crimson' }}>Our Vision</h2>
                            <h5 className="card-text pt-2" style={{ color: 'midnightBlue' }}>HealthCare Hospital is a nonprofit, multi-specialty academic medical center combining world class clinical care with an outstanding patient experience. We strive to be a leader of healthcare innovation that delivers the highest quality care while providing exceptional patient experiences in a modern and inviting environment. Our guiding principle is putting the patient???s needs first in every aspect of care and we are working harder every day to achieve that goal.</h5>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;