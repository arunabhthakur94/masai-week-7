import React from 'react';

function Lists(props){
    //console.log(props);
    return(
        <div>
            <h5 style = {{marginLeft: "40px"}}>{props.data.heading}</h5>
            <ul style = {{listStyleType: "none"}}>
                <li>{props.data.data1}</li>
                <li>{props.data.data2}</li>
                <li>{props.data.data3}</li>
                <li>{props.data.data4}</li>
            </ul>
        </div>
    );
}

export default Lists;