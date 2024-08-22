import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage =  () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    //let url = `https://localhost:5000/products/${id}`
    let url = `https://my-json-server.typicode.com/meeyoungchoi-front-dev/REACT-SHOPPING-MALL/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail()
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
              <img src={product?.img}/>
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetailPage