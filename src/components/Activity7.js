import React from 'react'
import Activityhead from '../components/Activityhead'
import Mainmailfunction from '../components/Mainmailfunction'

export default function Activity() {
  return (
    <div>
      <div>
<Activityhead/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>
            VOLUNTEER
            </h4>
           <h5>
           WANT TO SAVE LIVES - VOLUNTEER NOW!
           </h5>
           <h6>
           Working hours for volunteers 12noon - 5:00pm
           </h6>
           <p>
           Pet Animal Welfare Society (PAWS) needs helping hands and public involvement to meet its aims and objectives.

There are many ways you can involve yourself with PAWS by enrolling for the following online and visiting our shelter or call for an appointment – Toll Free: 1800-11-5737
A. Dog Walker
B. Kennel Hygiene Maintenance: You can provide your services or contribute by donating Rs. 5000/- INR per month/kennel.
C. Pup Care Taker: Involves grooming, feeding and spending time with the pups.
D. Provide Foster Care for Puppies till adopted: Sponsor their initial immunization cost and provide shelter.
E. Volunteers for Pup Adoption Camp: Certificates will be provided on the basis of hours contributed for the cause.
F. Sponsor Indoor Patients Treatment: (Button for Donation)
G. Sponsor a Shelter Animal: For the upkeep of a permanent resident of the shelter, donate (button) Rs. 10,000/- INR per Month.
H. Volunteers for Collection of Donations: Help with regular collection of supplies from society, like food, rugs, newspapers, dog coats, bedding, towels, pet accessories etc.
           </p>
          </div>
          <div className="col-md-6">
<Mainmailfunction/>
          </div>
        </div>
      </div>
    </div>
  )
}
