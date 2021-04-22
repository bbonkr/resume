import React from 'react';
import { Link } from 'react-router-dom';
import bootStrap from 'bootstrap';
import { data } from '../../data/data';
import { RouteData } from '../../interfaces';
import { GenericLink } from '../GenericLink';

const routes: RouteData[] = [
    {
        title: 'Introduction',
        path: '/introduction',
    },
    {
        title: 'Skill',
        path: '/skill',
    },
    {
        title: 'Education',
        path: '/education',
    },
    {
        title: 'Work',
        path: '/work',
    },
    {
        title: 'Project',
        path: '/project',
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
    },
];

export const Header = () => {
    const {
        me: { name, photo },
    } = data;

    return (
        <header>
            <nav className="navbar navbar-expand-md  fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <GenericLink
                        record={{ href: '/', title: '' }}
                        className="navbar-brand p-0 me-2"
                    >
                        <img
                            src={photo}
                            alt={`${name} photo`}
                            width={24}
                            className="d-inline-block align-text-top"
                        />{' '}
                        {name}
                    </GenericLink>
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            {routes.map((route) => (
                                <li key={route.path} className="nav-item">
                                    <GenericLink
                                        record={{
                                            href: route.path,
                                            title: route.title,
                                        }}
                                        className="nav-link"
                                    />
                                </li>
                            ))}
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};
