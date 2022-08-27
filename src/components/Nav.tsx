import React from 'react';


function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">

                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Nav;
