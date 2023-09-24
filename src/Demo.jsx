import React, { useRef } from "react";
import Pageheader from "./Components/Header/Header";
import "./Demo.css";
import CardService from "./Components/CardService/CardService";
import jsLogo from "./Assets/Images/JsLogo.jpg";
import angularLog from "./Assets/Images/angularLogo.jpg";
import nodeJsLogo from "./Assets/Images/nodeJsLogo.jpg";
import htmlLogo from "./Assets/Images/htmlLogo.jpg";
import cssLogo from "./Assets/Images/cssLogo.jpg";
import aboutusSection from "./Assets/Images/aboutusSection.jpg";
import reactLogo from "./Assets/Images/reactLogo.jpg";
import pythonLogo from "./Assets/Images/pythonLogo.jpg";
import gitLogo from "./Assets/Images/gitLogo.jpg";
import springBootLogo from "./Assets/Images/springBootLogo.jpg";
import typeScript from "./Assets/Images/typeScript.jpg";
import Button from "@mui/material/Button";
import { TextField } from "@material-ui/core";
import profilPicMo from "./Assets/Images/mohamed.jpg";
import profilPicRa from "./Assets/Images/radhwen.jpg";
import profilPicMe from "./Assets/Images/mehdiPic.jpg";
import profilcYa from "./Assets/Images/yahya.jpeg";

const Demo = () => {
  /*   const sectionRef = useRef();
   */
  const homeRef = useRef(null);
  const ourServicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const teamRef = useRef(null);
  const contactUsRef = useRef(null);

  /*   const [isInterSecting, setIsInterSecting] = useState();
   */ /*   const [sectionDisplay, setSectionDisplay] = useState();
   */ const array = [
    { picture: profilcYa, nom: "Yahya Mlaouhi" },
    { picture: profilPicMo, nom: "Mohamed Saghraboui" },
    { picture: profilPicRa, nom: "Radhwen Nassar" },
    { picture: profilPicMe, nom: "Mehdi Azizi" },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Pageheader
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToOurServices={() => scrollToSection(ourServicesRef)}
        scrollToAboutUs={() => scrollToSection(aboutUsRef)}
        scrollToTeam={() => scrollToSection(teamRef)}
        scrollToContactUs={() => scrollToSection(contactUsRef)}
      />
      <main className="main">
        <section ref={homeRef} className="sectionHome">
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
        </section>
        <section ref={ourServicesRef} className="sectionOurServices">
          <div className="sectionHeadertitle">
            <h2 style={{ display: "flex", alignItems: "center" }}>
              Our Expertise
            </h2>
          </div>
          <div className="sectionOurServicesCards">
            {/*   <ListCardService /> */}
            <CardService image={jsLogo} />
            <CardService image={angularLog} />
            <CardService image={nodeJsLogo} />
            <CardService image={reactLogo} />
            <CardService image={pythonLogo} />
            <CardService image={htmlLogo} />
            <CardService image={cssLogo} />
            <CardService image={gitLogo} />
            <CardService image={typeScript} />
            <CardService image={springBootLogo} />
          </div>
        </section>
        <section ref={aboutUsRef} className="sectionAbout">
          <div className="sectionAboutInfo">
            <div className="sectionHeadertitle">
              <div className="sectionHeadertitle">
                <h2 style={{ display: "flex", alignItems: "center" }}>
                  About us
                </h2>
              </div>

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
        <section ref={teamRef} className="sectionTeam">
          <div className="sectionHeadertitle">
            <h2 style={{ display: "flex", alignItems: "center" }}>Our Team</h2>
          </div>
          <div className="sectionTeamMain">
            {array.map((e, index) => (
              <div key={index} className="sectionTeamCardContainer">
                <img src={e.picture} alt="profilPic" />
                <span
                  style={{
                    fontFamily: "'Roboto Slab'",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>{e.nom}</span>
                  <span>Co-Fondateur</span>
                </span>
              </div>
            ))}
          </div>
        </section>
        <section ref={contactUsRef} className="sectionContactUs">
          <div className="sectionHeadertitle">
            <h2
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Contact Us
            </h2>
          </div>
          <form className="sectionContactUsForm">
            <div
              style={{
                display: "flex",
                width: "80%",
                alignItems: "center",
                gap: "19px",
                justifyContent: "center",
              }}
            >
              <TextField label="FullName" variant="standard" />
              <TextField
                id="standard-basic"
                label="LastName"
                variant="standard"
              />
            </div>
            <TextField
              style={{ width: "40%" }}
              label="Email"
              variant="standard"
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
