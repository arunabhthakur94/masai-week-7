import React from 'react';

function CarouselItem(props){
    return(
        <div>
            {/* <div>
                <h3>Surface Pro 6</h3>
                <p>Stand out from the ordinary</p>
                <button type="button" class="btn btn-dark">SHOP NOW ></button>
            </div> */}

            <div id="carouselExampleControls" className="carousel slide" data-ride = "carousel">
                <div className = "carousel-inner">
                    <div className = "carousel-item active">
                        <img src = {props.url} className = "d-block w-100" alt="Slide1" height="500" />
                    </div>
                    {/* <div className="carousel-item">
                        <img src="https://www.bleepstatic.com/content/hl-images/2017/02/18/Microsoft.jpg" className="d-block w-100" alt="Slide2" height="500"/>
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default CarouselItem;