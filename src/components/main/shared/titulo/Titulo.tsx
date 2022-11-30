import "./Titulo.css";

function Titulo(props: { children: string }) {

  return (
    <div className="p-3">
      <h1 className="titulo w-full font-medium text-2xl text-center py-3 text-primary rounded-xl shadow">
        {props.children}
      </h1>
    </div>
  );
}

export default Titulo;
