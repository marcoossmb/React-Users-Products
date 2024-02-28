import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/usuarios" class="nav-link">Usuarios</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/productos" class="nav-link">Productos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
