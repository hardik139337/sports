import React from 'react'

export default function header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src="../../public/logo_v2.svg" alt="" />
                <a className="navbar-brand" href="#">Navbar w/ text</a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}




