import React from 'react'
import Blogs from './Blogs'
import Footer from './Footer'

export default function Home() {
  return (
   <div className="container">
    <h1 id="blog" className='text-center'>Blogs</h1>
    <Blogs/>
    <Footer/>
   </div>
  )
}
