import React, { Component } from 'react'

export class Inspection extends Component{
    constructor(props){
        super(props)
        this.state =
        {
            Name:'',
            Insname:'',
            Address:'',
            PreFarmer:'',
            Farmerid:'',
            DOI:'',
            Tarea:'',
            Oarea:'',
            Noplots:'',
            Livingcond:'',
            r1:'',
            orgfeed:'',
            r2:'',
            vet:'',
            r3:'',
            orgfarm:'',
            r4:'',
            nonorgfarm:'',
            r5:'',
            noncrporgfarm:'',
            r6:'',
            seedmat:'',
            r7:'',
            orgstd:'',
            r8:'',
            intorgstd:'',
            r9:'',
            generalass:'',
            r10:'',
            burncrop:'',
            r11:'',
            prevent:'',
            r12:'',
            weed:'',
            r13:'',
            pest:'',
            r14:'',
            disease:'',
            r15:'',
            erosion:'',
            r16:'',
            farm:'',
            r17:'',
            activity:'',
            r18:'',
            assessment:'',
            r19:'',
            yield:'',
            r20:'',
            harvest:'',
            r21:'',
            process:'',
            r22:'',
            storage:'',
            r23:'',
            trans:'',
            r24:'',
            neigh:'',
            r25:'',
            nonorgact:'',
            r26:'',
            indus:'',
            r27:'',
            others:'',
            r28:'',
            minirisk:'',
            cond:'',
            comp:'',
            freerisk:'',


        }
    }
      
    
     handlenamechange= (event)=> {
        this.setState({
            Name: event.target.value
        })
     }
     handleInsnamechange=(event)=> {
        this.setState({
            Insname: event.target.value
        })
     }
     handleAddresschange=(event)=>{
        this.setState({
            Address: event.target.value
        }
        )
        
     }
    handlePreFarmerchange=(event)=>{
        this.setState({
            PreFarmer: event.target.value
        })
    }
    handleFarmeridchange=(event)=>{
        this.setState({
            Farmerid: event.target.value
        })
    }
    handleDOIchange=(event)=>{
        this.setState({
            DOI: event.target.value
        })
    }
    handleTareachange=(event)=>{
        this.setState({
            Tarea: event.target.value
        })
    }
    handleOareachange=(event)=>{
        this.setState({
            Oarea: event.target.value
        })
    }
    handleNoplotschange=(event)=>{
        this.setState({
            Noplots: event.target.value
        })
    }
    handleLivingcondchange=(event)=>{
        this.setState({
            Livingcond: event.target.value
        })
    }
    handler1change=(event)=>{
        this.setState({
            r1: event.target.value
        })
    }
    handleorgnoorgfeedchange=(event)=>{
        this.setState({
            orgnoorgfeed: event.target.value
        })
    }
    handler2change=(event)=>{
        this.setState({
            r2: event.target.value
        })
    }
   
