import React from 'react'
import '../css/Emergency.css'
import Mainform from '../components/Mainmailfunction'

export default function Emergency() {
  return (
    <div>
      <div className="container-fluid emergency">
        <div className="row">
          <div className="col-12">
            <h3>EMERGENCY</h3>
            <p>PAWS has a 24/7 emergency helpline number for animals in distress. We have a team of dedicated rescuers who are trained to handle emergency situations. We also have a network of volunteers who help us in rescuing animals in distress.</p>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          
          <div className="col-md-5">
            <h4>PAWS EMERGENCY HELPLINE NUMBER</h4>
            <h1>EMERGENCY CALL: 011-26895737</h1>
            <p>PAWS has a 24/7 emergency helpline number for animals in distress. We have a team of dedicated rescuers who are trained to handle emergency situations. We also have a network of volunteers who help us in rescuing animals in distress.</p>
            <h4>PAWS EMERGENCY RESCUE TEAM</h4>
            <p>PAWS has a dedicated team of rescuers who are trained to handle emergency situations. Our team is equipped with all the necessary tools and equipment to handle emergency situations. We also have a network of volunteers who help us in rescuing animals in distress.</p>
            <h4>PAWS EMERGENCY RESCUE VEHICLES</h4>
            <p>PAWS has a fleet of emergency rescue vehicles that are equipped with all the necessary tools and equipment to handle emergency situations. Our vehicles are equipped with first aid kits, oxygen cylinders, and other essential equipment to handle emergency situations.</p>
          </div>
          <div className="col-md-7">
            <Mainform/>
            </div>
        </div>
      </div>
      

    </div>
  )
}
