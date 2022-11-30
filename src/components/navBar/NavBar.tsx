import "./NavBar.css";
import logo from "../../assets/img/ljcb-logo-simple-01.png";
import LinkList from "./linksList/LinkList";

function NavBar() {
  return (
    <>
      <div className="navBar rounded-2xl p-3 mb-3 flex justify-between sticky top-2">
        <div>
          <img src={logo} alt="Luis Javier Cano Benítez" className="logo" />
        </div>
        <LinkList />
      </div>
    </>
  );
}

export default NavBar;
