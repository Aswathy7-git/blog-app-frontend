import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {

    const [input,setInput]=new useState(
        {"name":"","phone":"","email":"","password":"","cnfPass":""}
    )

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }


    const readValue=()=>{
        if(input.password==input.cnfPass){

    
        let newInput={"name":input.name,"phone":input.phone,"email":input.email,"password":input.password,"cnfPass":input.cnfPass}

            axios.post("http://localhost:3030/signup",newInput).then(
                (response)=>{
                    console.log(response.data)

                    if (response.data.status=="success"){

                        alert("Registered Successfully")
                        setInput(
                            {"name":"","phone":"","email":"","password":"","cnfPass":""}
                        )

                    }else{
                        alert("Email id already exist")
                        setInput(
                            {"name":"","phone":"","email":"","password":"","cnfPass":""}
                        )
                    }
                }
            ).catch()

        }else{
            alert("password and confirm password doesnt match!!")
        }
    }
  return (
    <div>

<div className="container">
    <div className="row g-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Phone No</label>
                    <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="text" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input type="text" className="form-control" name='cnfPass' value={input.cnfPass} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <button onClick={readValue} className="btn btn-success">Register</button>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <a href="/signup" className="btn btn-primary">Back to login</a>
                </div>

            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default SignUp