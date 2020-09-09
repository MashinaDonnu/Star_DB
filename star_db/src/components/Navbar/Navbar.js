import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand" href="#">Star DB</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Persons</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/species">Species</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets">Planets</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
}
