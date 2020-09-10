import React from 'react';
import halfmoon from 'halfmoon';

export const Header = () => {
    const handleToggleSideBar = () => {
        halfmoon.toggleSidebar();
    };
    return (
        <nav className="navbar">
            {/* <!-- Navbar content (with toggle sidebar button) --> */}
            <div className="navbar-content">
                <button className="btn btn-action" type="button" onClick={handleToggleSideBar}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <span className="sr-only">Toggle sidebar</span>
                    {/* <!-- sr-only = show only on screen readers --> */}
                </button>
            </div>
            {/* <!-- Navbar brand --> */}
            <a href="#" className="navbar-brand">
                <img src="/public/me.png" alt="It's me! Pon Cheol Ku" />
                Brand
            </a>
            {/* <!-- Navbar text --> */}
            <span className="navbar-text text-monospace">v3.0</span>
            {/* <!-- text-monospace = font-family shifted to monospace --> */}
            {/* <!-- Navbar nav --> */}
            <ul className="navbar-nav d-none d-md-flex">
                {/* <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px) --> */}
                <li className="nav-item active">
                    <a href="#" className="nav-link">
                        Docs
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Products
                    </a>
                </li>
            </ul>
            {/* <!-- Navbar form (inline form) --> */}
            <form className="form-inline d-none d-md-flex ml-auto" action="..." method="...">
                {/* <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px), ml-auto = margin-left: auto --> */}
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                    required={true}
                />
                <button className="btn btn-primary" type="submit">
                    Sign up
                </button>
            </form>
            {/* <!-- Navbar content (with the dropdown menu) --> */}
            <div className="navbar-content d-md-none ml-auto">
                {/* <!-- d-md-none = display: none on medium screens and up (width > 768px), ml-auto = margin-left: auto --> */}
                <div className="dropdown with-arrow">
                    <button
                        className="btn"
                        data-toggle="dropdown"
                        type="button"
                        id="navbar-dropdown-toggle-btn-1"
                    >
                        Menu
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </button>
                    <div
                        className="dropdown-menu dropdown-menu-right w-200"
                        aria-labelledby="navbar-dropdown-toggle-btn-1"
                    >
                        {/* <!-- w-200 = width: 20rem (200px) --> */}
                        <a href="#" className="dropdown-item">
                            Docs
                        </a>
                        <a href="#" className="dropdown-item">
                            Products
                        </a>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-content">
                            <form action="..." method="...">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email address"
                                        required={true}
                                    />
                                </div>
                                <button className="btn btn-primary btn-block" type="submit">
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
