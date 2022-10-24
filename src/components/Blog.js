import { Component } from "react";
import bar from "../images/footer-bg.jpg";
import imageone from "../images/blog-post-01.jpg";
import imagetwo from "../images/author-post.jpg";
import image3 from "../images/portfolio-01.jpg"
import imag4 from "../images/portfolio-02.jpg"
import image5 from "../images/portfolio-03.jpg"

class Blog extends Component{

    render(){
        return(
            <div className="blog" style={{marginTop:"6em"}} id="blog">
       <div className="container">
           <div className="row">
           <div className="col-sm-12" data-aos="fade-up">
<h4>RECENT NEWS</h4>
<h1>Check Our Blog <span>Posts</span></h1>
<img src={bar}/>
           </div>
           <div className="col-lg-6 parent" style={{marginTop:"2em"}} data-aos="fade-right">
               <img src={imageone} className="img-fluid"/>
               <br></br>
               <span >SEO Analysis</span>  
               <h2>Lorem Ipsum Dolor Sit Amet, Consectetur Adelore
                Eiusmod Tempor Incididunt</h2> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers<br></br> itii eiumod deis tempor incididunt ut labore. </p>
                <div className="author">
                    
                    <img src={imagetwo}/>By: Andrea Mentuzi
                 
                    </div> 

           </div>
       <div className="col-lg-6 child" style={{marginTop:"3em"}} data-aos="fade-left">
       <div className="side-blog" style={{display:"flex",position:"relative"}}>
          
                
                       <div>
                           <img src={image3} className="img-fluid"/>
               </div>
               <div>
               <span className="seo">SEO Analysis</span> 
               <h6>Lorem Ipsum Dolor Sit Amet, Consectetur Adelore
                Eiusmod Tempor </h6> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers itii eiumod deis tempor. </p>
               </div>

           </div>

           <div className="side-blog" style={{display:"flex",position:"relative",marginTop:"3em"}}>
          
                
          <div>
              <img src={imag4} className="img-fluid"/>
  </div>
  <div>
  <span className="seo">SEO Analysis</span> 
  <h6>Lorem Ipsum Dolor Sit Amet, Consectetur Adelore
   Eiusmod Tempor </h6> 
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers itii eiumod deis tempor. </p>
  </div>


  
  
</div>



<div className="side-blog" style={{display:"flex",position:"relative",marginTop:"3em"}}>
          
                
                       <div>
                           <img src={image5} className="img-fluid"/>
               </div>
               <div>
               <span className="seo">SEO Analysis</span>
               <h6>Lorem Ipsum Dolor Sit Amet, Consectetur Adelore
                Eiusmod Tempor </h6> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers itii eiumod deis tempor. </p>
               </div>


               
               
           </div>
       </div>
       </div>
     
            </div>
            </div>
        )
    }
}
export default Blog