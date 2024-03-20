import {useState}from 'react';
import Axios from 'axios';
const Question2=()=>
{
    const[id,Setid]=useState("");
    const[data,SetData]=useState([]);
    const[head,SetHead]=useState("Numbers");

  function handleChange(event)
  {
     Setid(event.target.value);
   }
   function handleData()
   {
    if(id=="e")
    {
        Axios.get(`http://20.244.56.144/numbers/even`).then((res)=>{
            SetData(res.data.numbers);
            SetHead("Even")
         })
    }
    if(id=="f")
    {
        Axios.get(`http://20.244.56.144/numbers/fibo`).then((res)=>{
            SetData(res.data.numbers);
            SetHead("Fibonooci")
     })
    }
    if(id=="p")
    {
        Axios.get(`http://20.244.56.144/numbers/primes`).then((res)=>{
            SetData(res.data.numbers);
            SetHead("PrimeNumber")
         })
    }
    if(id=="r")
    {
        Axios.get(`http://20.244.56.144/numbers/rand`).then((res)=>{
          SetData(res.data.numbers);
          SetHead("Random Number")
         })
    }
   }
    return(
        <>
           Enter Id <input type='text' placeholder='EnterTheId' onChange={handleChange}></input>
           <button onClick={handleData}>Fetch</button>
           <h1>{head}</h1>
           <ul style={{listStyle:'none'}}>
           {
             data.map((index)=>{
                return(
                 <li style={{backgroundColor:'red'}}>{index}</li>
                )
             })
           }
           </ul>
        </>
    )
}
export default Question2;