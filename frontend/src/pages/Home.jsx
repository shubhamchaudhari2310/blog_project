import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";

import { getAllBlogAction } from "../action/blog-action";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { reduxBlog, isLoading } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlogAction());
  }, []);
  // const getAllBlogs = async () => {
  //   const { data } = await axios.get("http://localhost:5000/api/v1/blogs");
  //   console.log(data.data);
  //   setblogs(data.data);
  // };
  // useEffect(() => {
  //   getAllBlogs();
  // }, []);
  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
          <div className="spinner spinner-border"></div>
        ) : (
          reduxBlog.map((item) => (
            <div className="col-sm-12" key={item._id}>
              <BlogCard singleBlog={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
