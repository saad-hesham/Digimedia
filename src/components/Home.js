import { Component } from "react";
import UpperBar from "./UpperBar";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Projects from "./Projects";
import Blog from "./Blog";
import Getintouch from "./Getintouch";
import Footer from "./Footer";


class Home extends Component{

    render(){
        return(
            <div>
                <UpperBar/>
                <Navbar/>
                <Header/>
                <About/>
                <Services/>
                <Contact/>
                <Projects/>
                <Blog/>
                <Getintouch/>
                <Footer/>
            </div>
        )
    }
}
export default Home