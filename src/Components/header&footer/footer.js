import React from 'react';
import Icon from '../UI/icons'

const footer = () => {
    return (
        <footer className="bck_blue">

            <div className="footer_logo">
                <Icon 
                    width="70px"
                    height="70px"
                    link={true} 
                    linkTo="/"/>

                
            </div>

         <div className="footer_discl">
             
             Manchester City 2021  ! All rights reserved

         </div>
            
        </footer>
    );
};

export default footer;