import React from "react";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAffinitydesigner,
  SiAffinityphoto,
  SiAffinitypublisher,
  SiAngular,
  SiCanva,
  SiDocker,
  SiFigma,
  SiGithub,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiSocketdotio,
} from "react-icons/si";
import spain from "../../../assets/img/spain.svg";
import england from "../../../assets/img/england.svg";
import catalonia from "../../../assets/img/catalonia.svg";

import Titulo from "../shared/titulo/Titulo";
import SkillCard from "./SkillCard";
import { IoColorFilterSharp } from "react-icons/io5";
import LinksPack from "../../shared/linksPack/LinksPack";

function Habilidades() {
  interface Habilidades {
    nombre: String;
    nivel: Number;
    icon: any;
  }

  interface Conocimientos {
    titulo: String;
    habilidades: Habilidades[];
  }

  const habilidades: Conocimientos[] = [
    {
      titulo: "Idiomas",
      habilidades: [
        {
          nombre: "Español",
          nivel: 100,
          icon: <img src={spain} alt="español" />,
        },
        {
          nombre: "Inglés",
          nivel: 50,
          icon: <img src={england} alt="español" />,
        },
        {
          nombre: "Catalán",
          nivel: 25,
          icon: <img src={catalonia} alt="español" />,
        },
      ],
    },
    {
      titulo: "Programación",
      habilidades: [
        { nombre: "HTML", nivel: 100, icon: <FaHtml5 /> },
        { nombre: "CSS", nivel: 100, icon: <FaCss3 /> },
        { nombre: "Sass", nivel: 75, icon: <SiSass /> },
        { nombre: "JavaScript", nivel: 75, icon: <SiJavascript /> },
        { nombre: "React", nivel: 75, icon: <SiReact /> },
        { nombre: "Redux", nivel: 25, icon: <SiRedux /> },
        { nombre: "Angular", nivel: 25, icon: <SiAngular /> },
        { nombre: "Node", nivel: 75, icon: <SiNodedotjs /> },
        { nombre: "MongoDB", nivel: 75, icon: <SiMongodb /> },
        { nombre: "GitHub", nivel: 75, icon: <SiGithub /> },
        { nombre: "JQuery", nivel: 50, icon: <SiJquery /> },
        { nombre: "Socket.io", nivel: 50, icon: <SiSocketdotio /> },
        { nombre: "Docker", nivel: 25, icon: <SiDocker /> },
      ],
    },
    {
      titulo: "Diseño gráfico",
      habilidades: [
        { nombre: "Photoshop", nivel: 100, icon: <SiAdobephotoshop /> },
        { nombre: "Illustrator", nivel: 100, icon: <SiAdobeillustrator /> },
        { nombre: "InDesign", nivel: 75, icon: <SiAdobeindesign /> },
        {
          nombre: "Affinity Designer",
          nivel: 50,
          icon: <SiAffinitydesigner />,
        },
        { nombre: "Affinity Photo", nivel: 25, icon: <SiAffinityphoto /> },
        {
          nombre: "Affinity Publisher",
          nivel: 25,
          icon: <SiAffinitypublisher />,
        },
        { nombre: "Canva", nivel: 75, icon: <SiCanva /> },
        { nombre: "Figma", nivel: 50, icon: <SiFigma /> },
        { nombre: "UX / UI", nivel: 75, icon: <IoColorFilterSharp /> },
      ],
    },
  ];

  return (
    <div>
      <Titulo>Idiomas y Habilidades</Titulo>
      {habilidades.map((seccion, index) => (
        <section key={index}>
          <h2 className="text-center text-2xl font-medium p-3">
            {seccion.titulo}
          </h2>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 p-3">
            {seccion.habilidades.map((habilidad, index) => (
              <li key={index}>
                <SkillCard icon={habilidad.icon} level={habilidad.nivel}>
                  {habilidad.nombre}
                </SkillCard>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <LinksPack />
    </div>
  );
}

export default Habilidades;
