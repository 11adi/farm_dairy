import React, { Component } from 'react'
import Calendar from 'react-calendar'

export class Farm_Dairy extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',//name of farmer
         reason:'',//Which other season
         season:'rabi',//Season of the crop
         year:'',//Year of The Current Crop
         code:'',// code no.
         funit:'', //farm unit
         address:'',//address of the unit
         syear:'',//Year on which organic production was started by the Farmer
         DOJ:'',//Date of Joining ICS
         totaland:'',//Totsl Land in acre
         Technique:'',//Present production Technique
         Carea:'',//Crops under organic production and their area
         ststus:'',//Certification Status
         accredited:''//name of the certified accredited body
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleReasonChange = event => {
            this.setState({
                reason: event.target.value
            })
    }
    handleSeasonChange = event => {
        this.setState({
            season: event.target.value
        })
    }
    handleYearChange = event => {
        this.setState({
            year: event.target.value
        })
    }
    handleCodeChange = event => {
        this.setState({
            code: event.target.value
        })
    }
    handlefunitChange = event => {
        this.setState({
            funit: event.target.value
        })
    }
    handleaddressChange = event => {
        this.setState({
            address: event.target.value
        })
    }
    handleSYearChange = event => {
        this.setState({
            syear: event.target.value
        })
    }
    handleDOJChange = event => {
        this.setState({
            DOJ: event.target.value
        })
    }
    handletotalandChange = event => {
        this.setState({
            totaland: event.target.value
        })
    }
    handleTechniqueChange = event => {
        this.setState({
            Technique: event.target.value
        })
    }
    handleCareaChange = event => {
        this.setState({
            Technique: event.target.value
        })
    }
    handlestatusChange = event => {
        this.setState({
            Technique: event.target.value
        })
    }
    handleaccreditedChange = event => {
        this.setState({
            Technique: event.target.value
        })
    }

    handleSubmit= event => {
        alert('${this.state.year} ${this.state.season} ${this.state.reason} ${this.state.username}')
        event.preventDefault()
    }

  render() {
    return (
     <form on Submit={this.handleSubmit}>
        <div className="mx-32 my-10 font-serif width-75px height-100px">
        <div className="m-5 border shadow-xl rounded-lg bg-[#ffffff] filter-drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
        <div className="text-center text-[30px] bg-[#2196F3] text-decoration-line: underline py-2">
            <h1>Farm Dairy</h1>
        </div>
        <div className="m-5 border shadow-xl rounded-lg bg-[#ffffff] filter-drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
        <div>
            <label>Year of The Current Crop</label>
            <input type='date' value={this.state.Year} onChange={this.handleYearChange}/>
        </div>
        
        <div>
            <label>Season</label>
            <select value={this.state.season} onChange={this.handleSeasonChange}>
            <option value="rabi">Rabi</option>
            <option value="kharif">Kharif</option>
            <option value="anual">Anual</option>
            <option value="other">Other</option>
            </select>
        </div>
        <div>
        <label>Which Season</label>
            <textarea value= {this.state.reason} onChange={this.handleReasonChange}/>
        </div>
        <div>
            <input type='text' placeholder="Name of the Farmer" value={this.state.username} onChange={this.handleUsernameChange}/>
        </div>

        <div>
            <label>Code No.</label>
            <input type='text' value={this.state.code} onChange={this.handleCodeChange}/>
        </div>

        <div>
            <label>Name of the Farm Unit</label>
            <input type='text' value={this.state.funit} onChange={this.handlefunitChange}/>
        </div>
        <div>
            <label>Address of the Unit</label>
            <input type='text' value={this.state.address} onChange={this.handleaddressChange}/>
        </div>
        <div>
            <label>Year on which organic production was started by the Farmer</label>
            <input type='date' value={this.state.SYear} onChange={this.handleSYearChange}/>
        </div>
        <div>
            <label>Date on which farmer joins ICS</label>
            <input type='date' value={this.state.DOJ} onChange={this.handleDOJChange}/>
        </div>
        <div>
            <label>Total Land(acre)</label>
            <input type='text' value={this.state.totaland} onChange={this.handletotalandChange}/>
        </div>
        <div>
            <label>Present production Technique</label>
            <checkbox value={this.state.Technique} onChange={this.handleTechniqueChange}></checkbox>
            <input type={"checkbox"}></input>Fully Chemical
            <input type={"checkbox"}></input>Part organic -split
            <input type={"checkbox"}></input>Part organic -parallel
            <input type={"checkbox"}></input>Fully organic
            <input type={"checkbox"}></input>Others
        </div>
        <div>
        <label>Crops under organic production and their area</label>
            <textarea value= {this.state.Carea} onChange={this.handleCareaChange}/>
        </div>
        <div>
            <label>Certification Status</label>
            <select value={this.state.status} onChange={this.handlestatusChange}>
            <option value="registered">Registered ICS</option>
            <option value="In-conversion">In Conversion</option>
            <option value="certified">Certified</option>
            <option value="other">Other</option>
            </select>
        </div>
        <div>
            <label>Name of the accredited Certification body</label>
            <input type='text' value={this.state.accredited} onChange={this.handleaccreditedChange}/>
        </div>

        <button type="submit">Submit</button>
        </div>
        <div>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p>.</p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p>.</p>
            </div>
        </div>
        </div>
     </form>
    )
  }
}

export default Farm_Dairy