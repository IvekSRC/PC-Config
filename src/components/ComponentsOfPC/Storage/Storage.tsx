import { useState, useEffect } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { StorageInterface } from "../../../interfaces/Storage";
import BuildPartItem from "../BuildPartItem";
import RenderStorage from "./RenderStorage";

const Storage = (props: { title: string }) => {
  const [tasks, setTasks] = useState<StorageInterface[]>([]);

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("storage");
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
          <RenderStorage task={current}/>
        }
      >
      </BuildPartItem>
    </>
  )
}

export default Storage;