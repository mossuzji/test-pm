import { Row, Col, Button} from 'react-bootstrap';
import '../App.css'
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Form} from "react-bootstrap"

const ProductDetail = () => { 

  const { id } = useParams();
  const [product, setProduct] = useState(null);
    const getProductsDetail = async() => {
        //로컬호스트
        let url = `http://localhost:5000/products/${id}`
        //let url = ` https://my-json-server.typicode.com/mossuzji/test-pm/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        //console.log(data)
        setProduct(data)
    }

    useEffect(() => {
      getProductsDetail()
    }, [])


  return (
    <>
      <Row className='product-detail'>
        <Col className='productDetail-img'>
          <img src={product?.img} alt="" />
        </Col>
        <Col className="detail-info">
          <div className="new">
          {product?.new===true?'[신상품]':''}
          </div>
          <div className="title">{product?.title}</div>
          <div className="content">{product?.desc}</div>
          <div className="price">{product?.price}</div>
          <div className="choice">
            {product?.choice===true?'Conscious Choioce':''}
          </div>
          <Form.Select>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Button variant="secondary">Secondary</Button>{' '}
        </Col>
      </Row>
    </>
  )
}


export default ProductDetail