import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, title, description, image } = service;
    return (
        <div style={{ height: '400px' }} className="col px-2">
            <Card className="p-2" style={{ backgroundColor: 'azure' }}>
                <Card.Img className="border border-2" style={{ height: '170px' }} variant="top" src={image} />
                <Card.Body>
                    <h4 style={{ color: 'chocolate' }}>{title}</h4>
                    <p style={{ color: 'slategrey' }}>{description}</p>
                    <Link to={`/details/${id}`}><Button variant="primary"> About {title}</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;