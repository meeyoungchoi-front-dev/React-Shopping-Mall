import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAllPage = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
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
      <Container>
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