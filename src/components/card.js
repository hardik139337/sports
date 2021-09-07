export default function Card(props) {
    return (
        <div>
            <div className="card row">
                <div className="col-md-4">
                    <img src={props.sImage} alt="" />

                </div>
                <div className="col-md-8">
                    <h5>{props.sTitle}</h5>
                    <p> {props.sDescription}</p>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div>
                        <p>
                            Sports Info 6 months ago</p>

                        </div>
                        <div>
                            count {props.nViewCounts}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

// export default function Card(props) {
// return (
//         <div className='shadow-lg'>
//             <div className="card mb-3 d1 shadow-lg" >
//                 <div className="row g-0">
//                     <div className="col-md-4" style=
//                     {{clear:'both'}}>
//                         <img src='https://image.crictracker.com/wp-content/uploads/2020/09/AB-de-Villiers-1.jpg' className="img-fluid rounded-start" alt="..." />
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card-body">
//                             <h5 className="card-title">IPL 2021: Top 5 batsmen with highest individual scores in IPL history
//                             </h5>
//                             <p className="card-text">   In the T20 format, if a player scores a century for the team, then most of the time it becomes quite easy to win the match as well. The same is applicable in glo...</p>
//                           <div>
//                             <p className=""><small className="text-muted Lastupdated">Last updated 3 mins ago</small></p>
//                             <p className=""><small className="text-muted count">count 3 </small></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//             </div>


//         </div>
//     )
// }


