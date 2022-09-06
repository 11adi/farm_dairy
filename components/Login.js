import React from "react";
import ICS from "../assets/ICS.jpeg";
import { Component } from "react";

export class Login extends Component{
  constructor(props){
      super(props)
      this.state ={
        urid:'',
        urpas:''
      }
    }
    handleuridchange= (event)=> {
      this.setState({
          urid: event.target.value
      })
   }
   handleurpaschange= (event)=> {
    this.setState({
        urpas: event.target.value
    })
 }
 render(){
  return (
    <div className="mx-80 border bg-[#ffffff] my-10 font-serif width-75px height-100px">
    <div className="m-5 mx-30 border shadow-xl rounded-lg bg-[#BFE3FF] filter-drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
    <div className="text-center text-[30px] bg-[#2196F3] text-decoration-line: underline py-2">
        </div>
        <div className=" border">
        <div className="flex justify-center">
          <img src={ICS} alt="" className="my-6  opacity-50 relative" />
        </div>
        <div>
            <select className="bg-[#000000] text-white w-80 text-center">
            <option value="frmer">Farmer</option>
            <option value="inspector">Inspector</option>
            </select>
        </div>
        <><br></br></>
        <div>
          <input type="text" placeholder="User ID" className="bg-[#000000] text-white w-80 text-center"  value={this.state.urid} onChange={this.handleuridchange}></input>
        </div>
        <><br></br></>
        <div>
          <input type="password" placeholder="Password" className="bg-[#000000] text-white w-80 text-center"  value={this.state.urpas} onChange={this.handleurpaschange}></input>
        </div>
        <><br></br></>
        <div>
          <button className="border w-80 h-6 text-white bg-[#000000] text-center">
            log in
          </button>
        </div>
        <><br></br></>
        <div>
          <button className="border w-80 h-6 text-white bg-[#000000] text-center">
            Sign in
          </button>
        </div>
        <div>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p>.</p>
        </div>
        <div>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
        </div>
    </div>
    </div>
    </div>
  )
}
}

export default Login;
