import React from 'react'
import './Add.css'
import avatar from "../images/Group.svg"
import phone from "../images/Vector.svg"
import bodyy from "../images/image 2.svg"
import email from "../images/Vectors.svg"
import code from "../images/Groupe (1).svg"

import image_1 from "../images/image_1.svg"
import image_2 from "../images/image_2.svg"
import image_3 from "../images/image_3.svg"
function Add() {
  return (

<div>

    <div>
      <img src={bodyy} className='bodyy' />
    </div> 


    <div className='form-group' >
      <h3>VOTRE MOVING PLANNER</h3>
    <br/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div className='nom'>
       <img src={avatar} className='avatar'/>
        <input className="inputs" type="text" id="nom" required placeholder='VOTRE NOM'/>
      </div>

      <div className='pren'>
        <img src={avatar} className='avatar'/>
        <input className='inputs' type="text" id="prenom" required placeholder='VOTRE PRENOM'/>
      </div>
      
      <div className='eml'>
        <img src={email} className='email'></img>
        <input className='em' type="text" id="email" required placeholder='        VOTRE E-MAIL'/>
      </div>
      <br></br>
      
      <div className='num'>
        <img src={phone} className='phone'/>
        <input className='numeroo' type="text" id="numero" required placeholder='    VOTRE NUMERO'/>
      </div>
      <br></br>

      <div className='codepd'>
        <img src={code} className='code'></img>
        <input className='codep' type="text" id="codePostalDepart" required placeholder='   CODE POSTALE DE DEPPART'/>
      </div>
      <br></br> 

      <div className='codepa'> 
        <img src={code} className='code'></img>
        <input className='codep' type="text" id="codePostalArrivee" required placeholder='  CODE POSTALE D’ARRIVAGE'/>
      </div>
       
        <button className='mybutton' id="myButton">ENVOYER MA DEMANDE</button>
        <div className='action'>
          <input className='act' type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          <label for="vehicle1"> Je ne connais pas mon adresse d´arrivée</label>
        </div>
    </div>
    
    <div className='Footer'>
      <div className="first_container">
        <div className="header">
          <div className="header_1"> Comment <span>Ca marche ?</span></div>
          <div className="header_2"><span>Rien </span>de plus simple<span>!</span></div>
        </div>
        <div className="images">
          <div className="img"><img src={image_1} alt="" /></div>
          <div className="img"><img src={image_2} alt="" /></div>
          <div className="img"><img src={image_3} alt="" /></div>
        </div>
      </div>
      <div className="second_container">
        <div className="header_1"><span>SMOOTHMOVE </span>vous ......</div>
        <div className="header_2"><span></span>simple fuilde ....<span>!</span></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ratione sint sit? Temporibus magni iusto quam facilis vel veritatis corporis excepturi fugit repudiandae tempora? Optio tenetur eveniet obcaecati officiis officia!</p>
      </div>
    </div>

       

  </div>
    
    
  )
}

export default Add