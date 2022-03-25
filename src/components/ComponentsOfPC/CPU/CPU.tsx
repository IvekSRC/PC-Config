import { useState, useEffect } from "react";
import { fetchComponent } from '../../../functions/fetch';
import { CPUInterface } from "../../../interfaces/CPU";
import BuildPartItem from "../BuildPartItem";
import RenderCPU from "./RenderCPU";

const CPUs = (props: { title: string }) => {
  const [tasks, setTasks] = useState<CPUInterface[]>([]);

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("cpu");
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
    <>
    <BuildPartItem 
      title={props.title}
      items={tasks}
      infoRenderer={(current: number | undefined, incompatibleProperty: string[]) => 
        <RenderCPU task={current} incompatibleProperty={incompatibleProperty}/>
      }
    >
    </BuildPartItem>
    </>
  )
}

export default CPUs;