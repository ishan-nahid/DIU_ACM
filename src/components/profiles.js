import React from 'react'

export default function profiles({ Leaderboard, period}) {

    const id = period;

    //sort by year
    if(id === '1'){
        Leaderboard.sort((a,b) =>{
            return a.year - b.year;
        })
    }

    //sort by rank
    if(id === '2'){
        Leaderboard.sort((a,b) => {
            return a.position - b.position; 
        })
    }

       //sort by year
    if(id === '3'){
        Leaderboard.sort((a,b) => {
            if (a.team_name < b.team_name) {
                return -1;
              }
              if (a.team_name > b.team_name) {
                return 1;
              }
              return 0;
        })
    }


  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}



function Item(data){
    return (

        <> 
            <div className='titles'>
                            <h4>Name & Address</h4>
                            <div className='year_rank'>
                                <h4>Year</h4>
                                <h4 className='rank_title'>Rank</h4>
                            </div>
            </div>
            <div className='table'>
                {
                    data.map((value, index) => (
                        <div className="flex" key={index}>
                            <div className="info">
                                    <h3 className='name text-dark'>{value.team_name}</h3>    
                                    <span>{value.team_member}</span>
                                </div> 
                            <div className="item">
                                <span>{value.year}</span>
                            </div>

                            <div className="item rank_padding">
                                <span>{value.position}</span>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </>

        
    )
}