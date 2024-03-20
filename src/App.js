import { useState,useEffect } from "react";
import Axios from 'axios';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

function App() {
    const{register,handleSubmit}=useForm();
    const onSubmit=(data)=>{
     Axios.post("http://20.244.56.144/products/auth",{data}).then(res=>console.log(res)).catch(err=>console.log(err));
    }
    const schema=yup.object().shape({
      CompanyName:yup.string().required,
      OwnerName:yup.string().required(),
      rollNumber:yup.string().required(),
      Email:yup.string().email().required(),
      Code:yup.number().positive().integer().min(10).required(),
    })
  return (
  <>
  <div >
  <form onSubmit={handleSubmit(onSubmit)}>
   <label>companyName</label>
   <input type="text" className="companyName" placeholder="CompanyName" {...register("CompanyName")}/>
   <br></br>
   <br></br>
    OwnerName:<input type="text" className="Oname" placeholder="OwnerName..." {...register("OwnerName")}/>
    <br></br>
    <br></br>
    rollNo:<input type="text" className="rollNumber" placeholder="rollNumber" {...register("rollNumber")}/>
    <br></br>
    <br></br>
    email:<input type="email" className="email" placeholder="Email..." {...register("Email")}/>
    <br></br>
    <br></br>
     accessCode:<input type="text" placeholder="Code...." {...register("Code")}/>
     <br></br>
     <br></br>
     <input type="submit" ></input>
      </form>
      </div>
  </>
  );
}

export default App;
