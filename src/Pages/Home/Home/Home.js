import React from 'react';
import BookAppointment from '../../BookAppointment/BookAppointment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <BookAppointment></BookAppointment>
        </div>
    );
};

export default Home;