import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className='product-list' onClick={showDetail}>
        <div className="pd-image"><img src={item?.img} alt="" /></div>
        <div className="pd-choice">{item?.choice === true?'Conscious Choice':''}</div>
        <div className="pd-title">{item?.title}</div>
        <div className="pd-price">{item?.price}</div>
        <div className="pd-new">{item?.new === true?'new':''}</div>
    </div>
  )
}

export default ProductCard