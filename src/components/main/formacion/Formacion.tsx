import React from "react";
import Titulo from "../shared/titulo/Titulo";
import { FormacionInterface } from "./formacion.interface";
import FormacionCard from "./FormacionCard";
import LinksPack from '../../shared/linksPack/LinksPack';

function Formacion() {
  const formacion: FormacionInterface[] = [
    {
      estudios: "Keepcoding - Fullstack Web Bootcamp",
      centro: "Keepcoding",
      descripcion:
        "Formación enfocada en todas las disciplinas que intervienen hoy en día en cualquier proyecto relacionado conweb e internet: Front-end, Back-end y servidores.    ",
      year: 2021,
      lugar: "Online",
      conocimientos: [
        "Git",
        "HTML5",
        "CSS3",
        "JavaScript",
        "TDD",
        "Node.js",
        "Express",
        "MongoDB",
        "SASS",
        "React",
        "Redux",
        "DevOps",
        "AWS",
        "Docker",
        "SEO",
        "UX",
        "FullStack",
      ],
    },
    {
      estudios: "CP2 - Confección y publicación de páginas webs",
      nivel: "Certificado profesional grado 2 (Grado Medio)",
      centro: "CE Jaume Balmes",
      lugar: "Hospitalet de Llobregat",
      year: 2017,
      conocimientos: [
        "Maquetación HTML",
        "Diseño de hojas de estilo CSS",
        "Programación Javascript",
        "Diseño gráfico",
      ],
    },
    {
      estudios: "FC - Cómo crear aplicaciones para móvil",
      nivel: "Formación complementaria",
      centro: "Barcelona Activa",
      lugar: "Barcelona",
      year: 2016,
      conocimientos: [
        "Creación de una aplicación sencilla para Android con Eclipse",
      ],
    },
    {
      estudios: "FPO - Diseño gráfico y autoedición",
      nivel: "Formación Profesional Ocupacional",
      centro: "Federación Onubense de Empresarios (FOE)",
      lugar: "Huelva",
      year: 2012,
      conocimientos: [
        "Formación teórica del diseño",
        "Edición de imágenes en Photoshop",
        "Ilustración vectorial con Illustrator",
        "Maquetación digital con Indesign",
        "Pre-impresión",
      ],
    },
    {
      estudios: "FP1 - Explotación de sistemas informáticos",
      nivel: "Formación profesional de Grado Medio",
      centro: "IES San sebastián",
      lugar: "Huelva",
      year: 2011,
      conocimientos: [
        "Reparación de equipos informáticos",
        "Configuración de redes",
        "Mantenimiento de servidores",
        "Gestión de bases de datos",
        "Administración de sistemas",
        "Ofimática",
      ],
    },
  ];

  return (
    <section>
      <Titulo>Formación</Titulo>
      <ul className="p-3">
        {formacion.map((estudio, index) => (
          <li key={index}>
            <FormacionCard data={estudio} />
          </li>
        ))}
      </ul>
      <LinksPack/>
    </section>
  );
}

export default Formacion;
