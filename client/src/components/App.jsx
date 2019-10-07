import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';
import { timingSafeEqual } from 'crypto';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      onView:0,
      products:[]
    }
    this.onListClick=this.onListClick.bind(this);
    this.onBid=this.onBid.bind(this);
  }
  onListClick(e,index){
    e.preventDefault();
    this.setState({onView:index});
  }
  onBid(e){
    e.preventDefault();
    // console.log(e.target.elements[0].value);
    if(e.target.elements[0].value<=this.state.products[this.state.onView].curr_bid)
      alert('Bid too low!');
    else{
      var target='/products/'+this.state.products[this.state.onView].pid;
      console.log(target,e.target.elements[0].value);
      axios.put(target,{bid:e.target.elements[0].value})
      .then((a)=>{
        console.log(a);
        alert("Bid Success!");
      },(err)=>{throw err});
    }
  }

  componentDidMount(){
    axios.get('/products')
    .then((data)=>{
      this.setState({products:data.data.slice(0,10)});
      console.log(this.state.products);
    },(err)=>{throw err;});
  }
  render(){
    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer obj={this.state.products[this.state.onView]} evt={this.onBid}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList prop={this.state.products} evt={this.onListClick}/>
          </div>
        </div>
      </div>
    )
  }
}