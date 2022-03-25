import { useEffect, useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { fetchComponent } from "../../../functions/fetch";
import { PowerSuplyInterface } from "../../../interfaces/PowerSuply";

const RenderPowerSuply = (props: { task: number | undefined, incompatibleProperty: string[] }) => {
  const [tasks, setTasks] = useState<PowerSuplyInterface>();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("powerSuply/" + props.task);
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
  <>
    <p>
      <span>Wattage - </span>  
      <span style={ { color: props.incompatibleProperty.includes("wattage") ? 'red' : '' } }>
        {tasks?.wattage}   
      </span> 
      <span> </span>
      {
        props.incompatibleProperty.includes("wattage") ? 
        <FaMinusCircle
          style={{ color: 'red' }}
        /> 
        : 
        ''         
      }    
    </p>
    <p>Color - {tasks?.color}</p>
    <p>Price - {tasks?.price} $</p>
  </>);
}

export default RenderPowerSuply;