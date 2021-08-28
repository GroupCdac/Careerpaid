const mongoose = require('mongoose')
const schema= mongoose.Schema;

const users= new schema(
    {
        userid: { type: String, required: true,  },
        password:{type: String, required: true},
        type:{type: String, required: true},
        name:{type: String, required: true}
    }
);

const userModel = mongoose.model('users', users);
module.exports=userModel;

