const express = require("express")
const { getallblog, addBlog, getSingleblog, deleteBlog, updateBlog } = require("../controller/blog-controller")

const router = express.Router()

//   get hppt://localhost:5000/api/v1/blogs
//   post hppt://localhost:5000/api/v1/blogs
//   get hppt://localhost:5000/api/v1/blogs/:id
router.route("/").get(getallblog).post(addBlog)
router.route("/:id").get(getSingleblog).delete(deleteBlog).put(updateBlog)


module.exports = router

