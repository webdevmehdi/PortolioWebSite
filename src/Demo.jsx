import React, { useRef, useEffect } from "react";
import Pageheader from "./Components/Header/Header";
import "./Demo.css";

const Demo = () => {
  const sectionRef = useRef();
  const observer = new IntersectionObserver(() => {});
  useEffect(() => {
    console.log("sectionRef", sectionRef.current);
  }, []);

  return (
    <div>
      <Pageheader />{/* git remote add origin git@github.com:webdevmehdi/SiteWebDrymWeb.git
git branch -M main
git push -u origin main */}

      <main className="main">
        <section className="sectionAbout">
          <h2>About Us</h2>
        </section>
        <section className="sectionOurServices">
          <h3 ref={sectionRef}>Our Services</h3>
        </section>
        <section className="sectionTeam">
          <h2>Our Team</h2>
        </section>
      </main>
    </div>
  );
};

export default Demo;
