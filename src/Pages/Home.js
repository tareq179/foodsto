import React from 'react'
import Navbar from '../Componeents/Home/Navbar/Navbar';
import Banner from '../Componeents/Home/Banner/Banner';
import Counter from '../Componeents/Home/Counter/Counter';
import Card from '../Componeents/Home/Card/card';
import Product from '../Componeents/Product/Product';
import Booking from '../Componeents/Home/Booking/Booking';
import NuturalProduct from '../Componeents/Home/NuturalProduct/NuturalProduct';
import WeekendOffer from '../Componeents/Home/WeekendOffer/WeedendOffer';
import Testimonial from '../Componeents/Home/Testimonial/Testimonial';
import Blog from '../Componeents/Home/Blog/Blog';
import Footer from '../Componeents/Home/Footer/Footer';

function Home() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Counter/>
            <Card/>
            <Product/>
            <Booking/>
            <NuturalProduct/>
            <WeekendOffer/>
            <Testimonial/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default Home
