import { useState, useEffect } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { MemoryInterface } from "../../../interfaces/Memory";
import BuildPartItem from "../BuildPartItem";
import RenderMemory from "./RenderMemory";

const Memorys = (props: { title: string }) => {
  const [tasks, setTasks] = useState<MemoryInterface[]>([]);

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("memory");
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
    <>
      <BuildPartItem 
        title={props.title}
        items={tasks} 
        infoRenderer={(current: number) => 
          <RenderMemory task={current}/>
        }
      >
      </BuildPartItem>
    </>
  )
}

export default Memorys;