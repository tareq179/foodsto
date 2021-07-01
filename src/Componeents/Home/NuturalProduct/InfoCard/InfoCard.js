import React from 'react'

function InfoCard({product}) {
    return (
        <div className="col-lg-6 mb-5">
            <div className="card border-0 p-2 bg-light">
                <div className="d-flex">
                <div className="mr-3">
                <img src={product.img} alt="" className="img-fluid" style={{width:'8rem'}} />
                </div>
                <div className="fw-bold pt-2">
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
