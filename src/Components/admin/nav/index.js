import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem'
import {firebase} from '../../../firebase'
const index = () => {
    const links = [
        {
            title: 'matches',
            linkto: '/admin_matches'
        },
        {
            title: 'Add Match',
            linkto: '/admin_matches/edit_match'
        },
        {
            title: 'players',
            linkto: '/admin_players'
        },
        {
            title: 'Add Player',
            linkto: '/admin_players/add_players'

        }
    ]
    const style={
        color:'#ffffff',
        fontWeight:'500',
        borderBottom:'1px solid #353535'
    }

    const renderItems = () => (

        links.map(link => (
            <Link to={link.linkto} key={link.title}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem>
            </Link>)
        ))
        const logOut=()=>{
            firebase.auth().signOut().then(()=>{
                
            },(error)=>{
                console.log("something went wrong!!")
            })
        }

    return (
        <div>
            {renderItems()}
            <ListItem button style={style} onClick={logOut}>
                Log out
            </ListItem>
        </div>
    );
};

export default index;