import React from 'react'
import Donatehead from '../components/Donatehead'
import Donateform from '../components/Donateform'
import '../css/Donatehead.css'
import '../css/Donate.css'
import qr from '../imgs/WhatsApp Image 2024-06-02 at 13.00.35_476f2f88.jpg'

export default function Donate() {
  return (
    <div>
      <div className="container-fluid donate">
        <div className="row">
         <div className="col-md-12">
            <Donatehead />
         </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Donateform />
          </div>
          <div className="col-md-6">
            <h6>
              You can also donate through UPI
            </h6>
            <img className='qr' src={qr} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}
