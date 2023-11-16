import React, { useState } from "react";
export const Person = ()=>{

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [mobile,setMobile]=useState();
    const [email,setEmail]=useState("");
    const [city,setCity]=useState("");
    const [pin,setPin]=useState();

    return(<div className="main">
    <div className="child">
      <input type="text" placeholder="Enter First Name" onChange={(e)=>setFname(e.target.value)} />
      <input type="text" placeholder="Enter Last Name" onChange={(e)=>setLname(e.target.value)} />
      <input type="number" placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)} />
      <input type="email" placeholder="Enter Email Id" onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder="Enter City" onChange={(e)=>setCity(e.target.value)} />
      <input type="number" placeholder="Enter Pincode"onChange={(e)=>setPin(e.target.value)} />
      
    </div>
   
        <div className="sub">
            <h1>Personal Details</h1>
            <h3>Full Name: {fname} {lname}</h3>
            <h3>Mobile No: {mobile}</h3>
            <h3>Email Id: {email}</h3>
            <h3>City: {city}</h3>
            <h3>Pincode: {pin}</h3>
        </div>
        </div>
    )
}