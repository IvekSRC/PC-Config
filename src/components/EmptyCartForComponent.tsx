import { useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { expand } from "../features/selected/selectedReducer";


const EmptyCartForComponent = (props: {title: string}) => {
  const dispatch = useDispatch();

  return (
    <div className={`emptyTask`}>
      <h3>Component {props.title} not yet selected</h3>
      <HashLink 
        to={"/systembuilder#Component" + props.title}
        onClick={async () => dispatch(expand(props.title))}
      >
        Go back to select {props.title}
      </HashLink>
    </div>
  )
}

export default EmptyCartForComponent;