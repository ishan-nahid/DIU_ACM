import React, { useState } from 'react'
import Profiles from './profiles'
import { Leaderboard } from './database'
 
export default function Board() {

    const [period, setPeriod] = useState(0);

    const handleClick = (e) => {
        setPeriod(e.target.dataset.id)
    }


    return(
        <div className='board'>
            <h1 className='leaderboard'>Hall of Fame</h1>
            <h2 className='leaderboard'>DIU ACM Task Force</h2>
            <h3 className='leaderboard'>ACM ICPC Dhaka Regional Contest</h3>

            <div className='duration'>
                <button onClick={handleClick} data-id='1'>Sort By Year</button>
                <button onClick={handleClick} data-id='2'>Sort By Rank</button>
                <button onClick={handleClick} data-id='3'>Sort By Name</button>
            </div>
            <Profiles 
                Leaderboard={Leaderboard} 
                period = {period} 
            />

            
        </div>
    )
}






