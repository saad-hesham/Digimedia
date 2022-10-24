import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";


class ServicesContent extends Component{

render() {
    return (
        <div className="row">
        <div className={this.props.class} id={this.props.id} >
        <div className="row">
        <div className="col-lg-5 service-id-left">
            <h4>{this.props.heading}</h4>
            <p>
           {this.props.pragraph}
           <br></br>
           <span>   <FontAwesomeIcon icon={faCheck} /> Optimized Template</span>
           <span>   <FontAwesomeIcon icon={faCheck} /> Data Info</span><br></br>
           <span>   <FontAwesomeIcon icon={faCheck} /> SEO Analysis</span>
           <span>   <FontAwesomeIcon icon={faCheck} /> Optimized Template</span>
           <span>   <FontAwesomeIcon icon={faCheck} /> Data Info</span>
           <span>   <FontAwesomeIcon icon={faCheck} /> SEO Analysis</span>
            </p>
            <p>{this.props.pragraphtwo}</p>
        </div>
        <div className="col-lg-6 service-id-right">
            <img src={this.props.image}/>
      

        
        </div>
        </div>
        </div>
             </div>
    )
}
}
export default ServicesContent

