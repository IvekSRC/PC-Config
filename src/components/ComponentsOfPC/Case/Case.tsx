import { useState, useEffect } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { CaseInterface } from "../../../interfaces/Case";
import BuildPartItem from "../BuildPartItem";
import RenderCase from "./RenderCase";

const Case = (props: { title: string }) => {
  const [tasks, setTasks] = useState<CaseInterface[]>([]);

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("case");
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
          <RenderCase task={current}/>
        }
      >
      </BuildPartItem>
    </>
  )
}

export default Case;