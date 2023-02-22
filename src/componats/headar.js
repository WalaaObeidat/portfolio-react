import React from "react";
import Logo from '../images/Logo.png'

class Header extends React.Component {
    render(){
        
        return(
       <header>  
        
             <div class="continer">  
            <img class="logo" src={Logo} alt="logo"/>                
          <nav >
          <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li> <a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li> <a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li> <a href="#projects">Projecs</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  </div>  
</header>
)
    }
}
export default Header;