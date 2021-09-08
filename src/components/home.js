import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "./card";

function loardblogs(l) {
  return async (dispatch) => {
    const url = "https://backend.sports.info/api/v1/posts/recent";
    // console.log(l);
    const data = {
      nStart: l,
      nLimit: 5,
      eSort: "Latest",
      bRemoveBannerPosts: true,
    };

    let blogs1 = await axios
      .post(url, data)
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
    // console.log(blogs1);
    dispatch({ type: "ADD_BLOGS", payloard: blogs1 });
  };
}

export default function Home() {
  // const [blogs, setblogs] = useState([]);
  const rblogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loardblogs(rblogs.length));
    // setblogs(rblogs);
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-7">
          {rblogs.map((data) => {
            return (
              <Link key={data._id} to={"/detail/" + data._id}>
                <Card {...data} />
              </Link>
            );
          })}
          <button
            className="btn"
            onClick={() => {
              dispatch(loardblogs(rblogs.length));
              // setblogs(rblogs);
            }}
          >
            loard more
          </button>
        </div>
        <div className="row-sm-3"></div>
      </div>
    </div>
  );
}
