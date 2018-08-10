

var mongoose=require('mongoose');

var orderSchema=mongoose.Schema({
    // _id:{type:Object},
    Oid:{type:Number},
    Psid:{type:Number},
    Psname:{type:String},
    Pbrand:{type:String},
    Odate:{type:String},
    Pprice:{type:Number},
    Daddress:{type:String},
    Person:{type:String},
    Mobile:{type:Number},
    Exdate:{type:String},
    Pstatus:{type:String}
});

module.exports=mongoose.model('order',orderSchema);

