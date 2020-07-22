import React from "react";
import ViewProfileBtn from "./ViewProfileBtn";
import Pdf from "../assets/docs/WebDevResume.pdf";
import Docx from "../assets/docs/WebDevResume.docx"

function LandingPage(props) {
 const onPdfClick = ()=> {
    window.open(Pdf);
  }
  const onDocxClick = ()=> {
    window.location.replace(Docx);
  }
return (
    <div className="wrapper">
      <section className="parallax-container">
        <div className="parallax">
          <div className="logo">
            <div className="line topLine"></div>
            <div className="content">
              <div className="vintage name">Erik Hirsch</div>
              <div className="since">- Est. 2020 -</div>
              <div className="desc">Full-Stack Web Developer</div>
              <div className="skillz">HTML&nbsp;+&nbsp;CSS&nbsp;+&nbsp;JS</div>
              <div className="links">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/erik-hirsch-b8aa251a5/"><i
                  className="fa fa-linkedin-square"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/eh4git"><i className="fa fa-github"></i></a>
                <a target="_blank" rel="noopener noreferrer" onClick={onPdfClick}><i className="fa fa-file-pdf-o"></i></a>
                <a target="_blank" rel="noopener noreferrer" onClick={onDocxClick}><i className="fa fa-file-word-o"></i></a>
                {/* <a target="_blank" href="#"><i className="fa fa-codepen"></i></a> */}
              </div>
            </div>
            <div className="line bottomLine"></div>
            <div id="buttonInsertSpace">
           <ViewProfileBtn handleButtonClick={props.handleButtonClick}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}
  
export default LandingPage;

