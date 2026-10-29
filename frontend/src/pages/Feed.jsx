import React from 'react'
import axios from 'axios'
import './Feed.css';
import { useState } from 'react'
import { useEffect} from 'react' // if dont use useEffect API automatically call again and again automatically 
const Feed = () => {

//     const [posts, setPosts] = useState([{_id:'1',
//         Image: 'https://picsum.photos/400/250',
//         caption:"senery"
// }])
const [posts, setPosts] = useState([]);
// const handleDelete =  async (postId) {
    // }
    
    useEffect(() => {
    axios.get("https://mern-image-sharing-app.onrender.com/get-post")
        .then((res) => {
            setPosts(res.data.posts);
        })
        .catch((err) => {
            console.error("Error fetching posts:", err);
        });
}, []);
    
    const handleDelete = async (postId) => {
      try {
        console.log("i am delete function")
        await axios.delete(`https://mern-image-sharing-app.onrender.com/delete-post/${postId}`);
    
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== postId)
        );
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    };
        
  return (
    <section className='feed-section'>
        {

            posts.length>0?(
                posts.map((post)=>(
                    <div className="postcard" key={post._id}>
                        <img src={post.Image} alt="image"/>
                        <div  className='sub-section' >
                        <p>{post.caption} </p> <button onClick={() => handleDelete(post._id)} >Delete</button>
                        </div>
                        
                    </div>
                ))

            ):(
                <h1>No post availabe</h1>
            )
            
        }
    </section>
        
  )
}   

export default Feed