import React from 'react';
import img1 from '../../images/dctr1.jpg';
import img2 from '../../images/dctr3.jpg';
import img3 from '../../images/dctr2.jpg';
import img4 from '../../images/dctr4.jpg';
import img5 from '../../images/dctr5.jpg';
import img6 from '../../images/dctr9.jpg';
const Facility = () => {
    return (
        <div className="border">
            <h1 style={{ color: 'crimson' }}>Our Team Members</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4 m-3">
                <div class="col">
                    <div class="card">
                        <img style={{ height: '400px' }} src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr Lisa Bella</h5>
                            <p class="card-text">NEUROSERGEON</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{ height: '400px' }} src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr Smriti Adam</h5>
                            <p class="card-text">CONSULTANT ONCHOLOGIST</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{ height: '400px' }} src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr John Samuel</h5>
                            <p class="card-text">CONSULTANT GYNAECOLOGIST</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{ height: '400px' }} src={img4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr Michel Sam</h5>
                            <p class="card-text">ORTHOPEDIC SERGEON</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{ height: '400px' }} src={img6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr David Rohn</h5>
                            <p class="card-text">DIRECTOR OF NURSING SERVICES</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{ height: '400px' }} src={img5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr Jimmy Toppel</h5>
                            <p class="card-text">FERTILITY SPECIALIST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facility;