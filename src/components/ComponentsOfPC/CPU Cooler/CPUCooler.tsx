import { useState, useEffect } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { CPUCoolerInterface } from "../../../interfaces/CPUCooler";
import BuildPartItem from "../BuildPartItem";
import RenderCPUCooler from "./RenderCPUCooler";

const CPUCoolers = (props: { title: string }) => {
  const [tasks, setTasks] = useState<CPUCoolerInterface[]>([]);

  // Fetch Tasks
  useEffect(() => {
    const getCPUCooler = async () => {
      const tasksFromServer = await fetchComponent("cpuCooler");
      setTasks(tasksFromServer);
    }

    getCPUCooler();
  }, []);

  return (
    <>
      <BuildPartItem 
        title={props.title}
        items={tasks} 
        infoRenderer={(current: number) => 
          <RenderCPUCooler task={current}/>
        }
      >
      </BuildPartItem>
    </>
  )
}

export default CPUCoolers;