import React from 'react';
import './FooterStyles.css';
import listData from './listData';
import Lists from './Lists';

const showList = listData.map(item => <Lists key = {item.id} data = {item} />)


function Footer(){
    return(
        <div className = "footerHead">
            <div style= {{margin: "50px", display: "flex"}}>
                {showList}
            </div>
            <div style = {{display: "flex"}}>
                <img style = {{margin: "10px 10px 10px 50px"}} src = "https://image.flaticon.com/icons/svg/44/44386.svg" alt = "Globe" height = "20" width = "20"/>
                <p>English (India)</p>
                <p style = {{marginLeft: "220px"}}>Contact Microsoft</p>
                <p style = {{marginLeft: "30px"}}>Privacy & Cookies</p>
                <p style = {{marginLeft: "30px"}}>Terms of use</p>
                <p style = {{marginLeft: "30px"}}>Trademarks</p>
                <p style = {{marginLeft: "30px"}}>About our ads</p>
                <p style = {{marginLeft: "30px"}}>&copy; Microsoft 2019</p>
            </div>
        </div>
    );
}

export default Footer;