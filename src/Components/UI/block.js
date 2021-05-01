import React from 'react';

const block = (match) => {
    return (
        <div className="match_block">
            <div className="match_date">
                {match.match.date}
            </div>
            <div className="match_wrapper">
                <div className="match_top">
                    <div className="left">
                        <div className="icon" style={{
                            background: `url(/images/team_icons/${match.match.localThmb}.png)`
                        }}>
                            <div className="team_name" style={{
                                transform: `translate(70px)`
                            }}>
                                {match.match.local}
                            </div>

                        </div>

                    </div>
                    <div className="right">
                        {match.match.final ? match.match.resultLocal : '-'}
                    </div>
                </div>
                <div className="match_bottom">
                    <div className="left">
                        <div className="icon" style={{
                            background: `url(/images/team_icons/${match.match.awayThmb}.png)`
                        }}>
                            <div className="team_name" style={{
                                transform: `translate(70px)`
                            }}>
                                {match.match.away}
                            </div>

                        </div>

                    </div>
                    <div className="right">
                        {match.match.final ? match.match.resultAway : '-'}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default block;