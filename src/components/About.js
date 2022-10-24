import { Component } from "react";
import image from "../images/about-dec.png";
import imagetwo from "../images/footer-bg.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";

import WOW from 'wowjs';
class About extends Component{
    componentDidMount() {
        AOS.init({
          duration : 2000
        });
      }
    render(){
        return(
            <div className="about" style={{marginTop:"200px"}} id="about">
         <div className="container">
             <div className="row">
             <div className="col-lg-6 about-left " data-aos="zoom-out-left">
             <img src={image} className=""/>
                 </div>
            
             <div className="col-lg-6  about-right" data-aos="zoom-out-right">

             <div>
                 <h5>ABOUT US</h5>
                 <h1>Who Is DigiMedia <span>Agency</span></h1>
                 <img src={imagetwo} style={{width:"5em"}}/>
                 <p>TWe hope this DigiMedia template is useful for your work. You can use this template for any purpose. You may contribute a little amount via PayPal to support TemplateMo in creating new templates regularly.</p>
                <div className="container-progress-bars">
                <div class="progress">
            <span class="title timer" data-from="0" data-to="85" data-speed="1800">90%
            <span className="skill">Coding</span>
            </span>
            <div class="overlay"></div>
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="progress">
            <span class="title timer" data-from="0" data-to="85" data-speed="1800">80%
            <span className="skill">Photoshop</span>
</span>
            <div class="overlay"></div>
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="progress">
            <span class="title timer" data-from="0" data-to="85" data-speed="1800">85%
            <span className="skill">Animation</span>
</span>
            <div class="overlay"></div>
            <div class="left"></div>
            <div class="right"></div>
        </div>
                </div>
                 </div>
             </div>
             </div>
             </div>
         </div>
                
           
        )
    }
}
export default About