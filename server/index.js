const express=module.require('express');
const mongoose=module.require('mongoose');
const app=new express();
const dbo=module.require('./datamodel');
const cors=module.require('cors');
const axios =module.require('axios');
const bodyparser=module.require('body-parser');


app.use(bodyparser.urlencoded({extended:true}));

app.use(cors());

app.use(express.json());
// * routes
const crud_router=module.require('./Routes/crud');
app.use('/',crud_router);


// * atlas connection
const dbid='mongodb+srv://Chandra7093:Raja7093@todoapp.ncq4n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbid)
.then(async (res)=>{
    console.log('db connected');
   await app.listen(3001,async(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('server is running at 3001 successfully');
        
        }

    });
})
.catch((err)=>{
    console.log(err);
});

app.post('/p1',(req,res)=>{
    res.send("post request");
    console.log(req.body);
})