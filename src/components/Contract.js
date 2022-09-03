import React from "react";
const Contract = () => {
  return (
    <div className="mx-32 my-10 font-serif width-75px height-100px">
      <div className="m-5 border shadow-xl rounded-lg bg-[#ffffff] filter-drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
      <div class="grid grid-cols-1 divide-y-2">
        <div className="m-5 rounded-lg bg-[#ffffff] width-75px height-100px">
          <div className="text-center text-[30px] bg-[#2196F3] text-decoration-line: underline py-2" id="head">
           <h5> FARMERS CONTRACT WITH ICS</h5>
          </div>
          <div className="text-center text-[20px]">
            <h5>Name of the ICS <br></br>and<br></br> Farmers name & Code No.</h5>
          </div>
        

        <div className="m-5 shadow-xl border rounded-lg bg-[#ffffff] filter-drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));">
          <ul className="list-decimal px-8 py-4 space-y-4 font-family: 'Sedan'font-style: normalfont-weight: 400font-size: 36pxline-height: 50px text-justify ">
            <h5>The ICS shall</h5>
            <li>
              Be responsible for co-ordinating the project and organic
              certification from an accredited organic certification body.
            </li>
            <li>
              Advise farmers on the organic farming methods and organize farmer
              training programmes
            </li>
            <li>
              Conduct the internal inspections and approval of organic farmers
            </li>
            <li>
              Buy the organic crop at the prevailing market price plus any
              possible organic premium (depending on market). <br></br>The ICS
              shall make the payments within one week of the purchase of the
              products from the farmer.
            </li>
            <li>
              Entertain the complaints and appeals of the farmers and do
              justification within reasonable time.
            </li>
          </ul>
          <ul className="list-decimal px-8 py-4 space-y-4 list-decimal px-8 py-4 space-y-4 font-family: 'Sedan'font-style: normalfont-weight: 400font-size: 36pxline-height: 50px text-justify ">
            <h5 className="px-8">The Farmer shall</h5>
            <li>
              Undertake organic farming as per the organic standards outlined in
              the Internal Organic Standard as well as the Internal Control
              System (ICS).
            </li>
            <li>
              Not use pesticides, herbicides or synthetic fertilisers on any
              crop within the certified organic fields.
            </li>
            <li>
              Attend all the training programmes organized by the Internal
              Control System.
            </li>
            <li> Maintain the farm records in the required format.</li>
            <li>
              Fulfil the conditions enforced by the internal control system and
              the accredited certification body.
            </li>
            <li>
              Endeavour to maintain and improve the ecosystem by not cutting
              trees and burning organic material and littering plastic wastes
              unnecessarily
            </li>
            <li>
              Sell the certified products to the Internal Control System only.
            </li>
            <li>
              In case of any violation of the organic standards in the project,
              the same shall be reported to the ICS.
            </li>
            <li>
              Accept the sanctions prescribed by the ICS in case of violations
              of the internal standards by the farmer.
            </li>
            <li>
              Shall allow inspections by persons authorised by ICS and the
              inspector of the accredited Certification Body and give access to
              the fields, stores and documents.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2   m-4 p-2  rounded-lg bg-[#ffffff] divide-x ">
          <div>
            <ul className="space-y-4 text-justify">
              <h5>Farmer</h5>
              <li>
                Signature :<input type="file"></input>
              </li>
              <li>
                Name: <input type="text"className="border"></input>
              </li>
              <li>
                Place : <input type="text"className="border"></input>
              </li>
              <li>
                Date: <input type="date"></input>
              </li>
            </ul>
          </div>
          <div className="px-10">
            <ul className="space-y-4 text-justify">
              <h5>For ICS</h5>
              <li>
                Signature :<input type="file"></input>
              </li>
              <li>
                Name: <input type="text" className="border"></input>
              </li>
              <li>
                Place : <input type="text"className="border"></input>
              </li>
              <li>
                Date: <input type="date"></input>
              </li>
            </ul>
          </div>
        </div>
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
            <p> </p>
      </div>
    </div>
    
  );
};

export default Contract;
