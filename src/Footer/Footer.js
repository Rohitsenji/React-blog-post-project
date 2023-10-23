import React from "react";

function Footer() {
  return (
    <>
      
      <footer >
        <div className="NavIcons" >
          <div className="leftNav">
            <h5>
              About :
              <p className="aboutfooter" style={{ fontSize: "0.5rem", width: "30vw", height: "14vh" }}>
                The page is broken into Five sections, making it easy to digest
                in chunks. 
                <br />
                
              </p>
            </h5>
            <h5>
              Contact :
              <p className="Email" style={{ fontSize: "0.7rem" }}>rohitsenji1234@gmail.com</p>
              <p className="mobileno" style={{ fontSize: "0.7rem" }}>Mobile-no- 7024536661</p>
            </h5>
          </div>
          {/* <p className="footer-content" style={{fontSize:"1rem"}}>copyright&copy; 2023 Rohit Sen</p> */}
          <div className="icons">
            <p >
                Github :
              <a
                style={{paddingRight:"5px"}}
                href="https://github.com/Rohitsenji"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"  style={{color:"white", paddingLeft:"2vw"}}></i>
              </a>
            </p>
            <p>
                Linkedin Profile:
              <a
                style={{paddingRight:"5px"}}
                href="https://www.linkedin.com/in/rohit-sen-39980521a/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin" style={{color:"white", paddingLeft:"2vw"}}></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
