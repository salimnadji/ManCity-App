import React from 'react';
import { Link } from 'react-router-dom'
import MancityLogo from '../../Resources/manchester_city_logo.png'


const icons = (props) => {
    const template =
        <div className="img_cover"
        style={{
            backgroud:`url(${MancityLogo}) no-repeat`,
            width:props.width,
            height:props.height
            
        
        }}></div>
    if (props.link) {

        return (<Link to={props.linkTo} className="link_logo">
            {template}
        </Link>)

    } else {
        return template;
    }
};

export default icons;