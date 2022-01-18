import React from 'react';
import { Card, Button } from 'react-bootstrap';
import image from '../../../images/banner7.png';

const Main = () => {
    return (
        <div id="home">
            <Card className="rounded-2">
                <Card.Img className="banner-img" src={image} alt="Card image" />
                <Card.ImgOverlay>
                    <div className="container-fluid">
                        <h2 className="text-white mx-4 mt-5"><i>Your Health Is Our Priority</i></h2>
                        <ul className="text-white mx-4">
                            <li><h5>24 Hour Doctor</h5></li>
                            <li><h5>Therapy</h5></li>
                            <li><h5>Cardiology</h5></li>
                            <li><h5>Pediatric</h5></li>
                            <li><h5>Stomatology</h5></li>
                            <li><h5>Neurology</h5></li>
                        </ul>
                    </div>

                    <Button className="mx-4 mt-5 px-5 py-3">Learn More »</Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Main;