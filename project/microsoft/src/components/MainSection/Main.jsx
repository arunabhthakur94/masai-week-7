import React from 'react';
import CarouselItem from './MainItems/CarouselItem';
import Cards from './MainItems/Cards';
import cardTopItems from './MainItems/cardTopItems';
import cardBottomItems from './MainItems/cardBottomItems';

const showCardsTop = cardTopItems.map(item => <Cards key = {item.id} product = {item} />
)

const showCardsBottom = cardBottomItems.map(item => <Cards key = {item.id} product = {item} />
)

function Main(){
    return(
        <div>
            <CarouselItem url = "https://icdn2.digitaltrends.com/image/digitaltrends/microsoft-surface-pro-6-review-3-2.jpg"/>
            
            <div style={{display: "flex", marginTop: "40px", marginLeft: "30px"}}>
                {showCardsTop}
            </div>

            <CarouselItem url = "https://www.bleepstatic.com/content/hl-images/2017/02/18/Microsoft.jpg" />

            <h3 style = {{marginTop: "40px", marginLeft: "30px"}}>For work</h3>

            <div style={{display: "flex", marginTop: "40px", marginLeft: "30px"}}>
                {showCardsBottom}
            </div>

            <div style = {{color:"gray", marginTop: "50px", display: "flex"}}>
                <p style = {{marginLeft: "30px"}}>Follow Microsoft</p>
                <img src="https://image.shutterstock.com/image-photo/kiev-ukraine-april-27-2015-260nw-278925056.jpg" alt="facebook" height="30" width="40"/>
                <img src="https://qonaskamkuk.com/wp-content/uploads/2019/03/Twitter-Logo.png" alt="twitter" height="30" width="40"/>
                <img src="https://image.shutterstock.com/image-vector/red-play-vector-logo-jpg-260nw-378007771.jpg" alt="youtube" height="30" width="40"/>
            </div>
        </div>
    );
}

export default Main;