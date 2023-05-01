
import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider';

function Booking() {
    const {user} = useContext(AuthContext);
    const travelPlace = useLoaderData();
    const { name, place } = travelPlace;
    return (
        <div className='container pt-5 mt-5 d-flex align-items-center gap-5'>
            <div className='text-white' style={{ flexBasis: '70%' }}>
                <h1 className='fw-bolder' style={{ fontSize: '4rem' }}>{name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam facere quasi consequatur ea magnam, repellat dolor culpa mollitia similique velit veniam quam sint odit cum nam aliquam veritatis voluptatum provident ex aspernatur, assumenda minus libero. Quam aliquam dolorum quibusdam!</p>
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{ flexBasis: '100%' }}>
                <div className='py-5 px-4 rounded-4 bg-white fs-6 fw-semibold w-50'>
                    <div>
                        <label htmlFor="origin">Origin</label>
                        <input type="text" name="origin" id="origin" className='d-block py-3 px-2 border-0 rounded-2 mt-2 w-100' style={{ backgroundColor: 'lightgray', outline: 'none' }} />
                    </div>
                    <div className='my-4'>
                        <label htmlFor="destination">Destination</label>
                        <input type="text" name="destination" id="destination" value={name} className='d-block py-3 px-2 border-0 rounded-2 mt-2 w-100' style={{ backgroundColor: 'lightgray', outline: 'none' }} />
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-4'>
                        <div>
                            <label htmlFor="from">From</label>
                            <input type="date" name="from" id="from" className='d-block py-3 px-2 border-0 rounded-2 mt-2 w-100' style={{ backgroundColor: 'lightgray', outline: 'none' }} />
                        </div>
                        <div>
                            <label htmlFor="to">To</label>
                            <input type="date" name="to" id="to" className='d-block py-3 px-2 border-0 rounded-2 mt-2 w-100' style={{ backgroundColor: 'lightgray', outline: 'none' }} />
                        </div>
                    </div>
                    <Link to={`/booking-rooms/${place}`}>
                        <Button className='btn-warning mt-4 py-3 w-100 fs-6 fw-semibold'>Start Booking</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Booking
