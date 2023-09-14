import React, { useRef, useEffect } from "react";
import Pageheader from "./Components/Header/Header";
import "./Demo.css";
import CardService from "./Components/CardService/CardService";
import jsLogo from "./Assets/Images/JsLogo.jpg";
import angularLog from "./Assets/Images/angularLogo.jpg";
import nodeJsLogo from "./Assets/Images/nodeJsLogo.jpg";
import htmlLogo from "./Assets/Images/htmlLogo.jpg";
import cssLogo from "./Assets/Images/cssLogo.jpg";
import aboutusSection from "./Assets/Images/aboutusSection.jpg";
import homeImage7 from "./Assets/Images/homeImage6.jpg";
import reactLogo from "./Assets/Images/reactLogo.jpg";
import messi from "./Assets/Images/Messi.jpg";
const Demo = () => {
  const sectionRef = useRef();
  const observer = new IntersectionObserver(() => {});
  useEffect(() => {
    console.log("sectionRef", sectionRef.current);
  }, []);

  return (
    <div>
      <Pageheader />

      <main className="main">
        <section className="sectionHome">
          <div className="sectionHomeLandingPhrase">
            <h1 style={{ fontSize: "35px", fontWeight: "800" }}>
              WELCOME <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TO
              <br /> DRYMSOLUTIONS
            </h1>
            <span>Crafting Code, Bridging Domains</span>
            <span>Your Partner in Application Development Excellence</span>
          </div>
          <img src={homeImage7} alt="homeImage" style={{ width: "50%" }} />
        </section>
        <section className="sectionOurServices">
          <div className="sectionHeadertitle">
            <h2 style={{ display: "flex", alignItems: "center" }}>
              Our Services
            </h2>
          </div>
          <div className="sectionOurServicesCards">
            <CardService image={jsLogo} />
            <CardService image={angularLog} />
            <CardService image={nodeJsLogo} />
            <CardService image={reactLogo} />

            <CardService image={htmlLogo} />
            <CardService image={cssLogo} />
          </div>
        </section>
        <section className="sectionAbout">
          <div className="sectionAboutInfo">
            <div className="sectionHeadertitle">
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
                ref={sectionRef}
              >
                About us
              </h2>

              <p>
                At the core of our success in developing applications and
                delivering innovative solutions lies the expertise of our
                dynamic team. Our developers bring a wealth of experience and a
                wide spectrum of skills to every project. Their versatility in
                both front-end and back-end development, mobile and web
                applications, cloud services, and database management allows us
                to tackle projects from multiple angles. We pride ourselves on
                being technology-agnostic, meaning we select the best tools and
                frameworks tailored to the unique needs of each project. Our
                team's adaptability, commitment to innovation, and
                client-centric approach make us trusted partners for clients
                seeking tailored solutions that solve complex challenges.
              </p>
            </div>
          </div>

          <img
            src={aboutusSection}
            alt="aboutus"
            style={{ width: "40%", objectFit: "contain", margin: "30px" }}
          />
        </section>
        <section className="sectionTeam">
          <h2>Our Team</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {/*  <div className="memberCard"> */}
            {/*  </div> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                width: "30%",
                margin: "10px",
              }}
            >
              <img
                src={messi}
                alt="messi"
                style={{
                  borderRadius: "120px",
                  height: "190px",
                  width: "190px",
                }}
              />
              <span>Presentation</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                width: "30%",
                margin: "10px",
              }}
            >
              <img
                src={messi}
                alt="messi"
                style={{
                  borderRadius: "120px",
                  height: "190px",
                  width: "190px",
                }}
              />
              <span>Presentation</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                width: "30%",
                margin: "10px",
              }}
            >
              <img
                src={messi}
                alt="messi"
                style={{
                  borderRadius: "120px",
                  height: "190px",
                  width: "190px",
                }}
              />
              <span>Presentation</span>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                width: "30%",
                margin: "10px",
              }}
            >
              <img
                src={messi}
                alt="messi"
                style={{
                  borderRadius: "120px",
                  height: "190px",
                  width: "190px",
                }}
              />
              <span>Presentation</span>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                width: "30%",
                margin: "10px",
              }}
            >
              <img
                src={messi}
                alt="messi"
                style={{
                  borderRadius: "120px",
                  height: "190px",
                  width: "190px",
                }}
              />
              <span>Presentation</span>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                width: "30%",
                margin: "10px",
              }}
            >
              <img
                src={messi}
                alt="messi"
                style={{
                  borderRadius: "120px",
                  height: "190px",
                  width: "190px",
                }}
              />
              <span>Presentation</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Demo;
