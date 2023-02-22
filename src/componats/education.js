import React from "react"


class Education extends React.Component{
   render(){
       return(
<div>
<h3  class="education" id="education" >Education</h3>
      <div class="card">
          <div>
             <img src={require('../images/ORANGE.jpeg')} width="270px" height="150px"/>
          </div>
          <div class="info">
          <h4> Orange Coding Academy</h4>
          <p> Trainee full stack web developer </p>
          <p>2022-2023</p>
             
          </div>
    </div>
    <div class="car">
      <div>
         <img  src={require('../images/WISE.jpeg')}  width="270px" height="150px"/>
      </div>
      <div class="inf">
      <h4> WISE <br/>University</h4>
      <p> Management Information Systems </p>
      <p>2018-2022</p>
         </div>
      </div>

</div>
  )
 }
}

export default Education;