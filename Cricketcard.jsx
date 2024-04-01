import React from 'react'

function Cricketcard({matchType, status,dateTimeGMT,t1,t2,t1s,t2s,t1img,t2img,cricketObj, addFavorite}) {
  return (
    <div>
         <div className="cardog" style={{width: "27rem",height:"400px",marginBottom:"20px"}}>
        <div className="teams" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div className="t1" style={{height:"80px",width:"80px",borderRadius:"50px",margin:"30px"}}>
             <img src={t1img} alt="t1" className="te1" style={{height:"75px",width:"75px",borderRadius:"50px",border:"2px solid white"}} />
             </div>
          <h5>Vs</h5>
          <div className="t2" style={{height:"80px",width:"80px",borderRadius:"50px",margin:"30px"}}>
          <img src={t2img} alt="t2"  style={{height:"75px",width:"75px",borderRadius:"50px",border:"2px solid white"}} className="te2" />
          </div> 
        </div>
        <div className="score" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <p className="t1score" style={{marginRight:"60px"}}>{t1s}</p>
          <p className="t2score" style={{marginLeft:"60px"}}>{t2s}</p>
        </div>
        <div className="name" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <p className="t1name" style={{marginRight:"10px"}}>{t1}</p>
        <h6>VS</h6>
        <p className="t2name" style={{marginLeft:"10px"}}>{t2}</p>
        </div>
  <div className="card-body">

    <p className="favorite" style={{cursor:"pointer"}} onClick={()=>addFavorite(cricketObj)}>&#128150;</p>
    <p className="card-text">Format : {matchType}</p>
    <p className="card-text">Result : {status}</p>
    <p className="card-text">Date And Time : {dateTimeGMT}</p>
  </div>
</div>
    </div>
  )
}

export default Cricketcard