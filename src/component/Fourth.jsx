import React from "react";

function Fourth() {
  return (
    <>
      <div className="pitt"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          height: "70vh",
        }}
      >
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
      </div>
    </>
  );
}

export default Fourth;
