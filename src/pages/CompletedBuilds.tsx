import { useEffect, useState } from 'react';
import { FaDesktop } from 'react-icons/fa';
import Build from '../components/Build';
import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { fetchComponent } from '../functions/fetch';
import { CompletedBuildsInterface } from '../interfaces/CompletedBuilds';

const CompletedBuilds = () => {
  const [tasks, setTasks] = useState<CompletedBuildsInterface[]>([]);

  useEffect(() => {
    const getCompletedBuild = async () => {
      const completedBuildFromServer = await fetchComponent("completedBuild");
      setTasks(completedBuildFromServer);
    }

    getCompletedBuild();
  }, []);

  return (
    <>
      <div className="mainDivForNavigationBar">
        <NavigationBar />
      </div>
      <div>
        <span className="headerForPage">
          Completed Builds
          <FaDesktop className="logoBigSize"></FaDesktop>
        </span>
      </div>
      <div className='mainContainerForCompletedBuilds'>
        {tasks.map((task) => (
          <div 
            className="divForBuild1" 
            key={task.id}
          >
            <Build build={task}/>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default CompletedBuilds;