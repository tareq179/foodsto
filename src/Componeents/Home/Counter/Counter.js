import React from 'react';
import './Counter.css';

function Counter() {

    // const counter =(id, start, end, duration)=>{
    //     let obj = counter,
    //     current = start,
    //     range = end - start,
    //     increment = end > start ? 1 : -1,
    //     step = Math.abs(Math.floor(duration /  range)),
    //     timer = setInterval(() => {
    //         current += increment;
    //         obj.textContent = current;
    //         if(current === end){
    //             clearInterval(timer);
    //         }
    //     }, step);
    // }
    // const counter("count1", 0, 1287, 3000);
    // const counter("count2", 100, 5786, 2500);
    // const counter("count3", 0, 1440, 3000);
    // const counter("count4", 0, 7110, 3000);

    return (
        <section className="counter-section">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                        <h2>
                            <span>1200</span>+
                        </h2>
                        <p>SAVINGS</p>
                    </div>
                    <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                        <h2>
                            <span>2100</span>+
                        </h2>
                        <p>PHOTOS</p>
                    </div>
                    <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                        <h2>
                            <span>501</span>+
                        </h2>
                        <p>ROCKETS</p>
                    </div>
                    <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                        <h2>
                            <span>950</span>+
                        </h2>
                        <p>GLOBES</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter
