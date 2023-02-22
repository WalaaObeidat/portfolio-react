import React from "react";


class Footer extends React.Component{
    render(){
        return(
            <footer className="contact">
            <div>
              <i className="fa-solid fa-envelope" />
              <p className="email"> wal.obeidat@gmail.com </p>
            </div>
            <div>
              <i className="fa-solid fa-phone" />
              <p className=" mobile">+962 778080942 </p>
            </div>
            <div>
              <i className="fa-solid fa-location-dot" />
              <p className="addd"> Amman,Jordan </p>
            </div>
            <a className="w1" href="https://www.linkedin.com/in/walaa-obeidat-69b197209/" target="_blank"> <i className="fa-brands fa-linkedin" />
            </a>
            <a className="w2" href="https://github.com/WalaaObeidat" target="_blank"><i className="fa-brands fa-github" />
            </a>                                                     
            <a className="w3" href="https://twitter.com/obeidat_atef?t=u1T4UP2r1Pmrj1riMW7slw&s=09" target="_blank"><i className="fa-brands fa-twitter">
              </i></a> 
          </footer>
            ) 
        }
    }
    export default Footer;