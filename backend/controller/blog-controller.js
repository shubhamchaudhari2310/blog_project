const blog = require("../model/blog-model")

exports.addBlog = async (req, res) => {
    try {
        const result = await blog.create(req.body)
        res.json({

            success: true,
            message: "blog added",
            data: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
            data: null
        })
    }
}
exports.getallblog = async (req, res) => {
    try {
        const result = await blog.find()
        res.json({
            count: result.length,
            success: true,
            message: "blog added",
            data: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
            data: null
        })
    }
}

exports.getSingleblog = async (req, res) => {
    try {
        const result = await blog.findById(req.params.id)
        res.json({
            success: true,
            message: "Single blog ",
            data: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
            data: null
        })
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const result = await blog.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "Delete Blog Succesfully",
            data: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Delete Blog Succesfully Error ${error}`,
            data: null
        })
    }
}

exports.updateBlog = async (req, res) => {
    try {
        console.log(req.body);
        const result = await blog.findByIdAndUpdate(req.params.id, req.body)
        res.json({
            success: true,
            message: "Update Blog Succesfully",
            data: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Update Blog Succesfully Error ${error}`,
            data: null
        })
    }
}