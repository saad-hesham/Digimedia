import { Component } from "react";
import image from "../images/slider-dec.png"
import AOS from 'aos';
import "aos/dist/aos.css";
class Header extends Component{
    componentDidMount() {
        AOS.init({
          duration : 2000
        });
      }
    render(){
        return(
            <div className="Header" id="home">
         <div className="container">
             <div className="row">
             <div className="col-lg-6 header-left " data-aos="fade-right">
                 <div>
                 <h4>DIGITAL MEDIA AGENCY</h4>
                 <h1>We Boost Your Website Traffic</h1>
                 <p>This template is brought to you by TemplateMo website. Feel free to use this for a commercial purpose. You are not allowed to redistribute the template ZIP file on any other template website. Thank you</p>
                 <button>Free quote</button>
                 </div>
             </div>
             <div className="col-lg-6 wow header-right" data-aos="fade-left" ><img src={image} className="img-fluid"/></div>
             </div>
         </div>
                
            </div>
        )
    }
}
export default Header