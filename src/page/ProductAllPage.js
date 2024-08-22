import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from '../component/ProductCard';

const ProductAllPage = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    //let url = `https://localhost:5000/products`
    let url = `https://my-json-server.typicode.com/meeyoungchoi-front-dev/REACT-SHOPPING-MALL/products`
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);
    setProductList(data);
  }

  useEffect(() => {
    getProducts()
  }, [])

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