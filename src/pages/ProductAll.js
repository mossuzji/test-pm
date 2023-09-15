import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
  const [productList, setProductList] = useState([]);  //데이터 제이슨을 productList에 저장
  const [query, setQuery] = useSearchParams(); //주소창의 쿼리 가져올 때는 params(파라메터)사용
  const getProducts = async() => {
    //데이터가 전부 로드되고 나서 화면에 뿌리기
    /* let url = 'http://localhost:5000/products/' */

    //getProduct함수를 통해서 API를 호출할 때 쿼리에 있는 값을 넣어줌
    let searchQuery = query.get('q')||'';

    //로컬에 설치된 json-server로 데이터를 불러와서 보여주는 주소 
    //let url = `http://localhost:5000/products?q=${searchQuery}`;

    //my-json-server에서 자료를 가져오기
    let url = ` https://my-json-server.typicode.com/mossuzji/test-pm/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data)
  }
  //페이지 렌더링 -콜백함수 필수
  useEffect(() => {
    getProducts();
    //한번만 실행할 때, []를 콜백함수로 기입한다
  }, [query])


  return (
    <Container>
        <Row>
          {
            productList.map((menu) => (
              <Col lg={3} key ={menu.id}>
                <ProductCard item={menu} />
              </Col>
            ))
          }
        </Row>
    </Container>
  )
}

export default ProductAll