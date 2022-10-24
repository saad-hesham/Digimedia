import { Component } from "react";


class Contact extends Component{

    render(){
        return(
            <div className="contact">
   <div className="container">
       <div className="row">
           <div className="col-sm-12" >
               <div>
               <h5 data-aos="fade-up">GET YOUR FREE QUOTE</h5>
               <h1 data-aos="fade-up">Grow With Us Now</h1>
               <form>
               <input type="text" placeholder="Your Website URL" data-aos="fade-up"/>
               <input type="email" placeholder="Email Address" data-aos="fade-up"/>
               <input type="submit" data-aos="fade-up"/>
               </form>
           </div>
           </div>
       </div>
   </div>
            </div>
        )
    }
}
export default Contact