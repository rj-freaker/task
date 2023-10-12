import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div>
                <NavLink to='/' className='navbar-brand'>
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to='/about' className='navbar-brand'>
                    About
                </NavLink>
            </div>
            
        </nav>
    </div>
  )
}
