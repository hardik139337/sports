
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

import Card from './card';

export default function Home() {


    const [blogs, setblogs] = useState([])

    useEffect(() => {
        const url = 'https://backend.sports.info/api/v1/posts/recent'
        const data = { "nStart": 0, "nLimit": 5, "eSort": "Latest", "bRemoveBannerPosts": true }
        axios.post(url, data).then(
            (res) => {

                //   console.log(res.data.data);
                setblogs(res.data.data)
            })


    }, [])

    return (
        <div>


            <div className="row">
                <div className="col-md-1"></div>


                <div className="col-md-7">

                    {
                        blogs.map((data) => {

                            return <Link to={"/detail/" + data._id} ><Card  {...data} /></Link>
                        })

                    }

                    <button className='btn' onClick={() => {

                        const url = 'https://backend.sports.info/api/v1/posts/recent'
                        const data = { "nStart": blogs.length, "nLimit": 5, "eSort": "Latest", "bRemoveBannerPosts": true }
                        axios.post(url, data).then(
                            (res) => {

                                //   console.log(res.data.data);
                                setblogs([...blogs, ...res.data.data])
                            })
                    }}>loard more</button>
                </div>

                <div className="row-md-3"></div>

            </div>
        </div>
    )
}
