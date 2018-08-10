var express = require('express');
var router = express.Router();
var User = require('../models/UserDet');
var Product = require('../models/ProductDet');
var Order = require('../models/OrderDet');
var fs = require('fs');



router.get('/getProducts', (req, res, next) => {
    Product.find({}, (err, Products) => {
        if (err)
            res.status(500).json({
                msg: err
            });
        res.status(200).json({
            msg: Products
        });
    });
});


router.post('/getLogin', (req, res, next) => {
    var loginObj = {
        "email": req.body.email,
        "pass": req.body.pass
    }
    var flag = 0;
    User.find({
        "email": loginObj.email,
        "pass": loginObj.pass
    }, (err, users) => {
        if (err) {
            throw err;
            flag = 1;
        } else {
            if (users.length == 0) {
                flag = 1;
                response = {
                    "result": "Empty"
                }
                res.json(response);
            } else {
                for (let item of users) {
                    if (item.email == loginObj.email && item.pass == loginObj.pass && item.role == 'Admin') {
                        flag = 1;
                        response = {
                            "result": "Admin"
                        }
                        res.json(response);
                    } else if (item.email == loginObj.email && item.pass == loginObj.pass && item.role == 'User') {
                        flag = 1;
                        response = {
                            "result": "User"
                        }
                        res.json(response);
                    }
                }
            }
            if (flag == 0) {
                response = {
                    "result": "Oops"
                }
                res.json(response);
            }
        }
    });
});


router.post('/createAdmin', (req, res, next) => {
    var newUser = new User({
        email: req.body.email,
        pass: req.body.pass,
        role: 'Admin'
    });
    newUser.save((err, user) => {
        if (err)
            res.status(500).json({
                msg: err
            });
        res.status(200).json({
            msg: user
        });
    });
});


router.post('/createUser', (req, res, next) => {
    var newUser = new User({
        email: req.body.email,
        username: req.body.username,
        pass: req.body.pass,
        mobile: req.body.mobile,
        role: 'User'
    });
    newUser.save((err, user) => {
        if (err)
            res.status(500).json({
                msg: err
            });
        res.status(200).json({
            msg: user
        });
    });
});


router.post('/createOrder', (req, res, next) => {
    console.log('createorder');
    console.log(req.body);
    var newOrder = new Order({
        Oid: req.body.Oid,
        Psid: req.body.Psid,
        Psname: req.body.Sname,
        Pbrand: req.body.Pbrand,
        Odate: req.body.Odate,
        Pprice: req.body.Pprice,
        Daddress: req.body.Address,
        Person: req.body.Person,
        Mobile: req.body.Mobile,
        Exdate: req.body.Exdate,
        Pstatus:'Submitted'
    });
    newOrder.save((err, order) => {
        if (err)
            res.status(500).json({msg: err});
        res.status(200).json({msg: order});
    });
});


router.get('/getOrders', (req, res, next) => {
    Order.find({}, (err, orders) => {
        if (err)
            res.status(500).json({msg: err});
        res.status(200).json({msg: orders});
    });
});


router.get('/getcompletedOrders', (req, res, next) => {
    Order.find({$or:[{'Pstatus':'Submitted'},{'Pstatus':'Declined'}]}, (err, orders) => {
        if (err)
            res.status(500).json({msg: err});
        res.status(200).json({msg: orders});
    });
});


router.get('/getopenOrders', (req, res, next) => {
    Order.find({'Pstatus':'Approved'}, (err, orders) => {
        if (err)
            res.status(500).json({msg: err});
        res.status(200).json({msg: orders});
    });
});


router.put('/updateOrder', (req, res, next) => {
    var orderObj = {
        "status": req.body.Pstatus,
        "id": req.body.id
    }
    console.log(req.body);
    console.log(orderObj.status+' '+orderObj.id);
    Order.findByIdAndUpdate(orderObj.id,{$set:{"Pstatus":orderObj.status}},(err, order) => {
        console.log('ok.');
        if (err)
                res.status(500).json({msg: err});
            res.status(200).json({msg: order});
    });
        console.log('after save');
});


