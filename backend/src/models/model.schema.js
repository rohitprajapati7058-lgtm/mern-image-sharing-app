const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    Image:String,
    caption:String,
    imageKitFileId:String,
})

const postModel = mongoose.model("wallpapers",postSchema)

module.exports = postModel