    handlevetchange=(event)=>{
        this.setState({
            vet: event.target.value
        })
    }
    handler3change=(event)=>{
        this.setState({
            r3: event.target.value
        })
    }
    handleorgfarmchange=(event)=>{
        this.setState({
            orgfarm: event.target.value
        })
    }
    handler4change=(event)=>{
        this.setState({
            r4: event.target.value
        })
    }
    handlenonorgfarmchange=(event)=>{
        this.setState({
            nonorgfarm: event.target.value
        })
    }
    handler5change=(event)=>{
        this.setState({
            r5: event.target.value
        })
    }
    handlenoncrporgfarmchange=(event)=>{
        this.setState({
            noncrporgfarm: event.target.value
        })
    }
    handler6change=(event)=>{
        this.setState({
            r6: event.target.value
        })
    }
    handleseedmatchange=(event)=>{
        this.setState({
            seedmat: event.target.value
        })
    }
    handler7change=(event)=>{
        this.setState({
            r7: event.target.value
        })
    }
    handleorgstdchange=(event)=>{
        this.setState({
            orgstd: event.target.value
        })
    }
    handler8change=(event)=>{
        this.setState({
            r8: event.target.value
        })
    }
    handleintorgstdchange=(event)=>{
        this.setState({
            intorgstd: event.target.value
        })
    }
    handler9change=(event)=>{
        this.setState({
            r9: event.target.value
        })
    }
    handlegeneralasschange=(event)=>{
        this.setState({
            generalass: event.target.value
        })
    }
    handler10change=(event)=>{
        this.setState({
            r10: event.target.value
        })
    }
    handleburncropchange=(event)=>{
        this.setState({
            burncrop: event.target.value
        })
    }
    handler11change=(event)=>{
        this.setState({
            r11: event.target.value
        })
    }
    handlepreventchange=(event)=>{
        this.setState({
            prevent: event.target.value
        })
    }
    handler12change=(event)=>{
        this.setState({
            r12: event.target.value
        })
    }
    handleweedchange=(event)=>{
        this.setState({
            prevent: event.target.value
        })
    }
    handler13change=(event)=>{
        this.setState({
            r13: event.target.value
        })
    }
    handlepestchange=(event)=>{
        this.setState({
            pest: event.target.value
        })
    }
    handler14change=(event)=>{
        this.setState({
            r14: event.target.value
        })
    }
    handlediseasechange=(event)=>{
        this.setState({
            disease: event.target.value
        })
    }
    handler15change=(event)=>{
        this.setState({
            r15: event.target.value
        })
    }
    handleerosionchange=(event)=>{
        this.setState({
            erosion: event.target.value
        })
    }
    handler16change=(event)=>{
        this.setState({
            r16: event.target.value
        })
    }
    handlefarmchange=(event)=>{
        this.setState({
            farm: event.target.value
        })
    }
    handler17change=(event)=>{
        this.setState({
            r17: event.target.value
        })
    }
    handleactivitychange=(event)=>{
        this.setState({
            activity: event.target.value
        })
    }
    handler18change=(event)=>{
        this.setState({
            r18: event.target.value
        })
    }
    handleassessmentchange=(event)=>{
        this.setState({
            assessment: event.target.value
        })
    }
    handler19change=(event)=>{
        this.setState({
            r19: event.target.value
        })
    }
    handleyieldchange=(event)=>{
        this.setState({
            yield: event.target.value
        })
    }
    handler20change=(event)=>{
        this.setState({
            r20: event.target.value
        })
    }
    handleharvestchange=(event)=>{
        this.setState({
            harvest: event.target.value
        })
    }
    handler21change=(event)=>{
        this.setState({
            r21: event.target.value
        })
    }
    handleprocesschange=(event)=>{
        this.setState({
            process: event.target.value
        })
    }
    handler22change=(event)=>{
        this.setState({
            r22: event.target.value
        })
    }
    handlestoragechange=(event)=>{
        this.setState({
            storage: event.target.value
        })
    }
    handler23change=(event)=>{
        this.setState({
            r23: event.target.value
        })
    }
    handletranschange=(event)=>{
        this.setState({
            trans: event.target.value
        })
    }
    handler24change=(event)=>{
        this.setState({
            r24: event.target.value
        })
    }
    handleneighchange=(event)=>{
        this.setState({
            neigh: event.target.value
        })
    }
    handler25change=(event)=>{
        this.setState({
            r25: event.target.value
        })
    }
    handlenonorgactchange=(event)=>{
        this.setState({
            nonorhact: event.target.value
        })
    }
    handler26change=(event)=>{
        this.setState({
            r26: event.target.value
        })
    }
    handleinduschange=(event)=>{
        this.setState({
            indus: event.target.value
        })
    }
    handler27change=(event)=>{
        this.setState({
            r27: event.target.value
        })
    }
    handleotherschange=(event)=>{
        this.setState({
            others: event.target.value
        })
    }
    handler28change=(event)=>{
        this.setState({
            r28: event.target.value
        })
    }
    handleminiriskschange=(event)=>{
        this.setState({
            minirisk: event.target.value
        })
    }
    handlecondchange=(event)=>{
        this.setState({
            cond: event.target.value
        })
    }
    handlecompchange=(event)=>{
        this.setState({
            comp: event.target.value
        })
    }
    handlefreeriskchange=(event)=>{
        this.setState({
            freerisk: event.target.value
        })
    }
    handlechmkchange=(event)=>{
        this.setState({
            chmk: event.target.value
        })
    }
    handledatatypechange=(event)=>{
        this.setState({
            datatype: event.target.value
        })
    }

