import React from 'react'
import './com.css'
export default function header() {
    return (
        <div>

            <header>
                <a href="/" class="logo">
                    <img src="https://www.sports.info/assets/images/logo_v2.svg" alt="" />
                </a>
                <div class="header-right">
                    <a class="active" href="#home">cricket</a>
                    <a href="#contact">kabaddi</a>
                    <a href="#about">Soccer</a>
                </div>
            </header>

        </div>
    )
}




