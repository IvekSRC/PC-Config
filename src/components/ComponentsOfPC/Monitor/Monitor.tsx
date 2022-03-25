import { useState, useEffect } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { MonitorInterface } from "../../../interfaces/Monitor";
import BuildPartItem from "../BuildPartItem";
import RenderMonitor from "./RenderMonitor";

const Monitor = (props: { title: string }) => {
  const [tasks, setTasks] = useState<MonitorInterface[]>([]);

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("monitor");
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
          <RenderMonitor task={current}/>
        }
      >
      </BuildPartItem>
    </>
  )
}

export default Monitor;