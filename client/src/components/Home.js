import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Homestyles } from '../stylecomponents/Home.style';

function Home({taskdata}) {

    function handledelete(id){
        console.log(`this ${id} must be delete`);

        axios.get('http://localhost:3001/delete/'+id)
        .then((res)=>{
          console.log('task data deleted');    
        }).catch((err)=>{
        console.log(err);
        });
        
    }

    useEffect(()=>{
        // console.log(taskdata);
    },[taskdata])

        if(taskdata)
        return (
          
        <div className="home_content">
              <Homestyles/>
            <h1>Your Tasks</h1>
                    {
                    taskdata.map((td)=>(
                        <div className="task_body" key={td._id}>
                             <Link to={"/data/"+td._id} key={td._id} >
                        <p>{td.task_title}</p>
                        </Link> 
                    
                            <button onClick={()=>{
                                handledelete(td._id);
                            }}>Delete task</button>
                       </div>    
                    ))
                    }
            <div>
                <Link to='/addtask'><button>Add task</button></Link>
            </div>
        </div>
     );
}

export default Home;