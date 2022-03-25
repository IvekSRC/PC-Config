import { useEffect, useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { fetchComponent } from "../../../functions/fetch";
import { VideoCardInterface } from "../../../interfaces/VideoCard";

const RenderVideoCard = (props: { task: number | undefined, incompatibleProperty: string[] }) => {
  const [tasks, setTasks] = useState<VideoCardInterface>();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("videoCard/" + props.task);
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
  <>
    <p>Chipset - {tasks?.chipset}</p>
    <p>
        <span>Memory - </span>  
        <span style={ { color: props.incompatibleProperty.includes("memory") ? 'red' : '' } }>
          {tasks?.memory} GB  
        </span> 
        <span> </span>
        {
          props.incompatibleProperty.includes("memory") ? 
          <FaMinusCircle
            style={{ color: 'red' }}
          /> 
          : 
          ''         
        }    
      </p>
    <p>Core Clock - {tasks?.coreClock} MHz</p>
    <p>Boost Clock - {tasks?.boostClock} MHz</p>
    <p>Price - {tasks?.price} $</p>
  </>);
}

export default RenderVideoCard;