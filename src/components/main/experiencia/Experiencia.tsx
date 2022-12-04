import React from "react";
import Titulo from "../shared/titulo/Titulo";
import { ExperienciaInterface } from "./Experiencia.interface";
import ExpCard from "./ExpCard";
import LinksPack from '../../shared/linksPack/LinksPack';

function Experiencia() {
  const experiencia: ExperienciaInterface[] = [
    {
      cargo: "Web Developer & UX Designer",
      empresa: "Majestic Hotel Group (MHG)",
      lugar: "Barcelona",
      year: 2018,
      competencias: [
        "Diseño Web",
        "Diseño gráfico",
        "Investigación de tecnologías web",
        "Implementación de Google AMP",
        "Mantenimiento de webs",
      ],
    },
    {
      cargo: "Webmaster",
      empresa: "Indian Webs",
      lugar: "Sant Boi",
      year: 2018,
      competencias: [
        "Diseño Web",
        "Diseño gráfico",
        "Mantenimiento de webs",
        "Posicionamiento Web SEO",
        "Social Media",
        "Gestión de CMS",
      ],
    },
    {
      cargo: "Prácticas diseño web",
      empresa: "Indian Webs",
      lugar: "Hospitalet de Llobregat",
      year: 2017,
      competencias: ["Diseño Web", "Diseño gráfico", "Gestión de CMS"],
    },
    {
      cargo: "Gestor de archivos",
      empresa: "Ministerio de Economía y Competitividad",
      lugar: "Madrid",
      year: 2015,
      competencias: [
        "Gestión de informes",
        "Archivado de expedientes",
        "Responsable de etiquetar y archivar todos los expedientes del 2000 - 2010",
      ],
    },
    {
      cargo: "Gestor de archivos",
      empresa: "Ministerio de Economía y Competitividad",
      lugar: "Madrid",
      year: 2015,
      competencias: [
        "Gestión de informes",
        "Archivado de expedientes",
        "Responsable de etiquetar y archivar todos los expedientes del 2000 - 2010",
      ],
    },
    {
      cargo: "Prácticas diseño gráfico",
      empresa: "Rotula",
      lugar: "Huelva",
      year: 2012,
      competencias: [
        "Edición de imágenes",
        "Creación de logotipos",
        "Ilustraciones para vinilos",
      ],
    },
    {
      cargo: "Prácticas informática",
      empresa: "FETE UGT",
      lugar: "Huelva",
      year: 2011,
      competencias: [
        "Gestión de bases de datos",
        "Reparación de equipos informáticos",
        "Mantenimiento de equipos informáticos",
        "Administración de archivos",
      ],
    },
  ];

  return (
    <section>
      <Titulo>Experiencia</Titulo>
      <ul className="p-3">
        {experiencia.map((puesto, index) => (
          <li key={index}>
            <ExpCard data={puesto} />
          </li>
        ))}
      </ul>
      <LinksPack/>
    </section>
  );
}

export default Experiencia;
