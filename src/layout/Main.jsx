import React from 'react'
import Header from '../components/Header/Header'
import { Card } from 'react-bootstrap'
import img from '../assets/images/Rectangle 1.png'
import { Outlet } from 'react-router-dom'

function Main() {
    return (
        <Card className="bg-dark position-relative" style={{height: "100vh"}}>
            <Card.Img src={img} className='h-100' alt="Card image" />
            <div className='h-100 w-100 position-absolute bg-black opacity-50' style={{zIndex:'1'}}></div>
            <Card.ImgOverlay style={{zIndex:'99'}}>
                <div className='container'>
                    <Header></Header>
                </div>
                <Outlet></Outlet>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Main
