import { FaPlusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deselectItem, selectedItem, selectItem } from '../../features/selected/selectedItems';
import { selectedComponent } from '../../features/selected/selectedReducer';
import Header from './Header';

const BuildPartItem: React.FC<{title: string, items: {id: number, name: string, selected: boolean, image: string}[],
infoRenderer: (current: number, incompatibleProperty: string[]) => JSX.Element}> = (props) => {  
  const selectedItems = useSelector(selectedItem);
  const isExpanded = useSelector(selectedComponent)[props.title];
  const dispatch = useDispatch();

  const changeState = (item: number) => {
    for(let i=1;i<=props.items.length;i++) {
      if(i!=item)
      {
        dispatch(deselectItem(props.title+i));
      }
      else {
        if (selectedItems[props.title+item]) {
          dispatch(deselectItem(props.title+item));
        } else {
          dispatch(selectItem(props.title+item));
        }
      }
    }
  }

  return (
    <>
      <Header title={props.title} />
      <div id={props.title} 
        className={isExpanded ? 'open' : 'close'}
        style={isExpanded ? {display: ''} : {display: 'none'}}
      >
        {props.items.map((item) => (
          <div className={`task ${selectedItems[props.title+item.id] ? 'reminder' : ''}`} key={item.id}>
            <h3>
              {item.name}
              <FaPlusCircle
                onClick={ () => changeState(item.id) }
                style={{ color: 'green', cursor: 'pointer' }}
              />
            </h3>
            <div className="mainContainer">
              <div className="leftMiniContainer">
                {props.infoRenderer(item.id, [])}
              </div>
              <div className="rightMiniContainer">
                <img
                  src={item.image} 
                  alt={item.name}
                  width="200" height="200"
                >
                </img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BuildPartItem;