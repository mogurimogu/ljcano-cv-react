import React from "react";

function Jumbotron(props: { children: string }) {
  return (
    <div className="p-3">
      <q className="bg-slate-600 block text-center text-5xl p-10 rounded-xl text-primary">
        {props.children}
      </q>
    </div>
  );
}

export default Jumbotron;
