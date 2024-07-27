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
            LOW COST OPD
            </h4>
            <p>
            PAWS has a low cost OPD for animals in distress and pets of the economically weaker section. PAWS volunteers bring in homeless animals that require medical attention. Injured and abandoned animals are picked up now on a cost to cost basis and brought to this center. Under the PAWS policy, once the sick animal has recovered it is released in its own territory after sterilization and vaccination against rabies. We have done more than 41000 FREE opd cases till date.
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
