import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreatePost = () => {

  const Navigate = useNavigate()
  const handleSubmit = async (e)=> {
    e.preventDefault()
    
    const formdata = new FormData(e.target)

    axios.post("http://mern-image-sharing-app.onrender.com/create-post",formdata).then((res)=>{
      console.log(res)


      Navigate("/about")
    })
    
  }

  return (
    <section className='create-post-section'>   
        <h3>Post Image</h3>
        <form onSubmit={handleSubmit}>
            <input type="file" accept='image/*' name='image' />
            <input type='text' placeholder='Image caption' name='caption' required></input>
            <button className='button'>Submit</button>
        </form>
    </section>
  )
}
export default CreatePost