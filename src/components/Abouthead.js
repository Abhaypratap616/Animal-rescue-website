import React from 'react'
import '../css/About.css'
import { Link } from 'react-router-dom'


function Abouthead() {
  return (
    <div>
      <div className="container-fluid about">
        <div className="row ">
            <div className="col-md-12">
                
                <Link to = "/PET">
ABOUT PETANIMALS
</Link>
<br />
                <Link to = '/SPEAKS'>
                THE PRESIDENT SPEAKS
                    </Link>
                    <br />
                    <Link to = "/PAWS">
                    HOW ANIMALS COME TO PAWS
                    </Link>
                    <br />
                    <Link to = "/POLICY">
                    PAWS POLICY
                    </Link>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Abouthead
