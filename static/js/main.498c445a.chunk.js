(this.webpackJsonpreact_profile=this.webpackJsonpreact_profile||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/WebDevResume.c10881a8.pdf"},,,,,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/WebDevResume.1ef5dbcd.docx"},,,function(e,a,t){e.exports=t(38)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/YouMBdApp.90f7692c.png"},function(e,a,t){e.exports=t.p+"static/media/WeatherDashboard4.68f8f684.png"},function(e,a,t){e.exports=t.p+"static/media/storyTime.769453e7.png"},function(e,a,t){e.exports=t.p+"static/media/onceUponAnAdventure.6a640c4a.png"},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(19),o=t.n(i),c=t(21),l=t(1);t(28),t(17);function s(e){return r.a.createElement("a",{id:"viewProfileBtn",onClick:function(){window.location.replace("/React_Profile/profile")}},"View Profile")}var m=t(12),p=t.n(m),d=t(20),u=t.n(d);var h=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("section",{className:"parallax-container"},r.a.createElement("div",{className:"parallax"},r.a.createElement("div",{className:"logo"},r.a.createElement("div",{className:"line topLine"}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"vintage name"},"Erik Hirsch"),r.a.createElement("div",{className:"since"},"- Est. 1989 -"),r.a.createElement("div",{className:"desc"},"Full-Stack Web Developer"),r.a.createElement("div",{className:"skillz"},"HTML\xa0+\xa0CSS\xa0+\xa0JS"),r.a.createElement("div",{className:"links"},r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/erik-hirsch-b8aa251a5/"},r.a.createElement("i",{className:"fa fa-linkedin-square"})),r.a.createElement("a",{target:"_blank",onClick:function(){window.location.replace(u.a)}},r.a.createElement("i",{className:"fa fa-file-word-o"})),r.a.createElement("a",{target:"_blank",onClick:function(){window.open(p.a)}},r.a.createElement("i",{className:"fa fa-file-pdf-o"})),r.a.createElement("a",{target:"_blank",href:"#"},r.a.createElement("i",{className:"fa fa-codepen"})),r.a.createElement("a",{target:"_blank",href:"#"},r.a.createElement("i",{className:"fa fa-instagram"})))),r.a.createElement("div",{className:"line bottomLine"}),r.a.createElement("div",{id:"buttonInsertSpace"},r.a.createElement(s,null))))))},f=t(6),v=t(7),b=t(9),g=t(8),E=function(e){Object(b.a)(t,e);var a=Object(g.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){var e=this.props.profileText;return r.a.createElement("nav",{id:"nav",className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:e.homePage},"Profile Page"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},e.profilesections.map((function(e,a){return r.a.createElement("li",{className:"nav-item active",key:a},r.a.createElement("a",{className:"nav-link",href:e.href},e.name))})),e.profiles.map((function(e,a){return r.a.createElement("li",{className:"nav-item",key:a},r.a.createElement("a",{className:"nav-link",href:e.href,target:"_blank"},"My",e.name))})))))}}]),t}(n.Component),y=function(e){Object(b.a)(t,e);var a=Object(g.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){var e=this.props.profileText;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid col-md-12"},r.a.createElement("h2",{id:"aboutMe"},"About Me"),r.a.createElement("p",{className:"portfolioparagraph"},e.aboutMe),r.a.createElement("div",{className:"row"},e.repositories.map((function(e,a){return r.a.createElement("div",{className:"sub-col col-md-4",key:a},r.a.createElement("p",null,r.a.createElement("a",{href:e.href},e.name)))}))))}}]),t}(n.Component),w=function(e){Object(b.a)(t,e);var a=Object(g.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){var e=this.props.profileText;return r.a.createElement("div",null,r.a.createElement("h2",{id:"projects"},"Projects"),r.a.createElement("div",{className:"row"},e.projects.map((function(e,a){return console.log(e.image),r.a.createElement("div",{className:"col-md-6 card",key:a},r.a.createElement("div",{className:"cardContainer"},r.a.createElement("img",{src:e.image,className:"card-img-top",alt:e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text"},e.description,r.a.createElement("a",{href:e.repository},"Github Repository")))))}))))}}]),t}(n.Component),k=function(e){Object(b.a)(t,e);var a=Object(g.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"onResumeClick",value:function(){window.open(p.a)}},{key:"render",value:function(){var e=this.props.profileText;return r.a.createElement("div",{className:"contact-form container"},r.a.createElement("h2",{id:"contact"},"Contact Me"),r.a.createElement("a",{href:"mailto: ".concat(e.email,"?subject=I saw your profile")},e.email),r.a.createElement("p",null,e.phone," ",r.a.createElement("br",null),e.location),r.a.createElement("a",{onClick:this.onResumeClick,target:"_blank"},"My Resume"))}}]),t}(n.Component);function N(e){return console.log("props",e),r.a.createElement("footer",{className:"footer mt-auto py-3"},r.a.createElement("span",{className:"text-muted"},"\xa9",e.profileText.name))}var j={aboutMe:"My name is Erik Hirsch, I am an aspiring web developer. I am currently attending the Web Development Coding Bootcamp at UCLA Extension. I am still learning, but I am improving everyday and hope to be very proficient by the end of the course. I am very motivated to get a job using the skill that I am learning now. I like to code and I would love to be able to have a career that I can enjoy! I have learned HTML, CSS, Java Script/ JQuery, ES6, Node, MySQL, and MongoDB . I am currently learning React. Please checkout the links below to view some of the projects and assignments I have created so far.",repositories:[{name:"YouMdB Movie Application",href:"https://github.com/abazrafshan/YouMDb-Movie-App.git"},{name:"Weather Forecast Application",href:"https://github.com/eh4git/WeatherApp"},{name:"Coding Quiz Challenge Application",href:"https://github.com/eh4git/CodingQuiz"}],profiles:[{name:"LinkedIn",href:"https://www.linkedin.com/in/erik-hirsch-b8aa251a5/"},{name:"Github",href:"https://github.com/eh4git"}],profilesections:[{name:"About Me",href:"#aboutMe"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],projects:[{name:"YouMdB Movie Application",description:"This project consists of a movie application that provides recomendations for movies based on user search inputs. The application makes sevaral ajax calls to retreive data from multiple API in order to provide the user with information about the searched title as well as providing a list of recomendations. All searches are saved for future reference.",repository:"https://github.com/abazrafshan/YouMDb-Movie-App.git",deployed:"",image:t(29)},{name:"Weather Forecast Application",description:"This application contains a weather dashboard that will allow the user to search for weather conditions by city name. The dashboard will display the current weather as well as a five day forecast. Searches will produce buttons allowing the user to easily switch between cities of their choice.",repository:"https://github.com/eh4git/WeatherApp",deployed:"",image:t(30)},{name:"Story Time Adventure Application",description:"In this application that I created, in collaberation with fellow students, the user is able to create an account and sign in using a password that is encrypted and stored in a database. After signing in the user can add children to their account and provide information specific to each child. The user can then create a unique story that incorporates the information for the child.",repository:"https://github.com/vinnielo/StoryTime",deployed:"",image:t(31)},{name:"Once Upon an Adventure",description:"This full stack application give users the ability to create a unique story while playing a game that has educational mini games. Save the king then chalange him to a game!",repository:"https://github.com/AnnaxGrace/react-rpg",deployed:"",image:t(32)}],resume:{pdf:"../../public/docs/WebDevResume.pdf",word:"../../public/docs/WebDevResume.docx"},name:"Erik Hirsch",email:"ehirsch760@gmail.com",phone:"760 420-4308",location:"Apple Valley, CA 92308",homePage:"/React_Profile",profilePage:"/profile"};var x=function(){return r.a.createElement("div",null,r.a.createElement(E,{profileText:j}),r.a.createElement("div",{className:"container"},r.a.createElement(y,{profileText:j}),r.a.createElement(w,{profileText:j}),r.a.createElement(k,{profileText:j}),r.a.createElement(N,{profileText:j})))},A=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:["/","/React_Profile"],component:h}),r.a.createElement(l.a,{exact:!0,path:"/React_Profile/profile",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.498c445a.chunk.js.map