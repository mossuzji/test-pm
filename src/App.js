import { Container } from 'react-bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './pages/ProductAll';
/* import ProductDetail from './pages/ProductDetail'; */
import LoginPage from './pages/LoginPage';
/* import UserPage from './pages/UserPage'; */
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

/* 
1. 전체상품 페이지/ 로그인/ 상품상세페이지 => src 폴더에 페이지 생성
  1-1.Navbar
  1-2. App.js에서 Route로 각 페이지 연결
  1-3. 영역간 링크 -> Route(path='/example'), Link(to) 
2. 전체상품페이지에서는 기본 상품이 진열되어 있음
  2-1 json.db 생성 후 연결
  2-2 npm install -g json-server
  2-3 새 터미널 => json-server --watch db.json --port 5000
    // 연결 후 리소스 정보 확인
  2-4 productAll 함수를 통해 배열을 로드 (Distructuring /객체분할)
    => 전체 상품 페이지에 컴포넌트 뿌리기
3. 로그인 버튼을 클릭하면 로그인 페이지가 나옴
  3-1.상품을 클릭했을 때 로그인 상태가 false면 로그인페이지 =>
      true일시 디테일 페이지로 이동 => useState(false)
    ==> privateRoute.js 페이지 생성
      1) 로그인 상태가 true :디테일
      2) 로그인 상태가 false : 로그인으로 가는 redirect 설정
4. 상품 상세페이지
    4-1. useParams로 id값을 받고, useEffect로 화면에 뿌림
*/

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(()=> {
    console.log(authenticate)
  }, [authenticate])
  /* 
  useEffect() -> 인자로 함수를 받음: 콜백함수
    -Mount => 화면에 첫 렌더링
    -Update => 다시 렌더링
    -UnMount => 화면에서 사라짐

  1) useEffect( () => {}, [])
    : 화면에 처음 렌더링될 때, 실행 -> 빈 배열값을 전달하면, 화면에 첫 렌더링할 때만 실행
  2) useEffect( () => {}, [value])
    : value의 값이 바뀔 때마다 실행
  */
  return (
    <div className="App">
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Container>
      <Routes>
        <Route path='/' element={<ProductAll />} />
       {/*  <Route path='/product/:id' element={<ProductDetail />} /> */}
       {/* privateRoute 설정 */}
        <Route path='/product/:id' element = {<PrivateRoute authenticate = {authenticate}/>} />
        <Route path='/login' element={<LoginPage setAuthenticate = {setAuthenticate}/>}/>
        {/* <Route path='/user' element={<UserPage />} /> */}
      </Routes>
      </Container>
    </div>
  );
}

export default App;
