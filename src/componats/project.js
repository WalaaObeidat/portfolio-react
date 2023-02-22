import React from "react";

class project extends React.Component{
    render(){
        return(
<div>
        <h3 className="projects" id="projects">Projects</h3>
        <section>
          <div className="ca">
            <div>
              <img src={require('../images/port.PNG')} width="270px" height="150px"  alt=""/>
            </div>
            <div className="in">
              <a href="file:///C:/Users/dell/portfolio/index2.html#about" ><h4> portfolio</h4></a>
              <p>CV Me<br />Your skills,qualifications education, training and experience.</p>
              <p>31/10/2022</p>
            </div>
          </div>
          <div className="c">
            <div>
              <img src={require('../images/debg.png')}  width="270px" height="150px" alt="" />
            </div>
            <div className="io">
              <a href="https://miro.com/app/board/uXjVPOHa-UA" > <h4> wireframe and mockup</h4> </a>
              <p> IT and helping courses for it student’s</p>
              <p>13/10/2022</p>
            </div>
          </div>
          <div className="co">
            <div>
              <img src={require('../images/soon.jpg')}  width="270px" height="150px" alt="" />
            </div>
            <div className="iot">
              <a href="file:///C:/Users/dell/portfolio/index2.html#about" ><h4>Soon</h4></a>
              <p>coming<br /> almost <br />.......</p>
              <p>2022</p>
            </div></div></section>
      </div>
)
}
}
export default project;