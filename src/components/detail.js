import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Detail() {
  const [state, setstate] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://backend.sports.info/api/v1/posts/view/${id}`)
      .then((res) => {
        setstate(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div
        className="detailfistsection"
        style={{
          backgroundImage: `url("${state.sImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner-inner">
          <h1>{state.sTitle}</h1>
        </div>
      </div>
      <div className="blog-content">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-7">
            <div style={{ padding: "30px" }}>
              <div dangerouslySetInnerHTML={{ __html: state.sDescription }} />
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  );
}
