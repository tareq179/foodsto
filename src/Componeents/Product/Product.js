import React from 'react'
import chips from '../../images/snack-2-02.jpg';
import dish from '../../images/snack-1-01.jpg';
import bread from '../../images/breakfast-1-01-1.jpg';
import bolthouse from '../../images/Juice-snack-2-02-600x600-1.png';
import ProductCard from './ProductCard/ProductCard';

function Product() {
    const productData=[
        {
            name:'Chips',
            price:10,
            discountPrice:'',
            img:chips
        },
        {
            name:'Side Dish',
            price:10,
            discountPrice:8,
            img:dish
        },
        {
            name:'Bread Breakfast',
            price:10,
            discountPrice:8,
            img:bread
        },
        {
            name:'Bolthouse',
            price:10,
            discountPrice:8,
            img:bolthouse
        },
        {
            name:'Chips',
            price:10,
            discountPrice:'',
            img:chips
        },
        {
            name:'Side Dish',
            price:10,
            discountPrice:8,
            img:dish
        },
        {
            name:'Bread Breakfast',
            price:10,
            discountPrice:8,
            img:bread
        },
        {
            name:'Bolthouse',
            price:10,
            discountPrice:8,
            img:bolthouse
        },
    ]
    return (
        <section id="product">
            <div className="container">
                <div className="text-center">
                    <p className="text-muted lead">
                        Organically Produced
                    </p>
                    <h2 className="display-5 fw-bold">New Organic Add-ons</h2>
                </div>
                <div className="row pt-5">
                    {
                        productData.map(product=><ProductCard product={product} key={product.name}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Product
