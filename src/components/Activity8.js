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
                IPD
            </h4>
            <p>
            Recuperating, injured, sick or sterilized animals are looked after by the PAWS team round the clock. Animal sitters provide the necessary comfort to them whereas our medical team provides adequate nursing.
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
