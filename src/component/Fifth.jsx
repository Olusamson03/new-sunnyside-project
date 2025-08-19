import React from "react";
import image102 from "../assets/icon-facebook.svg";
import image103 from "../assets/icon-instagram.svg";
import image104 from "../assets/icon-twitter.svg";
import image105 from "../assets/icon-pinterest.svg";

function Fifth() {
  return (
    <>
      <footer>
        <div style={{height: "30vh", backgroundColor: "hsl(168, 34%, 41%)"}}>
          <div>
             <p style={{fontSize: "2em", color: "hsl(167, 40%, 24%)", textAlign: "center"}}>Sunnyside</p>
          </div>
          <div>
            <nav>
              <ul className="Blast"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "30px",
                  listStyleType: "none",
                  paddingTop: "30px"
                }}
              >
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
              </ul>
            </nav>
          </div>
          <div className="last" style={{display: "flex", justifyContent: "center", gap: "20px", paddingTop: "30px"}}>
            <img src={image102} alt="" srcset="" />
            <img src={image103} alt="" srcset="" />
            <img src={image104} alt="" srcset="" />
            <img src={image105} alt="" srcset="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Fifth;
