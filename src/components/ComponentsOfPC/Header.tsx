import PropTypes from 'prop-types';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  collapse,
  expand,
  selectedComponent 
} from "../../features/selected/selectedReducer";
import { expandOrCollapseBtn } from '../../functions/otherFunctions';

const Header = (props: { title: string }) => {
  const isExpanded = useSelector(selectedComponent)[props.title];
  const dispatch = useDispatch();

  const changeState = (title: string) => {
    if (isExpanded) {
      dispatch(collapse(title));
    } else {
      dispatch(expand(title));
    }

    expandOrCollapseBtn(title);
  }

  return (
    <div id={"Component" + props.title}>
      <header className='header'>
        <h1>
            { props.title }
        </h1>
        <Button 
          isCollapsed={isExpanded} 
          onClick={async () => changeState(props.title)} 
          title={props.title}
        />
      </header>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;