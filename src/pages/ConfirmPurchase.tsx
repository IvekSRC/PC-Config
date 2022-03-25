import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import ChoosenComponentsTask from "../components/ChoosenComponentsTask";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Ordering from "../components/Ordering";
import { choosenItem } from "../features/selected/choosenItems";
import { fetchComponent } from "../functions/fetch";
import { CaseInterface } from "../interfaces/Case";
import { CPUInterface } from "../interfaces/CPU";
import { CPUCoolerInterface } from "../interfaces/CPUCooler";
import { MemoryInterface } from "../interfaces/Memory";
import { MonitorInterface } from "../interfaces/Monitor";
import { MotherboardInterface } from "../interfaces/Motherboard";
import { PowerSuplyInterface } from "../interfaces/PowerSuply";
import { StorageInterface } from "../interfaces/Storage";
import { VideoCardInterface } from "../interfaces/VideoCard";

const ConfirmPurchase = () => {
  const choosenItems = useSelector(choosenItem);

  const [cpu, setCpu] = useState<CPUInterface>();
  const [cpuCooler, setCpuCooler] = useState<CPUCoolerInterface>();
  const [motherboard, setMotherboard] = useState<MotherboardInterface>();
  const [memory, setMemory] = useState<MemoryInterface>();
  const [storage, setStorage] = useState<StorageInterface>();
  const [videoCard, setVideoCard] = useState<VideoCardInterface>();
  const [cases, setCase] = useState<CaseInterface>();
  const [powerSuply, setPowerSuply] = useState<PowerSuplyInterface>();
  const [monitor, setMonitor] = useState<MonitorInterface>();

  useEffect(() => {
    const getSelectedItems = async () => {
      let selectedItems = Object.entries(choosenItems);
      selectedItems = selectedItems.filter(function(value) {
        return value[1] === true;
      }); 
      const flatedSelectedItems = selectedItems.flat().toString();

      if(flatedSelectedItems.includes("CPU")) {
        if(flatedSelectedItems[(flatedSelectedItems.indexOf("CPU") + "CPU".length)] != " "){
          const idOfComponent = flatedSelectedItems.indexOf("CPU") + "CPU".length;
          const cpuFromServer = await fetchComponent("cpu/" + flatedSelectedItems[idOfComponent]);
          setCpu(cpuFromServer);
        }
        if(flatedSelectedItems[(flatedSelectedItems.lastIndexOf("CPU") + "CPU".length)] != " "){
          const idOfComponent = flatedSelectedItems.lastIndexOf("CPU") + "CPU".length;
          const cpuFromServer = await fetchComponent("cpu/" + flatedSelectedItems[idOfComponent]);
          setCpu(cpuFromServer);
        }
      }

      if(flatedSelectedItems.includes("CPU Cooler")) {
        const idOfComponent = flatedSelectedItems.indexOf("CPU Cooler") + "CPU Cooler".length;
        const cpuCoolerFromServer = await fetchComponent("cpuCooler/" + flatedSelectedItems[idOfComponent]);
        setCpuCooler(cpuCoolerFromServer);
      }

      if(flatedSelectedItems.includes("Motherboard")) {
        const idOfComponent = flatedSelectedItems.indexOf("Motherboard") + "Motherboard".length;
        const motherboardFromServer = await fetchComponent("motherboard/" + flatedSelectedItems[idOfComponent]);
        setMotherboard(motherboardFromServer);
      }

      if(flatedSelectedItems.includes("Memory")) {
        const idOfComponent = flatedSelectedItems.indexOf("Memory") + "Memory".length;
        const memoryFromServer = await fetchComponent("memory/" + flatedSelectedItems[idOfComponent]);
        setMemory(memoryFromServer);
      }

      if(flatedSelectedItems.includes("Storage")) {
        const idOfComponent = flatedSelectedItems.indexOf("Storage") + "Storage".length;
        const storageFromServer = await fetchComponent("storage/" + flatedSelectedItems[idOfComponent]);
        setStorage(storageFromServer);
      }

      if(flatedSelectedItems.includes("Video Card")) {
        const idOfComponent = flatedSelectedItems.indexOf("Video Card") + "Video Card".length;
        const videoCardFromServer = await fetchComponent("videoCard/" + flatedSelectedItems[idOfComponent]);
        setVideoCard(videoCardFromServer);
      }

      if(flatedSelectedItems.includes("Case")) {
        const idOfComponent = flatedSelectedItems.indexOf("Case") + "Case".length;
        const caseFromServer = await fetchComponent("case/" + flatedSelectedItems[idOfComponent]);
        setCase(caseFromServer);
      }

      if(flatedSelectedItems.includes("Power Suply")) {
        const idOfComponent = flatedSelectedItems.indexOf("Power Suply") + "Power Suply".length;
        const powerSuplyFromServer = await fetchComponent("powerSuply/" + flatedSelectedItems[idOfComponent]);
        setPowerSuply(powerSuplyFromServer);
      }

      if(flatedSelectedItems.includes("Monitor")) {
        const idOfComponent = flatedSelectedItems.indexOf("Monitor") + "Monitor".length;
        const monitorFromServer = await fetchComponent("monitor/" + flatedSelectedItems[idOfComponent]);
        setMonitor(monitorFromServer);
      }
    }

    getSelectedItems();
  }, []);

  return (
    <>
      <div className="mainDivForNavigationBar">
        <NavigationBar />
      </div>
      <div>
        <span className="headerForPage">
          Confirm Purchase
          <FaShoppingCart className="logoBigSize"></FaShoppingCart>
        </span>
      </div>
      
      <div className={`confirmPurchaseTask`}>
        <h2 className="choosenComponentTitle">Choosen Components</h2>

        <ChoosenComponentsTask title={"CPU"} componentName={cpu?.name} />
        <ChoosenComponentsTask title={"CPU Cooler"} componentName={cpuCooler?.name} />
        <ChoosenComponentsTask title={"Motherboard"} componentName={motherboard?.name} />
        <ChoosenComponentsTask title={"Memory"} componentName={memory?.name} />
        <ChoosenComponentsTask title={"Storage"} componentName={storage?.name} />
        <ChoosenComponentsTask title={"Video Card"} componentName={videoCard?.name} />
        <ChoosenComponentsTask title={"Case"} componentName={cases?.name} />
        <ChoosenComponentsTask title={"Power Suply"} componentName={powerSuply?.name} />
        <ChoosenComponentsTask title={"Monitor"} componentName={monitor?.name} />
      </div>

      <Ordering 
        cpu={cpu?.id}
        cpuCooler={cpuCooler?.id}
        motherboard={motherboard?.id}
        memory={memory?.id}
        storage={storage?.id}
        videoCard={videoCard?.id}
        case={cases?.id}
        powerSuply={powerSuply?.id}
        monitor={monitor?.id}
      />

      <Footer />
    </>
  )
}

export default ConfirmPurchase;