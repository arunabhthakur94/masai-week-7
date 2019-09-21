import React from 'react';
import './HeaderStyle.css';

function TopLinks(){
    return(
        <div style = {{display : "flex"}}>
            <img src = "https://inteng-storage.s3.amazonaws.com/images/APRIL/sizes/Microsoft_logo_44_resize_md.jpg" alt = "Microsoft Logo" height = "50" width = "150" />
            <p className = "Links">Office</p>
            <p className = "Links">Windows</p>
            <p className = "Links">Surface</p>
            <p className = "Links">Xbox</p>
            <p className = "Links">Support</p>

            <p className = "Microsoft Links">All Microsoft</p>
            <img className = "Links" src = "https://visualpharm.com/assets/717/Search-595b40b65ba036ed117d23c8.svg" alt = "Search Logo" height = "30" width = "30"/>
            <img className = "Links" src = "https://visualpharm.com/assets/845/Shopping%20Cart-595b40b85ba036ed117dc464.svg" alt = "Cart" height = "30" width = "30"/>
            <img className = "Links" src = "https://png.pngtree.com/svg/20160808/login_user_117687.png" alt = "Login" height = "30" width = "30"/>
        </div>
    );
}

export default TopLinks;