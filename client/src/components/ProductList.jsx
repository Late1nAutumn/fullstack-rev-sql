import React from 'react';
import Products from './Products';
  
const ProductList = (props) => {
  return(
    <div className='product-list'>
      <h3>Current Products:</h3>
      {props.prop.map((prop,i)=>(
        <Products prop={prop} index={i} evt={props.evt}/>
      ))}
    </div>
  )
}

export default ProductList