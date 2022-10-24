import { Component } from "react";
import bar from "../images/footer-bg.jpg";
import img from "../images/location-icon.png";
import img2 from "../images/phone-icon.png";
import img3 from "../images/email-icon.png";



class Getintouch extends Component{

    render(){
        return(
            <div className="Getintouch" style={{marginTop:"5em"}} id="contact">
   <div className="container">
       <div className="row">
           <div className="col-sm-12" >
               <div>
               <h5 data-aos="fade-up">CONTACT US</h5>
               <h1 data-aos="fade-up">Get In Touch With Us <span>Now</span></h1>
               <img src={bar} style={{width:"5em"}} data-aos="zoom-in"/>  
           </div>
         
           </div>
           <div className="col-lg-4">
           <iframe style={{frameborder:"0"}}
src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen>
</iframe>

           </div>
           <div className="col-lg-8">

<div></div>
<div></div>
<div className="form-icon">
<div>
    <img src={img2}/>
    <p>010-020-0340</p>
</div>

<div>
    <img src={img3}/>
    <p>our@email.com</p>
</div>

<div>
    <img src={img}/>
    <p>123 Rio de Janeiro</p>
</div>
<br></br>

</div>
<form>
<div className="row">
<div className="col-lg-6">
<input type="text" placeholder="Name"/>
<input type="text" placeholder="Your Email"/>
<input type="text" placeholder="Subject"/>
</div>
<div className="col-lg-6">
    <textarea placeholder="Message"></textarea>
</div>
</div>
</form>

           </div>
       </div>
   </div>
            </div>
        )
    }
}
export default Getintouch