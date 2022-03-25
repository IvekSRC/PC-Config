import { HashLink } from 'react-router-hash-link';
import { useDispatch } from 'react-redux';
import { expand } from "../../features/selected/selectedReducer";

const HashLinkComponent = (props: { title: string }) => {
  const dispatch = useDispatch();

  return (
    <li>
        <HashLink 
          to={"/systembuilder#Component" + props.title}
          onClick={() => dispatch(expand(props.title))} 
        >
          { props.title }
        </HashLink>
    </li>
  )
}

export default HashLinkComponent;