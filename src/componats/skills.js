import React from "react";

class skills extends React.Component{
  render(){
    return(

<div>
<h3 class="skills" id="skills" >Skills</h3>
<section >

   <div class="div_skills">
      <div class="cartoon">
          <div class="icon">
              <i class="fa-brands fa-html5"></i>
          </div>
          <div class="info">
             <h3>HTML</h3>
          </div>
       </div>

       <div class="cartoon">
          <div class="icon">
              <i class="fa-brands fa-css3"></i>
          </div>
          <div class="code">
             <h3>CSS</h3>
          </div>
       </div>

       <div class="cartoon">
          <div class="icon">
              <i class="fa-brands fa-square-js"></i>
          </div>
          <div class="code">
             <h3>JavaScript</h3>
          </div>
       </div>

       <div class="cartoon">
          <div class="icon">
              <i class="fa-brands fa-laravel"></i>
          </div>
          <div class="code">
             <h3>Laravel</h3>
          </div>
       </div>

       <div class="cartoon">
          <div class="icon">
              <i class="fa-brands fa-react"></i>
          </div>
          <div class="code">
             <h3>React</h3>
          </div>
       </div>

       <div class="cartoon">
          <div class="icon">
              <i class="fa-brands fa-php"></i>
          </div>
          <div class="code">
             <h3>PHP</h3>
          </div>
       </div>
  </div>
</section>
</div>
    )
    }
}
export default skills;
