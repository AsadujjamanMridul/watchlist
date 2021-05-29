import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">WatchList</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className='justify-content-end'>
                        <div class="navbar-nav  my-md-0 my-3">
                            <a class="nav-link  px-2 text-center  my-md-0" href="#">Watched</a>
                            <a class="nav-link  px-2 text-center  my-md-0" href="#">My Watchlist</a>
                            <a class="nav-link  px-2 text-center  my-md-0" href="#">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;