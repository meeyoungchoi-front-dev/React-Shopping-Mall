import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import ResponsiveSidebar from './ResponsiveSidebar'; // 사이드바 컴포넌트를 가져옵니다.
import { faBars, faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // faMagnifyingGlass 추가

const Navbar = ({ isLoggedIn, setAuthenticate }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const goToLogin = () => {
        navigate('/login');
    };

    const search = (event) => {
        if(event.key === 'Enter') {
            let keyword = event.target.value;
            console.log('keyword', keyword);
            navigate(`/?q=${keyword}`);
        }
    };

    const handleLogout = () => {
        setAuthenticate(false);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-wrap">
            <div>
                <div className="login-button" onClick={isLoggedIn ? handleLogout : goToLogin}>
                    <FontAwesomeIcon icon={faUser} className="ico-login" />
                    {isLoggedIn ? '로그아웃' : '로그인'}
                </div>
            </div>
            <div className='nav-menu'>
                <ul>
                    <li>
                        <a href="#" onClick={toggleSidebar}>
                            <i className="bx bxs-grid-alt"></i>
                            <span className="nav-item">Women</span>
                        </a>
                        <span className="tooltip">Women</span>
                    </li>
                    <li>
                        <a href="#" onClick={toggleSidebar}>
                            <i className="bx bxs-shopping-bag"></i>
                            <span className="nav-item">Men</span>
                        </a>
                        <span className="tooltip">Men</span>
                    </li>
                    <li>
                        <a href="#" onClick={toggleSidebar}>
                            <i className="bx bx-list-check"></i>
                            <span className="nav-item">Baby</span>
                        </a>
                        <span className="tooltip">Baby</span>
                    </li>
                    <li>
                        <a href="#" onClick={toggleSidebar}>
                            <i className="bx bxs-food-menu"></i>
                            <span className="nav-item">Kids</span>
                        </a>
                        <span className="tooltip">Kids</span>
                    </li>
                    <li>
                        <a href="#" onClick={toggleSidebar}>
                            <i className="bx bx-location-plus"></i>
                            <span className="nav-item">Sport</span>
                        </a>
                        <span className="tooltip">Sport</span>
                    </li>
                </ul> 
                <div className="input-box">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="ico-search"/>
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
            <div className="nav-section">
                <Link to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s" width={50} />
                </Link>
            </div>
            <div className="menu-icon" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            <ResponsiveSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default Navbar;
