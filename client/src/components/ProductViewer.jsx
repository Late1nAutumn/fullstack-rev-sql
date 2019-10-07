import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  
  render(){
    if(this.props.obj)
    return(
      <div className = 'product-viewer'>
        <img className ='media-body' src={this.props.obj.imgeurl}/>
        <h2>{this.props.obj.item}</h2>
        <h4 className='product-viewer-details'><br/>
          {'Current Bid: $'+this.props.obj.curr_bid}<br/><br/>
          {'Original Price: $'+this.props.obj.min_cost+' day(s)'}<br/><br/>
          {'Bidding End in '+this.props.obj.ends_in+' day(s)'}<br/><br/>
          <form onSubmit={this.props.evt}>
            New Bid:  <input size="12"></input>
            <input type='submit'></input>
          </form><br/><br/>
        </h4>
      </div>
    )
    else
    return(<div className='loading'></div>)
  }
}