import React from 'react'
import '../css/Activityhead.css'

import { Link } from 'react-router-dom'


function Activityhead() {
  return (
    <div>
      <div className="container-fluid activity">
        <div className="row ">
            <div className="col-md-12">
                
                
                <Link to = '/init'>
                INITIATIVES
                    </Link>
                    <br />
                    <Link to = "/abc">
                    ABC PROGRAM
                    </Link>
                    <br />
                    <Link to = "/save">
                    SAVE OUR HOMELESS ANIMALS
                    </Link>
                    <br />
                    <Link to = "/treat">
                     TREATMENTS
                    </Link>
                    <br />
                    <Link to = "/low">
                    LOW COST OPD
                    </Link>
                    <br />
                    <Link to = "/ipd">
                     IPD
                    </Link>
                    <br />
                    <Link to = "/volunteen">
                     VOLUNTEEN
                    </Link>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Activityhead;
