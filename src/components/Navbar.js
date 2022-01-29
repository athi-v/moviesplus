import React, {useState} from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import {Link} from 'react-scroll'

import './Navbar.css'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

  return (
    <header>
<nav class="navbar navbar-expand-md">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/'>Movies+</Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <Hamburger toggled={isOpen} toggle={setOpen} direction='left' />

    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link" to='hero'>Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to='footer'>Contact</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to='faq'>FAQ</Link>
        </li>
      </ul>
      
      
    </div>
  </div>
</nav>
    </header>
    )
}

export default Navbar;
