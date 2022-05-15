import React from 'react'
import { Link } from 'react-router-dom'
import './WhiteCard.css'
// import PropTypes from 'prop-types'

const WhiteCardLogin = (props) => {
  return (
    <div className='whiteCard'>
        <p>Transcendance</p>
        <div className='inputFileds'>
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <button>SE CONNECTER</button>
        <Link to="/register" className="redirection">You dont have an account?</Link>
    </div>
  )
}

// WhiteCardLogin.propTypes = {}

export default WhiteCardLogin
