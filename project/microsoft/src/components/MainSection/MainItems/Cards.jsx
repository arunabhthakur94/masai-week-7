import React from 'react';

function Cards(props) {
   // console.log(props);
    return(
        <div style = {{marginRight: "50px"}}>
            <div className="card" style={{width: "18rem"}}>
            <img src={props.product.url} className="card-img-top" alt="Images"/>
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <a href="#" className="btn btn-primary">{props.product.click}</a>
            </div>
            </div>
        </div>
    );
}

export default Cards;