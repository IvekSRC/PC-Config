import { useEffect, useState } from 'react';
import { fetchComponent } from '../functions/fetch';
import { CaseInterface } from '../interfaces/Case';
import { CompletedBuildsInterface } from '../interfaces/CompletedBuilds';
import { CPUCoolerInterface } from '../interfaces/CPUCooler';
import { CPUInterface } from '../interfaces/CPU';
import { MemoryInterface } from '../interfaces/Memory';
import { MonitorInterface } from '../interfaces/Monitor';
import { MotherboardInterface } from '../interfaces/Motherboard';
import { PowerSuplyInterface } from '../interfaces/PowerSuply';
import { StorageInterface } from '../interfaces/Storage';
import { VideoCardInterface } from '../interfaces/VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { chooseItem, removeItemFromCart } from '../features/selected/choosenItems';

const Build = (props: { build: CompletedBuildsInterface }) => {
  const [cpu, setCpu] = useState<CPUInterface>();
  const [cpuCooler, setCpuCooler] = useState<CPUCoolerInterface>();
  const [motherboard, setMotherboard] = useState<MotherboardInterface>();
  const [memory, setMemory] = useState<MemoryInterface>();
  const [storage, setStorage] = useState<StorageInterface>();
  const [videoCard, setVideoCard] = useState<VideoCardInterface>();
  const [cases, setCase] = useState<CaseInterface>();
  const [powerSuply, setPowerSuply] = useState<PowerSuplyInterface>();
  const [monitor, setMonitor] = useState<MonitorInterface>();

  const dispatch = useDispatch();

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () => {
      const cpuFromServer = await fetchComponent("cpu/" + props.build.cpu);
      const cpuCoolerFromServer = await fetchComponent("cpuCooler/" + props.build.cpuCooler); 
      const motherboardFromServer = await fetchComponent("motherboard/" + props.build.motherboard); 
      const memoryFromServer = await fetchComponent("memory/" + props.build.memory); 
      const storageFromServer = await fetchComponent("storage/" + props.build.storage); 
      const videoCardFromServer = await fetchComponent("videocard/" + props.build.videoCard); 
      const caseFromServer = await fetchComponent("case/" + props.build.case);
      const powerSuplyFromServer = await fetchComponent("powerSuply/" + props.build.powerSuply); 
      const monitorFromServer = await fetchComponent("monitor/" + props.build.monitor); 
         
      setCpu(cpuFromServer);
      setCpuCooler(cpuCoolerFromServer);
      setMotherboard(motherboardFromServer);
      setMemory(memoryFromServer);
      setStorage(storageFromServer);
      setVideoCard(videoCardFromServer);
      setCase(caseFromServer);
      setPowerSuply(powerSuplyFromServer);
      setMonitor(monitorFromServer);
    }

    getTasks();
  }, []);

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
    <div className="divForBuild2">
      <h3>{props.build.name}</h3>
      <p>CPU -  {cpu?.name}</p>
      <p>Motherboard -  {motherboard?.name}</p>
      <div>
        <img 
          className="completedBuildItemImg"
          src={props.build.image} 
          alt={props.build.name}
        >
        </img>
      </div>
      <p className="paragForBuildPrice">
        <span className="spanPriceForBuild">Price</span>
        { 
          (cpu?.price || 0) + 
          (cpuCooler?.price || 0) +
          (motherboard?.price || 0) + 
          (memory?.price || 0) + 
          (storage?.price || 0) + 
          (videoCard?.price || 0) +
          (cases?.price || 0) +  
          (powerSuply?.price || 0) + 
          (monitor?.price || 0)
        } $
      </p>
      <Link  
        onClick={confirmPurchase} 
        to={'/confirmPurchase'}
      >
          Buy
      </Link>
    </div>
  )
}

export default Build;