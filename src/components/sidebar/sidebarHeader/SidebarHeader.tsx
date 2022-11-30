import './SidebarHeader.css'
import foto from "../../../assets/img/foto.jpg"

function SidebarHeader() {
  return (
    <div>
      <div className="px-5 py-2">
        <img
          src={foto}
          alt="Luis Javier Cano Benítez"
          className="foto mx-auto rounded-full border-8 border-slate-100"
        />
      </div>
      <div className="font-bold text-xl text-center mb-1">
        Luis Javier Cano Benítez
      </div>
      <h1 className="font-medium text-center mb-3 text-primary">
        Full Stack Developer
      </h1>
      <hr className="mb-3 opacity-10" />
    </div>
  );
}

export default SidebarHeader