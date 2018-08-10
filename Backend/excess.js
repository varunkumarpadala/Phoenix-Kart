var img1='./pics/acer.png';
var img2='./pics/Apple.jpg';
var img3='./pics/dell.jpg';
var img4='./pics/hp.png';
var img5='./pics/iball.jpg';
var img6='./pics/lenovo.jpg';
var img7='./pics/samsung.jpg';
var img8='./pics/sony.jpg';


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
        Pram:4,
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
        Pram:8,
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
        Pram:8,
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
        Pram:8,
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
        Pram:8,
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
        Pram:4,
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
        Pram:8,
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

