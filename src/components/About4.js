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
                Pet Animal Welfare Society (PAWS) is a non- profitable animal welfare organization working for prevention of cruelty towards animals & care for Nature. PAWS is a registered society in India under society registration act xx1 of 1860.

Pet Animal Welfare society lays stress on responsible ownership.

PAWS encourages animal lovers and the people who have the time, finance and the will to maintain a healthy relationship with their pet/s.

PAWS lays emphasis on regular vaccination and health check ups of pets and a kind method of educating the pet to become socially acceptable.

PAWS recommends neutering of pets before the age of 6 months to control the population of unwanted puppies.

PAWS discourages the inbreeding of pets, which causes congenital defects and makes them handicapped for life.

PAWS encourages ethical breeding procedures to improve specific characters of the breed.

PAWS lays emphasis on tattoo/ tag for identification, which can be useful in case of loss or theft of the pet.

PAWS is emphatically against euthanasia of healthy animals but prescribes it for the animals having fatal contagious infections, which they can pass on to fellow animals and human being.

PAWS is not against racing of animals because animals also enjoy triumph, but the emphasis is on ethical training, care and management of racing animal.

PAWS being a new progressive organization is working to acquire more legal responsibility in this country to act against the lawbreakers and irresponsible pet owners.

PAWS is looking forward to help the suffering animals in a professional way. In the year 2012-13 PAWS will be working towards opening a full fledged Pet Hospital & Boarding Shelter by the name of IndoVET Hospital , which will provide low cost treatment to homeless animals and pets of the economically weaker sections of society.

IndoVET Hospital will render low cost services to the animals in distress on the roads and far away places.

IndoVET Hospital will employ allopathic, ayurvedic, homeopathic and holistic healing program.
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
