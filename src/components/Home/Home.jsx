
import React from 'react'
import { Button } from 'react-bootstrap'
import Slider from '../Slider/Slider'
import './Home.css'

function Home() {
  return (
    <div className='container pt-5 mt-5 d-flex align-items-center gap-5'>
      <div className='text-white'>
        <h5 className='text-warning mb-0'>Welcome to</h5>
        <h1 className='fw-bolder' style={{ fontSize: '4rem' }}>Travel Guru</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur reprehenderit eaque, ratione rem magni sed voluptate illo quo nesciunt ipsa in itaque dolore veritatis hic odio, cupiditate est quas.</p>
        <Button className='btn-warning fw-semibold'>Booking</Button>
      </div>
      <div className='' style={{width:'65%'}}>
        <Slider></Slider>
      </div>
    </div>
  )
}

export default Home
