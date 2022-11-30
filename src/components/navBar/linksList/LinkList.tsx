import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

function LinkList() {
  const [popUpActive, setPopUpActive] = useState(false);
  const active = (isActive: boolean) => (isActive ? "font-bold" : undefined);

  const menuPopUp = () => {
    setPopUpActive(!popUpActive);
  };

  const linkClasses = 'md:inline-block m-3 md:my-0'

  return (
    <nav className="text-right md:flex md:items-center">
      <button className="inline-block md:hidden p-2" onClick={menuPopUp}>
        {popUpActive? <IoCloseSharp /> : <FiMenu />}
      </button>
      <ul className={`md:inline-block ${popUpActive ? "block w-full" : "hidden"}`}>
        <li className={linkClasses}>
          <NavLink to={"/"} className={({ isActive }) => active(isActive)}>
            Sobre mi
          </NavLink>
        </li>
        <li className={linkClasses}>
          <NavLink
            to={"/habilidades"}
            className={({ isActive }) => active(isActive)}
          >
            Idiomas y Habilidades
          </NavLink>
        </li>
        <li className={linkClasses}>
          <NavLink
            to={"/experiencia"}
            className={({ isActive }) => active(isActive)}
          >
            Experiencia
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LinkList;
