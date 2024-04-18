import React from "react";
import { FormacionInterface } from "./formacion.interface";

function FormacionCard(props: { data: FormacionInterface }) {
  const { lugar, year, centro, conocimientos, estudios, descripcion } =
    props.data;
  const yearStr = year.toString();

  return (
    <div className="bg-slate-200 mb-3 rounded-xl shadow">
      <div className="mb-1 bg-slate-800 p-3 rounded-t-lg">
        <span className="font-bold text-2xl text-slate-600 text-primary">
          {yearStr} -{" "}
        </span>
        <span className="font-normal text-xl text-white">{estudios}</span>
      </div>
      <div className="p-3">
        <ul>
          <li>
            <span className="font-medium">Centro:</span> {centro}
          </li>
          <li>
            <span className="font-medium">Lugar:</span> {lugar}
          </li>
          {descripcion ? (
            <li>
              <span className="font-medium">Descripción:</span> {descripcion}
            </li>
          ) : (
            ""
          )}
          <li>
            <ul className="grid lg:grid-cols-2 xl:grid-cols-3 list-disc list-inside mt-3">
              {conocimientos.map((conocimiento, index) => (
                <li key={index}>{conocimiento}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FormacionCard;
