import { useEffect, useState } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { MonitorInterface } from "../../../interfaces/Monitor";

const RenderMonitor = (props: { task: number | undefined }) => {
  const [tasks, setTasks] = useState<MonitorInterface>();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("monitor/" + props.task);
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
  <>
    <p>Screen Size - {tasks?.screenSize}"</p>
    <p>Resolutin - {tasks?.resolution}</p>
    <p>Refresh rate - {tasks?.resolution} Hz</p>
    <p>Price - {tasks?.price} $</p>
  </>);
}

export default RenderMonitor;