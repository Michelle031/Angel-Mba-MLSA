/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/img2.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Remotive Job Board",
    description:
      "Designed and developed a job board as part of my practical learning, aimed at facilitating efficient job searches and connections for users.",
    url: "https://quiet-gumdrop-cec8d9.netlify.app/",
  },
  {
    title: "Rest Countries Quiz App",
    description:
      "Designed a country quiz app using a specific API I worked on, allowing users to test their knowledge about different nations in an engaging way.",
    url: "https://shiny-brigadeiros-eec32b.netlify.app/",
  },
  {
    title: "HealthXp",
    description:
      "During my internship, I contributed to Healthxp, a HMO initiative aimed at enhancing healthcare accessibility in Nigeria, streamlining access to vital medical resources and information.",
    url: "https://www.healthxp.org/",
  },
  {
    title: "Portfolio website",
    description:
      "Designed by me and deployed using Firebase hosting. Includes my experience and practice projects.",
    url: "https://angelmbadev.co/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
