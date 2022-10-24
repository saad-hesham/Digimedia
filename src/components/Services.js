import { Component } from "react";
import iconone from "../images/service-icon-01.png"
import icontwo from "../images/service-icon-02.png"
import iconthree from "../images/service-icon-03.png"
import iconfour from "../images/service-icon-04.png"
import imagetwo from "../images/footer-bg.jpg";
import services from "../images/services-image.jpg";
import servicestwo from "../images/services-image-02.jpg";
import servicesthree from "../images/services-image-03.jpg";
import servicesfour from "../images/services-image-04.jpg";


import ServicesContent from "../components/ServicesContent"
import $ from 'jquery';



class Services extends Component{
    componentDidMount(){
    $(".si").click(function(){
        $(".si").removeClass("active");
        $(this).addClass("active");
        $(".provides-container").children(".row").children(".service-id-right").addClass("fadeoutright");
        $(".provides-container").children(".row").children(".service-id-left").addClass("fadeoutLeft");


      
        setTimeout(() => {
            
     
        $(".provides-container").children(".row").children(".service-id-right").removeClass("fadeoutright");
        $(".provides-container").children(".row").children(".service-id-left").removeClass("fadeoutLeft");
        $(".provides-container").children(".row").children(".service-id-right").removeClass("fadeinRight");
        $(".provides-container").children(".row").children(".service-id-left").removeClass("fadeinleft");
        $(".provides-container").css({display:"none"})
        $(".provides-container"+"-"+$(this).index()).css({display:"block"});
        $(".provides-container"+"-"+$(this).index()).children(".row").children(".service-id-right").addClass("fadeinRight");
        $(".provides-container"+"-"+$(this).index()).children(".row").children(".service-id-left").addClass("fadeinleft");
        $(".provides-container").children(".row").children(".service-id-right").removeClass("fadeoutright");
        $(".provides-container").children(".row").children(".service-id-left").removeClass("fadeoutLeft");
        $(".provides-container").children(".row").children(".service-id-right").removeClass("fadeinRight");
        $(".provides-container").children(".row").children(".service-id-left").removeClass("fadeinleft");
       
        }, 500);
        

        
    })
    }
    constructor(){
        super()
        this.state={
            info :[
            
                {id:"one",heading:"SEO Analysis & Daily Reports",pragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token. dover lipsum lorem and the others.",
                image :services,class:"col-sm-12 provides-container provides-container-0",pragraphtwo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt."},
                {id:"two",heading:"Healthy Food & Life",pragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token. dover lipsum lorem and the others.",
                image :servicestwo,class:"col-sm-12 provides-container    provides-container-1",pragraphtwo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt."},
                {id:"three",heading:"Car Re-search & Transport",pragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token. dover lipsum lorem and the others.",
                image :servicesthree,class:"col-sm-12 provides-container provides-container-2",pragraphtwo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt."},
                {id:"four",heading:"Online Shopping & Tracking ID  ",pragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token. dover lipsum lorem and the others.",
                image :servicesfour,class:"col-sm-12 provides-container provides-container-3",pragraphtwo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt."},
                {id:"five",heading:"Enjoy & Travel",pragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token. dover lipsum lorem and the others.",
                image :services,class:"col-sm-12 provides-container provides-container-4",pragraphtwo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt."},
            ]
        }

    }

    render(){
        const service = this.state.info.map(function(x){
            return <ServicesContent
            heading={x.heading}
            pragraph={x.pragraph}
            image={x.image}
          class={x.class}
          id={x.id}
          pragraphtwo={x.pragraphtwo}
            />
         })
        return(
            <div className="services" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12" data-aos="fade-up" >
                        <div className="services-container" >
                        <h4>
                        OUR SERVICES
                        </h4>
                        <h1>What Our Agency <span>Provides</span></h1>
                        <img src={imagetwo} className="bar"/>
                        <div className="services-icon">
                            <div className="active si">
                        <img src={iconone} class="img-fluid "/>
                        <h3>Apartment</h3>
                        </div>
                        <div className=" si">
                        <img src={icontwo} class="img-fluid "/>
                        <h3>Food & Life</h3>

                        </div>
                        <div className=" si">
                        <img src={iconthree} class="img-fluid "/>
                        <h3>Cars</h3>

                        </div>
                        <div className=" si">
                        <img src={iconfour} class="img-fluid"/>
                        <h3>Shopping</h3>

                        </div>
                        <div className=" si">
                        <img src={iconone} class="img-fluid "/>
                        <h3>Traveling</h3>

                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container" data-aos="zoom-in">
                 {service}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Services