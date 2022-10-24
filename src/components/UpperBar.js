import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
class UpperBar extends Component{

    render(){
        return(
            <div className="upper-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <span>
                            <FontAwesomeIcon icon={faEnvelope}className="icon" /> 
                            digimedia@company.com
                            </span>
                            <span>
                            <FontAwesomeIcon icon={faPhone}className="icon" /> 
                            010-020-0340
                            </span>

                        </div>

                        <div className="col-sm-3" >
                      <a href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook} className="upper-bar-icon"/></a> 
                      <a href="https://www.linkedin.com/"> <FontAwesomeIcon icon={faLinkedin} className="upper-bar-icon"/></a> 
                      <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} className="upper-bar-icon" /></a> 
                      <a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram}className="upper-bar-icon" /></a> 
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default UpperBar