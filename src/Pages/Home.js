import React from 'react'
import Navbar from '../Componeents/Home/Navbar/Navbar';
import Banner from '../Componeents/Home/Banner/Banner';
import Counter from '../Componeents/Home/Counter/Counter';
import Card from '../Componeents/Home/Card/card';
import Product from '../Componeents/Product/Product';
import Booking from '../Componeents/Home/Booking/Booking';

function Home() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Counter/>
            <Card/>
            <Product/>
            <Booking/>
        </div>
    )
}

export default Home
