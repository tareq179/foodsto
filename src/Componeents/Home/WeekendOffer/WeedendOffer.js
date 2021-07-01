import React from 'react';
import './WeekendOffer.css';

function DiscountCard() {
    return (
       <section id="offer">
           <div className="offer  shadow">
               <div className="container">
                   <div className="row justify-content-center align-items-center">
                       <div className="col-sm-12">
                           <div className="text-content text-center">
                           <p className="lead my-4 fw-bold">
                                Weekend Ofeer
                            </p>
                            <h1>
                                <div className="display-3 fw-bold">
                                    Organic Foods Up To 50% off
                                </div>
                            </h1>
                            <button className="btn btn-main">Shop Now</button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section> 
    )
}

export default DiscountCard
