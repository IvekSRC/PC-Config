import { useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { expand } from "../features/selected/selectedReducer";

const SelectedItem: React.FC<{name: string | undefined, id: number | undefined, image: string | undefined, title: string, errorMessage: string[]
infoRenderer: (task: number | undefined, incompatibleProperty: string[]) => JSX.Element}> = (props) => {
  const dispatch = useDispatch();
  
  return (
    <div className={`task`}>
      <h3>
        {props.title} - {props.name}
      </h3>
      <div className="mainContainer">
        <div className="leftMiniContainer">
          {props.infoRenderer(props.id, [])}
          <HashLink 
            to={"/systembuilder#Component" + props.title}
            onClick={async () => dispatch(expand(props.title))}
          >
            Go back to select different {props.title}
          </HashLink>
          {
            props.errorMessage.map((item, index) => (
              <p className="errorMessage" key={index}>{item}</p>
            ))
          }
        </div>
        <div className="rightMiniContainer">
          <img 
            src={props.image} 
            alt={props.name}
            width="200" height="200"
          >
          </img>
        </div>
      </div>
    </div>
  )
}

export default SelectedItem;

function dispatch(arg0: any): void | PromiseLike<void> {
  throw new Error("Function not implemented.");
}
