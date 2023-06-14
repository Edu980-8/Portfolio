import React from "react";
import "./body.css";
import Python from "../Icons/python.png";
import WebDevelopment from "../Icons/development.png";
import Electronics from "../Icons/electronics.png";

const InfoSection = ({ title, subtitles, img, prop }) => {
  return (
    <div className="tarjetas_to_do">
      <img className="imagen_tarjeta" src={img} prop={prop}></img>
      <h1 className="titulo_body">{title}</h1>
      <ul>
        {subtitles.map((subtitle, index) => (
          <li key={index} className="subtitle_card">
            {subtitle}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

const body = () => {
  const electronicsSubtitles = [
    "Control systems, create awesome bio-robots and master the world of machine learning.",
    "MatLab Knowledge, application of techniques for circuit optimization."
  ];

  const webDevSubtitles = [
    "Proficient in SQL, Python, JavaScript and C++.",
    "Experience with Microsoft SQL Server for efficient data storage.",
    "Versions control and collaboration with Git and Github."
  ];

  const pythonSubtitles = [
    "Knowledge on DataFrames for data analysis and manipulation.",
    "OOP and SP based development for modular, structured and scalable code.",
    "Implement Machine Learning algorithms for accurate insights and predictions."
  ];

  return (
    <div>
      <div>
        <h1 className="titulo_body titulo_modify">ELECTRONIC ENGINEER WITH PROGRAMMING SKILLS</h1>
        <h2>Hi, I'm Eduard, Electronic Engineer and Junior Developer with 1 year experience creating projects, for some important companies in Colombia like Electrolux. </h2>
      </div>  
      <div className="div_divisible_3_body">
        <InfoSection
          title="Electronic Engineer"
          subtitles={electronicsSubtitles}
          img={Electronics}
          prop="Esta es la Imagen de Electronica, en este caso es un Circuito Integrado"
        />
        <InfoSection
          title="Back - End Developer"
          subtitles={webDevSubtitles}
          img={WebDevelopment}
          prop="Esta es la Imagen de Web Development, en este caso es un Computador"
        />
        <InfoSection
          title="Python Developer"
          subtitles={pythonSubtitles}
          img={Python}
          prop="Esta es la Imagen de desarrollo en python, en este caso es el logo de Python"
        />
      </div>
    </div>
  );
};

export default body;
