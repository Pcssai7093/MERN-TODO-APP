import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


function Addtask() {

    const [title1,settitle1]=useState('');
    const [desc1,setdesc1]=useState('');
    const history=useHistory();

    const data={
        title:'t1',
        desc:'d1'
    }
    
    function handlesubmit(e){
        e.preventDefault();
        console.log('before post');

            axios.post('http://localhost:3001/adddata',{
                title:title1,
                desc:desc1
            })
            .then((response)=>{
                // console.log('post succuss');
                // console.log(response);
                history.push('/')
            })
            .catch((err)=>{
                console.log(err);
            })
           
    }

    return ( 
        <div className="Addtask_content">
            <h1>Add task</h1>
        <form onSubmit={(e)=>{
            handlesubmit(e);
           
        }}>
            <label htmlFor="">Task Title</label>
            <input type="text" onChange={(e)=>{
                settitle1(e.target.value);
            }} />
            <label htmlFor="">Task Description</label>
            <textarea onChange={(e)=>{
                setdesc1(e.target.value);
            }}></textarea>
            <br/>
            <button type="submit">Add</button>
        </form>
        <p>{title1}</p>
        <p>{desc1}</p>
        </div>
    
     );
}

export default Addtask;