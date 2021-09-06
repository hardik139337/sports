
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

// import './App.css';
import Card from './card';
// import Header from './components/header'
// import Detail from './components/detail'
// import Home from './components/home';

export default function Home() {


    const [state, setstate] = useState(5)
    useEffect(() => {
        //  const url = 'https://backend.sports.info/api/v1/posts/recent'
        //  const data = { "nStart": 0, "nLimit": 1, "eSort": "Latest", "bRemoveBannerPosts": true }
        //   axios.post(url, data, { headers: { 'Content-Type': 'application/json' } }).then(
        //     (res) => {
        //       setstate(res.data);
        //       console.log(res.data);
        //     })

        fetch('https://backend.sports.info/api/v1/posts/recent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: { "nStart": 0, "nLimit": 1, "eSort": "Latest", "bRemoveBannerPosts": true }
        }).then(
            (res) => { return res.json() }).then(
                (data) => { console.log(data) }
            )

        // console.log(data)
        // setstate(data)

    }, [])

    return (
        <div>




            {/* <Header></Header> */}
            {Array(state).fill("").map((a) => { return <Link to="/detail"><Card /></Link> })

            }

            <button className='btn' onClick={() => { setstate(state + 5) }}>loard more</button>
        </div>
    )
}
