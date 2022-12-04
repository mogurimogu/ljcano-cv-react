import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { GiWizardStaff } from "react-icons/gi";
import { RiFilePaper2Line } from "react-icons/ri";
import { TbSwords } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function LinksPack() {
  const active = (isActive: boolean) => (isActive ? "opacity-50" : undefined);
  return (
    <>
      <hr className="opacity-30" />
      <div className="p-3 grid grid-cols-2 xl:grid-cols-4 gap-3">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            active(isActive) +
            ` bg-orange-500 rounded-xl shadow p-3 text-center font-medium hover:bg-orange-400 transition`
          }
        >
          <div className="text-5xl flex justify-center">
            <GiWizardStaff />
          </div>
          <div>Sobre Mi</div>
        </NavLink>
        <NavLink
          to={"/habilidades"}
          className={({ isActive }) =>
          active(isActive) +
          ` bg-teal-500 rounded-xl shadow p-3 text-center font-medium hover:bg-teal-400 transition`}
        >
          <div className="text-5xl flex justify-center">
            <TbSwords />
          </div>
          <div>Habilidades</div>
        </NavLink>
        <NavLink
          to={"/experiencia"}
          className={({ isActive }) =>
          active(isActive) +
          ` bg-violet-500 rounded-xl shadow p-3 text-center font-medium hover:bg-violet-400 transition`}
        >
          <div className="text-5xl flex justify-center">
            <FaRegHandshake />
          </div>
          <div>Experiencia</div>
        </NavLink>
        <NavLink
          to={"/formacion"}
          className={({ isActive }) =>
          active(isActive) +
          ` bg-lime-500 rounded-xl shadow p-3 text-center font-medium hover:bg-lime-400 transition`}
        >
          <div className="text-5xl flex justify-center">
            <RiFilePaper2Line />
          </div>
          <div>Formación</div>
        </NavLink>
      </div>
    </>
  );
}

export default LinksPack;
