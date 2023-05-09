var mongoose  =  require('mongoose');  
   
var empSchema = new mongoose.Schema({  
    Name:{  
        type:String  
    },  
    Email:{  
        type:String  
    },  
    Designation:{  
        type:String  
    },  
    Mobile:{  
        type:Number  
    }  
});  
   
module.exports = mongoose.model('empModel', empSchema);
   
