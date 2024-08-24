import React, { useState } from 'react';

const ResponsiveSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="#">
                            <i className="bx bxs-grid-alt"></i>
                            <span className="nav-item">Women</span>
                        </a>
                        <span className="tooltip">Women</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-shopping-bag"></i>
                            <span className="nav-item">Men</span>
                        </a>
                        <span className="tooltip">Men</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bx-list-check"></i>
                            <span className="nav-item">Baby</span>
                        </a>
                        <span className="tooltip">Baby</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-food-menu"></i>
                            <span className="nav-item">Kids</span>
                        </a>
                        <span className="tooltip">Kids</span>
                    </li>

                    <li>
                        <a href="#">
                            <i className="bx bx-location-plus"></i>
                            <span className="nav-item">Sport</span>
                        </a>
                        <span className="tooltip">Sport</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ResponsiveSidebar;