     render()
    {
     return (
        <form on submit={this.handleSubmit}>
            <div className="mx-32 my-10 font-serif width-75px height-100px">
            <div className="m-5 border shadow-xl rounded-lg bg-[#ffffff] filter-drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
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
            <div className="mx-32 my-10 font-serif width-75px height-100px">
        <div className="text-center text-[30px] bg-[#2196F3] text-decoration-line: underline py-2">
            <h1>Internal Inspection Checklist</h1>
        </div>
        <div className="m-5 border shadow-xl rounded-lg bg-[#ffffff] filter-drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
        <div>
            <tr>
         <label>Farmer's name</label>
         <input type='text' value={this.state.name} onChange={this.handlenamechange} className="border #000000 opacity-100%"/>
         </tr>
        </div>
        <div>
            <label>Internal Inspector Name</label>
            <input type='text' value={this.state.Insname} onChange={this.handleInsnamechange} className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Village/Taluka/Block</label>
            <input type='text' value={this.state.Address} onChange={this.handleAddresschange} className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Farmer present during inspection</label>
            <input type='text' value={this.state.PreFarmer} onChange={this.handlePreFarmerchange} className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Farmer ID</label>
            <input type='text' value={this.state.Farmerid} onChange={this.handleFarmeridchange}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Date Of Inspection</label>
            <input type='date' value={this.state.DOI} onChange={this.handleDOIchange}/>
        </div>
        <div>
            <h4>Farmer Details (organic or in-oragnic)</h4>
            <label>Total Area</label>
            <input type='text' value={this.state.Tarea} onChange={this.handleTareachange} className="border #000000 opacity-100%"/>
            <label>Organic Area</label>
            <input type='text' value={this.state.Oarea} onChange={this.handleOareachange} className="border #000000 opacity-100%"/>
            <label>Number of Plots</label>
            <input type='text' value={this.state.Noplots} onChange={this.handleNoplotschange} className="border #000000 opacity-100%"/>
        </div>
        <div>
            <p> </p>
            <p> </p>
            <p>. </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> .</p>
        </div>
        <div>
        <label>Checklist&emsp;</label>
        <lable>Yes/No&emsp;</lable>
        <label>Remarks</label>
        </div>
        <div>
            <label>Animal Husbandry</label>
        </div>
        <div>
            <label>Living condition of the animals on farm are acceptable</label>
            <select value={this.state.livingcond} onChange={this.handleLivingcondchange} className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r1} onChange={this.handler1change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Animals fed with organic or non-organic feed</label>
            <select value={this.state.orgnoorgfeed} onChange={this.handleorgnoorgfeedchange} className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r2} onChange={this.handler2change} className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>No medication without veterinary prescription </label>
            <select value={this.state.vet} onChange={this.handlevetChange} className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r3} onChange={this.handler3change} className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Farm and Farm Management</label>
        </div>
        <div>
            <label>Whole farm is managed organically (all crops) </label>
            <select value={this.state.orgfarm} onChange={this.handleorgfarmchange} className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r4} onChange={this.handler4change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>If also non-organic crops: conventional plots clearly separate from organic plots; storage of inputs is separate </label>
            <select value={this.state.nonorgfarm} onChange={this.handlenonorgfarmchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r5} onChange={this.handler5change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>If also non-organic crops: organic crop is not grown on non-organic plots (no parallel production)</label>
            <select value={this.state.noncrporgfarm} onChange={this.handlenoncrporgfarmchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r6} onChange={this.handler6change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Seeds and planting material used</label>
            <select value={this.state.seedmat} onChange={this.handleseedmatchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r7} onChange={this.handler7change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Farmer trained in organic standards</label>
            <select value={this.state.orgstd} onChange={this.handleorgstdchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r8} onChange={this.handler8change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Farmer aware of internal organic standard</label>
            <select value={this.state.intorgstd} onChange={this.handleintorgstdchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r9} onChange={this.handler9change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>General assessment of the farm with regard to sustainability</label>
            <select value={this.state.generalass} onChange={this.handlegeneralasschange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r10} onChange={this.handler10change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Burning of crop residues</label>
            <select value={this.state.burncrop} onChange={this.handleburncropchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r11} onChange={this.handler11change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Border and prevention of drift</label>
            <select value={this.state.prevent} onChange={this.handlepreventchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r12} onChange={this.handler12change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Weed control</label>
            <select value={this.state.weed} onChange={this.handlepreventchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r13} onChange={this.handler13change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Pest Management</label>
            <select value={this.state.pest} onChange={this.handlepestchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r14} onChange={this.handler14change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Disease Management</label>
            <select value={this.state.disease} onChange={this.handlediseasechange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r15} onChange={this.handler15change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Prevention of erosion</label>
            <select value={this.state.erosion} onChange={this.handleerosionchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r16} onChange={this.handler16change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Cleanliness of the farm</label>
            <select value={this.state.farm} onChange={this.handlefarmchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r17} onChange={this.handler17change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Implementation of all required activities </label>
            <select value={this.state.activity} onChange={this.handleactivitychange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r18} onChange={this.handler18change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>General assessment of crop </label>
            <select value={this.state.assessment} onChange={this.handleassessmentchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r19} onChange={this.handler19change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Yield estimate (list the yield estimate of the current crops)</label>
            <select value={this.state.yield} onChange={this.handleyieldchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r20} onChange={this.handler20change}className="border #000000 opacity-100%"/>
        </div>
        <div><label>Post Harvest Measures and Processing</label></div>
        <div>
            <label>Harvesting (no chemicals used, no co-mingling of the final produce)</label>
            <select value={this.state.harvest} onChange={this.handleharvestchange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r21} onChange={this.handler21change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Processing (only allowed ingredients used, no co-mingling/contamination)</label>
            <select value={this.state.process} onChange={this.handleprocesschange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r22} onChange={this.handler22change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Storage (no co-mingling / contamination)</label>
            <select value={this.state.storage} onChange={this.handlestoragechange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r23} onChange={this.handler23change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Transportation (no co-mingling / contamination)</label>
            <select value={this.state.trans} onChange={this.handletranschange}className="border #000000 opacity-100%">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            <input type='text' value={this.state.r24} onChange={this.handler24change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <h5>Risk Management</h5>
        </div>
        <div>
        <label>Risk of contamination from&emsp;</label>
        <lable>Low/Med/High&emsp;</lable>
        <label>Comments</label>
        </div>
        <div>
            <label>Neighbouring non-organic fields</label>
            <select value={this.state.neigh} onChange={this.handleneighchange}className="border #000000 opacity-100%">
            <option value="low">Low</option>
            <option value="med">Med</option>
            <option value="high">High</option>
            </select>
            <input type='text' value={this.state.r25} onChange={this.handler25change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Non-organic activities of same farm</label>
            <select value={this.state.nonorgact} onChange={this.handlenonorgactchange}className="border #000000 opacity-100%">
            <option value="low">Low</option>
            <option value="med">Med</option>
            <option value="high">High</option>
            </select>
            <input type='text' value={this.state.r26} onChange={this.handler26change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Industry, motorways, wastewater, etc.</label>
            <select value={this.state.indus} onChange={this.handleinduschange}className="border #000000 opacity-100%">
            <option value="low">Low</option>
            <option value="med">Med</option>
            <option value="high">High</option>
            </select>
            <input type='text' value={this.state.r27} onChange={this.handler27change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <label>Others (specify)</label>
            <select value={this.state.others} onChange={this.handleotherschange}className="border #000000 opacity-100%">
            <option value="low">Low</option>
            <option value="med">Med</option>
            <option value="high">High</option>
            </select>
            <input type='text' value={this.state.r28} onChange={this.handler28change}className="border #000000 opacity-100%"/>
        </div>
        <div>
            <textarea value= {this.state.minirisk} placeholder=">Measure taken to minimise the risk" onChange={this.handleminiriskschange}className="border #000000 opacity-100%"/>
        </div>
        <h6>Approval / Recommendations of the internal inspector (whole farm)</h6>
        <div>
            <label>Compliance with previous conditions</label>
            </div>
           <div> <checkbox value={this.state.cond} onChange={this.handlecondchange} className="border #000000 opacity-100%"></checkbox>
            <input type={"checkbox"}></input>good last
            <input type={"checkbox"}></input>partially/acceptable
            <input type={"checkbox"}></input>missing/not acceptable
            <input type={"checkbox"}></input>no conditions
        </div>
        <div>
            <label>Compliance this year</label>
        </div>
        <div> <checkbox value={this.state.comp} onChange={this.handlecompchange}className="border #000000 opacity-100%"></checkbox>
            <input type={"checkbox"}></input>to approvewithhout conditions
            <input type={"checkbox"}></input>to approve with conditions
            <input type={"checkbox"}></input>cannot be approved
        </div>
        <div>
            <textarea value= {this.state.freerisks} placeholder="Comments by internal inspector" onChange={this.handlefreeriskchange}className="border #000000 opacity-100%"/>
        </div>
        <div><h6>Declaration</h6></div>
        <div>
            <label>The farmer herewith confirms that he/she has complied with the internal organic standard and has 
                   declared all used inputs activities as stated in this form. The farmer has noted the set conditions.</label>
        </div>
        <div><label>Date & Signature Farmer</label>
        <input type="file"></input>
        <label>Date & Signature Internal Inspector</label>
        <input type="file"></input>
        </div>
        <div><h6>Approval Decision</h6></div>
        <div>
            <label>Compliance this year</label>
        </div>
        <div> <checkbox value={this.state.chmk} onChange={this.handlechmkchange}className="border #000000 opacity-100%"></checkbox>
            <input type={"checkbox"}></input>approved without conditions
            <input type={"checkbox"}></input>approved with conditions
            <input type={"checkbox"}></input>not approved
        </div>
        <div>
            <textarea value= {this.state.datatype} placeholder="Additional conditions or sanctions:" onChange={this.handledatatypechange}className="border #000000 opacity-100%"/>
        </div>
        <div><label>Date & Signature Approval Manager</label>
        <input type="file"></input>
        </div>
        </div>
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

export default Inspection