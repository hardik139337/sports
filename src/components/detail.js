import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Detail(props) {


    let { id } = useParams()
    const [state, setstate] = useState({})
    useEffect(() => {


        axios.get(`https://backend.sports.info/api/v1/posts/view/${id}`).then((res) => {
            console.log(res.data.data.sTitle)
            setstate(res.data.data)
        })


    }, [])

    return (
        <div>

            <div className='detailfistsection' style={{ backgroundImage: `url("${state.sImage}")`, backgroundSize: 'cover' }}>


                <div className='banner-inner'>

                    <div>
                        <h1>{state.sTitle}</h1>
                    </div>
                    {/* <br />
                <div className="information">
                    <p>SPORTS INFO 6 months ago</p>
                    <p>
                        790</p>
                </div> */}

                </div>


                {/* </div> */}



            </div>
            <div className="blog-content">


                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-7">
                        <div style={{ padding: '30px' }}>
                            <div dangerouslySetInnerHTML={{ __html: state.sDescription }} />
                        </div>
                    </div>
                    <div class="col-sm-3"></div>
                </div>



            </div>

        </div>)
}
