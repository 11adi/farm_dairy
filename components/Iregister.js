import React from "react";
import { Component } from "react";
import ICS from "../assets/ICS.jpeg";
import '../components/Iregister.css';
export class Iregister extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      Fname:''
    }
  }
  handleFnamechange=event=>{
    this.setState({
      Fname:event.target.value
    })
  }
  handleMnamechange=event=>{
      this.setState({
        Mname:event.target.value
      })
    }
    handleLnamechange=event=>{
      this.setState({
        Lname:event.target.value
      })
    }
    handleemailinchange=event=>{
      this.setState({
        emailin:event.target.value
      })
    }
    handlepasswochange=event=>{
      this.setState({
        passwo:event.target.value
      })
    }
    handleconpasswochange=event=>{
      this.setState({
        conpasswo:event.target.value
      })
    }
    handleIaadharchange=event=>{
      this.setState({
        Iaadhar:event.target.value
      })
    }
    handleIuniqueIdchange=event=>{
      this.setState({
        IuniqueId:event.target.value
      })
    }
    handleCnamechange=event=>{
      this.setState({
        Cname:event.target.value
      })
    }
    handleGSTNOchange=event=>{
      this.setState({
        GSTNO:event.target.value
      })
    }
    handleSignup= event => {
      alert('${this.state.year} ${this.state.season} ${this.state.reason} ${this.state.username}')
      event.preventDefault()
  }
    

render(){
  return (
    <div className="mx-80 border bg-[#ffffff] my-10 font-serif width-75px height-100px">
    <div className="m-5 mx-30 border shadow-xl rounded-lg bg-[#BFE3FF] filter-drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
    <div className="text-center text-[30px] bg-[#2196F3] py-2">
      <h1>Inspector Registration</h1>
    </div>
    <div className="container">
          <img src={ICS} alt="ICSR" className="my-40 opacity-10" />
          <div className="text-block-1">
          <input type="text" placeholder="First Name" className="bg-[#ffffff] text-black w-80 text-center px-38 py-2 " value={this.state.Fname} onChange={this.handleFnamechange}  ></input>
    </div>
    <div className="text-block-2">
          <input type="text" placeholder="Middle Name" className="bg-[#ffffff] text-black w-80 text-center px-38 py-2 "  value={this.state.Mname} onChange={this.handleMnamechange}></input>
    </div>
    <div className="text-block-3">
          <input type="text" placeholder="Last Name" className="bg-[#ffffff] text-black w-80 text-center px-38 py-2 "  value={this.state.Lname} onChange={this.handleLnamechange}></input>
    </div>
    <div className="text-block-4">
          <input type="mail" placeholder="E-mail" className="bg-[#ffffff] text-black w-80 text-center px-38 py-2 "  value={this.state.mailin} onChange={this.handleemailinchange}></input>
    </div>
    <div className="text-block-5">
          <input type="password" placeholder="Password" className="bg-[#ffffff] text-black w-80 text-center px-38 py-2 " value={this.state.passwo} onChange={this.handlepasswochange}></input>
    </div>
    <div className="text-block-6">
          <input type="password" placeholder="Confirm Password" className="bg-[#ffffff] text-black w-80 text-center px-38 py-2"  value={this.state.conpasswo} onChange={this.handleconpasswochange}></input>
    </div>
    <div className="text-block-7">
          <input type="text" placeholder="Aadhar No." className="bg-[#ffffff] text-black w-80 text-center px-38 py-2"  value={this.state.Iaadhar} onChange={this.handleIaadharchange}></input>
    </div>
    <div className="text-block-8">
          <input type="text" placeholder="Unique ID" className="bg-[#ffffff] text-black w-80 text-center px-38 py-2" value={this.state.IuniqueId} onChange={this.handleIuniqueIdchange} ></input>
    </div>
    <div className="text-block-9">
          <input type="text" placeholder="Company Name" className="bg-[#ffffff] text-black w-80 text-center px-38 py-2"  value={this.state.Cname} onChange={this.handleCnamechange}></input>
    </div>
    <div className="text-block-10">
          <input type="text" placeholder="GST No." className="bg-[#ffffff] text-black w-80 text-center px-38 py-2" value={this.state.GSTNO} onChange={this.handleGSTNOchange} ></input>
    </div>
    <div className="submit-12">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent rounded w-60" type="Submit">
          Sign Up
        </button>
        </div>
    </div>
    </div>
    </div>
  )
}
}
export default Iregister
