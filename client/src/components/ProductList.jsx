import React from 'react';

function Product(props) {
  return (
    <div className="product-row">
      <div>{props.product.brand}</div>
      <div>{props.product.productName}</div>
      <div>{props.product.notes}</div>
      <div>{props.product.datePurchased}</div>
      <div>{props.product.amountRemaining}%</div>
    </div>
  )
}

function ProductList(props) {
  return (
    <div>
      {props.productList.map(product => {
        return <Product product={product} key={product.productId}/>
      })}
    </div>
  )
}

export default ProductList;