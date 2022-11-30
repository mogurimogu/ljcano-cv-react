import React from "react";

function Card(props: { children: string; title?: string; icon?: any }) {
  return (
    <div className="rounded-lg shadow-lg bg-white col-span-1 m-3">
      <div className="p3">
        <div className="text-7xl text-slate-800 flex justify-center p-3">
          {props.icon}
        </div>
        <h5 className="text-slate-800 text-xl font-medium mb-2 text-center">
          {props.title}
        </h5>
      </div>
      <hr />
      <p className="text-slate-700 text-base p-3">{props.children}</p>
    </div>
  );
}

export default Card;
