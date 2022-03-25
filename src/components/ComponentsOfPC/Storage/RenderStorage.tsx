import { useEffect, useState } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { StorageInterface } from "../../../interfaces/Storage";

const RenderStorage = (props: { task: number | undefined }) => {
  const [tasks, setTasks] = useState<StorageInterface>();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("storage/" + props.task);
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
  <>
    <p>Capacity - {tasks?.capacity}</p>
    <p>Type - {tasks?.type}</p>
    <p>Cache - {tasks?.cache}</p>
    <p>Price - {tasks?.price} $</p>
  </>);
}

export default RenderStorage;