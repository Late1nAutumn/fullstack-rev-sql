import React from 'react';
  
const Products = (props) => {
  return(
    <div className='product-list-entry' onClick={(e)=>{props.evt(e,props.index)}}>
      <img className='listimages' src={props.prop.imgeurl} height="100"/>
      <div>
        <h3 className='product-list-entry-title'>{props.prop.item}</h3>
        <h4 className='product-list-detail'>
          {'Current Bid: $'+props.prop.curr_bid}<br/><br/>
          {'End in '+props.prop.ends_in+' day(s)'}
        </h4>
      </div>
    </div>
  )
}

export default Products