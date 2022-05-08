import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/new">Create</Link>
            </li>
        </nav>
    )
}

export default Nav