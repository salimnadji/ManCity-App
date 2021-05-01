import React from 'react';
import Blocks from './blocks'
import { Tag } from '../../Components/UI/misc'
const Matches = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">

                <Tag
                    bck="#0e1731"
                    size="50px"
                    color="#ffffff"
                    >

                    Matches

                </Tag>

                <br></br>
                <Blocks />
                <br/>


                <Tag
                    bck="#ffffff"
                    size="22px"
                    color="#0e1731"
                    link={true}
                    linkTo="/the_team">

                    See more matches

                </Tag>
            </div>

        </div>
    );
};

export default Matches;