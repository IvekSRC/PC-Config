import Case from "../components/ComponentsOfPC/Case/Case";
import CPUCoolers from "../components/ComponentsOfPC/CPU Cooler/CPUCooler";
import CPUs from "../components/ComponentsOfPC/CPU/CPU";
import Memorys from "../components/ComponentsOfPC/Memory/Memory";
import Monitor from "../components/ComponentsOfPC/Monitor/Monitor";
import Motherboards from "../components/ComponentsOfPC/Motherboard/Motherboard";
import PowerSuply from "../components/ComponentsOfPC/Power Suply/PowerSuply";
import VideoCard from "../components/ComponentsOfPC/Video Card/VideoCard";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Storage from "../components/ComponentsOfPC/Storage/Storage";
import SideNavbar from "../components/SideNavBar/SideNavBar";
import RightNavBar from "../components/RightNavBar/RightNavBar";
import { FaWrench } from "react-icons/fa";

const SystemBuilder = () => {
  return (
    <>
      <div className="mainDivForNavigationBar">
        <NavigationBar />
      </div>
      <div>
        <span className="headerForPage">
          System Builder
          <FaWrench className="logoBigSize"></FaWrench>
        </span>
      </div>
      <div className="mainDivForSideBarAndContainer">
        <div className="leftNavBar">
          <SideNavbar />
        </div>
        <div className='container'>
          <CPUs title="CPU"/>
          <CPUCoolers title="CPU Cooler"/>
          <Motherboards title="Motherboard"/>
          <Memorys title="Memory"/>
          <Storage title="Storage"/>
          <VideoCard title="Video Card"/>
          <Case title="Case"/>
          <PowerSuply title="Power Suply"/>
          <Monitor title="Monitor"/>
        </div>
        <div className="rightNavBar">
          <RightNavBar />
        </div>
      </div>
      <Footer />
    </>
  )
};

export default SystemBuilder;