const express = require('express')
const multer = require('multer')
// const uploadFile = require('./services/storage.service')
const postModel = require('./models/model.schema')
const cors = require('cors')
// const deletePost= require('./services/storage.service')
const { uploadFile, deletePost } = require('./services/storage.service');

const app = express()
const upload = multer({Storage:multer.memoryStorage()})
app.use(cors())
app.post("/create-post",upload.single("image"),async (req,res)=>{

    const result =await uploadFile(req.file.buffer);
    const post = await postModel.create({
    Image: result.url,
    caption: req.body.caption,
    imageKitFileId: result.fileId
});

// console.log("Saved ImageKit file ID:", post.imageKitFileId);
    return res.status(201).json({
        message:"Post created successfully",
        post
    })
})

app.get("/get-post",async (req,res)=>{
    const posts =await postModel.find()
    
    return res.status(200).json({
        message:"These are post given below",
        posts
    })
})


app.delete("/delete-post/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const post = await postModel.findById(id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        if (post.imageKitFileId) {
            await deletePost(post.imageKitFileId);
        }

        await postModel.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Post deleted successfully"
        });

    } catch (error) {
        console.error("Delete post error:", error);

        return res.status(500).json({
            message: "Failed to delete post",
            error: error.message
        });
    }
});



module.exports = app