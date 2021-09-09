import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lordBlogDetail } from "./redux";

export default function Detail() {
  let { id } = useParams();

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(lordBlogDetail(id));
  }, []);

  let state = useSelector((store) => {
    let temp = store.addBlogsDetail.blogdetail[id];
    return temp;
  });

  return state ? (
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
              <div
                dangerouslySetInnerHTML={{
                  __html: state.sDescription,
                }}
              />
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
}
