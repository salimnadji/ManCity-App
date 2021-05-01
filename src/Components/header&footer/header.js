import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Icons from '../UI/icons'

const header = () => {
    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: '#98c5e9',
                boxShadow: 'none',
                padding: '10px 0',
                borderBottom: '2px solid #00285e'

            }}>
            <Toolbar style={{ display: 'flex' }}>
                <div style={{flexGrow:1}}>
                    <div className="header_logo">
                        <Icons link={true}
                            linkTo="/"
                            width="70px"
                            height="70px"></Icons>
                    </div>


                    <div  style={{
                        right:'100%',
                        display:'flex'
                    }}>
                        <Link to="/the_team">
                            <Button color="inherit"> The Team</Button>
                        </Link>

                        <Link to="/matches">
                            <Button color="inherit">Matches</Button>
                        </Link>
                    </div>
                </div>

            </Toolbar>


        </AppBar>
    );
};

export default header;