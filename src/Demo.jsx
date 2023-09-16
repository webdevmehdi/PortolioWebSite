import React, { useRef, useEffect, useState } from "react";
import Pageheader from "./Components/Header/Header";
import "./Demo.css";
import CardService from "./Components/CardService/CardService";
import jsLogo from "./Assets/Images/JsLogo.jpg";
import angularLog from "./Assets/Images/angularLogo.jpg";
import nodeJsLogo from "./Assets/Images/nodeJsLogo.jpg";
import htmlLogo from "./Assets/Images/htmlLogo.jpg";
import cssLogo from "./Assets/Images/cssLogo.jpg";
import aboutusSection from "./Assets/Images/aboutusSection.jpg";
import homePage2 from "./Assets/Images/homePage2.png";
import reactLogo from "./Assets/Images/reactLogo.jpg";
import cristianoR from "./Assets/Images/cristianoR.jpg";
import pythonLogo from "./Assets/Images/pythonLogo.jpg";
import gitLogo from "./Assets/Images/gitLogo.jpg";
import typeScript from "./Assets/Images/typeScript.jpg";
import Button from "@mui/material/Button";

const Demo = () => {
  const sectionRef = useRef();

  const array = [0, 1, 2, 3];
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 className="h3Welcome"> WELCOME</h2>
              <h2 className="h3Welcome"> TO </h2>
              <h1 className="h3WelcomeDrymSolutions">DRYM-SOLUTIONS </h1>
            </div>
            <span className="sectionHomeWelcomeP">
              Crafting Code, Bridging Domains Your Partner in Application
              Development Excellence
            </span>
          </div>
          {/*           <img src={homePage2} alt="homeImage" /> */}
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
            <CardService image={pythonLogo} />
            <CardService image={htmlLogo} />
            <CardService image={cssLogo} />
            <CardService image={gitLogo} />
            <CardService image={typeScript} />
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

              <span className="sectionAboutUsInfo">
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
              </span>
            </div>
          </div>

          <img
            className="aboutSectionImage"
            src={aboutusSection}
            alt="aboutus"
          />
        </section>
        <section className="sectionTeam">
          <h2>Our Team</h2>
          <div className="sectionTeamMain">
            {array.map((e, index) => (
              <div key={index} className="sectionTeamCardContainer">
                <img src={cristianoR} alt="messi" />
                <span>Presentation</span>
              </div>
            ))}
          </div>
        </section>
        <section className="sectionContactUs">
          <div className="sectionHeadertitle">
            <h2 style={{ display: "flex", alignItems: "center" }}>
              Contact Us
            </h2>
          </div>
          <form className="sectionContactUsForm">
            <input
              className="sectionContactUsInput"
              placeholder="      Full Name"
              type="text"
            />
            <input
              className="sectionContactUsInput"
              placeholder="      Phone Number"
            />
            <textarea
              placeholder="  Message  "
              type="text"
              className="sectionContactUsTextArea"
            />
            <Button variant="outlined" size="medium">
              Envoyer
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Demo;
