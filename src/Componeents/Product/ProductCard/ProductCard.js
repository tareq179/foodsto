import React from 'react';

function ProductCard({product}) {
    console.log('all product', product);
    return (
        <div className="col-lg-3 mb-5">
            <div className="card border-0 p-2 bg-light">
                <img src={product.img} alt="" className="img-fluid" />
                <div className="pt-3">
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <button className="my-2 btn btn-main">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
