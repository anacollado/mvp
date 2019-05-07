import React from 'react';

const formatDate = str => {
  const date = new Date(str);
  return date.toLocaleDateString();
}


function Product(props) {
  return (
    <div className="product-row">
      <div>{props.product.brand}</div>
      <div>{props.product.productName}</div>
      <div>{props.product.notes}</div>
      <div>{formatDate(props.product.datePurchased)}</div>
      <div>{props.product.amountRemaining}%</div>
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  )
}

function ProductList(props) {
  return (
    <div>
      {props.productList.map(product => {
        return <Product product={product} key={product.productId} />
      })}
    </div>
  )
}

export default ProductList;