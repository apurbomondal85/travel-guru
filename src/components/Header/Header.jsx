
import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Header.css'
import { AuthContext } from '../../AuthProvider/AuthProvider'

function Header() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    .then(() => {navigate('/')}).catch((error) => console.log(error));
  }

  return (
    <nav className='d-flex justify-content-between align-items-center py-3'>
      <div>
        <h2 className='text-white fw-bold'>Travel Guru</h2>
      </div>
      <div className='d-flex align-items-center gap-5'>
        <form><input type="text" className='bg-white border text-white' style={{ padding: '.6rem', outline: 'none', borderRadius: '10px', width: '20rem' }} name="search" id="search" placeholder='Search your Destination...' /></form>
        <div className='nav-menu d-flex align-items-center gap-5'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/news'>News</NavLink>
          <NavLink to='/destination'>Destination</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          {
            !user ?
              <NavLink to='/login'>
                <Button variant="warning" className='text-white fw-semibold'>Login</Button>
              </NavLink> :
              <Button variant="warning" onClick={handleLogout} className='text-white fw-semibold'>Log out</Button>
          }
        </div>
      </div>
    </nav>
  )
}

export default Header
