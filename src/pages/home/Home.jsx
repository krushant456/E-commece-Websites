import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'

import HeroSection from '../../components/heroSection/HeroSection'
import FIlter from '../../filter/FIlter'
import ProductCard from '../../productCard/ProductCard'
import Track from '../../track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useSelector } from 'react-redux'


const Home = () => {

    const cartItem = useSelector((state) => state.cart)
    console.log(cartItem)

    return (
        <Layout>

            <HeroSection />
            <FIlter />
            <ProductCard />
            <Track />
            <Testimonial />
            <></>
        </Layout>
    )
}

export default Home