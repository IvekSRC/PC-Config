import { useState, useEffect } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { PowerSuplyInterface } from "../../../interfaces/PowerSuply";
import BuildPartItem from "../BuildPartItem";
import RenderPowerSuply from "./RenderPowerSuply";

const PowerSuply = (props: { title: string }) => {
  const [tasks, setTasks] = useState<PowerSuplyInterface[]>([]);

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("powerSuply");
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
    <>
      <BuildPartItem 
        title={props.title}
        items={tasks} 
        infoRenderer={(current: number, incompatibleProperty: string[]) => 
          <RenderPowerSuply task={current} incompatibleProperty={incompatibleProperty}/>
        }
      >
      </BuildPartItem>
    </>
  )
}

export default PowerSuply;