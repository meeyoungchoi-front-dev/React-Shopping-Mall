import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage =  () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
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
            <Dropdown className='size-dropdown'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    사이즈 선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {product?.size.map((item, index) => (
                        <Dropdown.Item key={index} href={`#/action-${index+1}`}>{item}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <Button className='add-btn'>추가</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetailPage