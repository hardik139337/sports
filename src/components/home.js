import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "./card";
import { lordBlogs } from "./redux";

export default function Home() {
  const rblogs = useSelector((state) => {
    return state.addBlogsReduser.blogs;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(lordBlogs(rblogs.length));
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
              dispatch(lordBlogs(rblogs.length));
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