const express = require("express");

const IndexRoutes = express.Router();
const Admin = require('../models/admin');

IndexRoutes.route('/get').get((req,res) => {
    console.log("Reached here");
    Admin.find().then(items => res.json(items))
})

IndexRoutes.route('/post').post((req,res)=>{
    console.log("posting admin");
    console.log(req.body);
    const newAdmin = new Admin(req.body);
    newAdmin.save().then(item => res.json({"all":"fine"}))
})

module.exports = IndexRoutes;
