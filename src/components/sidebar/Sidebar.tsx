import "./Sidebar.css";
import Button from "../shared/Button/Button";
import SidebarHeader from './sidebarHeader/SidebarHeader';
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";


function Sidebar() {
  return (
    <div className="sidebar rounded-2xl p-3 md:h-full md:max-h-screen md:sticky md:top-2 flex justify-between flex-col">
      <div>
        <SidebarHeader />
        <Button className="w-full" link="https://ljcano.es/assets/docs/cv6.pdf">
          <FaFilePdf /> <span className="ml-1">Currículum</span>
        </Button>
        <Button className="w-full" link="https://www.linkedin.com/in/ljcano/">
          <FaLinkedin /> <span className="ml-1">LinkedIn</span>
        </Button>
        <Button className="w-full" link="https://github.com/mogurimogu">
          <FaGithub /> <span className="ml-1">GitHub</span>
        </Button>
      </div>
      <div className="text-center text-sm mt-3">
        Web creada por Luis Javier Cano Benítez ©2022
      </div>
    </div>
  );
}

export default Sidebar;
