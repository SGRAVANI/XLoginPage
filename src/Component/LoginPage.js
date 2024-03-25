import React, { useState } from 'react'
import styles from "./style.module.css"
// import Child from './Child';
export default function LoginPage() {
    let [ip,setIp]=useState({user:"",pwd:""})
    let [f,setF]=useState(false)
    let [sbmtData,setSbmtData]=useState({})
    function handleSubmit(e)
    {
    e.preventDefault();
    setF(true)
    //data={fname:ip.fname,lname:ip.lname}
    setSbmtData(ip)
   //  setIp({fname:"",lname:""})
    console.log("data is submitted")
    }
    function handleChange(e){
        setIp((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
        
    }

  return (
    <div>
      
    <form className={styles.container} onSubmit={handleSubmit}>
    <h1>Login Page</h1>
    <div className={styles.inputContainer}>
        <label htmlFor='user'> Username:</label>
        <input type="text" required name="user" id="user" onChange={handleChange} value={ip.fname} placeholder='username'/>

    </div>
    <div className={styles.inputContainer}>
        <label htmlFor='pwd'> Password:</label>
        <input type="password" required name="pwd" id="pwd" onChange={handleChange} value={ip.lname} placeholder='password'/>

    </div>
    <div className={styles.buttonContainer}>
        <button type="submit" >Submit</button>
    </div>
    </form>
    
   {/* {f&& <Child data={sbmtData} />}         */}
    </div>
  )
}
