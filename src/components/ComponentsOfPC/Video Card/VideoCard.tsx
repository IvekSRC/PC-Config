import { useState, useEffect } from "react";
import { fetchComponent } from "../../../functions/fetch";
import { VideoCardInterface } from "../../../interfaces/VideoCard";
import BuildPartItem from "../BuildPartItem";
import RenderVideoCard from "./RenderVideoCard";

const VideoCards = (props: { title: string }) => {
  const [tasks, setTasks] = useState<VideoCardInterface[]>([]);

  // Fetch Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchComponent("videocard");
      setTasks(tasksFromServer);
    }

    getTasks();
  }, []);

  return (
    <>
      <BuildPartItem 
        title={props.title}
        items={tasks} 
        infoRenderer={(current: number, incompatibleProperty: string[]) => 
          <RenderVideoCard task={current} incompatibleProperty={incompatibleProperty}/>
        }
      >
      </BuildPartItem>
    </>
  )
}

export default VideoCards;