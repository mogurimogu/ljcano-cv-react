import React from "react";
import { ExperienciaInterface } from "./Experiencia.interface";

function ExpCard(props: { data: ExperienciaInterface }) {
  const { cargo, empresa, competencias, lugar, year } = props.data;
  const yearStr = year.toString();

  return (
    <div className="bg-slate-200 mb-3 rounded-xl shadow">
      <div className="mb-1 bg-slate-800 p-3 rounded-t-lg">
        <span className="font-bold text-2xl text-slate-600 text-primary">{yearStr} - </span>
        <span className="font-normal text-xl text-white">{cargo}</span>
      </div>
      <div className="p-3">
        <ul >
          <li><span className="font-medium">Empresa:</span> {empresa}</li>
          <li><span className="font-medium">Lugar:</span> {lugar}</li>
          <li><span className="font-medium">Competencias:</span> {competencias.toString()}</li>
        </ul>
      </div>
    </div>
  );
}

export default ExpCard;
