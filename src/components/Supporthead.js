import React from 'react'
import '../css/Supporthead.css'
import { Link } from 'react-router-dom'
function Supporthead() {
  return (
    <div>
      <div className="container-fluid support">
        <div className="row ">
            <div className="col-md-12">  
                <Link to = "/support ">
BECOME A CORPORATE SUPPORTER
</Link>
<br />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Supporthead
