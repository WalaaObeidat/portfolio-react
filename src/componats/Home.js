import React from "react";


class Home extends React.Component{
    render(){
        return(
            <div>
            <section class="home" id="home">
            <h1 >Walaa Atef Obeidat</h1>
            <h2>Full Stack Web Developer</h2>
            <div class="wow-right">
                <div class="photo-border">
                    <div class="photo-container">
                        <img class="photo" src={require('../images/walaa.jpg')} alt="walaa obeidat"/>
                    </div>
                </div>
            </div>
            <p class="les">"Review your goals twice every day in order to be focused on achieving them"
              <br/> Les Brown </p>
            <a target="_blank" class="btn btn-warning align" download="cv walaa" href="./wala cv (2).pdf">CV
                Download</a>
          </section> 
          </div> 
        ) 
    }
}
export default Home;