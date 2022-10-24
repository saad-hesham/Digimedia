import React, { Component } from "react";
import Slider from "react-slick";
import ProjectContent from "./ProjectContent";
import bar from "../images/footer-bg.jpg";
import imageone from "../images/portfolio-01.jpg"
import imagetwo from "../images/portfolio-02.jpg"
import imagethree from "../images/portfolio-03.jpg"
import imagefour from "../images/portfolio-04.jpg"





export default class Resizable extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  state = {
    display: true,
    width: 600,
   info:[
    {id:1,h6:"Website Builder",p:"Marketing",image :imageone},
    {id:2,h6:"Website Builder",p:"Marketing",image :imagetwo},
    {id:3,h6:"Website Builder",p:"Marketing",image :imagethree},
    {id:4,h6:"Website Builder",p:"Marketing",image :imagefour},
    {id:5,h6:"Website Builder",p:"Marketing",image :imageone},
    {id:6,h6:"Website Builder",p:"Marketing",image :imagetwo}
    ]
 


            
     
 
  };
  render() {
    const Product = this.state.info.map(function(i){
        return <ProjectContent 
        image={i.image}
        h6 = {i.h6}
        p = {i.p}
        />
     })

     const settings = {
            infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1301,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: { 
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
   
     <div className="products" data-aos="fade-up" id="project">
         <div className="container">
<div className="row">
    <div className="col-sm-12">
         <h5>OUR PORTOFOLIO</h5>
         <h1>See Our Recent <span>Projects</span></h1>
         <img src={bar} style={{width:"7em",height:".3em"}}/>
       
     </div>
     
     </div>
     </div>
     <div className="slider-container">
         <div className="slider-child">
<Slider {...settings} style={{marginTop:"2em"}}>
    {Product}
</Slider>
</div>
</div>
     </div>

    );
  }
}