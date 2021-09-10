import { createStore, applyMiddleware, combineReducers } from "redux";

import axios from "axios";
import thunk from "redux-thunk";

export function lordBlogs(l) {
  return async (dispatch) => {
    const url = "https://backend.sports.info/api/v1/posts/recent";
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
    dispatch({ type: "ADD_BLOGS", payloard: blogs1 });
  };
}

export function lordBlogDetail(id, state) {
  if (state?.addBlogsDetail.blogdetail[id]) return 0;

  return async (dispatch) => {
    let iddata = await axios
      .get(`https://backend.sports.info/api/v1/posts/view/${id}`)
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        console.log(e);
      });

    dispatch({ type: "ADD_BLOG_DETAIL", payloard: iddata, id: id });
  };
}

function addBlogsReduser(state = { blogs: [] }, action) {
  if (action.type == "ADD_BLOGS") {
    return { blogs: state.blogs.concat(action.payloard) };
  }
  return state;
}

function addBlogsDetail(state = { blogdetail: {} }, action) {
  let newstate = { ...state };
  if (action.type == "ADD_BLOG_DETAIL") {
    newstate.blogdetail[action.id] = action.payloard;

    return newstate;
  }
  return state;
}

export const store = createStore(
  combineReducers({ addBlogsReduser, addBlogsDetail }),
  applyMiddleware(thunk)
);
