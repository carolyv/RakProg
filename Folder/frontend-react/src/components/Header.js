import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to="/" id="header-link">Home</Link>
            <Link to="/posts" id="header-link">Posts</Link>
        </div>  
    )
}
export default Header;