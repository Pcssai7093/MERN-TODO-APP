const express=module.require('express');
const router=express.Router();
const dbo=module.require('../datamodel');

// console.log(dbo);

router.route('/')
    .get((req,res)=>{

        // dbo.find
        res.send('home server page');
    });

router.route('/adddata')
    .post((req,res)=>{
        // res.send('post request')
        // res.send(req.body);
        // console.log(req.body);
        const data=new dbo({
            task_title:req.body.title,
            task_desc:req.body.desc
        });
        data.save()
        .then((result)=>{
            res.send(result);
        })
    });

router.route('/data')
    .get((req,res)=>{
        dbo.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        });
    });

router.route('/delete/:id')
    .get((req,res)=>{
        dbo.deleteOne({_id:req.params.id})
        .then((result)=>{
            console.log('task deleted');
        })
        .catch((err)=>{
            console.log(err);
        });
    })
    
    // * hello
module.exports=router;