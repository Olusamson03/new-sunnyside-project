import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Second.css";
function Second() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section>
        <div data-aos="fade-up">
        <div>
            <h3 style={{ fontFamily: "fraunces", fontSize: "2rem" }}>
              Transform Your Brand
            </h3>
            <p
              style={{
                fontFamily: "barlow",
                fontSize: "1.2rem",
                color: "hsl(213, 9%, 39%)",
              }}
            >
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="" className="plastic">
              LEARN MORE
            </a>
          </div>

          <div></div>
          <div></div>
          <div>
            <h3 style={{ fontFamily: "fraunces", fontSize: "2rem" }}>Stand Out To The Right Audience</h3>
            <p
              style={{
                fontFamily: "barlow",
                fontSize: "1.2rem",
                color: "hsl(213, 9%, 39%)",
              }}
            >
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href="" className="amend">
              LEARN MORE
            </a>
          </div>
          <div>
            <h3 style={{ fontFamily: "fraunces" }}>Graphic Design</h3>
            <p  style={{
                fontFamily: "barlow",
                fontSize: "1rem",
                color: "hsl(213, 9%, 39%)",
              }}>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: "fraunces",}}>Photography</h3>
            <p style={{
                fontFamily: "barlow",
                fontSize: "1rem",
                color: "hsl(213, 9%, 39%)",
              }}>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Second;
