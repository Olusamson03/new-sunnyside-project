import React from "react";
import "./Third.css";
import emily from "../assets/image-emily.jpg";
import jennie from "../assets/image-jennie.jpg";
import thomas from "../assets/image-thomas.jpg";

function Third() {
  return (
    <>
      <article className="art" style={{ height: "80vh"}}>
        <h3 className="nana"
          style={{
            textAlign: "center",
            margin: "10px",
            padding: "40px",
            fontFamily: "fraunces",
            fontSize: "2rem",
            color: "hsl(232, 10%, 55%)",
          }}
        >
          CLIENT TESTIMONIALS
        </h3>
        <div className="testimonial"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ padding: "40px" }}>
            <img
              src={emily}
              alt=""
              srcset=""
              style={{
                marginLeft: "80px",
                borderRadius: "70px",
                marginBottom: "40px",
              }}
            />
            <p
              style={{
                padding: "1px",
                width: "280px",
                textAlign: "center",
                fontFamily: "barlow",
                fontSize: "1rem",
                color: "hsl(213, 9%, 39%)",
              }}
            >
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p
              style={{
                textAlign: "center",
                paddingTop: "15px",
                paddingBottom: "10px",
                fontFamily: "fraunces",
              }}
            >
              Emily R
            </p>
            <p
              style={{
                textAlign: "center",
                fontFamily: "barlow",
                fontSize: "1rem",
                color: "hsl(213, 9%, 39%)",
              }}
            >
              Managing Director
            </p>
          </div>
          <div style={{ paddingLeft: "40px" }}>
            <img
              src={thomas}
              alt=""
              srcset=""
              style={{
                marginLeft: "80px",
                borderRadius: "70px",
                marginBottom: "40px",
              }}
            />
            <p
              style={{
                padding: "1px",
                width: "300px",
                textAlign: "center",
                fontFamily: "barlow",
                color: "hsl(213, 9%, 39%)",
              }}
            >
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <p
              style={{
                textAlign: "center",
                paddingTop: "15px",
                paddingBottom: "10px",
                fontFamily: "barlow",
                fontSize: "1rem",
              }}
            >
              Thomas S.
            </p>
            <p
              style={{
                textAlign: "center",
                fontFamily: "barlow",
                fontSize: "1rem",
                color: "hsl(213, 9%, 39%)",
              }}
            >
              Chief Operating Officer
            </p>
          </div>
          <div className="jennie" style={{ paddingLeft: "100px" }}>
            <img
              src={jennie}
              alt=""
              srcset=""
              style={{
                marginLeft: "80px",
                borderRadius: "70px",
                marginBottom: "40px",
              }}
            />
            <p
              style={{
                padding: "1px",
                width: "280px",
                textAlign: "center",
                fontFamily: "barlow",
                fontSize: "1rem",
                color: "hsl(213, 9%, 39%)",
              }}
            >
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p
              style={{
                textAlign: "center",
                paddingTop: "15px",
                paddingBottom: "10px",
                fontFamily: "barlow",
                fontSize: "1rem",
              }}
            >
              Jennie F.
            </p>
            <p
              style={{
                textAlign: "center",
                fontFamily: "barlow",
                fontSize: "1rem",
                color: "hsl(213, 9%, 39%)",
              }}
            >
              Business Owner
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Third;
