import React from "react";
import { BiWorld } from "react-icons/bi";
import { GiWizardStaff } from "react-icons/gi";
import { RiFocus3Line } from "react-icons/ri";
import Titulo from "../shared/titulo/Titulo";
import Card from "../shared/card/Card";
import Jumbotron from "../../shared/jumbotron/Jumbotron";
import LinksPack from "../../shared/linksPack/LinksPack";

function Intro() {
  return (
    <div>
      <section>
        <Titulo>Full-Stack & Graphic Designer</Titulo>
        {/* TODO continuar aquí */}
        <Jumbotron>
          Un webpack para gobernarlos a todos y sumirlos en las tinieblas
        </Jumbotron>

        <div className="grid xl:grid-cols-3">
          <Card title="De donde vengo" icon={<BiWorld />}>
            Actualmente soy de muchos sitios, ya que soy un nómada digital,
            provengo de Huelva, pero llevo viviendo bastante tiempo en Cataluña.
            Suelo viajar mucho entre Madrid, Cataluña y Andalucía.
          </Card>
          <Card title="Sobre mi" icon={<GiWizardStaff />}>
            Soy un mago en cuanto a lo digital se refiere, soy capaz aprender y
            dominar lo que me proponga. Me considero una persona entusiasta,
            alegre, simpática y con un espíritu muy creativo.
          </Card>
          <Card title="Cuál es mi objetivo" icon={<RiFocus3Line />}>
            Mi objetivo es superarme y seguir aprendiendo mediante retos y
            proyectos. Me gusta rodearme de un equipo que me apoye y me aporten
            otro punto de vista.
          </Card>
        </div>
      </section>
      <hr className="opacity-30"/>
      <LinksPack/>
    </div>
  );
}

export default Intro;
