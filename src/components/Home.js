import React from 'react'
import '../css/Home.css'
import { MdOutlinePets } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { BiDonateBlood } from "react-icons/bi";
import img2 from '../imgs/Screenshot 2024-05-31 140549.png'
import { Link } from 'react-router-dom';

export default function Donate() {
  return (
    <div>

      <div className="containter-fluid mainphoto">
        <div className="row rowheight">
          <div className="col-md-9">
           
          </div>
          <div className="col-md-3  write">
            <h4 className=''>Homeless Animals</h4>
            <h6 className=''>SUPPORT the CAUSE..!
</h6>
            <p className=''>The PAWS team feed, treat, foster and sterilize homeless dogs and Cats before releasing them in their respective territories. All this needs funds, emotions apart.</p>
            <Link className='btn-1' to = "/donateform">Donate</Link>
          </div>
        </div>
      </div>

<div className="next-2">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h4>Our Mission</h4>
        <p>PAWS is a non-profit organization that is dedicated to rescuing and rehabilitating abandoned and abused animals. Our mission is to provide a safe and loving environment for animals in need, and to help them find their forever homes.</p>
      </div>
      <div className="col-md-4">
        <h4>Our Vision</h4>
        <p>Our vision is to create a world where every animal is treated with kindness and compassion. We believe that all animals deserve to be loved and cared for, regardless of their breed or background.</p>
      </div>
      <div className="col-md-4">
        <h4>Our Values</h4>
        <p>At PAWS, we are committed to upholding the highest standards of animal welfare. We believe in treating all animals with respect and dignity, and in providing them with the care and support they need to live happy and healthy lives.</p>
      </div>

  </div>
</div>

    </div>
    <div className="next-3">
      <div className="container">
        <div className="row">
          <div className="col- md-12">
            <h6>HOW TOGETHER WE CAN MAKE A DIFFERENCE</h6>
          </div>
          <div className="col-md-12">
            <h4>PAWS HAS HELPED AND SAVED LIVES OF THOUSANDS OF HOMELESS ANIMALS AND NOW WE NEED YOUR HELP TO CONTINUE THIS.</h4>
          </div>
          <div className="row">
            <div className="col-md-3 size">
              {<MdOutlinePets/>}
              <p>ADOPT A PET</p>
              <p>There are so many takers for pedigree dogs. But our Desi Indian breed look upto you.. Make a difference!</p>
            </div>
            <div className="col-md-4">
              {<CiFaceSmile/>}
              <p>BECOME VOLUNTEER</p>
              <p>As a volunteer at our shelter, you may offer a variety of support like providing foster care for puppies till adopted!</p>
              
              </div>
              <div className="col-md-4">
              {<BiDonateBlood/>}
              <p>GIVE DONATION</p>
              <p>All donations are exempted from Income Tax under 80G. We also accept Foreign funds under FCRA act 1976.</p>
              </div>


          </div>
          <div className="row">
            <div className="col-md-12">
              <span>
                <button>CONTACT FOR ADOPTION</button>
              </span>
              <span>
                <button>JOIN US AS VOLUNTEEN</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
<div className="full-youtube">
    <div className="next-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
<p>
PAWS ACTIVITIES
</p>
<div className="col-md-12">
  <h4>
  PAST & RECENT MOST EVENTS AT PAWS
  </h4>
  
</div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
<div className="col-md-4">
<iframe
          width="300"
          height="200"
          src="https://www.youtube.com/watch?v=p86thdt-EgI&pp=ygUTZG9nIHJlc2N1ZSBpbiBpbmRpYQ%3D%3D"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          
        ></iframe>
        <h6>
        UNLEASHED STORY OF STREETS
        </h6>
        <p>PAWS DAY WITH A HOMELESS ANIMAL</p>
</div>
<div className="col-md-4">
<iframe
          width="300"
          height="200"
          src="https://www.youtube.com/watch?v=4VMlPMPXykQ&pp=ygUUZG9nIHNvY2lldHkgaW4gaW5kaWE%3D"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h6>
        PET ANIMAL WELFARE SOCIETY
        </h6>
        <p>PAWS INDIA</p>
</div>

<div className="col-md-4">
<iframe
          width="300"
          height="200"
          src="https://www.youtube.com/watch?v=Pr3aCuh11Xc&pp=ygUVZG9nIGFkb3B0aW9uIGluIGluZGlh"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h6>PUP ADOPTION CAMP</h6>
        <p>PAWS FOR A CAUSE ADOPTION CAMP</p>
</div>
        
      </div>
    </div>
    </div>
    <div className="container-fluid volenteen">
      <div className="row box">
      

<p>
AT PAWS SHELTER FOR PETS
</p>
<h4>
BECOME A VOLUNTEER
</h4>
<p>
Certificates will be provided on the basis of hours contributed for the cause. You can also be a part of our team for a day.
</p>
<Link to = '/donate'>
  JOIN US NOW
</Link>


       </div>

     
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <img className='back' src={img2} alt="" />
        </div>
      </div>
    </div>
    <div className="container-fluid last">
      <div className="row">
        <div className="col-md-12">
          <p>
          SPONSOR PAWS LONG-TERM PROJECT
          </p>
          <h4>
          HELP THOUSANDS OF HOMELESS AND SICK OR INJURED HOMELESS ANIMALS TO HEAL AND FIND HAPPY HOMES
          </h4>
          <p>
          The sight of diseased animals and accidental cases is heart rending for those who love animals. It also takes a lot of strength and determination to nurse them back to health and that is precisely what is all about the PAWS long-term project. Get involved - pawsitively!!!
          </p>

          <span>
            <button>SPONSOR A PET</button>
          </span>
          <span>
            <button>SUPPORT US</button>
          </span>

        </div>
      </div>
    </div>
    </div>
  )
}
