import React from "react";

function SkillCard(props: { children: String; icon: any; level: Number }) {
  return (
    <div className="rounded-xl p-3 bg-slate-100 shadow text-center">
      <div className="flex justify-center text-5xl mb-3 max-h-16 text-slate-600">{props.icon}</div>
      <div className="font-bold mb-3">{props.children}</div>
      <div className="bg-slate-200 p-1 rounded-xl">
        <div
          className="p-1 bg-green-400 rounded-xl"
          style={{ width: props.level + "%" }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;
