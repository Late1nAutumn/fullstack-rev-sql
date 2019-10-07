// complete and fix the dbhelpers
const db = require("./index.js");

module.exports = {
  getProductsHelper : (cb) => { db.query("select * from products;",(err,result)=>{
    if(err)cb(err);
    else cb(null,result);
  });},
  postProductsHelper : (ele,cb) => { 
    var params = [ele.item, ele.min_cost , ele.curr_bid , ele.ends_in , ele.image];
    //don't check if unique or not
    db.query(`INSERT INTO products (item, min_cost, curr_bid, ends_in, imgeurl) VALUES( ? , ? , ? , ? , ? );` , params ,(err,result)=>{
      if(err)cb(err);
      else cb(null,"inserted");
    });
  },
  updateProductHelper : (id, bid, cb) => { db.query(`update products set curr_bid = ${bid} where pid = ${id};`,(err,result)=>{
    if(err)cb(err);
    else cb(null,id+" updated");
  });},
  deleteProductHelper : (id, cb) => { db.query(`delete from products where id = ${id};`,(err,result)=>{
    if(err)cb(err);
    else cb(null,id+" removed");
  });}
}