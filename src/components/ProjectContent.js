import { Component } from "react";
import imageone from "../images/portfolio-01.jpg"
import imagetwo from "../images/portfolio-02.jpg"
import imagethree from "../images/portfolio-03.jpg"
import imagefour from "../images/portfolio-04.jpg"

class Slider extends Component{
    render(){
        return(
      <div className="slider">
          <div className="container">
          <div>
          <img src={this.props.image}/>
          <h6>{this.props.h6}</h6>
          <p>{this.props.p}</p>
          </div>
      </div>
      </div>
        )
    }
}
export default Slider