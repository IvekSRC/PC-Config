import { useEffect, useState } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { CaseInterface } from "../../../interfaces/Case";

const RenderCase = (props: { task: number | undefined }) => {
  const [tasks, setTasks] = useState<CaseInterface>();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("case/" + props.task);
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);
  

  return (
  <>
    <p>Type - {tasks?.type}</p>
    <p>Color - {tasks?.color}</p>
    <p>Price - {tasks?.price} $</p>
  </>);
}

export default RenderCase;