import React from 'react'
import BlogList from './BlogList'



const Blog = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json()

  console.log(data)

  return (
    <div>
      
      <h1>Blog Page</h1>
      <BlogList posts={data}/>

    </div>
  )
}

export default Blog