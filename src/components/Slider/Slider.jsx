
import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react'
import { Pagination, Navigation } from "swiper";
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'

function Slider() {
    const travelPlace = useLoaderData();
    return (
        <>
            <Swiper
                effect={'coverflow'}
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                grabCursor={true}
                pagination={{
                    el:'',
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                    clickable: true
                }}

                className="mySwiper"
            >
                {
                    travelPlace?.map(places => <SwiperSlide style={{ height: '350px', position: 'relative', overflow: 'hidden', cursor: 'pointer' }} key={places.id}>
                        <Link to={`/booking/${places.place}`}>
                            <img src={places.image} alt="place" />
                            <div className='w-100 h-100 bg-black bg-opacity-50 position-absolute top-0 start-0' style={{ borderRadius: '15px' }}>
                                <h2 className=' ms-3 fs-4 text-white position-absolute' style={{ bottom: '10%' }}>{places.name}</h2>
                            </div>
                        </Link>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='position-absolute d-flex align-items-center gap-5' style={{ bottom: '15%', marginLeft: '3rem' }}>
                <div style={{width:'3rem', height:'3rem',backgroundColor:'white',borderRadius:'100%',cursor:'pointer'}} className='d-flex justify-content-center align-items-center prev'>
                    <FaArrowLeft className='text-dark'></FaArrowLeft>
                </div>
                <div style={{width:'3rem', height:'3rem',backgroundColor:'white',borderRadius:'100%',cursor:'pointer'}} className='d-flex justify-content-center align-items-center next'>
                    <FaArrowRight className='text-dark' t></FaArrowRight>
                </div>
            </div>
        </>
    )
}

export default Slider
