import NavigationBar from '../components/NavigationBar/NavigationBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectedItem } from '../features/selected/selectedItems';
import Footer from '../components/Footer/Footer';
import { useEffect, useRef, useState } from 'react';
import { fetchComponent } from '../functions/fetch';
import { CPUInterface } from '../interfaces/CPU';
import { CPUCoolerInterface } from '../interfaces/CPUCooler';
import { MotherboardInterface } from '../interfaces/Motherboard';
import { MemoryInterface } from '../interfaces/Memory';
import { StorageInterface } from '../interfaces/Storage';
import { VideoCardInterface } from '../interfaces/VideoCard';
import { CaseInterface } from '../interfaces/Case';
import { PowerSuplyInterface } from '../interfaces/PowerSuply';
import { MonitorInterface } from '../interfaces/Monitor';
import SelectedItem from '../components/selectedItem';
import RenderCase from '../components/ComponentsOfPC/Case/RenderCase';
import RenderCPU from '../components/ComponentsOfPC/CPU/RenderCPU';
import RenderCPUCooler from '../components/ComponentsOfPC/CPU Cooler/RenderCPUCooler';
import RenderMotherboard from '../components/ComponentsOfPC/Motherboard/RenderMotherboard';
import RenderMemory from '../components/ComponentsOfPC/Memory/RenderMemory';
import RenderStorage from '../components/ComponentsOfPC/Storage/RenderStorage';
import RenderVideoCard from '../components/ComponentsOfPC/Video Card/RenderVideoCard';
import RenderPowerSuply from '../components/ComponentsOfPC/Power Suply/RenderPowerSuply';
import RenderMonitor from '../components/ComponentsOfPC/Monitor/RenderMonitor';
import EmptyCartForComponent from '../components/EmptyCartForComponent';
import { Rules } from '../interfaces/Rules';
import { FaShoppingCart } from 'react-icons/fa';
import { isCompatible } from '../functions/otherFunctions';
import { Link } from 'react-router-dom';
import { chooseItem, removeItemFromCart } from '../features/selected/choosenItems';

