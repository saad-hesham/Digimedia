import { Component } from "react";
import logo from "../images/logo-v1.png";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Close from '@material-ui/icons/Close';


import { faBars } from "@fortawesome/free-solid-svg-icons";


class Navbar extends Component{
    componentDidMount(){

        $(window).scroll(function(){
            if( window.scrollY >=$("#home").offset().top){
                $(".link").removeClass("active");
                
               $(".home").addClass("active");
               
            }
        
        
            if( window.scrollY >=$("#about").offset().top-120){
                $(".link").removeClass("active")
        
               $(".about").addClass("active")
            }
        
            if( window.scrollY >=$("#service").offset().top-150){
                $(".link").removeClass("active")
        
               $(".service").addClass("active")
            }
        
            if( window.scrollY >=$("#project").offset().top-120){
                $(".link").removeClass("active")
        
               $(".project").addClass("active")
            }
        
            if( window.scrollY >=$("#blog").offset().top-120){
                $(".link").removeClass("active")
        
               $(".blog").addClass("active")
            }
            if( window.scrollY >=$("#contact").offset().top-120){
                $(".link").removeClass("active")
        
               $(".contacts").addClass("active")
            }
        
           })
            
        $(".link").click(function(){
            $('html, body').animate({
                scrollTop: $("#"+$(this).attr("datatype")).offset().top-100
              },500);
        })
        $(window).scroll(function(){
            if($(window).scrollTop()>250){
              
                  $("nav").css({position:"fixed",opacity:0})
                  $( "nav" ).animate({
                    
                    opacity: 1
                  }, 1000);
          
            }
            else{
                $("nav").css({position:"relative",opacity:1})
                

 
            }
        })
        $(window).resize(function(){
                if($(window).width()>768){
                    $(".nav-bar-mob").slideDown();
                    $("#bars").fadeOut();
                    $(".moon").fadeOut();
                }
                if($(window).width()<768){
                    $("#bars").fadeOut();
                    $(".moon").fadeIn();


                }
             
        })
        if($(window).width()<768){
            $(".nav-bar-mob").slideUp()

        }
        $("#bars").click(function(){
            $(".nav-bar-mob").slideDown();
            $("#bars").fadeOut();
            $(".moon").fadeIn();
        })
        $(".moon").click(function(){
            $(".nav-bar-mob").slideUp();
            $("#bars").fadeIn();
            $(".moon").fadeOut();
        })
        
    }

    render(){
        return(
       <nav className="realtive">
           <div className="container">
               <div className="row">
               <div className="col-md-3">
                   <img src={logo}/>
               </div>
               <div className="col-md-9 " >
                   <ul className="nav-bar-mob" >
                   <li className="link home" datatype="home ">
                       home
                       <span></span>
                       <span></span>
                       <span></span>
                       </li>
                   <li className="link about" datatype="about">
                       about
                   <span></span>
                       <span></span>
                       <span></span>
                   </li>
                   <li className="link service" datatype="service">
                       services
                       <span></span>
                       <span></span>
                       <span></span>
                       </li>
                   <li className="link project" datatype="project">
                       projects
                       <span></span>
                       <span></span>
                       <span></span>

                   </li>
                   <li className="link blog" datatype="blog">
                       blog
                       <span></span>
                       <span></span>
                       <span></span>
                       </li>
                   <li className="link contacts" datatype="contact">
                       contact
                       <span></span>
                       <span></span>
                       <span></span>
                       
                   </li >
                   <li>free quote</li>
                   <li style={{opacity:"0"}}>blank</li>
                   </ul>
                   <FontAwesomeIcon icon={faBars} id="bars" style={{cursor:"pointer"}}/>
                   <Close className="icon moon" style={{cursor:"pointer"}}/>

                   </div>
               </div>
               </div>
       </nav>
        )
    }
}
export default Navbar