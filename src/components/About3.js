import React from 'react'
import '../css/About.css'
import '../css/Mainmailfunction.css'
import Mainmailfunction from './Mainmailfunction'
import Abouthead from '../components/Abouthead'


export default function About1() {
  return (
    <div>
     <div>
<Abouthead/>
     </div>
      <div className="container details">
        <div className="row">
            <div className="col-md-7">
                <p>
                The shelter accepts any domestic animal that an owner can no longer care for, but this can be an unhappy decision for the owner. Financial or living conditions change drastically and people feel they can no longer provide an appropriate home for the pet. Our team tries to make the process as easy as possible for the owner and his pet both. Sometimes a pet is purchased after the spur of the moment decision or as a gift. Sometime afterwards the owner discovers that caring for the pet is much more work than expected. Such unwanted animals are left at the shelter.
Sometimes animals are lost and are brought to the shelter by our volunteers, or helpful people who find them wandering on the streets aimlessly. Every effort is made by the society to reunite the animal with its owner. Reports of lost and found animals are kept on file. Report of missing or found are placed in papers and then if the homeless animal's owner is not found or the animal is not claimed by its owner every effort is made to place the animal in a new home, but we wait for 21 days before doing so.
Cruelty/ neglect cases: Sometimes animals are confiscated from abusive owners and brought to the shelter by government authorities. Though our society has no legal authority to intervene on behalf of abused and neglected animals, but our work is to provide necessary medical assistance and care once it is there.
Sometimes the owner dies and no one in the family wants to (or can) keep the pet. In some rare cases, where due to the sad, unseen death of an entire household, the traumatized animal is left at the shelter by the local police. It becomes our duty to comfort the animal and provide for it. Whenever the animal seems ready, we find a good home for it.
                </p>
            </div>
            <div className="col-md-5">
                <div> <Mainmailfunction/></div>
               
            </div>
        </div>
      </div>
    </div>
  )
}
