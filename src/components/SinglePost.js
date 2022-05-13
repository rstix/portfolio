import React, { useState, useEffect,useParam } from "react";
import { Link } from  'react-router-dom'
import sanityClient from '../client'

export default function Post() {
  const [singlePost, setSinglePost] = useState(null)
  const {slug} = useParam()
  
  useEffect(() => {
    sanityClient
      .fetch(`*[_type ==  'post']{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        body,
        "name": author-> name,
        "authorImage": author->image
      }`)
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])
  
  if (!setSinglePost) return <div>Loading...</div>

  return (
    <main className='bg-gray-200 min-h-screen p-12'>
      <section className='container mx-auto'>

          {singlePost && singlePost.map((post,index) => (
            <article className='container shadow-lg mx-auto bg-green-100'>
              <header className='relative'>
                <div className='absolute h-full flex items-center justify-center'>
                  <div>
                    <h1></h1>
                    <div><img src="" alt="" /></div>
                    <p></p>
                  </div>
                </div>
                <img src="" alt="" />
              </header>
              <div></div>
            <Link to={'/post/'+post.slug.current} key={post.slug.current}>
              <span className='block h-64 relative rounded shadow leading-snug  bg-white border-l-8' key={index}>
                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className='w-full h-full rounded-r  object-cover absolute' />
                <span className='block relative flex justify-end items-end pr-4 pb-4'>
                  <h3 className='text-gray-800 text-lg font-blog px-3 py-4  bg-red-700 text-red-100 bg-opacity-75 rounded'>{ post.title }</h3>
                </span>
              </span>
            </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}