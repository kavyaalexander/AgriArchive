const express = require('express');
const router = express.Router();
const userData=require('../models/user');
const CropsData = require('../models/cropsdata');
const mongoose = require('mongoose');
const db='mongodb://localhost:27017/AgriarchiveList';

mongoose.connect(db,(err)=>
                        {
                          if(err)
                          {
                            console.log("error occurred:"+err);
                          } 
                          else
                          {
                            console.log("MongoDB SUCCESSFULLY Connected!");
                          }
                        });

router.get('/', (req, res) => {
    res.send("From API")
})



router.get('/foodcrops', function(req, res) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  CropsData.find({type:'foodcrops'})
      .then(function(crops) {
          res.send(crops);
      });
});

router.get('/cashcrops', function(req, res) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  CropsData.find({type:'cashcrops'})
      .then(function(crops) {
          res.send(crops);
      });
});

router.get('/hoticulturecrops', function(req, res) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  CropsData.find({type:'hoticulturecrops'})
      .then(function(crops) {
          res.send(crops);
      });
});
router.get('/plantcrops', function(req, res) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  CropsData.find({type:'plantationCrops'})
      .then(function(crops) {
          res.send(crops);
      });
});


router.get('/shop',(req,res)=>{
   res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  let shop=[
      {
          "_id":"1",
          "name":"Tomato Seeds",
          "amt":"Rs:30/-",
          "img":"https://images-na.ssl-images-amazon.com/images/I/614KP7GHWgL._SL1111_.jpg"
          
      },
      {
        "_id":"2",
        "name":"Paddy Seeds",
        "amt":"Rs:100/-",
        "img":"https://img3.exportersindia.com/product_images/bc-full/dir_116/3469137/virat-13-hybrid-paddy-seeds-2406208.jpeg"
        
         
      },
      {
        "_id":"3",
      "name":"Wheat Seeds",
      "amt":"Rs:100/-",
      "img":"https://mednear.com/uploads/medicine/82343dee06020eac45c061532e6e463e.jpg"
          
      },  
      {
        "_id":"4",
        "name":"Maize Seeds",
        "amt":"Rs:150/-",
        "img":"../../assets/img/maize.jpg"
      },
      {
        "_id":"4",
        "name":"Sugarcane Seeds",
        "amt":"Rs:200/-",
        "img":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRX8KkqvOzHDyj6QhWHQhqZ1NiSdeszgU-Uy6glnE_DGWSnWAMbSmyH0IWCiwach7uhE2ilfM5DdPBH--uWzZz7G5fBLLe5ngCIaqo79AE&usqp=CAE"
      }, 
       {
        "_id":"5",
        "name":"Cotton Seeds",
        "amt":"Rs:300/-",
        "img":"../../assets/img/cotton seeds.jpg"
          
      },
      {
        "_id":"6",
        "name":"Ladies Fingers",
        "amt":"Rs:100/-",
        "img":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3LQ23go4dbQR2KZnbFQMoV9_PxF7ahfeHSE1nnfZdv7XyEjXxVEn_J22KKrmUUOr7SbPpTSVBsl3H74dxl0IDTi-Ut3wW05QnU6iqtH3LdvK-f1ZRJv_cEg&usqp=CAE"
          
      },
      {
        "_id":"7",
        "name":"Coffee Seeds",
        "amt":"Rs:110/-",
        "img":"../../assets/img/coffee.jpg"
          
      }
  ]

  
  res.json(shop);
})






module.exports = router;

// router.post('/foodcrop',(req,res)=>
//                         {
//                           res.header("Access-Control-Allow-Origin","*");
//                           res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
                          
//                           const id=req.body.id;
//                           console.log(id);
//                           CropsData.findOne({_id:id})
//                           .then((crop)=>
//                           {
//                               res.send(JSON.parse(JSON.stringify(crop)));
//                           });
//                         })