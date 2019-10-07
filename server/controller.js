// Controller here
// complete building out the controller
const db = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    db.getProductsHelper((err,a)=>{
      if(err)res.status(400).send(err);
      else res.status(200).send(a)
    });
  },
  post: (req, res) => {
    db.postProductsHelper(req.body,(err,a)=>{
      if(err)res.status(400).send(err);
      else res.status(201).send(a)
    })
  },
  put: (req, res) => {
    db.updateProductHelper(req.params._id,req.body.bid,(err,a)=>{
      if(err)res.status(400).send(err);
      else res.status(202).send(a)
    })
  },
  delete: (req, res) => {
    db.deleteProductHelper(req.body.id,(err,a)=>{
      if(err)res.status(400).send(err);
      else res.status(202).send(a)
    })},
}

module.exports = controller