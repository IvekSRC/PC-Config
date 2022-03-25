import { useEffect, useState } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { CPUCoolerInterface } from "../../../interfaces/CPUCooler";

const RenderCPUCooler = (props: { task: number | undefined }) => {
  const [tasks, setTasks] = useState<CPUCoolerInterface>();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("cpuCooler/" + props.task);
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
  <>
      <p>Fan RPM - {tasks?.fanRPM}</p>
      <p>Noise Level - {tasks?.noiseLevel} GHz</p>
      <p>Color - {tasks?.color} GHz</p>
      <p>Price - {tasks?.price} $</p>
  </>);
}

export default RenderCPUCooler;