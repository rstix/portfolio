import React from "react";
import image from '../track.jpg'

function Home() {
  return (
    <main>
      <img src={image} alt='track image' className='absolute object-cover w-full h-full'/>
      <section className='relative flex justify-center content-center min-h-screen pt-40 '>
        <h1 className='text-6xl text-gray-900 font-bold cursive leading-none lg:leading-snug'>
          Hey! I'm Roman.
        </h1>
      </section>
    </main>
  )
}

export default Home;
