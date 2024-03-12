import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ singleBlog }) {
  console.log("\nshu----singleBlog",singleBlog);
  return (
    <div>
      <div className="border bg-info mt-3 p-4 d-flex justify-content-between align-items-center">
        <div>
          <h2>{singleBlog.title}</h2>
          <p className="text-muted">{singleBlog.shortDesc}</p>
        </div>
        <Link
          to={`/blog-details/${singleBlog._id}`}
          className="btn btn-dark btn-sm"
        >
          Show Detail
        </Link>
      </div>
    </div>
  );
}
