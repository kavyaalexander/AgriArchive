const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/AgriarchiveList');      
const Schema=mongoose.Schema;               
const userSchema=new mongoose.Schema(       
                                    {
                                    name:String,
                                    email:String,
                                    password:String,
                                    address:String,
                                    city:String,
                                    mob:String,
                                    district:String,
                                    zip:String,
                                    state:String,
                                    type:String
                                    }
                                    );
var userData=mongoose.model('userdata',userSchema); 
                            
module.exports=userData;