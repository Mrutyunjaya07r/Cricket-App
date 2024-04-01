import React from 'react'

function Favoritematch({favmatch}) {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Favorite Matches</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Format</th>
            <th>Teams</th>
            <th>Score</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
           {favmatch.map((cricketObj)=>{
            return <tr>
              <td>{cricketObj.matchType}</td>
              <td style={{display:"flex"}}>
                <p className="t1" style={{margin:"5px"}}>{cricketObj.t1}</p>
                <p style={{margin:"5px"}}>VS</p>
                <p className="t2" style={{margin:"5px"}}>{cricketObj.t2}</p>
              </td>
              <td>
                <p className="sc1">{cricketObj.t1s}</p>
                <p className="sc2">{cricketObj.t2s}</p>
              </td>
              <td>{cricketObj.status}</td>
            </tr>

           })}
        </tbody>
      </table>
    </div>
  )
}

export default Favoritematch