import React, { useState, useEffect } from "react";
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const [author, setAuthor] = useState(null)
  
  useEffect(() => {
    sanityClient
      .fetch(`*[_type ==  'author']{
        name,
        bio,
        "authorImg": image.asset->url
      }`)
      .then((data) => setAuthor(data[0]))
      .catch(console.error)
  }, [])
  
  if (!author) return <div>Loading...</div>
  
  return (
    <main>
      <div className='p-16 container mx-auto relative'>
        <section className='bg-green-800 rounded-lg p-20 flex'>
          <img alt='author icon' src={urlFor(author.authorImg).url()} className='rounded w-56 h-56 mr-8' />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-6xl text-green-300 mb-5'>
              Hey there. I'm {" "}
              <span className="text-green-100">{ author.name}</span>
            </h1>
            <div className='text-white'>
              <BlockContent blocks={ author.bio} projectId='ine20fka' dataset='production' />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}