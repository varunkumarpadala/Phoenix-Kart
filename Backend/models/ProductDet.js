var mongoose=require('mongoose');

var ProductSchema=mongoose.Schema({
    Pid:{type:Number},
    img: { type: String },
    Ptitle:{type:String},
    Pprice:{type:Number},
    Prating:{type:Number},
    Pram:{type:Number},
    Phdd:{type:Number},
    Pos:{type:String},
    Psid:{type:Number},
    Psname:{type:String},
    Pbrand:{type:String},
    Pexdate:{type:Date}
});

module.exports=mongoose.model('product',ProductSchema);