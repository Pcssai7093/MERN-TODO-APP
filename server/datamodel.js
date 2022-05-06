const mongoose=module.require('mongoose');
const dataschema=mongoose.Schema;

const dbo=mongoose.model('datatables',new dataschema(
    {
        task_title:{
            type:String
        },
        task_desc:{
            type:String
        },
       
    },{timestamps:true}
));

module.exports=dbo;