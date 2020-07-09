import React from "react";
import ViewProfileBtn from "./ViewProfileBtn";

function LandingPage(props) {
return (
    <div className="wrapper">
      <section className="parallax-container">
        <div className="parallax">
          <div className="logo">
            <div className="line topLine"></div>
            <div className="content">
              <div className="vintage name">Erik Hirsch</div>
              <div className="since">- Est. 1989 -</div>
              <div className="desc">Full-Stack Web Developer</div>
              <div className="skillz">HTML&nbsp;+&nbsp;CSS&nbsp;+&nbsp;JS</div>
              <div className="links">
                <a target="_blank" href="https://www.linkedin.com/in/erik-hirsch-b8aa251a5/"><i
                  className="fa fa-linkedin-square"></i></a>
                <a target="_blank" href="../../public/WebDevResume.docx"><i className="fa fa-file-word-o"></i></a>
                <a target="_blank" href="../../public/docs/WebDevResume.pdf"><i className="fa fa-file-pdf-o"></i></a>
                <a target="_blank" href="#"><i className="fa fa-codepen"></i></a>
                <a target="_blank" href="#"><i className="fa fa-instagram"></i></a>
              </div>
            </div>
            <div className="line bottomLine"></div>
            <div id="buttonInsertSpace">
           <ViewProfileBtn />
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}
  
export default LandingPage;

