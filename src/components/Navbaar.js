import React from 'react'
import pic from '../imgs/adopt-a-dog-paw.jpg'
import '../css/Navbaar.css'
import { Link } from 'react-router-dom'

export default function Navbaar() {
  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand logo" to="home"><img src={pic} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Support">SUPPORT US</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Activity">ACTIVITIES</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" to="/emergency">EMERGENCY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/abhay">DONATE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Blog">BLOG</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="https://www.marshallspetzone.com/">SHOPPING</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" to="/social">SOCIAL-MEDIA</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}
