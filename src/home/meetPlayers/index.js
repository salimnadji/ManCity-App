import React, { Component } from 'react';
import StripesImg from '../../Resources/images/stripes.png';
import { Tag } from '../../Components/UI/misc'
import Reveal from 'react-reveal/Reveal'
import HomeCards from './cards'
class MeetPlayers extends Component {

    state = {
            show:false
    }
    
    render() {
        
        return (
            <Reveal fraction={0.8} 
               onReveal={()=>{
                this.setState({
                    show:true
                })
            }}
                >
                <div className="home_meetplayers" style={{
                    background: `#ffffff url(${StripesImg})`
                }}>
                    <div className="container">

                        <div className="home_meetplayers_wrapper" >

                            <div className="home_card_wrapper">
                                <HomeCards show={this.state.show} wait={2000}/>
                         </div>
                            <div className="home_text_wrapper">
                                <div>
                                    <Tag
                                        bck='#0e1731'
                                        size="100px"
                                        color="#ffffff"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px'
                                        }}>
                                        Meet
                                 </Tag>
                                </div>
                                <br />
                                <div>
                                    <Tag
                                        bck='#0e1731'
                                        size="100px"
                                        color="#ffffff"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px'
                                        }}>
                                        THE
                                 </Tag>
                                </div><br />
                                <div>
                                    <Tag
                                        bck='#0e1731'
                                        size="100px"
                                        color="#ffffff"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px'
                                        }}>
                                        PLAYERS
                                 </Tag>
                                </div>
                                <br />
                                <div>
                                    <Tag bck='#ffffff' size="30px" color="0e1731" link={true} linkTo='/the_team' add={{
                                        display: 'inline-block',
                                        marginBottom: '27px',
                                        border: '1px solid #0e1731'
                                    }}>
                                        meet now
                                </Tag>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Reveal>

        );
    }
}

export default MeetPlayers;