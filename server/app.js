const express=require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const CropsData = require('./models/cropsdata');
const UserData = require('./models/user');
const api=require('./router/api');
const jwt=require('jsonwebtoken');
const multer=require("multer");

const port=4000;
const app=new express();

const router = require('./router/api');
app.use('/api',api);
app.use(cors());
app.use(bodyparser.json());



app.get('/',(req,res)=>
                        {
                            res.send("Hello From Server!!");
                        });
app.listen(port,()=>
                        {
                            console.log("Server running On local host:"+port);
                        });
                        app.post('/insert', function(req, res) {
                            res.header("Acess-Control-Allow-Origin", "*")
                            res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
                            console.log(req.body);
                          
                            var crop = {
                              Portrayal:req.body.crop.Portrayal,
                                  Crop:req.body.crop.Crop,
                                  SowingSeason:req.body.crop.SowingSeason,
                                  HarvestingSeason:req.body.crop.HarvestingSeason,
                                  CultivationPractice:req.body.crop.CultivationPractice,
                                  // Normallyaffecteddisease:req.body.crop.Normallyaffecteddisease,
                                  type:req.body.crop.type
                            }
                            console.log(crop)
                            //   res.send("yay!")
                            var product = new CropsData(crop);
                            product.save();
                          });

                          app.post('/product', function(req, res) {
                            res.header("Acess-Control-Allow-Origin", "*")
                            res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
                            const id = req.body.id;
                            console.log(id);
                            CropsData.findOne({ _id: id })
                                .then((product) => {
                                   res.send({product});
                                  
                                });
                          });

                          app.post('/updateproduct', function(req, res) {
                            res.header("Acess-Control-Allow-Origin", "*")
                            res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
                            console.log(req.body.product);
                          
                            var crop = {
                              _id: req.body.product['_id'],
                              Portrayal:req.body.product['Portrayal'],
                                  Crop:req.body.product['Crop'],
                                  SowingSeason:req.body.product['SowingSeason'],
                                  HarvestingSeason:req.body.product['HarvestingSeason'],
                                  CultivationPractice:req.body.product['CultivationPractice'],
                                  // Normallyaffecteddisease:req.body.product['Normallyaffecteddisease'],
                                  type:req.body.product['type']
                            }
                           
                          
                           
                            CropsData.updateOne({ _id: crop._id }, {
                                    $set: {
                                      Portrayal:crop.Portrayal,
                                      Crop:crop.Crop,
                                      SowingSeason:crop.SowingSeason,
                                      HarvestingSeason:crop.HarvestingSeason,
                                      CultivationPractice:crop.CultivationPractice,
                                      // Normallyaffecteddisease:crop.Normallyaffecteddisease,
                                      type:crop.type
                                    }
                          
                                })
                                .then((product) => {
                                    res.send("Updated one product");
                                });
                          });
                          
                          
                         app.post('/deleteProduct', function(req, res) {
                            res.header("Acess-Control-Allow-Origin", "*")
                            res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
                            const id = req.body.id;
                            console.log(req.body);
                            CropsData.deleteOne({ _id:id })
                                .then(function(products) {
                                    res.send({message:'Deleted product'});
                                });
                          });
                          
                          app.post('/signup', function(req, res) {
                            res.header("Acess-Control-Allow-Origin", "*")
                            res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
                          //     console.log(req.body);
                          
                            var userd = {
                                name: req.body.user.name,
                               email: req.body.user.email,
                                password: req.body.user.password,
                                address: req.body.user.address,
                                city: req.body.user.city,
                                mob:req.body.user.mob,
                                district:req.body.user.district,
                                zip:req.body.user.zip,
                                state:req.body.user.state,
                                type:req.body.user.type
                               
                            }
                            console.log(userd);
                          //     var userData = new UserData(user);
                          //    userData.save();
                          
                            let user=new UserData(userd)
                            user.save((err,registeredUser)=>{
                                if(err){
                                    console.error('error'+err);
                                }
                                else{
                                    let payload={subject:registeredUser._id}
                                    let token=jwt.sign(payload,'secretKey')
                          
                                   res.status(200).send({token})
                                } 
                            })
                          });
                          
                         app.post('/login', function(req, res) {
                            res.header("Acess-Control-Allow-Origin", "*")
                            res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
                            var email = req.body.user.email;
                            var password = req.body.user.password;
                            let status="invalid";
                            UserData.findOne({email:email,password:password},(err,user)=>{
                                if(err){
                                    console.error('error  '+err);
                                    res.send({status})
                                }
                                else{ 
                                    
                                    if(!user){
                                        console.log("err")
                                        res.send({status})
                                    
                                    }
                                else{
                                    let payload={subject:user._id,type:user.type}
                                    let token=jwt.sign(payload,'secretKey')
                          
                                   res.status(200).send({token})
                               
                                }
                          }
                          
                          })              })
                                        