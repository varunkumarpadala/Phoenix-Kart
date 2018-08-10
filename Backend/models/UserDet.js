var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
    email:{type:String},
    username:{type:String},
    pass:{type:String},
    mobile:{type:Number},
    role:{type:String}
});

module.exports=mongoose.model('user',userSchema);

