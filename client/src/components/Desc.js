import {useParams} from 'react-router-dom';

function Desc({taskdata}) {
    const {id}= useParams();
    let tempdata;
    if(taskdata)
    console.log(id);
    
    if(taskdata){
        tempdata=taskdata.filter((td)=> td._id==id);
        console.log(tempdata);
    }

    if(taskdata)
    return ( 
        <div className="desc_content">
            <h1>Task Description</h1>
            <div className="task_body">
                <h3>{tempdata[0].task_title}</h3>
                <p>{tempdata[0].task_desc}</p>
            </div>
        </div>

     );
}

export default Desc;