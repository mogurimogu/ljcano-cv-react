import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "../main/Main";
import NavBar from "../navBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 md:min-h-screen">
        <div className="md:col-span-1 md:block p-3 md:max-h-screen md:sticky md:top-0">
          <Sidebar />
        </div>
        <div className="xl:col-span-3 lg:col-span-2 md:max-h-screen md:col-span-2 p-3 h-full flex flex-col">
          <NavBar />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
