import { useEffect, useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { fetchComponent } from "../../../functions/fetch";
import { CPUInterface } from "../../../interfaces/CPU";

const RenderCPU = (props: { task: number | undefined, incompatibleProperty: string[] }) => {
  const [tasks, setTasks] = useState<CPUInterface>();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("cpu/" + props.task);
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
  <>
      <p>
        <span>Core Count - </span>  
        <span style={ { color: props.incompatibleProperty.includes("coreCount") ? 'red' : '' } }>
          {tasks?.coreCount}   
        </span> 
        <span> </span>
        {
          props.incompatibleProperty.includes("coreCount") ? 
          <FaMinusCircle
            style={{ color: 'red' }}
          /> 
          : 
          ''         
        }    
      </p>
      <p>Performance Core Clock - {tasks?.performanceCoreClock} GHz</p>
      <p>Performance Boost Clock - {tasks?.performanceBoostClock} GHz</p>
      <p>TDP - {tasks?.performanceCoreClock} W</p>
      <p>Integrated Graphics - {tasks?.integratedGraphics}</p>
      <p>Price - {tasks?.price} $</p>
  </>);
}

export default RenderCPU;