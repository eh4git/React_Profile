import React from "react"




export default function LandingPage(){
return(
    <div class="wrapper">
    <section class="parallax-container">
      <div class="parallax">
        <div class="logo">
          <div class="line topLine"></div>
          <div class="content">
            <div class="vintage name">Erik Hirsch</div>
            <div class="since">- Est. 1989 -</div>
            <div class="desc">Full-Stack Web Developer</div>
            <div class="skillz">HTML&nbsp;+&nbsp;CSS&nbsp;+&nbsp;JS</div>
            <div class="links">
              <a target="_blank" href="https://www.linkedin.com/in/erik-hirsch-b8aa251a5/"><i
                  class="fa fa-linkedin-square"></i></a>
              <a target="_blank" href="#"><i class="fa fa-file-word-o"></i></a>
              <a target="_blank" href="#"><i class="fa fa-file-pdf-o"></i></a>
              <a target="_blank" href="#"><i class="fa fa-codepen"></i></a>
              <a target="_blank" href="#"><i class="fa fa-instagram"></i></a>
            </div>
          </div>
          <div class="line bottomLine"></div>
          <div id="buttonInsertSpace"></div>
        </div>
      </div>
    </section>
  </div>
)
}