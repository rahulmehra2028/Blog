import React from 'react'
import Image from 'next/image';

export async function generateStaticParams(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await res.json()

  return data.map(post => ({
    post: toString(post)
  }))

}

const page = async ({params}) => {
  const {post} = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`);
  const imageRes = await fetch(`https://jsonplaceholder.typicode.com/photos/${post}`);
  const data = await res.json()
  const image = await imageRes.json()

    return (
    <div>{data.title}
    <p>{data.body}</p>
    <Image src={image.url} width={100} height={100} alt={image.title}/>
    </div>
  )
}

export default page