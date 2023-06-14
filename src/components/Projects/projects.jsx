import React from 'react'
import './projects.css'
import Tarjeta_proyecto from './tarjeta_proyecto'
import Project1 from "../Icons/Tesis.png";
import Project2 from "../Icons/Electrolux.png";
import Project3 from "../Icons/Batata.png";

const titles=[
  "Design and implementation of a hybrid state estimator to support a Scada system in a wastewater treatment plant.",
  "Electro-Lux Ecommerce-Page",
  "Batata-bit"
]

const desc_proyectos = [
  "This project used hybrid state space models and finite automata to design and simulate a hybrid state estimator. A dynamic model of a treatment plant was created and implemented in LabVIEW software. The results obtained were validated with real data measured at the plant.",
  "This is a web page made for Electrolux a company that sells home appliances, where users can add products to the cart and buy what they want, in this page concepts of reducers were applied and barrels were used.",
  "This is a project where Mobile First and responsive design methodologies are applied to create an application 100% adaptable to mobile and desktop devices. There I also learned how to use the user interface design tool Figma, which allow me to collaborate with the design of applications."
  ];

const props = [
  "Props project 1",
  "Props project 2",
  "Props project 3"
]


const projects = () => {
  return (
    <div className="container-projects">
      <h1 className="titulo_body_2">FEATURED PROJECTS</h1>

      {titles.map((title, index) => (
        <Tarjeta_proyecto
          key={index}
          nombre_proyecto={title}
          desc={desc_proyectos[index]}
          img={index === 0 ? Project1 : index === 1 ? Project2 : Project3}
          prop={props[index]}
        />
      ))}

    </div>
  );
}

export default projects;

