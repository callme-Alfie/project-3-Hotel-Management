import React from 'react'
import './HImage.css'
import HomeVideo from './HomeVideo.mp4'

const HImage = () => {
  return (
    <div>
      {/* <div className="image1">
        <img src='https://images.pexels.com/photos/2986231/pexels-photo-2986231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='resort'/>
      </div>
      <div className="image2">
      <img src='https://images.pexels.com/photos/14021073/pexels-photo-14021073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='resort'/>
      </div> */}
      {/* <div className="image3">
      <img src='https://images.pexels.com/photos/26971421/pexels-photo-26971421/free-photo-of-birds-eye-view-of-summer-resort-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='home' className='home-img'/>
      </div> */}
      <div className="home-video">
      <video autoPlay muted loop className="background-video">
        <source src={HomeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  )
}

export default HImage
