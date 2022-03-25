import { useState, useEffect } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { MotherboardInterface } from "../../../interfaces/Motherboard";
import BuildPartItem from "../BuildPartItem";
import RenderMotherboard from "./RenderMotherboard";

const Motherboards = (props: { title: string }) => {
  const [tasks, setTasks] = useState<MotherboardInterface[]>([]);

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("motherboard");
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
          <RenderMotherboard task={current}/>
        }
      >
      </BuildPartItem>
    </>
  )
}

export default Motherboards;