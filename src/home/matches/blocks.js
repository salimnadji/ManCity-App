import React, { Component } from 'react';
import { firebaseMatches } from '../../firebase'
import { firebaseLooper, reversArray } from '../../Components/UI/misc'
import Block from '../../Components/UI/block'
import Slide from 'react-reveal';
class blocks extends Component {
    state = {
        matches: []
    }

    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
            const looper = firebaseLooper(snapshot);
            this.setState({
                matches: reversArray(looper)
            })

        })
        
    }

    showMatches = (matches) => (
        matches ?

            matches.map((match) => (
                <Slide bottom key={match.id}>

                    <div className="item">

                        <div className="wrapper">

                            <Block match={match} />

                        </div>

                    </div>
                </Slide>

            ))



            : null

    )


    render() {
        
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default blocks;