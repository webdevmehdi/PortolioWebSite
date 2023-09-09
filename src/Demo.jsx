import React, { useRef, useEffect } from "react";
import Pageheader from "./Components/Header/Header";
import "./Demo.css";

const Demo = () => {
  const sectionRef = useRef();
  const observer = new IntersectionObserver(() => {});
  useEffect(() => {}, []);

  return (
    <div>
      <Pageheader />

      <main className="main">
        <section className="sectionAbout">
          <h2>About Us</h2>
        </section>
        <section className="sectionOurServices">
          <h2>Our Services</h2>
        </section>
        <section className="sectionTeam">
          <h2>Our Team</h2>
        </section>
      </main>
    </div>
  );
};

export default Demo;
