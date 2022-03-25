import { useEffect, useState } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { MotherboardInterface } from "../../../interfaces/Motherboard";

const RenderMotherboard = (props: { task: number | undefined }) => {
  const [tasks, setTasks] = useState<MotherboardInterface>();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("motherboard/" + props.task);
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
  <>
    <p>Memory Max - {tasks?.memoryMax} GB</p>
    <p>Memory Slots - {tasks?.memorySlots}</p>
    <p>Color - {tasks?.color}</p>
    <p>Price - {tasks?.price} $</p>
  </>);
}

export default RenderMotherboard;