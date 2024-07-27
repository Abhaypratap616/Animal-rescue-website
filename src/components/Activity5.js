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
            TREATMENTS
            </h4>
            <p>
            PAWS runs a low cost sterilization and vaccination center for pets and homeless animals in Vasant Kunj, New Delhi. Features of the shelter include indoor/ outdoor runs, cages, isolation areas and surgical facilities. The shelter provides x-ray , laboratory and intensive care facilities for animals with serious conditions.

All dogs have access to large outdoor runs to maintain healthy muscle tone. Quarantine cages segregate sick animals from the general population. Pregnant bitches and puppies are kept in separate kennels, whereas cats are housed in a separate enclosure.

All animals are provided a healthy and balanced diet .The shelter also provides adoption facility for abandoned dogs and cats. With a dedicated team of veterinarians, volunteers and staff we try to provide warmth and comfort to the sick and homeless animals.
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
