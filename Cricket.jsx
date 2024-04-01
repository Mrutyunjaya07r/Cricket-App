import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cricketcard from './Cricketcard';

function Cricket({addFavorite}) {
    const [cricket,setCricket]=useState([]);
    useEffect(()=>{
        axios.get(`https://api.cricapi.com/v1/cricScore?apikey=36b5df1f-f33b-4c7c-b580-60aaf34160ae&offset=0`).then(function(res){
            console.log(res.data.data);
            setCricket(res.data.data);
        })
    },[])
  return (
    <div className="container my-4">
        <h1 style={{textAlign:"center"}}>Cricket Matches</h1>
        <div className="row">
        {cricket.map((cricketObj) => {
            return <div className='col-md-5'>
              <Cricketcard key={cricketObj.id} cricketObj={cricketObj} matchType={cricketObj.matchType} t1s={cricketObj.t1s} t2s={cricketObj.t2s} status={cricketObj.status} dateTimeGMT={cricketObj.dateTimeGMT} t1={cricketObj.t1} t2={cricketObj.t2} t1img={cricketObj.t1img} t2img={cricketObj.t2img} addFavorite={addFavorite}/>
            </div>
})}
        </div>
        

       
       
    </div>
  )
}

export default Cricket

// return  <div className="cards1">
//<Cricketcard league_name={cricketObj.league_name} result={cricketObj.event_status_info} event_date_start={cricketObj.event_date_start} />
//https://apiv2.api-cricket.com/cricket/?method=get_H2H&APIkey=0c954dc15fe79a34bf10690989f90f4b5f7c336427221d13cb6e9d821c107d2e&first_team_key=30&second_team_key=5