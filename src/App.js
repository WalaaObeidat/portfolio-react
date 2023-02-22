import React from "react";
import Header from './componats/headar'
import Home from "./componats/Home"
import About from "./componats/about";
import Education from "./componats/education";
import Experience from "./componats/experience";
import Skills from "./componats/skills"
import Project from "./componats/project";
import Footer from "./componats/footar";

// import "./App.css";

// import Footer from './components/footar'
// import stylesheet from './components/stylesheet'


class App extends React.Component {
  render(){
    return(
      <div >
        <Header/>
        <Home/>
        <About/>
        <Education/>
         <Experience/>
         <Skills/>
         <Project/>
         <br/>
         <Footer/>
          </div>
    )
  }
}
export default App ;