router.post('/memoryFilter',(req,res,next)=>{
    Product.find({'Pram':{$lte:req.body.Pram}},(err,products)=>{
        if(err)
            res.status(500).json({msg:err});
        res.status(200).json({msg:products});
    })
})






router.post('/',(req,res,next)=>{
    Product.remove((err)=>{
        if(err){
            res.status(500).json({msg:err});
        }
    });


    var newProduct=new Product({
        img:'../../assets/pics/acer.png',
        Ptitle:"Acer Predator",
        Pprice:35000,
        Prating:4,
        Pram:2,
        Phdd:1000,
        Pos:"Windows",
        Psid:1,
        Psname:"Supplier_1",
        Pbrand:"Acer"
    });
    newProduct.save((err,product)=>{
        if(err)
            res.status(500).json({msg:err});
        // res.status(200).json({msg:product});
    });
    var newProduct=new Product({
        img:'../../assets/pics/Apple.jpg',
        Ptitle:"Apple Pink",
        Pprice:100000,
        Prating:5,
        Pram:4,
        Phdd:500,
        Pos:"Mac",
        Psid:2,
        Psname:"Supplier_2",
        Pbrand:"Apple"
    });
    newProduct.save((err,product)=>{
        if(err)
            res.status(500).json({msg:err});
        // res.status(200).json({msg:product});
    });
    var newProduct=new Product({
        img:'../../assets/pics/dell.jpg',
        Ptitle:"Dell Blueish",
        Pprice:40000,
        Prating:4,
        Pram:8,
        Phdd:750,
        Pos:"Windows",
        Psid:3,
        Psname:"Supplier_3",
        Pbrand:"Dell"
    });

   

    newProduct.save((err,product)=>{
        if(err)
            res.status(500).json({msg:err});
        // res.status(200).json({msg:product});
    });
    var newProduct=new Product({
        img:'../../assets/pics/hp.png',
        Ptitle:"Hp Notebook",
        Pprice:38500,
        Prating:4.5,
        Pram:16,
        Phdd:1000,
        Pos:"Dos",
        Psid:4,
        Psname:"Supplier_4",
        Pbrand:"Hp"
    });
    newProduct.save((err,product)=>{
        if(err)
            res.status(500).json({msg:err});
        // res.status(200).json({msg:product});
    });
    var newProduct=new Product({
        img:'../../assets/pics/iball.jpg',
        Ptitle:"IBall for Gamers",
        Pprice:30000,
        Prating:4.5,
        Pram:3,
        Phdd:500,
        Pos:"Windows",
        Psid:5,
        Psname:"Supplier_5",
        Pbrand:"IBall"
    });
    newProduct.save((err,product)=>{
        if(err)
            res.status(500).json({msg:err});
        // res.status(200).json({msg:product});
    });

    

    var newProduct=new Product({
        img:'../../assets/pics/lenovo.jpg',
        Ptitle:"Lenovo Slim",
        Pprice:45000,
        Prating:4,
        Pram:4,
        Phdd:1000,
        Pos:"Linux",
        Psid:6,
        Psname:"Supplier_6",
        Pbrand:"Lenovo"
    });
    newProduct.save((err,product)=>{
        if(err)
            res.status(500).json({msg:err});
        // res.status(200).json({msg:product});
    });
    var newProduct=new Product({
        img:'../../assets/pics/samsung.jpg',
        Ptitle:"Samsung Shine",
        Pprice:57500,
        Prating:4.5,
        Pram:8,
        Phdd:1000,
        Pos:"Windows",
        Psid:7,
        Psname:"Supplier_7",
        Pbrand:"Samsung"
    });
    newProduct.save((err,product)=>{
        if(err)
            res.status(500).json({msg:err});
        // res.status(200).json({msg:product});
    });
    var newProduct=new Product({
        img:'../../assets/pics/sony.jpg',
        Ptitle:"Sony Miracle",
        Pprice:60000,
        Prating:5,
        Pram:16,
        Phdd:1000,
        Pos:"Windows",
        Psid:8,
        Psname:"Supplier_8",
        Pbrand:"Sony"
    });
    newProduct.save((err,product)=>{
        if(err)
            res.status(500).json({msg:err});
        res.status(200).json({msg:product});
    });
});















module.exports = router;