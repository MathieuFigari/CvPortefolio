import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import {Link} from "react-scroll";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }


 slideInTop(elem, delay, duration, declic) {
   gsap.fromTo(
     elem, 
     {
       opacity: 0,
       y: 200,
     },
     {
       opacity: 1,
       y: 0,
       delay: delay || 0.1,
       duration: duration || 0.6,
       scrollTrigger: {
         trigger: declic,
         start: "top center",
         end: "bottom center"
       }
     }
   )
 }
 
 
 slideInleft(elem, delay, duration, declic) {
  gsap.fromTo(
    elem, 
    {
      opacity: 0,
      x: -200,
    },
    {
      opacity: 1,
      x: 0,
      delay: delay || 0.1,
      duration: duration || 0.6,
      scrollTrigger: {
        trigger: declic,
        start: "top center",
        end: "bottom center"
      }
    }
  )
}


slideInright(elem, delay, duration, declic) {
  gsap.fromTo(
    elem, 
    {
      opacity: 0,
      x: 800,
    },
    {
      opacity: 1,
      x: 0,
      delay: delay || 0.1,
      duration: duration || 0.6,
      scrollTrigger: {
        trigger: declic,
        start: "top center",
        end: "bottom center"
      }
    }
  )
} 

  

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }


  

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
    
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }


  render() {
    const linksP = this.state.resumeData.links_portfolio
    
    if(linksP) { 
      var portfolio = linksP.portfolio;
      var about = linksP.about_me;
      var contact = linksP.contact
    };


    return (
      <div className="app">
        <nav className="nav">
          <div className="links_portfolio">
      <Link className="links_portfolio__portfo" to="portfolio" spy={true} smooth={true} duration={1000}>{portfolio}</Link>
      <Link className="links_portfolio__about" to="about" smooth={true} duration={1000}>{about}</Link>
      <Link className="links_portfolio__contact" to="contact" smooth={true} duration={1000}>{contact}</Link>
      </div>
    </nav>

        <Header 
        sharedData={this.state.sharedData.basic_info}
        linksP={this.state.resumeData.links_portfolio}
        />
        
        <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="emojione:flag-for-clipperton-island"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="emojione:flag-for-united-kingdom"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div>
        <About
          slideInleft={this.slideInleft}
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          slideInTop={this.slideInTop}
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          slideInright={this.slideInright}
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Contact
         contactInfo={this.state.resumeData.contact}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