const ShoppingBag = () => {
  const selectedItemsFullArr = useSelector(selectedItem);
  const dispatch = useDispatch();

  const [cpu, setCpu] = useState<CPUInterface>();
  const [cpuCooler, setCpuCooler] = useState<CPUCoolerInterface>();
  const [motherboard, setMotherboard] = useState<MotherboardInterface>();
  const [memory, setMemory] = useState<MemoryInterface>();
  const [storage, setStorage] = useState<StorageInterface>();
  const [videoCard, setVideoCard] = useState<VideoCardInterface>();
  const [cases, setCase] = useState<CaseInterface>();
  const [powerSuply, setPowerSuply] = useState<PowerSuplyInterface>();
  const [monitor, setMonitor] = useState<MonitorInterface>();

  const [errorMessageForCpu, setErrorMessageForCpu] = useState<string[]>([]);
  const [errorMessageForCpuCooler, setErrorMessageForCpuCooler] = useState<string[]>([]);
  const [errorMessageForMotherboard, setErrorMessageForMotherboard] = useState<string[]>([]);
  const [errorMessageForMemory, setErrorMessageForMemory] = useState<string[]>([]);
  const [errorMessageForStorage, setErrorMessageForStorage] = useState<string[]>([]);
  const [errorMessageForVideoCard, setErrorMessageForVideoCard] = useState<string[]>([]);
  const [errorMessageForCase, setErrorMessageForCase] = useState<string[]>([]);
  const [errorMessageForPowerSuply, setErrorMessageForPowerSuply] = useState<string[]>([]);
  const [errorMessageForMonitor, setErrorMessageForMonitor] = useState<string[]>([]);

  const [cpuIncompatibleProperty, setCpuIncompatibleProperty] = useState<string[]>([]);
  const [cpuCoolerIncompatibleProperty, setCpuCoolerIncompatibleProperty] = useState<string[]>([]);
  const [motherboardIncompatibleProperty, setMotherboardIncompatibleProperty] = useState<string[]>([]);
  const [memoryIncompatibleProperty, setMemoryIncompatibleProperty] = useState<string[]>([]);
  const [storageIncompatibleProperty, setStorageIncompatibleProperty] = useState<string[]>([]);
  const [videoCardIncompatibleProperty, setVideoCardIncompatibleProperty] = useState<string[]>([]);
  const [casesIncompatibleProperty, setCaseIncompatibleProperty] = useState<string[]>([]);
  const [powerSuplyIncompatibleProperty, setPowerSuplyIncompatibleProperty] = useState<string[]>([]);
  const [monitorIncompatibleProperty, setMonitorIncompatibleProperty] = useState<string[]>([]);

  const [rules, setRules] = useState<Rules>();

  const isChecked = useRef({
    checked: true
  });

  useEffect(() => {
    const getSelectedItems = async () => {
      let selectedItems = Object.entries(selectedItemsFullArr);
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

      const rulesFromServer = await fetchComponent("rules");
      setRules(rulesFromServer);
    }

    getSelectedItems();
  }, []);

  const getErrorMessage = () => {
    // Configuration Rules
    if(isChecked.current.checked == true) {
      if(rules) {

        if(cpu != undefined && powerSuply != undefined) {
          if(isCompatible(cpu.coreCount, powerSuply.wattage, rules.testCpuAndPowerSuply)) {
            setErrorMessageForPowerSuply(currentArray => [...currentArray, rules.testCpuAndPowerSuply.errMessage2]);
            setErrorMessageForCpu(currentArray => [...currentArray, rules.testCpuAndPowerSuply.errMessage1]);

            setCpuIncompatibleProperty(currentArray => [...currentArray, "coreCount"]);
            setPowerSuplyIncompatibleProperty(currentArray => [...currentArray, "wattage"])
          }
        }

        if(cpu != undefined && videoCard != undefined) {
          if(isCompatible(cpu.coreCount, videoCard.memory, rules.testCpuAndVideoCard)) {
            setErrorMessageForVideoCard(currentArray => [...currentArray, rules.testCpuAndVideoCard.errMessage2])
            setErrorMessageForCpu(currentArray => [...currentArray, rules.testCpuAndVideoCard.errMessage1])

            setCpuIncompatibleProperty(currentArray => [...currentArray, "coreCount"]);
            setVideoCardIncompatibleProperty(currentArray => [...currentArray, "memory"])
          }
        }
      }
    }
    else {
      setErrorMessageForPowerSuply([]);
      setErrorMessageForVideoCard([]);
      setErrorMessageForCpu([]);

      setCpuIncompatibleProperty([]);
      setPowerSuplyIncompatibleProperty([]);
      setVideoCardIncompatibleProperty([]);
    }

    isChecked.current.checked = !isChecked.current.checked;
  }

  const confirmPurchase = () => {
    dispatch(removeItemFromCart())
    
    if(cpu) 
      dispatch(chooseItem("CPU"+cpu?.id));
    if(cpuCooler) 
      dispatch(chooseItem("CPU Cooler"+cpuCooler?.id));
    if(motherboard) 
      dispatch(chooseItem("Motherboard"+motherboard?.id));
    if(memory) 
      dispatch(chooseItem("Memory"+memory?.id));
    if(storage) 
      dispatch(chooseItem("Storage"+storage?.id));
    if(videoCard) 
      dispatch(chooseItem("Video Card"+videoCard?.id));
    if(cases) 
      dispatch(chooseItem("Case"+cases?.id));
    if(powerSuply) 
      dispatch(chooseItem("Power Suply"+powerSuply?.id));
    if(monitor) 
      dispatch(chooseItem("Monitor"+monitor?.id));
  }

  return (
    <>
      <div className="mainDivForNavigationBar">
        <NavigationBar />
      </div>
      <Link 
        className="confirmPurchase" 
        onClick={confirmPurchase} 
        to={'/confirmPurchase'}
      >
          Confirm Purchase
      </Link>
      <div>
        <span className="headerForPage">
          Cart
          <FaShoppingCart className="logoBigSize"></FaShoppingCart>
        </span>
      </div>
      <div className="questionPart">
        <span className="questionForShowIncompatibleMsg">Do you want to show incompatible message for your configuration ?</span>
        <input type="checkbox" onChange={getErrorMessage}></input>
      </div>
        {cpu?.id !== undefined ? 
          <SelectedItem  
            name={cpu?.name} id={cpu?.id} image={cpu?.image} title={"CPU"} errorMessage={errorMessageForCpu}
            infoRenderer={(current: number | undefined) => 
              <RenderCPU task={current} incompatibleProperty={cpuIncompatibleProperty}/>
            }
          /> : <EmptyCartForComponent title={"CPU"} />
        }
        {cpuCooler?.id !== undefined ? 
          <SelectedItem 
            name={cpuCooler?.name} id={cpuCooler?.id} image={cpuCooler?.image} title={"CPU Cooler"} errorMessage={errorMessageForCpuCooler}
            infoRenderer={(current: number | undefined) => 
              <RenderCPUCooler task={current}/>
            }
          /> : <EmptyCartForComponent title={"CPU Cooler"} />
        }
        {motherboard?.id !== undefined ? 
          <SelectedItem 
            name={motherboard?.name} id={motherboard?.id} image={motherboard?.image} title={"Motherboard"} errorMessage={errorMessageForMotherboard}
            infoRenderer={(current: number | undefined) => 
              <RenderMotherboard task={current}/>
            }
          /> : <EmptyCartForComponent title={"Motherboard"} />
        }
        {memory?.id !== undefined ? 
          <SelectedItem 
            name={memory?.name} id={memory?.id} image={memory?.image} title={"Memory"} errorMessage={errorMessageForMemory}
            infoRenderer={(current: number | undefined) => 
              <RenderMemory task={current}/>
            }
          /> : <EmptyCartForComponent title={"Memory"} />
        }
        {storage?.id !== undefined ? 
          <SelectedItem 
            name={storage?.name} id={storage?.id} image={storage?.image} title={"Storage"} errorMessage={errorMessageForStorage}
            infoRenderer={(current: number | undefined) => 
              <RenderStorage task={current}/>
            }
          /> : <EmptyCartForComponent title={"Storage"} />
        }
        {videoCard?.id !== undefined ? 
          <SelectedItem 
            name={videoCard?.name} id={videoCard?.id} image={videoCard?.image} title={"Video Card"} errorMessage={errorMessageForVideoCard}
            infoRenderer={(current: number | undefined) => 
              <RenderVideoCard task={current} incompatibleProperty={videoCardIncompatibleProperty}/>
            }
          /> : <EmptyCartForComponent title={"Video Card"} />
        }
        {cases?.id !== undefined ? 
          <SelectedItem 
            name={cases?.name} id={cases?.id} image={cases?.image} title={"Case"} errorMessage={errorMessageForCase}
            infoRenderer={(current: number | undefined) => 
              <RenderCase task={current}/>
            }
          /> : <EmptyCartForComponent title={"Case"} />
        }
        {powerSuply?.id !== undefined ? 
          <SelectedItem  
            name={powerSuply?.name} id={powerSuply?.id} image={powerSuply?.image} title={"Power Suply"} errorMessage={errorMessageForPowerSuply}
            infoRenderer={(current: number | undefined) => 
              <RenderPowerSuply task={current} incompatibleProperty={powerSuplyIncompatibleProperty}/>
            }
          /> : <EmptyCartForComponent title={"Power Suply"} />
        }
        {monitor?.id !== undefined ? 
          <SelectedItem 
            name={monitor?.name} id={monitor?.id} image={monitor?.image} title={"Monitor"} errorMessage={errorMessageForMonitor}
            infoRenderer={(current: number | undefined) => 
              <RenderMonitor task={current}/>
            }
          /> : <EmptyCartForComponent title={"Monitor"} />
        }
      <Footer />
    </>
  )
}

export default ShoppingBag;