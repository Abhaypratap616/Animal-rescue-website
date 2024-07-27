import React from 'react'
import human from '../imgs/human.jpg'
import Abouthead from '../components/Abouthead';
import '../css/About.css'
import donate from '../components/Donatehead'
import Donatehead from '../components/Donatehead';

function About2() {
  return (
    <div>
      <div>
<Abouthead/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6>
            PET ANIMAL WELFARE SOCIETY
            </h6>
            <img className='sideimg' src={human} alt="" />
          </div>
          <div className="col-md-6">
            <h6>
            WHO WE ARE
            </h6>
            <h4>
            WE ARE PAWS
            </h4>
            <h6>
            PAWS vision is to become India's most blessed organization for pet welfare and complete and dedicated care center for animals in distress.
            </h6>
            <p>
            Pet Animal Welfare Society (PAWS) is a non–government, non – profitable, registered animal welfare organization working for prevention of cruelty towards animals and a better environment for mankind. PAWS is recognized by Animal Welfare Board of India which is a govt. body.

PAWS came into existence in 1998 and started working the very same day. The purpose of the society is to make people aware about the care, management and nutrition of pet and homeless animals. For PAWS all animals on this planet are the pets of the society and hence we need to realize their importance in our everyday life and do our bit in exchange.

PAWS conducts regular awareness programs in and around Delhi besides its anti rabies camps for homeless animals. The society is doing its bit to help eradicate rabies and control the homeless animals population by immunization and undertaking the ABC (Animal Birth Control) Program.

PAWS is against cruelty to animals and use of animals in the lab and circus.

PAWS discourages the use of plastic bags and encourages people to plant trees.

PAWS promote vegetarianism and educates people about diseases of zoomatic importance.

PAWS is for preservation of wildlife and it makes people aware of the existing animal laws of this country.

PAWS needs funds for all its future and present projects. Do extend your helping paws for PAWS.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Donatehead/>
      </div>

    </div>
  )
}

export default About2;
