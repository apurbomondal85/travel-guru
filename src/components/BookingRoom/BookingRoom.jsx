
import React from 'react'
import Header from '../Header/Header'
import { useLoaderData } from 'react-router-dom'
import SingleRoom from '../SingleRoom/SingleRoom';

function BookingRoom() {
    const travelRooms = useLoaderData();
    const { place, rooms } = travelRooms;
    return (
        <div className='container'>
            <div className='shadow-sm px-3' style={{ backgroundColor: 'lightgray' }}>
                <Header></Header>
            </div>
            <section className='py-5'>
                <h2 className='fw-semibold'>Stay in {place}</h2>
                <div className='d-flex gap-4 mt-4'>
                    <div className='d-flex flex-column gap-4' style={{ flexBasis: '100%' }}>
                        {
                            rooms.map(room => <SingleRoom key={room._room_id} room={room}></SingleRoom>)
                        }
                    </div>
                    <div style={{ flexBasis: '100%' }}>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookingRoom
