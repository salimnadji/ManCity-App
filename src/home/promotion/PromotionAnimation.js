import React from 'react';
import Zoom from 'react-reveal/Zoom'
import jersyImg from '../../Resources/images/jersey.jpg'

const PromotionAnimation = () => {
    return (
        <div className="promotion_animation">
            <div className="left">
                <Zoom>
                    <div>
                        <span>Win a</span>
                        <span>jersey</span>
                    </div>
                </Zoom>
            </div>
            <div className="right" >
                <Zoom>
                    <div style={{
                        background:`url(${jersyImg})`
                    }}></div>
                </Zoom>
            </div>
        </div>
    );
};

export default PromotionAnimation;