import { useEffect, useState } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { MemoryInterface } from "../../../interfaces/Memory";

const RenderMemory = (props: { task: number | undefined }) => {
  const [tasks, setTasks] = useState<MemoryInterface>();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("memory/" + props.task);
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
  <>
    <p>Speed - {tasks?.speed}</p>
    <p>Modules - {tasks?.modules}</p>
    <p>Color - {tasks?.color}</p>
    <p>Price - {tasks?.price} $</p>
  </>);
}

export default RenderMemory;