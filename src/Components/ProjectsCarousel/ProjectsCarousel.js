/*
>First try 

import { useState } from "react";
import project1 from "../../Assets/Images/project1.png";
import dockerLogo from "../../Assets/Images/dockerLogo.jpg";
import logopython from "../../Assets/Images/pythonLogo.jpg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    [
      {
        projectPicture: project1,
        companyName: "Esprit",
        projectPresentation: "Event Management",
      },
      {
        projectPicture: dockerLogo,
        companyName: "Esprit",
        projectPresentation: "Event Management",
      },
    ],
    [
      {
        projectPicture: logopython,
        companyName: "Esprit",
        projectPresentation: "Event Management",
      },
      {
        projectPicture: dockerLogo,
        companyName: "Esprit",
        projectPresentation: "Event Management",
      },
    ],
  ];
  const handleRightArrow = () => {
    if (currentIndex === projects.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleLeftArrow = () => {
    if (currentIndex === 0) {
      setCurrentIndex(projects.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div key={currentIndex} className="projectCardContainer">
      <div className="rightArrow" onClick={handleRightArrow}>
        <ArrowRightIcon style={{ fontSize: "57px" }} />
      </div>
      <div className="leftArrow" onClick={handleLeftArrow}>
        <ArrowLeftIcon style={{ fontSize: "57px" }} />
      </div>
      <div className="groupProjects">
        <div className="project">
          <img src={projects[currentIndex][0].projectPicture} alt="project1" />
          <div className="sectionOurProjects_presentation_container">
            <span className="sectionOurProjects_presentation_company_name">
              {projects[currentIndex][0].companyName}
            </span>
            <span className="sectionOurProjects_presentation">
              {projects[currentIndex][0].projectPresentation}
            </span>
          </div>
        </div>
        <div className="project">
          <img src={projects[currentIndex][1].projectPicture} alt="project1" />
          <div className="sectionOurProjects_presentation_container">
            <span className="sectionOurProjects_presentation_company_name">
              {projects[currentIndex][1].companyName}
            </span>
            <span className="sectionOurProjects_presentation">
              {projects[currentIndex][1].projectPresentation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
 */ /* import React, { useState } from "react";
import project1 from "../../Assets/Images/project1.png";
import dockerLogo from "../../Assets/Images/dockerLogo.jpg";
import logopython from "../../Assets/Images/pythonLogo.jpg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectsCarousel.css"; // Import the CSS file for styling

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightArrow = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
  };

  const handleLeftArrow = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
  };

  const projects = [
    {
      projectPicture: project1,
      companyName: "Esprit",
      projectPresentation: "Event 1",
    },
    {
      projectPicture: dockerLogo,
      companyName: "Esprit",
      projectPresentation: "Event 3",
    },
    {
      projectPicture: logopython,
      companyName: "Esprit",
      projectPresentation: "Event 3",
    },
    {
      projectPicture: project1,
      companyName: "Esprit",
      projectPresentation: "Event 4",
    },
  ];

  return (
    <motion.div className="projectCarousel">
      <div className="rightArrow" onClick={handleRightArrow}>
        <ArrowRightIcon style={{ fontSize: "57px" }} />
      </div>
      <div className="leftArrow" onClick={handleLeftArrow}>
        <ArrowLeftIcon style={{ fontSize: "57px" }} />
      </div>
      <motion.div className="projectCarouselContainer">
        <AnimatePresence initial={false} custom={currentIndex}>
        {console.log(projects[currentIndex])}

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="projectCarousel_element"
              initial={{ opacity: 0, x: index === currentIndex ? 0 : 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index === currentIndex ? 0 : -100 }}
              custom={index}
            >
              {console.log(project[currentIndex])}
              <img src={project.projectPicture} alt="" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsCarousel;
 */

/*  <div className="project">
          <img src={projects[currentIndex][1].projectPicture} alt="project1" />
          <div className="sectionOurProjects_presentation_container">
            <span className="sectionOurProjects_presentation_company_name">
              {projects[currentIndex][1].companyName}
            </span>
            <span className="sectionOurProjects_presentation">
              {projects[currentIndex][1].projectPresentation}
            </span>
          </div>
        </div> 
        
          {/* <div className="projectCarousel_element_information">
              <span>{project.companyName}</span>
              <span>{project.projectPresentation}</span>
            </div> 
        */

import project1 from "../../Assets/Images/project1.png";
import dockerLogo from "../../Assets/Images/dockerLogo.jpg";
import logopython from "../../Assets/Images/pythonLogo.jpg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectsCarousel.css";
import { useEffect, useState } from "react";
/* import { useTime } from "framer-motion";
 */
const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);

  /* const time = useTime(); */

  const projects = [
    {
      projectPicture: project1,
      companyName: "Event1",
      projectPresentation: "Event 1",
    },
    {
      projectPicture: dockerLogo,
      companyName: "Event2",
      projectPresentation: "Event 2",
    },
    {
      projectPicture: logopython,
      companyName: "Event3",
      projectPresentation: "Event 3",
    },
    {
      projectPicture: project1,
      companyName: "Event4",
      projectPresentation: "Event 4",
    },
  ];
  const handleLeftArrow = () => {
    // modulo to keep looping
    const prevIndex = (currentIndex + projects.length - 1) % projects.length;

    if (currentIndex > 0) {
      setCurrentIndex(prevIndex);
    }
  };
  const handleRightArrow = () => {
    const nextIndex = (currentIndex + 1) % projects.length;

    if (currentIndex < projects.length - 1) {
      setCurrentIndex(nextIndex);
    }
  };
  /* useEffect(() => {
    const animationInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(animationInterval);
  }, [projects.length]); */
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === projects.length - 1 && currentIndex !== 0) {
          setIsForward(false);
          return prevIndex - 1;
        } else if (prevIndex === 0) {
          setIsForward(true);

          return prevIndex + 1;
        } else {
          return prevIndex + (isForward ? 1 : -1);
        }
      });
    }, 5000);

    return () => clearInterval(animationInterval);
  }, [projects.length, currentIndex, isForward]);
  return (
    <motion.div className="projectCarousel">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ /* scale: 1, */ rotation: -180 }}
          animate={{
            rotate: 0,
            left: `${(index - currentIndex) * 100+4}%`,
            /*  scale: index === currentIndex ? 1 : 0.8, */
          }}
          /*           transition={{ type: "spring", stiffness: 100, damping: 20 }}
           */ className="projectCarousel_element"
        >
          <img src={project.projectPicture} alt="imagetest" />

          <div className="projectCarousel_element_information">
            <span>{project.companyName}</span>
            <span>{project.projectPresentation}</span>
          </div>
        </motion.div>
      ))}
      <AnimatePresence initial={false}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{
            repeat: 1,
            repeatType: "loop",
            duration: 2,
          }}
          /*  whileHover={{ opacity: 1 }} */
          className="rightArrow"
          onClick={handleRightArrow}
        >
          <ArrowRightIcon style={{ fontSize: "35px" }} />
        </motion.button>
      </AnimatePresence>

      <AnimatePresence initial={false}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          /*  whileHover={{ opacity: 1 }} */
          className="leftArrow"
          onClick={handleLeftArrow}
        >
          <ArrowLeftIcon style={{ fontSize: "35px" }} />
        </motion.button>
      </AnimatePresence>
    </motion.div>
  );
};
export default ProjectsCarousel;
