import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return <>
    <div className="header">
        <div className="menu">
                <ul>
                    <Link to="/project"><li>نمونه کارها</li></Link>
                    <Link to="/"><li>درباره من</li></Link>
                </ul>
        </div>
    </div>
  </>
}

export default Header