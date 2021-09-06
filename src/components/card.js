import React, { useEffect, useState } from 'react'

export default function Card(props) {
return (
        <div>
            <div className="card mb-3 d1 " >
                <div className="row g-0">
                    <div className="col-md-4" style=
                    {{clear:'both'}}>
                        <img src='https://image.crictracker.com/wp-content/uploads/2020/09/AB-de-Villiers-1.jpg' className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">IPL 2021: Top 5 batsmen with highest individual scores in IPL history
                            </h5>
                            <p className="card-text">IPL 2021: Top 5 batsmen with highest individual scores in IPL history</p>
                            <p className="card-text"><small className="text-muted Lastupdated">Last updated 3 mins ago</small></p>
                            <p className="card-text"><small className="text-muted count">count 3 </small></p>
                        </div>
                    </div>
                </div>



            </div>


        </div>
    )
}



