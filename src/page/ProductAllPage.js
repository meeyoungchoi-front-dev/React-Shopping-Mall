import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import ResponsiveSidebar from '../component/ResponsiveSidebar';

const ProductAllPage = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log("searchQuery: ", searchQuery);
    let url = `https://my-json-server.typicode.com/meeyoungchoi-front-dev/REACT-SHOPPING-MALL/products?q=${searchQuery}`;
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, [query])

  return (
    <div>
      <ResponsiveSidebar/>
      <Container className="product-all">
        <Row>
        {productList.map((menu) => (
          <Col lg={3} key={menu.id}><ProductCard item={menu}/></Col>
        ))}

        </Row>
      </Container>
    </div>
  )
}

export default ProductAllPage