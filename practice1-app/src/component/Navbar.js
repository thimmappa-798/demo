import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Navbar() {
    const state=useSelector((state)=>state.HandleCart)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/home" class="nav-link active" aria-current="page" href="#">Home</Link>
                            <Link to="/products" class="nav-link active" href="#">Products</Link>
                            <a class="nav-link active" href="#">Pricing</a>
                            <Link to="/cart" class="nav-link active " href="#" tabindex="-1" >cart({state.length})</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar