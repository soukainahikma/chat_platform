import React from 'react'
import { Link } from 'react-router-dom'
import './WhiteCard.css'
// import PropTypes from 'prop-types'

const WhiteCardRegister = (props) => {
  return (
    <div className='whiteCard'>
        <p>Transcendance</p>
        <div className='inputFileds'>
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <input type="password" name="password" id="password" placeholder="Password" />
            <input type="password" name="password" id="password" placeholder="Confirm Password" />
            <input type="text" name="fullname" id="fullname" placeholder="Full Name" />
        </div>
        <button>S'ENEGISTRER</button>
        <Link className="redirection" to="/login">You want to log in?</Link>
    </div>
  )
}

// WhiteCardRegister.propTypes = {}

export default WhiteCardRegister
