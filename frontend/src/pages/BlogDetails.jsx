import React, { useEffect } from "react";
import { getSingleBlogAction } from "../action/blog-action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function BlogDetails({ match }) {
  const dispatch = useDispatch();
  const { reduxSingleBlog, isLoading } = useSelector(
    (state) => state.blogDetail
  );
  useEffect(() => {
    dispatch(getSingleBlogAction(match));
    console.log("\n-----match, ",match,"\n ------reduxSingleBlog", reduxSingleBlog);
  }, []);
  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
          <div className="spinner spinner-border"></div>
        ) : (
          <div>
            <div className="col-sm-6 offset-3">
              <Link className="btn btn-sm btn-danger mt-4 " to="/">
                Back
              </Link>
              <div className="border bg-info my-4 p-4">
                <h1>{reduxSingleBlog.title}</h1>
                <span className="text-muted">{reduxSingleBlog.shortDesc}</span>
                <p>{reduxSingleBlog.Desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
