import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
  /* 네비게이션 메뉴바*/
  const menuList = ["전체", "아우터", "상의", "하의", "드레스", "신상품"]

  //사이드바 메뉴
  let [width, setWidth] = useState(0)

  //로그인페이지 이동
  const navigate = useNavigate()
  /* const goToLogin = () => {
    navigate('/login')
  } */

  //리액트에서는 input 요소를 읽어오는 값이 이벤트에 있음.
  const search = (e) => {
    //console.log('ket press')
    if (e.key === "Enter") {
      //console.log('enter', e.key)
      //입력한 검색어 읽어오기
      let keyword = e.target.value;
      //console.log(keyword)

      //url 변경
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <Container>
      {/* 사이드 메뉴 영역 */}
      <div className="side-menu" style={{width:width}}>
        <button className="btn_close" onClick={()=> setWidth(0)} >
          <img src={require('../img/btn-close.png')} alt="메뉴 닫기" />
        </button>
        <ul className="side-menu-list">
          {
            menuList.map((menu, idx) => (
              <li key={idx}><a href='#'>{menu}</a></li>
            ))
          }
        </ul>
      </div>

      {/* hambuger Menu */}
      <div className="nav-header">
        <div className="buger-menu hide">
          <img src={require('../img/btn-open.png')} alt="메뉴 열기" onClick={()=> {setWidth(280)}}/>
        </div>

        {/* 로그인 버튼을 클릭하면 로그아웃이 되고, 로그아웃을 클릭하면 로그인으로 변경 */}
        {
          authenticate ?(
            <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon ={faUser}/>
            <span style={{cursor: 'pointer'}}>로그아웃</span>
            </div>
          ):(
            <div onClick={() => navigate('/login')}>
              <FontAwesomeIcon icon ={faUser}/>
              <span style={{cursor: 'pointer'}}>로그인</span>
            </div>
          )
        }
      </div>
     {/*  <div className="login-area">
        <div className="login-button" onClick = {goToLogin}>
          <FontAwesomeIcon icon ={faUser} />
          <span className="login-text">로그인</span>
        </div>
      </div> */}
      {/* //로그인 버튼 영역 */}
      <div className="logo">
        <Link to ='/'>
        <img src={require('../img/logo.jpg')} alt="로고" />
        </Link>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {
          menuList.map((menu, idx) => 
              <li key= {idx}>{menu}</li>
            )
          }
        </ul>
        {/* //메뉴영역 */}
        <div className="search-area">
        <FontAwesomeIcon icon ={faSearch} />
        <input type="text" placeholder="상품 검색" onKeyDown={(e) => search(e)}/>
        </div>
      </div>


    </Container>
  )
}

export default Navbar