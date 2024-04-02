import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AddTodo.css"

export const AddTodo = (props) => {
 
    const  [job , setJob] = useState("");
    const[date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const submit = (e) =>{
        e.preventDefault();
        if(!job || !date ){
            alert("Please Fill The Job List")
        }
        else{
        props.addTodo(job , date);
        setJob('');
        setDate("");
        }
    }

    const handleTodo = () => {
      navigate('/Dos');

    }


    const FinishedTodos =() => {
    navigate ( "/FinishedTodos");
    }

    const Messanger = () =>{
      if(!job || !date ){
        alert("Please Fill The Job List")
    }
    else
     { setMessage("TODO Submit Sucessfully")
      setTimeout(() => {
        setMessage(""); // Clear success message after a while
         navigate("/Dos");
      }, 20000);}
    }


    return (
      <div>
          <p style={{ fontSize: "20px", fontWeight: "bold", color: message.includes('successful') ? 'green' : 'red' }}>
          {message}
        </p>
        <div className='container '>
      
            <h3 style={{
            marginTop:"45px"
            }}>Add Your Daily Work </h3>
        <form onSubmit={submit} className='form'>
        <div className="row mb-3">
          <label htmlFor="job" className="col-sm-6 col-form-label">Job</label>
          <div className="col-sm-10">
            <input type="text"  value={job} onChange={(e)=>{setJob(e.target.value)}} className="form-control" id="job" style={{width:"24vw"}}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="discription" className="col-sm-6 col-form-label">Date</label>
          <div className="col-sm-10">
            <input type="date" value={Date} onChange={(e)=>{setDate(e.target.value)}} className="form-control" id="date"style={{width:"24vw"}}/>
          </div>
        </div>

        
        <button type="submit" className="btn btn-l" onClick={Messanger}>Add Job</button>
      </form>

   
      </div>
    
      < button style={{background:"transparent", width:"40vw", border: "none", color: "white", backgroundColor:"#ff7200" , borderRight:"1px solid black", marginBottom:"1pc", marginRight:"14pc", marginLeft:"11px" , borderRadius:"5pc"}} onClick={handleTodo}>TODOs</button>
        <button style={{background:"transparent", width:"40vw",border: "none", color: "white", backgroundColor:"#ff7200",borderRadius:"5pc"}} onClick={FinishedTodos}>FINISHED</button>
        </div>
      
        
        )
}
