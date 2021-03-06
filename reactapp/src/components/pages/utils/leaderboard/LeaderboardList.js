import React, { useEffect, useContext } from 'react';
import AppContext from '../../../../context/AppContext';

import LeaderboardItem from './LeaderboardItem';
import axios from 'axios';

const LeaderboardList = () => {
    //global
    const { lboard, setLboard } = useContext(AppContext);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Leaderboard').then((resp) => {
            console.log('leaderboard response is: ', resp.data);
            setLboard(resp.data);
        });
    }, [setLboard]);

    return (
        <div>
            <div>
                <div>
                    {lboard.length > 0 ? (
                        lboard.map((row) => {
                            return (
                                <LeaderboardItem
                                    key={row.id}
                                    username={row.username}
                                    pointsEarned={row.totalPointsEarned}
                                    favouriteTeam={row.profilePic}
                                />
                            );
                        })
                    ) : (
                        <p>loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeaderboardList;
