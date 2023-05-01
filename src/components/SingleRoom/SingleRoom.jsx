
import React from 'react'
import { FaStar } from 'react-icons/fa';

function SingleRoom({ room }) {
    const { roomImage, title, person, price, rating, totalRating, beds, bedrooms, baths, amenities } = room;
    return (
        <div className='d-flex gap-4'>
            <div style={{ flexBasis: '100%' }}>
                <img src={roomImage} alt="roomImage" />
            </div>
            <div style={{ flexBasis: '100%' }}>
                <h4>{title}</h4>
                <div className='d-flex gap-3' style={{ color: 'gray' }}>
                    <span>{person} guests</span>
                    <span>{bedrooms} bedrooms</span>
                    <span>{beds} beds</span>
                    <span>{baths} baths</span>
                </div>
                <div style={{ color: 'gray' }}>
                    <p className='my-1'>{amenities[0]}</p>
                    <p className='m-0'>{amenities[1]}</p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                    <div className='d-flex align-items-center gap-1 mt-1'>
                        <FaStar className='text-warning'></FaStar>
                        <span>{rating.toFixed(1)}</span>
                        <span>({totalRating})</span>
                    </div>
                    <div>
                        <span className='fs-5'>${price}<span style={{ color: 'gray', fontSize:'1rem'}}>/night</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRoom
