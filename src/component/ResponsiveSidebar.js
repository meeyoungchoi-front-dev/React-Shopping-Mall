import React, { useState } from 'react';

const ResponsiveSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="user">
                    <img
                        src="https://avatars.abstractapi.com/v1/?api_key=fdcb21e3a7ec4a2c91ce93c94180334c&name=Mee Young"
                        alt="User"
                        className="user-img"
                    />
                </div>
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
                            <i className="bx bx-body"></i>
                            <span className="nav-item">H&M</span>
                        </a>
                        <span className="tooltip">H&M</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bx-location-plus"></i>
                            <span className="nav-item">Sport</span>
                        </a>
                        <span className="tooltip">Sport</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bx-cog"></i>
                            <span className="nav-item">Sale</span>
                        </a>
                        <span className="tooltip">Sale</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bx-cog"></i>
                            <span className="nav-item">지속가능성</span>
                        </a>
                        <span className="tooltip">지속가능성</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ResponsiveSidebar;
