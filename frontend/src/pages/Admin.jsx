import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllBlogAction,
  deleteBlogAction,
  updateBlogAction,
} from "../action/blog-action";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState(" ");
  const [Desc, setDesc] = useState(" ");
  const [result, setResult] = useState(false);

  // For Update Model Window
  const [mTitle, setmTitle] = useState("jhsdaah");
  const [mShortDesc, setmShortDesc] = useState(" ");
  const [mDesc, setmDesc] = useState("");
  // console.log(mTitle);

  const [updateId, setupdateId] = useState();

  // const [toggle, settoggle] = useState(false)

  // const [deleteBlog, setdeleteBlog] = useState("")

  let deleteId;

  // Read Blogs From Redux Start

  const { reduxBlog, isLoading } = useSelector((state) => state.blog);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogAction());
    // settoggle(pre => !pre)
    // toggle()
  }, []);
  // Read  Blogs From Redux End

  const handleAddToBlog = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:5000/api/v1/blogs", {
      title,
      shortDesc,
      Desc,
    });
    await setResult(data.success);
    // settoggle(pre => !pre)
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();

    console.log("heloooo");
    await dispatch(
      updateBlogAction(updateId, {
        title: mTitle,
        shortDesc: mShortDesc,
        Desc: mDesc,
      })
    );

    console.log(mTitle, mShortDesc, mDesc);
    console.log(title, shortDesc, Desc);
    await dispatch(getAllBlogAction());
    // settoggle(pre => !pre)
  };

  const handleUpdateModal = (id) => {
    // e.preventDefault()
    setupdateId(id);

    console.log(updateId);
    const res = reduxBlog.filter((x) => x._id == id);

    setmTitle(res[0].title);
    setmShortDesc(res[0].shortDesc);
    setmDesc(res[0].Desc);
    // settoggle(pre => !pre)
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="card">
              <div className="card-header">Add Blog</div>
              <div className="card-body">
                {result && (
                  <div className="alert alert-success">Blog Added</div>
                )}
                <form onSubmit={handleAddToBlog}>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                  <br />
                  <input
                    value={shortDesc}
                    onChange={(e) => setShortDesc(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                  <br />
                  <input
                    value={Desc}
                    onChange={(e) => setDesc(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                  <br />
                  <button className="btn btn-success btn-lg w-100">
                    Add Blog
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* SHOW ALL BLOG START */}

        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            {isLoading ? (
              <div className="spinner spinner-border"></div>
            ) : (
              <div className="table mt-5">
                <table className="table table-responsive table-bordered table-dark">
                  <thead>
                    <tr>
                      <th>Sr.NO</th>
                      <th>Title</th>
                      <th>Short Desc.</th>
                      <th>Publish</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {reduxBlog.map((item, index) => {
                      return (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td>{item.shortDesc}</td>
                          <td>{item.Publish ? "published" : "unpublished"}</td>
                          <td>
                            {/* Update Button */}
                            <button
                              className="btn btn-outline-warning"
                              data-bs-toggle="modal"
                              data-bs-target="#updateModal"
                              onClick={(e) => {
                                handleUpdateModal(item._id);
                              }}
                            >
                              <i class="bi bi-pencil-square"></i>
                            </button>

                            {/* Delete Button */}
                            <button
                              className="btn btn-outline-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteModal"
                              onClick={(e) => (deleteId = item._id)}
                            >
                              <i class="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        {/* SHOW ALL BLOG END */}
      </div>

      {/* Modal Window Start */}

      {/* Update Modal Start */}

      <div
        className="modal fade"
        id="updateModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-danger">
              <h5 className="modal-title" id="exampleModalLabel">
                Blog Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdateBlog}>
                <input
                  type="text"
                  className="form-control"
                  value={mTitle}
                  onChange={(e) => setmTitle(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  value={mShortDesc}
                  onChange={(e) => setmShortDesc(e.target.value)}
                />
                <br />
                <textarea
                  name=""
                  id=""
                  className="form-control"
                  value={mDesc}
                  onChange={(e) => setmDesc(e.target.value)}
                ></textarea>
                <br />

                <button
                  type="button"
                  className="btn btn-warning btn-lg me-4"
                  data-bs-dismiss="modal"
                >
                  {" "}
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  Discart
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal End */}

      {/* Delete Modal Start */}
      <div
        className="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-danger">
              <h5 className="modal-title" id="exampleModalLabel">
                Blog Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you Sure...!</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
                onClick={async (e) => {
                  await dispatch(deleteBlogAction(deleteId));
                  await dispatch(getAllBlogAction());
                }}
              >
                {" "}
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal End */}

      {/* Modal Window END */}
    </div>
  );
}
