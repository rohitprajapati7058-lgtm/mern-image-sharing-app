const ImageKit = require('@imagekit/nodejs')
// import ImageKit from '@imagekit/nodejs';

// const imageKit = new ImageKit({
//     privatekey : "private_M9RDVFZY7awY6ojEFRDqyFcDul4="
    
// })


const imageKit = new ImageKit({
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY, 
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY, 
    urlEndpoint: process.env.URL_ENDPOINT 
});


async function uploadFile(buffer) {
    // console.log(buffer)
    const result = await imageKit.files.upload({
        file:buffer.toString("base64"),
        fileName:'image.jpg'
    })
    return result
}

// async function deletepost(id) {
//     if(!id)return 

//     await imageKit.deleteFile(id)
    
// }


async function deletePost(fileId) {
    console.log("Received fileId:", fileId);
    console.log("Type:", typeof fileId);

    if (!fileId || typeof fileId !== "string") {
        throw new Error("Invalid ImageKit file ID");
    }

    return await imageKit.files.delete(fileId);
}



module.exports = {uploadFile,deletePost}