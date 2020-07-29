const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/AgriarchiveList');      
const Schema=mongoose.Schema;               
var newFoodCropsSchema=new mongoose.Schema(       
                                    {
                                        Portrayal:String,
                                        Crop:String,
                                        SowingSeason:String,
                                        HarvestingSeason:String,
                                        CultivationPractice:String,
                                        // Normallyaffecteddisease:String,
                                        type:String
                                    }
                                    );
var CropData=mongoose.model('cropsdata',newFoodCropsSchema); 
                            
module.exports=CropData;