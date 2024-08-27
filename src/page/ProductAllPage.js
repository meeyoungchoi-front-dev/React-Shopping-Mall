import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from "react-bootstrap"
import ResponsiveSidebar from '../component/ResponsiveSidebar'; // ResponsiveSidebar를 import
import ProductCard from '../component/ProductCard'; // ProductCard를 import
import {productAction} from '../redux/actions/productAction';
import {useDispatch, useSelector} from "react-redux";



const Navbar = ({ isLoggedIn, setAuthenticate }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);

    const goToLogin = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        setAuthenticate(false);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  

    console.log("productList: ", productList);
    const [query] = useSearchParams();
    const getProducts =  () => {
      let searchQuery = query.get('q') || "";
      console.log("searchQuery: ", searchQuery);
      dispatch(productAction.getProducts(searchQuery))
    //   let url = `https://my-json-server.typicode.com/meeyoungchoi-front-dev/REACT-SHOPPING-MALL/products?q=${searchQuery}`;
    //   let response = await fetch(url)
    //   let data = await response.json();
    //   console.log(data);
    //   setProductList(data);
    }
  
    useEffect(() => {
      getProducts();
    }, [query])
  
    return (
        <div className="nav-wrap">
            <div>
                <div className="login-button" onClick={isLoggedIn ? handleLogout : goToLogin}>
                    <FontAwesomeIcon icon={faUser} className="ico-login" />
                    {isLoggedIn ? '로그아웃' : '로그인'}
                </div>
            </div>
            <div className="nav-section">
                <Link to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s" width={100} />
                </Link>
            </div>
            <div className="menu-icon" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </div>
            <ResponsiveSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <Container className="product-all">
              <Row>
                {productList && productList.length > 0 ? (
                    productList.map((menu) => (
                        <Col lg={4} key={menu.id}>
                            <ProductCard item={menu} />
                        </Col>
                    ))
                ) : (
                    <p>No products found.</p>  // 조건을 만족하지 않으면 표시
                )}
              </Row>
            </Container>
        </div>
    );
};

export default Navbar;
